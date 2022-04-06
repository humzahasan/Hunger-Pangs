import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HamburgerMenu from "../../assets/FaSolidBars.svg";
import Logo from "../../assets/logo.png";
import CartIcon from "../../assets/shopping-cart.svg";
import WishlistIcon from "../../assets/heart.svg";

import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
import { useAuth } from "../../context/auth.context";

const Navbar = () => {
  const { state: wishlistState } = useWishlist();
  const { state: cartState } = useCart();
  const { user, setUser } = useAuth();

  const wishlistLength = wishlistState.itemInWishList.length;
  const cartLength = cartState.cart.length;

  const logoutHandler = () => {
    console.info("User Logged out!");
    localStorage.removeItem("token");
    setUser(null);
  };
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
                {!user ? (
                  <button className="btn btn-primary">
                    <Link className="nav-button" to="/login">
                      Login
                    </Link>
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={logoutHandler}>
                    <p className="nav-button">Logout</p>
                  </button>
                )}
              </li>
              <li className="navbar-item">
                <div className="badge">
                  <Link to="/cart">
                    <img className="navbar-icon" src={CartIcon} alt="cart" />
                  </Link>
                  {cartLength > 0 && (
                    <span className="badge-count badge-quad">{cartLength}</span>
                  )}
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
                  {wishlistLength > 0 && (
                    <span className="badge-count badge-quad">
                      {wishlistLength}
                    </span>
                  )}
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
