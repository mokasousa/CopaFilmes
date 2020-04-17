import React from 'react';
import './Header.css';

const Header = ({title, text}) => {

    return (
      <header className="header-container">
        <h2 className="heading-secondary">Compeonato de filmes</h2>
        <h1 className="heading-primary">{title}</h1>
        <div className="line"></div>
        <p className="header-paragraph">{text}</p>
      </header>
    );
}

export default Header;