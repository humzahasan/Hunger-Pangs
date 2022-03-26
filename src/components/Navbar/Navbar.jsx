import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HamburgerMenu from "../../assets/FaSolidBars.svg";
import Logo from "../../assets/logo.png";
import CartIcon from "../../assets/shopping-cart.svg";
import WishlistIcon from "../../assets/heart.svg";

import { useWishlist } from "../../context/wishlistContext";

const Navbar = () => {
  const { state } = useWishlist();
  const wishlistLength = state.itemInWishList.length;

  return (
    <>
      <header className="navbar-header">
        <nav className="navbar">
          <div className="navbar-head">
            <div className="navbar-toggle-btn" id="toggleBtn">
              <img src={HamburgerMenu} alt="burger" />
            </div>
            <Link to="/">
              <img className="nav-logo" src={Logo} alt="logo" />
            </Link>
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
                  <Link className="nav-button" to="/login">
                    Login
                  </Link>
                </button>
              </li>
              <li className="navbar-item">
                <div className="badge">
                  <Link to="/shoppingcart">
                    <img className="navbar-icon" src={CartIcon} alt="cart" />
                  </Link>
                  <span className="badge-count badge-quad">0</span>
                </div>
              </li>
              <li className="navbar-item">
                <div className="badge">
                  <Link to="/wishlist">
                    <img
                      className="navbar-icon"
                      src={WishlistIcon}
                      alt="wishlist"
                    />
                  </Link>
                  <span className="badge-count badge-quad">
                    {wishlistLength}
                  </span>
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
