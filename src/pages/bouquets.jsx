import Bouquet from '../components/bouquet';
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeBouquet, setBouquet } from '../redux/slice/bouquetSlice';
import { addToCart } from '../redux/slice/cartSlice';
import { sendRequest } from '../utils/req';

const Bouquets = ({userInfo}) => {
    const dispatch = useDispatch();
    const userId = 1; 
    const bouquets = useSelector((state) => state.bouquets.bouquets);
    const handleAddToCart = (bouquet) => {
        dispatch(addToCart(bouquet)); // Ajouter le bouquet au panier
    };
    const toggleLike = async (id) => {

        // const bouquet = bouquets.find((b) => b.id === id);
        dispatch(likeBouquet({ id, userId }));

    };

    useEffect(() => {
        const fetchBouquets = async () => {
            try {
                const bouquetData = await sendRequest('http://localhost:5000/api/bouquets', 'GET');
                dispatch(setBouquet(bouquetData));
            } catch (error) {
                console.error('Erreur lors de la récupération des bouquets:', error);
            }
        };
        fetchBouquets();
    }, [dispatch]);



    return (
        <div className="row">
            {bouquets.map((bouquet) => (
                <div className="col-md-4 " key={bouquet.id}>
                    <Bouquet bouquet={bouquet} toggleLike={toggleLike}
                        addToCart={() => handleAddToCart(bouquet)} userInfo = {userInfo} />
                </div>
            ))}
        </div>
    );
};

export default Bouquets;
