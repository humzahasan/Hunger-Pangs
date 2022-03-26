import React from "react";
import "./Card.css";
import CloseBtn from "../../assets/close.svg";
const Card = ({
  orientation = "vertical",
  size = "",
  title,
  subtitle,
  cardMediaUrl,
  cardMediaHeight = "12rem",
  badgeIconUrl,
  badgeContent,
  content,
  addToWishlistHandler,
  addToCartHandler,
  moveToCartHandler,
  moveToWishlistHandler,
  removefromWishlistHandler,
  dismisable,
  imageOverlay,
}) => {
  return (
    <div
      className={
        orientation === "vertical"
          ? "card"
          : size === "lg"
          ? "card card-horizontal-lg"
          : "card card-horizontal"
      }
    >
      {dismisable && (
        <div className="card-dismisable">
          <img src={CloseBtn} alt="close-button" />
        </div>
      )}
      {(badgeIconUrl || badgeContent) && (
        <div className="card-badge">
          {badgeIconUrl && (
            <p className="card-badge-icon">
              <img
                className="wishlist-icon"
                src={badgeIconUrl}
                alt="wishlist"
              />
            </p>
          )}
          {badgeContent && (
            <div className="card-badge">
              <p className="card-badge-content">{badgeContent}</p>
            </div>
          )}
        </div>
      )}
      {cardMediaUrl && (
        <div className="card-media">
          <img
            src={cardMediaUrl}
            alt="food"
            className="card-img"
            style={{ height: cardMediaHeight }}
          />
          {imageOverlay && (
            <p className="card-img-overlay overlay-hover">{imageOverlay}</p>
          )}
        </div>
      )}
      {(title || subtitle || content) && (
        <div className="card-text">
          <p className="card-title">{title}</p>
          <p className="card-subtitle">{subtitle}</p>
          <p className="card-content">{content}</p>
        </div>
      )}
      {(addToCartHandler ||
        moveToWishlistHandler ||
        moveToCartHandler ||
        addToWishlistHandler) && (
        <div className="card-action-column">
          {addToCartHandler && (
            <button onClick={addToCartHandler} className="btn btn-primary">
              Add to cart
            </button>
          )}
          {addToWishlistHandler && (
            <button className="btn btn-outline btn-primary">
              <p onClick={addToWishlistHandler}> Add to wishlist</p>
            </button>
          )}
          {moveToWishlistHandler && (
            <button className="btn btn-outline btn-primary">
              <p onClick={moveToWishlistHandler}> Move to wishlist</p>
            </button>
          )}
          {moveToCartHandler && (
            <button className="btn btn-primary">
              <p onClick={moveToCartHandler}> Move to Cart</p>
            </button>
          )}
          {removefromWishlistHandler && (
            <button className="btn btn-secondary">
              <p onClick={removefromWishlistHandler}> Remove from Wishlist</p>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export { Card };
