import React from 'react';
import Bouquets from './pages/bouquets';  // Import du composant Bouquets
import Fleurs from './pages/fleurs';  // Import du composant Bouquets
import Home from './pages/home';  // Import du composant Bouquets
import MonCompte from './pages/moncompte';  // Import du composant Bouquets
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/nav';

const App = () => {
  const mesBouquets = [
    {
      id: 1,
      nom: 'Bouquet de Tunis',
      descr: 'Un dosage parfait de jasmins et de tulipes, des couleurs éclatantes et du soleil toute l’année chez vous',
      image: '/assets/b1.jpg',
      prix: 1500.00,
    },
    {
      id: 2,
      nom: 'Bouquet d’Alger',
      descr: 'Un mélange merveilleux de jasmins et de senteurs méditerranéennes, des odeurs éclatantes pour égayer votre bureau',
      image: '/assets/b2.jpg',
      prix: 2000.00,
    },
    {
      id: 3,
      nom: 'Bouquet d’Oran',
      descr: 'Un mélange merveilleux de roses et de lys, des odeurs et des couleurs',
      image: '/assets/b3.jpg',
      prix: 2000.00,
    },
  ];
  const mesFleurs = [
    {
      id: 1,
      nom: ' Rose',
      descr: 'Symbole de lamour et de la passion, avec des couleurs variées pour chaque émotion.',
      image: '/assets/f1.jpg',
      prix: 90.00,
    },
    {
      id: 2,
      nom: 'Tulipe',
      descr: 'Élégante fleur de printemps, symbole de renouveau et de déclaration damour.',
      image: '/assets/f2.jpg',
      prix: 200.00,
    },
    {
      id: 3,
      nom: 'Lys',
      descr: 'Fleur majestueuse et parfumée, associée à la pureté et à la royauté.',
      image: '/assets/f3.jpg',
      prix: 200.00,
    },
    {
      id: 4,
      nom: ' Orchidée',
      descr: 'Exotique et sophistiquée, elle incarne le luxe et la rareté.',
      image: '/assets/f4.jpg',
      prix: 170.00,
    },
    {
      id: 5,
      nom: ' Marguerite',
      descr: 'Simple et fraîche, symbole dinnocence et damitié.',
      image: '/assets/f5.jpg',
      prix: 150.00,
    },
    {
      id: 6,
      nom: 'Jasmin',
      descr: 'Fleur parfumée, évocatrice de sensualité et de sérénité.',
      image: '/assets/f6.jpg',
      prix: 100.00,
    },
  ];
  return (

    <Router>
      <Nav/>
      <div className="container mt-4">
        <Routes>
          <Route path="/bouquets" element={<Bouquets bouquets={mesBouquets} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fleurs" element={<Fleurs fleurs={mesFleurs} />} />
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
