import { useEffect } from "react";

const FetchBouquets = ({ setBouquets }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedBouquets = localStorage.getItem('bouquets');
                if (storedBouquets) {
                    console.log('Bouquets from localStorage:', JSON.parse(storedBouquets));
                    // Si les bouquets existent déjà, les utiliser et les afficher
                    setBouquets(JSON.parse(storedBouquets));
                } else {
                    // Sinon, faire une requête fetch pour récupérer les bouquets
                    const response = await fetch('http://localhost:5000/api/bouquets');
                    if (!response.ok) {
                        throw new Error('Erreur lors de la récupération des données');
                    }
                    const data = await response.json();

                    // Enregistrer les données dans localStorage
                    localStorage.setItem('bouquets', JSON.stringify(data));

                    // Mettre à jour les bouquets dans le front-end
                    setBouquets(data);
                }
            } catch (error) {
                console.error('Erreur:', error);
            }
        };

        fetchData();
    }, [setBouquets]);

    return null; // Ce composant ne rend rien, il sert uniquement à récupérer les données
};

export default FetchBouquets;
