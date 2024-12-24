import React from 'react';
import Bouquets from './pages/bouquets';  // Import du composant Bouquets
import Fleurs from './pages/fleurs';  // Import du composant Bouquets
import Home from './pages/home';  // Import du composant Bouquets
import MonCompte from './pages/moncompte';  // Import du composant Bouquets
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './components/nav';

const App = () => {
  const mesBouquets = [
    {
      id: 1,
      nom: 'Bouquet de Tunis',
      descr: 'Un dosage parfait de jasmins et de tulipes, des couleurs éclatantes et du soleil toute l’année chez vous',
      image: '/images/bouquetTunis.jpg',
      prix: 1500.00,
    },
    {
      id: 2,
      nom: 'Bouquet d’Alger',
      descr: 'Un mélange merveilleux de jasmins et de senteurs méditerranéennes, des odeurs éclatantes pour égayer votre bureau',
      image: '/images/bouquetAlger.jpg',
      prix: 2000.00,
    },
    {
      id: 3,
      nom: 'Bouquet d’Oran',
      descr: 'Un mélange merveilleux de roses et de lys, des odeurs et des couleurs',
      image: '/images/bouquetOran.jpg',
      prix: 2000.00,
    },
  ];

  return (

    <Router>
      <Nav/>
      <div className="container mt-4">
        <Routes>
          <Route path="/bouquets" element={<Bouquets bouquets={mesBouquets} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fleurs" element={<Fleurs />} />
          <Route path="/moncompte" element={<MonCompte />} />
          <Route path="/" element={<Home />} />
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
