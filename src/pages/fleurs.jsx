import React from 'react';
import Fleur from '../components/fleur';  // Import du composant Bouquet

const Fleurs = ({ fleurs }) => {
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
