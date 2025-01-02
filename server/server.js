const port = 5000; // Vous pouvez changer ce port si nécessaire
const express = require('express');
const app = express();
const cors = require('cors');
const seedDatabase = require("./models/seed");
const sequelize = require("./models/config");
const { Bouquet, Fleur, User } = require('./models/indexdb');


app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/api/bouquets", async (req, res) => {
    try {
        const bouquets = await Bouquet.findAll();
        console.log(bouquets);
        res.json(bouquets);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération des bouquets" });
    }
});

app.get("/api/users", async (req, res) => {
    try {
        const users = await User.findAll();
        const usersData = users.map((user) => user.get({ plain: true }));
        res.json(usersData);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération des bouquets" });
    }
});

app.put('/api/likes', async (req, res) => {
    try {
        const { userId, bouquetId } = req.body;

        const utilisateur = await User.findByPk(userId);
        const bouquet = await Bouquet.findByPk(bouquetId);

        if (!utilisateur || !bouquet) {
            return res.status(404).json({ error: 'Utilisateur ou Bouquet non trouvé' });
        }

        // Insérer la ligne dans la table Likes (automatiquement géré par Sequelize)
        await utilisateur.addBouquet(bouquet);

        console.log('ligne enregistree');
    } catch (error) {
        console.error('Erreur ligne non enregistree :', error);
    }


});


app.put('/api/bouquets', async (req, res) => {
    console.log("Requête reçue :", req.body);
    const bouquetData = req.body;
    const bouquetId = bouquetData.id;  // On récupère l'ID du bouquet depuis le corps de la requête
    const { nblikes } = bouquetData;   // On récupère le nouveau nombre de likes directement depuis le corps de la requête
    try {
        // On cherche le bouquet par son ID
        const bouquet = await Bouquet.findByPk(bouquetId);

        if (!bouquet) {
            return res.status(404).json({ error: 'Bouquet non trouvé' });
        }

        // On met à jour le bouquet avec les nouvelles informations
        bouquet.nblikes = nblikes;

        // Sauvegarde des changements dans la base de données
        await bouquet.save();

        // On renvoie le bouquet mis à jour en réponse
        res.json(bouquet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la mise à jour du bouquet' });
    }
});

app.get('/api/fleurs', async (req, res) => {
    try {
        const fleurs = await Fleur.findAll();  // Récupérer tous les bouquets
        console.log(fleurs);
        res.json(fleurs);  // Renvoyer les bouquets en réponse
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des bouquets' });
    }
});

//recuperer les bouquet liker par le user 
app.get('/api/users/:userId/likes', async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findByPk(userId, {
            include: {
                model: Bouquet,
                through: { attributes: [] }, // N'inclut pas les données de la table intermédiaire
            },
        });

        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé." });
        }

        res.status(200).json(user.Bouquets); // Les bouquets likés par l'utilisateur
    } catch (error) {
        console.error('Erreur lors de la récupération des likes :', error);
        res.status(500).json({ error: "Erreur lors de la récupération des likes." });
    }
});

// recupere les users ayant liker un bouquet
app.get('/api/bouquets/:bouquetId/likes', async (req, res) => {
    const { bouquetId } = req.params;

    try {
        const bouquet = await Bouquet.findByPk(bouquetId, {
            include: {
                model: User,
                through: { attributes: [] }, // N'inclut pas les données de la table intermédiaire
            },
        });

        if (!bouquet) {
            return res.status(404).json({ message: "Bouquet non trouvé." });
        }

        res.status(200).json(bouquet.Users); // Les utilisateurs qui ont liké ce bouquet
    } catch (error) {
        console.error('Erreur lors de la récupération des likes :', error);
        res.status(500).json({ error: "Erreur lors de la récupération des likes." });
    }
});


app.delete('/api/likes', async (req, res) => {
    const { userId, bouquetId } = req.body; // Récupère l'ID de l'utilisateur et du bouquet depuis le body

    try {
        // Vérifie que l'utilisateur et le bouquet existent
        const utilisateur = await User.findByPk(userId);
        const bouquet = await Bouquet.findByPk(bouquetId);

        if (!utilisateur || !bouquet) {
            return res.status(404).json({ error: 'Utilisateur ou Bouquet non trouvé' });
        }

        // Supprimer la ligne dans la table d'association
        await utilisateur.removeBouquet(bouquet);

        console.log('Like supprimé');
        res.status(200).json({ message: 'Like supprimé avec succès' });

    } catch (error) {
        console.error('Erreur lors de la suppression du like :', error);
        res.status(500).json({ error: 'Erreur lors de la suppression du like' });
    }
});


app.post('/like', (req, res) => {
    const bouquetId = req.query.id; // Récupérer l'ID du bouquet depuis l'URL
    const { liked } = req.body;  // Récupérer l'état du like depuis le body

    if (!bouquetId) {
        return res.status(400).json({ error: 'ID du bouquet manquant' });
    }

    // Simuler une mise à jour du bouquet
    const bouquet = mesBouquets.find(b => b.id == bouquetId);
    if (bouquet) {
        bouquet.liked = liked; // Mettre à jour l'état "liked" du bouquet
        console.log(`Bouquet avec ID ${bouquetId} a été ${liked ? 'liké' : 'déliké'}`);
        res.status(200).json({ message: 'Like enregistré avec succès', bouquetId, liked });
    } else {
        return res.status(404).json({ error: 'Bouquet non trouvé' });
    }
});

// Middleware pour analyser le corps de la requête en JSON
app.use(express.json());

app.post('/api/acheter', (req, res) => {
    console.log('Requête reçue à /api/acheter :', req.body);

    const { userId, purchaseData } = req.body;

    if (!userId || !purchaseData || purchaseData.length === 0) {
        console.error('Données invalides reçues :', req.body);
        return res.status(400).json({ error: 'Données d\'achat manquantes ou invalides.' });
    }

    res.status(200).json({ message: 'Achat effectué avec succès !' });
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected!");
        await seedDatabase();
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

// Lancer le serveur
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});