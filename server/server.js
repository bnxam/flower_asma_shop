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

// Lancer le serveur
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});