import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [],  // Initialisation de fleurs en tant que tableau vide
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;  // Mise à jour de l'état fleurs
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;