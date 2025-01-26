import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import { sendRequest } from '../../utils/req';

// export const login = createAsyncThunk('user/login', async ({ username, password }) => {

//   const response = await sendRequest('http://localhost:5000/login', 'POST', { username, password }, { 'Content-Type': 'application/json' });
//   const data = await response.json();
//   if (!response.ok) throw new Error(data.message || 'Login failed');
//   return data.token;
// });
export const login = createAsyncThunk(
  'user/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      // Appelle `sendRequest` sans toucher à sa structure
      const data = await sendRequest(
        'http://localhost:5000/login',
        'POST',
        { username, password },
        { 'Content-Type': 'application/json' } // Ajout des headers si nécessaire
      );
      console.log('Réponse du backend :', data); 
      return data.token; // Retourne le token pour l'utiliser dans `fulfilled`
    } catch (error) {
      // Retourne un message d'erreur si la requête échoue
      return rejectWithValue(error.response?.data?.message || 'Erreur de connexion');
    }
  }
);

const initialState = {
  initialState: {
    token: null,
    user: null,
    error: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },

    
    extraReducers: (builder) => {
      builder
        .addCase(login.fulfilled, (state, action) => {
          console.log('asma tebha :', action.payload); // Log du token
          state.token = action.payload;
          localStorage.setItem('token', action.payload);
          console.log('asma tebha mli7 :', action.payload);
        })
        .addCase(login.rejected, (state, action) => {
          console.error('Erreur lors de la connexion :', action.error.message); // Log de l'erreur
          state.error = action.error.message;
        });
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem('token');
  },
  },
});

export const { setUser,extraReducers, logout } = userSlice.actions;

export default userSlice.reducer;