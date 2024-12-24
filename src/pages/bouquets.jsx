import React from 'react';
import Bouquet from '../components/bouquet';  // Import du composant Bouquet

const Bouquets = ({ bouquets }) => {
  return (
    <div className="row">
      {bouquets.map((bouquet) => (
        <div key={bouquet.id} className="col-md-4 ">
          {/* Passer chaque bouquet à l'intérieur du composant Bouquet */}
          <Bouquet bouquet={bouquet} />
        </div>
      ))}
    </div>
  );
};

export default Bouquets;
