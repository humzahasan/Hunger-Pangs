import React from "react";
import { useNavigate } from "react-router-dom";
import FavIcon from "../../../assets/heart.svg";
import { Card } from "../../../components";

import { useAuth, useCart, useProducts, useWishlist } from "../../../context";

const ProductsListing = () => {
  const { products } = useProducts();
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  console.log(products);
  return (
    <div className="grid-item ">
      <h1>Products</h1>
      <div className="product-listing">
        {products &&
          products.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              subtitle={item.price}
              outOfStock={item.outOfStock}
              cardMediaUrl={item.productUrl}
              badgeIconUrl={FavIcon}
              badgeAction={() => {
                user ? addToWishlist(item) : navigate("/login");
              }}
              addToCart={() =>
                !item.outOfStock &&
                (user ? addToCart(item) : navigate("/login"))
              }
            />
          ))}
      </div>
    </div>
  );
};

export { ProductsListing };
