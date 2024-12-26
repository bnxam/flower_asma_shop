import Bouquet from '../components/bouquet';  // Import du composant Bouquet
import React, { useState, useEffect } from 'react';

const Bouquets = ({ bouquets, setBouquets }) => {
    // const toggleLike = (id) => {
    //     const updatedBouquets = bouquets.map((bouquet) =>
    //         bouquet.id === id
    //             ? { ...bouquet, liked: !bouquet.liked } // Inverser le boolean "liked"
    //             : bouquet

    //     );
    //     setBouquets(updatedBouquets); // Mettre à jour l'état local
    //     localStorage.setItem('bouquets', JSON.stringify(updatedBouquets));
    // };
    const toggleLike = async (id) => {
        const updatedBouquets = bouquets.map((bouquet) =>
            bouquet.id === id
                ? { ...bouquet, liked: !bouquet.liked }  // Inverser l'attribut "liked"
                : bouquet
        );
        setBouquets(updatedBouquets);
        localStorage.setItem('bouquets', JSON.stringify(updatedBouquets));
    
        try {
            const response = await fetch(`http://localhost:5000/like?id=${id}`, {
                method: 'POST',  // Méthode POST pour envoyer le like
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    liked: updatedBouquets.find(bouquet => bouquet.id === id).liked,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Erreur lors de l\'envoi du like');
            }
            console.log('Like envoyé au backend');
        } catch (error) {
            console.error('Erreur:', error);
        }
    };
    



    return (
        <div className="row">
            {bouquets.map((bouquet) => (
                <div className="col-md-4 " key={bouquet.id}>
                    <Bouquet bouquet={bouquet} toggleLike={toggleLike} />
                </div>
            ))}
        </div>
    );
};

export default Bouquets;
