import React from 'react';

const Bouquet = ({ bouquet }) => {
  return (
    <div className="card">
      <img src={bouquet.image} className="card-img-top" alt={bouquet.nom} />
      <div className="card-body">
        <h5 className="card-title">{bouquet.nom}</h5>
        <p className="card-text">{bouquet.descr}</p>
        <p className="card-text">
          <strong>Prix : </strong>
          {bouquet.prix.toFixed(2)} DA
        </p>
        <button className="btn btn-primary">Acheter</button>
      </div>
    </div>
  );
};

export default Bouquet;
