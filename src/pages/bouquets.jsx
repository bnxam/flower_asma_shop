// import Bouquet from '../components/bouquet';  // Import du composant Bouquet
// import React, { useState } from 'react';
// import { useEffect } from "react";

// const Bouquets = ({ initialBouquets }) => {
//     const [bouquets, setBouquets] = useState(initialBouquets);

//     useEffect(() => {
//         // Charger les bouquets depuis localStorage
//         const storedBouquets = JSON.parse(localStorage.getItem('bouquets')) || [];
//         setBouquets(storedBouquets);
//     }, []);

//     useEffect(() => {
//         // Mettre à jour localStorage à chaque fois que l'état bouquets change
//         localStorage.setItem("bouquets", JSON.stringify(bouquets));
//     }, [bouquets]);

//     // Fonction pour gérer les likes
//     const toggleLike = (id) => {
//         setBouquets((prevBouquets) =>
//             prevBouquets.map((bouquet) =>
//                 bouquet.id === id
//                     ? { ...bouquet, liked: !bouquet.liked } // Inverser la valeur de liked
//                     : bouquet
//             )
//         );


//     };
//     return (
//         <div className="row">
//             {bouquets.map((bouquet) => (
//                 <div className="col-md-4 " key={bouquet.id}>
//                     <Bouquet bouquet={bouquet} toggleLike={toggleLike} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Bouquets;


import Bouquet from '../components/bouquet';  // Import du composant Bouquet
import React, { useState, useEffect } from 'react';

const Bouquets = ({ bouquets , setBouquets }) => {
    // const [bouquets, setBouquets] = useState(initialBouquets);

    // useEffect(() => {
    //     // Charger les bouquets depuis localStorage lors du montage du composant
    //     const storedBouquets = JSON.parse(localStorage.getItem('bouquets')) || [];
    //     setBouquets(storedBouquets);
    // }, []);

    // useEffect(() => {
    //     // Mettre à jour localStorage à chaque fois que l'état bouquets change
    //     localStorage.setItem("bouquets", JSON.stringify(bouquets));
    // }, [bouquets]); // Ce useEffect se déclenche uniquement quand bouquets change

    // // Fonction pour gérer les likes
    const toggleLike = (id) => {
        const updatedBouquets = bouquets.map((bouquet) =>
            bouquet.id === id
                ? { ...bouquet, liked: !bouquet.liked } // Inverser le boolean "liked"
                : bouquet
            
        );
        setBouquets(updatedBouquets); // Mettre à jour l'état local
        localStorage.setItem('bouquets', JSON.stringify(updatedBouquets));
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
