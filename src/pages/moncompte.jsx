import React from 'react';
import { useState , useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';

import { login , logout , setUser } from '../redux/slice/userSlice';


const MonCompte = () => {
  const [username, setUsername] = useState('');  // Ajout de useState pour username
  const [password, setPassword] = useState('');

  // const { user } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   const userstorage = localStorage.getItem('user');
  //   console.log('Etat actuel du store : ', {  user });
  // }, [ user]);

  // useEffect(() => {
  //   // Vérifie si un utilisateur est déjà authentifié dans le localStorage
  //   const userFromStorage = localStorage.getItem('user');

  //   if (userFromStorage) {
  //     // Si un utilisateur est trouvé et est authentifié, mets à jour l'état global
  //     dispatch(setUser(userFromStorage));
  //   }else{
  //     dispatch(setUser(null));
  //   }
  // }, [dispatch]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(login({ username, password })).unwrap();
      console.log('Token reçu après connexion :', result); // Vérifie ici
      alert('Connexion réussie !');
      const token = localStorage.getItem('token'); // Récupère le token depuis localStorage
    console.log('Token stocké dans localStorage :', token);
    } catch (err) {
      alert(err.message || 'Erreur de connexion');
    }
   
  };
  const handleLogout = () => {
    dispatch(logout());  // Dispatcher la fonction logout ici
    alert('Déconnexion réussie !');
  };
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
      {token ? (
        <>
        <h3 className="text-center mb-4">Mon profile</h3>
        <ul className="list-group">
          {/* <li class="list-group-item">user</li> */}
          <button onClick={handleLogout} className="btn btn-danger w-100">se deconnecter</button>
        </ul>
        </>
      ) : (
        <>
        <h3 className="text-center mb-4">Se connecter</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">User Name</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              type="text"
              className="form-control"
              placeholder="Entrez votre e-mail"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Entrez votre mot de passe"
              required
            />
          </div>
          <button type="submit" className="btn btn-danger w-100">Connexion</button>
        </form>
        </>
      )}

      


        

      </div>
    </div>
  );
};

export default MonCompte;
