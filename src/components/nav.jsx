// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ userInfo }) => {

    const menuItems = [
        { to: '/home', label: 'Accueil' },
        { to: '/bouquets', label: 'Bouquets' },
        { to: '/fleurs', label: 'Fleurs' },
        { to: '/moncompte', label: userInfo.isAuthentificated ? userInfo.whoIsAuthentificated : 'Mon compte' },
        { to: '/panier', label: userInfo.isAuthentificated ? 'Panier' : '' },

      ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#AA336A', opacity: 0.8 }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">bnxam's shop</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <Link className="nav-link" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    // <nav>hallo world</nav>
  );
};

export default Nav;
