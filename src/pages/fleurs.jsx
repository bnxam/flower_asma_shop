import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFleurs } from '../redux/slice/fleurSlice';
import { sendRequest } from '../utils/req';
import Fleur from '../components/fleur'; 

const Fleurs = () => {
  const fullState = useSelector((state) => state);

  console.log('Full Redux State:', fullState);
  const fleurs = useSelector((state) => state.fleurs.fleurs);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchFleurs = async () => {
      try {
        const fleursData = await sendRequest('http://localhost:5000/api/fleurs', 'GET');
        dispatch(setFleurs(fleursData));
      } catch (error) {
        console.error('Erreur lors de la récupération des fleurs:', error);
      }
    };
  fetchFleurs(); 
  }, [dispatch]);

  return (
    <div className="row" >
      {fleurs.map((fleur) => (
        <div key={fleur.id} className="col-md-4 " >
          {/* Passer chaque bouquet à l'intérieur du composant Bouquet */}
          <Fleur fleur={fleur} />
        </div>
      ))}
    </div>
  );
};

export default Fleurs;



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setFleurs } from '../redux/slices/fleursSlice';
// import { sendRequest } from '../modulehttp/http';
// import Fleur from './Fleur'; // Import du composant Fleur

// const Fleurs = () => {
//   const fleurs = useSelector((state) => state.fleurs.fleurs);
//   const dispatch = useDispatch();   

//   // Fonction pour récupérer les bouquets depuis l'API
//   useEffect(() => {
//     const fetchFleurs = async () => {
//       try {
//         // Appel à l'API pour récupérer les bouquets
//         const fleursData = await sendRequest('http://localhost:5000/api/fleurs', 'GET');
       
//         // Dispatch pour stocker les bouquets dans Redux
//         dispatch(setFleurs(fleursData));
//       } catch (error) {
//         console.error('Erreur lors de la récupération des bouquets:', error);
//       }
//     };

//     fetchFleurs(); // Appel de la fonction au chargement de la page
//   }, [dispatch]);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Nos Fleurs</h2>
//       <div className="row">
//         {fleurs.map((fleur) => (
//           <div key={fleur.idFleur} className="col-md-4">
//             <Fleur fleur={fleur} /> {/* Utilisation de Fleur pour chaque bouquet */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Fleurs;
