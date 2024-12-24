import React from 'react';
// react dom nha c a installer 
import { Link } from 'react-router-dom';

const Nav = () => {

    const menuItems = [
        { to: '/home', label: 'Accueil' },
        { to: '/bouquets', label: 'Bouquets' },
        { to: '/fleurs', label: 'Fleurs' },
        { to: '/moncompte', label: 'Mon Compte' },
      ];
 
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: '#507c7c', opacity: 0.8 }}>
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
