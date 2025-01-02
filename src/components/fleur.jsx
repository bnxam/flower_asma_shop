
const Fleur = ({ fleur }) => {
  return (
    <div className="card">
      <img src={fleur.image} className="card-img-top" alt={fleur.nom} />
      <div className="card-body">
        <h5 className="card-title">{fleur.nom}</h5>
        <p className="card-text">{fleur.descr}</p>
        <p className="card-text">
          <strong>Prix : </strong>
          {fleur.prix} DA
        </p>
        <button className="btn btn-dark">choisir</button>
      </div>
    </div>
  );
};

export default Fleur;


