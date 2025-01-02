import { configureStore } from '@reduxjs/toolkit';
import bouquetsReducer from './slice/bouquetSlice'; 
import cartReducer from './slice/cartSlice'; 
import fleursReducer from './slice/fleurSlice';
import usersReducer from './slice/userSlice';

const store = configureStore({
    reducer: {
        bouquets: bouquetsReducer,
        panier: cartReducer,
        fleurs: fleursReducer,
        user: usersReducer,
    },
});

export default store;
