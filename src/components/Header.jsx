import React from 'react'
import "../styles/Header.css"


const Header = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo right">
            Logo
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="https://coinmarketcap.com/api/">CMC API</a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>

      <h1 id="h1" className="grey-text text-darken-3">Most Popular Criptos in the world</h1>
    </>
  );
}

export default Header