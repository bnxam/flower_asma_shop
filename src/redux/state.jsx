import { configureStore } from '@reduxjs/toolkit';
import bouquetsReducer from './slice/bouquetSlice'; // Le fichier du code que tu as partagé
import cartReducer from './slice/cartSlice'; // Le fichier du code que tu as partagé

const store = configureStore({
    reducer: {
        bouquets: bouquetsReducer,
        panier: cartReducer,
    },
});

export default store;
