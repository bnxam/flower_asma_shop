import axios from 'axios';

export const sendRequest = async (url, method, data, headers) => {
  try {
    const response = await axios({
      url: url,
      method: method,
      data: data,
      headers: headers ,
    //   "Content-Type": "application/json",
    });
    return response.data; 
  } catch (error) {
    console.error("Erreur de requête:", error);
    throw error; 
  }
};