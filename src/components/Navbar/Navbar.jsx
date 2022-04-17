import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HamburgerMenu from "../../assets/FaSolidBars.svg";
import Logo from "../../assets/logo.png";
import CartIcon from "../../assets/shopping-cart.svg";
import WishlistIcon from "../../assets/heart.svg";
import { useAuth, useCart, useWishlist } from "../../context";

const Navbar = () => {
  const { getToken } = useAuth();
  const { state: wishlistState, clearWishlist } = useWishlist();
  const { state: cartState, clearCart } = useCart();

  let wishlistLength = wishlistState.wishlist.length;
  let cartLength = cartState.cart.length;

  const logoutHandler = () => {
    console.info("User Logged out!");
    localStorage.removeItem("user");
    clearCart();
    clearWishlist();
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
                {getToken() ? (
                  <button className="btn btn-primary" onClick={logoutHandler}>
                    <p className="nav-button">Logout</p>
                  </button>
                ) : (
                  <button className="btn btn-primary">
                    <Link className="nav-button" to="/login">
                      Login
                    </Link>
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
