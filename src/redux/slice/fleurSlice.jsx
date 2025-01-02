import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fleurs: [],  // Initialisation de fleurs en tant que tableau vide
};

const fleursSlice = createSlice({
  name: 'fleurs',
  initialState,
  reducers: {
    setFleurs(state, action) {
      state.fleurs = action.payload;  // Mise à jour de l'état fleurs
    },
  },
});

export const { setFleurs } = fleursSlice.actions;

export default fleursSlice.reducer;