
import Bouquets from './pages/bouquets';  // Import du composant Bouquets
import Fleurs from './pages/fleurs';  // Import du composant Bouquets
import Home from './pages/home';  // Import du composant Bouquets
import MonCompte from './pages/moncompte';  // Import du composant Bouquets
import Cart from './pages/cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';
import { useDispatch , useSelector } from 'react-redux';
import { setUser } from './redux/slice/userSlice'
import { React, useEffect } from 'react';


const App = () => {
  const dispatch = useDispatch();

  const isAuthentificated = () => {
    return true ;
  };

  const whoIsAuthentificated = () => {
      return 'asma' ;
  };

  const userInfo = {
    isAuthentificated: isAuthentificated(),
    whoIsAuthentificated: whoIsAuthentificated(),
  };

  //cette methode ne marche pas vraiment 
  useEffect(() => {
    const user = whoIsAuthentificated();
    dispatch(setUser(user)); // Envoie du nom complet à Redux
  }, [dispatch]);


  return (

    <Router>
      <Nav userInfo = { userInfo } />
      <div className="container mt-4">
        <Routes>
          <Route path="/bouquets" element={<Bouquets userInfo = { userInfo } />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fleurs" element={<Fleurs />} />
          <Route path="/moncompte" element={<MonCompte/>} />
          <Route path="/" element={<Home />} />
          <Route path="/panier" element={<Cart />} />
        </Routes>
      </div>
    </Router>
    // <div className="container mt-4">
    //   {/* Passer mesBouquets comme props au composant Bouquets */}
    //   <Bouquets bouquets={mesBouquets} />
    // </div>
  );
};

export default App;
