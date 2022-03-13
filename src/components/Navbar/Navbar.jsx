import React from "react";
import "./Navbar.css";
import HamburgerMenu from "../../assets/FaSolidBars.svg";
import Logo from "../../assets/logo.png";
import CartIcon from "../../assets/shopping-cart.svg";
import WishlistIcon from "../../assets/heart.svg";

const Navbar = () => {
  return (
    <>
      <header className="navbar-header">
        <nav className="navbar">
          <div className="navbar-head">
            <div className="navbar-toggle-btn" id="toggleBtn">
              <img src={HamburgerMenu} alt="burger" />
            </div>
            <a href="/">
              <img className="nav-logo" src={Logo} alt="logo" />
            </a>
          </div>
          <div className="navbar-items navbar-right">
            <ul className="navbar-links">
              <li className="navbar-item item-center">
                <input
                  type="text"
                  placeholder="Type Cheese to begin"
                  className="input-box home-searchbar"
                />
              </li>
              <li className="navbar-item">
                <button className="btn btn-primary">
                  <a className="nav-button" href="./pages/Login/login.html">
                    {" "}
                    Login
                  </a>
                </button>
              </li>
              <li className="navbar-item">
                <div className="badge">
                  <a href="./pages/Cart/cart.html">
                    <img className="navbar-icon" src={CartIcon} alt="cart" />
                  </a>
                  <span className="badge-count badge-quad">0</span>
                </div>
              </li>
              <li className="navbar-item">
                <div className="badge">
                  <a href="./pages/Wishlist/wishlist.html">
                    <img
                      className="navbar-icon"
                      src={WishlistIcon}
                      alt="wishlist"
                    />
                  </a>
                  <span className="badge-count badge-quad">0</span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Navbar };
