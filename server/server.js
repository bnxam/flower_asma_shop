const port = 5000; // Vous pouvez changer ce port si nécessaire
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());    
const mesBouquets = [
    {
        id: 1,
        nom: 'Bouquet de Tunis',
        descr: 'Un dosage parfait de jasmins et de tulipes, des couleurs éclatantes et du soleil toute l’année chez vous',
        image: '/assets/b1.jpg',
        prix: 1500.00,
        liked: false,
    },
    {
        id: 2,
        nom: 'Bouquet d’Alger',
        descr: 'Un mélange merveilleux de jasmins et de senteurs méditerranéennes, des odeurs éclatantes pour égayer votre bureau',
        image: '/assets/b2.jpg',
        prix: 2000.00,
        liked: false,
    },
    {
        id: 3,
        nom: 'Bouquet d’Oran',
        descr: 'Un mélange merveilleux de roses et de lys, des odeurs et des couleurs',
        image: '/assets/b3.jpg',
        prix: 2000.00,
        liked: false,
    },
];


// Définir l'endpoint pour récupérer les bouquets
app.get('/api/bouquets', (req, res) => {
    res.json(mesBouquets); // Renvoie les bouquets sous forme de JSON
});

app.use(express.json());

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



// Lancer le serveur
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});