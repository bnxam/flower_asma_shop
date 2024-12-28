import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.bouquets.cart);

  const handlePurchase = () => {
    const userId = 123; // ID utilisateur actuel
    const purchaseData = cart.map(item => ({ id: item.id, price: item.price }));
    // Envoyer une requête au backend
    fetch('/api/purchase', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, purchaseData }),
    });
  };

  return (
    <div>
      <h1>Panier</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}€
          </li>
        ))}
      </ul>
      <button onClick={handlePurchase}>Acheter</button>
    </div>
  );
};

export default Cart;
