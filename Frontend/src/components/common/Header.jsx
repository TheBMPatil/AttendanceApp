import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header >
      <div className="header">

        <div className="nav-bar">
          <nav>
            <Link to="/" className="logo">Logo</Link>
            <div className="nav-buttons">
              <Link to="/"><button>Home</button></Link>
              <Link to="/login"><button>Login</button></Link>
              <Link to="/profile"><button>Profile</button></Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
