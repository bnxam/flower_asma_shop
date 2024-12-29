import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [], // Ajouter le panier
};

const cartSlice = createSlice({
    name: 'panier',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const bouquet = action.payload;
            const bouquetP = { ...bouquet, idp: `${new Date().getTime()}-${Math.random()}` }; // Ajouter un identifiant unique
            state.cart.push(bouquetP); // Ajouter le bouquet au panier
            localStorage.setItem('cart', JSON.stringify(state.cart)); // Enregistrer dans le localStorage
        },
        removeFromCart: (state, action) => {
            const bouquetId = action.payload;
            state.cart = state.cart.filter((b) => b.idp !== bouquetId); // Retirer le bouquet du panier
            localStorage.setItem('cart', JSON.stringify(state.cart)); // Mettre à jour le localStorage
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
