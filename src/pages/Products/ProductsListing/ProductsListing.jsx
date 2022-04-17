import React from "react";
import { useNavigate } from "react-router-dom";
import FavIcon from "../../../assets/heart.svg";
import { Card } from "../../../components";
import "./ProductsListing.css";
import { useAuth, useCart, useProducts, useWishlist } from "../../../context";
import NotFound from "../../../assets/notfound.svg";
const ProductsListing = () => {
  const {
    state: { finalProductList },
  } = useProducts();

  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="grid-item ">
      <h1>Products - ({finalProductList?.length} items)</h1>
      <div className="product-listing">
        {finalProductList.length > 0 ? (
          finalProductList.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              subtitle={item.price}
              outOfStock={item.outOfStock}
              cardMediaUrl={item.productUrl}
              rating={item.rating}
              tenMinutesDelivery={item.tenMinutesDelivery}
              badgeIconUrl={FavIcon}
              badgeAction={() => {
                user !== null && user._id
                  ? addToWishlist(item)
                  : navigate("/login");
              }}
              addToCart={() =>
                !item.outOfStock && user !== null && user._id
                  ? addToCart(item)
                  : navigate("/login")
              }
              addToWishlist={() =>
                user !== null && user._id
                  ? addToWishlist(item)
                  : navigate("/login")
              }
            />
          ))
        ) : (
          <div className="product-notfound">
            <h2 className="md-title">No Products to show!</h2>
            <img src={NotFound} alt="Not found" style={{ maxWidth: "20rem" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export { ProductsListing };
