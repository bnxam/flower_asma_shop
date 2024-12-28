import Bouquet from '../components/bouquet';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeBouquet, unlikeBouquet } from '../redux/slice/bouquetSlice';

const Bouquets = () => {
    const dispatch = useDispatch();
    const userId = 1; // ID utilisateur actuel
    const bouquets = useSelector((state) => state.bouquets.bouquets);
    // const cart = useSelector((state) => state.bouquets.cart);
       
    const toggleLike = async (id) => {

        const bouquet = bouquets.find((b) => b.id === id);
        if (!bouquet) return;

        // Dispatch Redux actions
        if (bouquet.liked) {
            dispatch(unlikeBouquet({ id, userId }));
        } else {
            dispatch(likeBouquet({ id, userId }));
        }
       
        
        try {
            const response = await fetch(`http://localhost:5000/like?id=${id}`, {
                method: 'POST', // Use POST method to send the like
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    liked: !bouquet.liked, // Send the updated liked status
                }),
            });

            if (!response.ok) {
                throw new Error("Error while sending like to the backend");
            }
            console.log("Like sent to the backend");
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    


    return (
        <div className="row">
            {bouquets.map((bouquet) => (
                <div className="col-md-4 " key={bouquet.id}>
                    <Bouquet bouquet={bouquet} toggleLike={toggleLike}  />
                </div>
            ))}
        </div>
    );
};

export default Bouquets;
