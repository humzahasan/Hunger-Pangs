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
  showQuantity,
  quantity,
  changeQuantity,
  addToWishlist,
  addToCart,
  moveToCart,
  moveToWishlist,
  removeFromWishlist,
  removeFromCart,
  dismisable,
  imageOverlay,
  outOfStock,
  badgeAction,
}) => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        <div className="card-dismisable" onClick={dismisable}>
          <img src={CloseBtn} alt="close-button" />
        </div>
      )}
      {(badgeIconUrl || badgeContent) && (
        <div className="card-badge">
          {badgeIconUrl && (
            <p className="card-badge-icon" onClick={badgeAction}>
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
          {outOfStock && (
            <p className="card-img-overlay overlay-always">OUT OF STOCK</p>
          )}
        </div>
      )}
      {(title || subtitle || content) && (
        <div className="card-text">
          <p className="card-title" title={title}>
            {title.length > 20 ? title.substring(0, 19).concat("..") : title}
          </p>
          <p className="card-subtitle">Rs.{subtitle}</p>
          <p className="card-content">{content}</p>
          {showQuantity && (
            <div>
              <label htmlFor="product-quantity">Quantity: </label>
              <select
                name="product-quantity"
                id="product-quantity"
                value={quantity}
                onChange={changeQuantity}
              >
                {count.map((value, index) => {
                  return (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        </div>
      )}

      {(addToCart ||
        moveToWishlist ||
        moveToCart ||
        addToWishlist ||
        removeFromCart ||
        removeFromWishlist ||
        outOfStock) && (
        <div className="card-action-column">
          {addToCart &&
            (outOfStock ? (
              <button
                title="Out Of Stock"
                onClick={addToCart}
                className="btn btn-disabled btn-outline btn-primary"
              >
                Add to cart
              </button>
            ) : (
              <button onClick={addToCart} className="btn btn-primary">
                Add to cart
              </button>
            ))}

          {addToWishlist && (
            <button
              className="btn btn-outline btn-primary"
              onClick={addToWishlist}
            >
              Add to wishlist
            </button>
          )}
          {moveToWishlist && (
            <button
              className="btn btn-outline btn-primary"
              onClick={moveToWishlist}
            >
              Move to wishlist
            </button>
          )}
          {moveToCart && (
            <button className="btn btn-primary" onClick={moveToCart}>
              Move to Cart
            </button>
          )}
          {removeFromWishlist && (
            <button
              className="btn btn-outline btn-primary"
              onClick={removeFromWishlist}
            >
              Remove from Wishlist
            </button>
          )}
          {removeFromCart && (
            <button
              className="btn btn-outline btn-primary"
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export { Card };
