import React from 'react';

const Bouquet = ({ bouquet ,toggleLike}) => {
  return (
    <div className="card">
      <img src={bouquet.image} className="card-img-top" alt={bouquet.nom} />
      <div className="card-body">
        <h5 className="card-title">{bouquet.nom}</h5>
        <p className="card-text">{bouquet.descr}</p>
        <p className="card-text">
          <strong>Prix : </strong>
          {bouquet.prix} DA
        </p>
        <button
          className={`btn btn-light`}
          onClick={() => toggleLike(bouquet.id)}
        >
          {bouquet.liked ? '❤️' : '🤍'}
        </button>
        {/* <button className={`btn btn-danger`} 
        onClick={() => handleAddToCart(bouquet.id)}
        >Ajouter au panier</button> */}
      </div>
    </div>
  );
};

export default Bouquet;
