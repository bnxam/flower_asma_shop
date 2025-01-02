import React from 'react';

const Bouquet = ({ bouquet, toggleLike, addToCart, userInfo }) => {


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
                <div className='row'>
                    <button
                        className={`btn btn-light col-4 ${!userInfo.isAuthentificated ? 'disabled-button' : ''} ${!userInfo.isAuthentificated ? 'disabled' : ''}`}
                        onClick={() => toggleLike(bouquet.id)}
                    >
                        {userInfo.isAuthentificated ? (bouquet.liked ? '❤️' : '🤍') : '🤍'}
                    </button>
                    {userInfo.isAuthentificated && (
                        <button className={`btn btn-light col-4 `}
                       
                    >{ bouquet.nblikes }</button>
                    )}
                    {userInfo.isAuthentificated && (
                        <button className={`btn btn-danger col-4 `}
                        onClick={addToCart}
                    >panier</button>
                    )}
                    
                </div>
            </div>
        </div>
    );
};

export default Bouquet;
