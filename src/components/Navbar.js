import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 * 
 */
const Navbar = (props) => {
  return <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a  className="navbar-brand" href="#"><img src="./favicon-32x32.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a  className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a  className="nav-link " aria-current="page" href="/about">{props.nav}</a>
            </li> */}

          </ul>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
      </div>
    </nav>
  </div>;
}


// #endregion

export default Navbar;
Navbar.propTypes = { title: PropTypes.string.isRequired }

Navbar.defaultProps = {
  title: "Set title here"
}