import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slice/cartSlice'; // Assurez-vous que l'action removeFromCart est définie dans cartSlice

const Cart = () => {
    const cart = useSelector((state) => state.panier.cart); // Récupérer le panier depuis Redux
    const dispatch = useDispatch();

    // Fonction pour retirer un bouquet du panier
    const handleRemoveFromCart = (idp) => {
        dispatch(removeFromCart(idp)); // Retirer le bouquet du panier
    };

    // Fonction pour calculer le total du panier
    const calculateTotal = () => {
        return cart.reduce((total, bouquet) => total + bouquet.prix, 0);
    };

    const handlePurchase = async () => {
        const userId = 1; // ID de l'utilisateur actuel (en supposant qu'il est 1)
        const purchaseData = cart.map((bouquet) => ({
            id: bouquet.id,
            prix: bouquet.prix,
        }));

        try {
            const response = await fetch('http://localhost:5000/api/acheter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId, // ID utilisateur
                    purchaseData, // Liste des bouquets achetés avec leur prix
                }),
            });

            if (!response.ok) {
                throw new Error("Erreur lors de l'envoi des données d'achat au backend");
            }
            console.log("Achat effectué avec succès");
        } catch (error) {
            console.error("Erreur:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Votre Panier</h2>
            {cart.length === 0 ? (
                <p>Le panier est vide</p>
            ) : (
                <div>
                    <div className="row">
                        {cart.map((bouquet) => (
                            <div key={bouquet.idp} className="col-md-4">
                                <div className="card">
                                    <img
                                        src={bouquet.image}
                                        className="card-img-top"
                                        alt={bouquet.nom}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{bouquet.nom}</h5>
                                        <p className="card-text">
                                            <strong>Prix :</strong> {bouquet.prix} DA
                                        </p>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() => handleRemoveFromCart(bouquet.idp)}
                                        >
                                            Retirer du panier
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">
                        <h3>Total : {calculateTotal()} DA</h3>
                        <button
                            className="btn btn-secondary"
                            onClick={handlePurchase}
                        >
                            Acheter
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
