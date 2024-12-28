import { createSlice } from '@reduxjs/toolkit';


// État initial avec la récupération depuis le localStorage
const initialState = {
    bouquets: JSON.parse(localStorage.getItem('bouquets')) || [], // Load from localStorage or start with an empty array
};

const bouquetSlice = createSlice({
    name: 'bouquets',
    initialState,
    reducers: {
        likeBouquet: (state, action) => {
            const { id } = action.payload;
            const bouquet = state.bouquets.find((b) => b.id === id);
            if (bouquet) {
                bouquet.liked = true;
            }
            localStorage.setItem('bouquets', JSON.stringify(state.bouquets));
        },
        unlikeBouquet: (state, action) => {
            const { id } = action.payload;
            const bouquet = state.bouquets.find((b) => b.id === id);
            if (bouquet) {
                bouquet.liked = false;
            }
            localStorage.setItem('bouquets', JSON.stringify(state.bouquets));
        },
    },
});

export const { likeBouquet, unlikeBouquet } = bouquetSlice.actions;
export default bouquetSlice.reducer;
