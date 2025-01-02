import { createSlice } from '@reduxjs/toolkit';
import { sendRequest } from '../../utils/req';


// État initial avec la récupération depuis le localStorage
const initialState = {
    bouquets: [], // Load from localStorage or start with an empty array
    likedBouquets: [],
};

const bouquetSlice = createSlice({
    name: 'bouquets',
    initialState,
    reducers: {
        likeBouquet: (state, action) => {
            const { id, userId } = action.payload;
            const bouquet = state.bouquets.find((b) => b.id === id);
            if (bouquet.liked) {
                bouquet.nblikes -= 1;
            } else {
                bouquet.nblikes += 1;
            }
            bouquet.liked = !bouquet.liked;
            localStorage.setItem('bouquets', JSON.stringify(state.bouquets));
            localStorage.setItem('likedBouquets', JSON.stringify(state.likedBouquets));
            const saveBouquetsToDB = async (updatedBouquet) => {
                const data = {
                    id: updatedBouquet.id,  // On envoie l'ID du bouquet
                    nblikes: updatedBouquet.nblikes  // On envoie seulement les données à mettre à jour
                };

                try {
                    const response = await sendRequest(
                        `http://localhost:5000/api/bouquets`,  // Assurez-vous que l'URL est correcte pour la mise à jour du bouquet
                        'PUT',
                        data
                    );
                    console.log('Data being sent:', data);
                    console.log('Bouquets enregistrés dans la base de données:', response);
                } catch (error) {
                    console.log('Data being sent:', data);
                    console.error('Erreur lors de l\'enregistrement des bouquets:', error);
                    console.error("Détails de l'erreur Axios:", error.response ? error.response.data : error.message);
                }
            };
            const saveBouquetLikeuser = async (id , userId) => {
                const data2 = {
                    userId: userId,  // On envoie l'ID du bouquet
                    bouquetId: id  // On envoie seulement les données à mettre à jour
                };
                try {
                    const response = await sendRequest(
                        `http://localhost:5000/api/likes`,  // Assurez-vous que l'URL est correcte pour la mise à jour du bouquet
                        'PUT',
                        data2
                    );
                    console.log('Data being sent:', data2);
                    console.log('donnees utilisateur envoyee:', response);
                } catch (error) {
                    console.log('Data being sent:', data2);
                    console.error('Erreur lors de l\'envoi des donnees utilisateur:', error);
                    console.error("Détails de l'erreur Axios:", error.response ? error.response.data : error.message);
                }
            };
            const deleteBouquetLikeuser = async (id , userId) => {
                const data2 = {
                    userId: userId,  // On envoie l'ID du bouquet
                    bouquetId: id  // On envoie seulement les données à mettre à jour
                };
                try {
                    const response = await sendRequest(
                        `http://localhost:5000/api/likes`,  // Assurez-vous que l'URL est correcte pour la mise à jour du bouquet
                        'DELETE',
                        data2
                    );
                    console.log('Data being sent:', data2);
                    console.log('donnees utilisateur envoyee:', response);
                } catch (error) {
                    console.log('Data being sent:', data2);
                    console.error('Erreur lors de l\'envoi des donnees utilisateur:', error);
                    console.error("Détails de l'erreur Axios:", error.response ? error.response.data : error.message);
                }
            };
            if(bouquet.liked){
                saveBouquetLikeuser(id,userId);
            }else{
                deleteBouquetLikeuser(id,userId);
            }
            
            saveBouquetsToDB(bouquet);
        },
        setBouquet: (state, action) => {
            state.bouquets = action.payload;
        }
    },
});

export const { likeBouquet, unlikeBouquet, setBouquet } = bouquetSlice.actions;
export default bouquetSlice.reducer;
