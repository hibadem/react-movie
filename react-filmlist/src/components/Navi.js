import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../assets/js/events";

const Navi = (props) => {
  
    return (
      <div>
        <header className="site-header">
          <div className="container">
            <a href="/" id="branding">
              <img src={logo} alt="" className="logo" />
              {/* <img
                  src={require('./assets/images/logo.png')}
                  alt=""
                  className="logo"
                /> */}

              <div className="logo-copy">
                <h1 className="site-title">Badem Film</h1>
                <small className="site-description">Filmin adresi</small>
              </div>
            </a>
            <div className="main-navigation">
              <button type="button" className="menu-toggle">
                <i className="fa fa-bars"></i>
              </button>
              <ul className="menu">
                <li className="menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                  <a href="about.html">About</a>
                </li>
                <li className="menu-item">
                  <Link to="/movies">Movie reviews</Link>
                </li>
                <li className="menu-item">
                  <a href="joinus.html">Join us</a>
                </li>
                <li className="menu-item">
                  <a href="contact.html">Contact</a>
                </li>
                <li className="menu-item">
                  <a>
                    <form action="#" className="subscribe-form">
                      <input
                        type="text"
                        placeholder="Search"
                        value={props.searchValue}
                        onChange={(event) =>
                          props.setSearchValue(event.target.value)
                        }
                      />
                      
                    </form>
                  </a>
                </li>
              </ul>
            </div>

            <div className="mobile-navigation"></div>
          </div>
        </header>
      </div>
    );
  
}

export default Navi;
