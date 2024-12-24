import Bouquet from '../components/bouquet';  // Import du composant Bouquet
import React , { useState } from 'react';

const Bouquets = ({ initialBouquets }) => {
    const [bouquets, setBouquets] = useState(initialBouquets);

    // Fonction pour gérer les likes
    const toggleLike = (id) => {
        setBouquets((prevBouquets) =>
            prevBouquets.map((bouquet) =>
                bouquet.id === id
                    ? { ...bouquet, liked: !bouquet.liked } // Inverser la valeur de liked
                    : bouquet
            )
        );
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
