import React from "react";
import FavIcon from "../../../assets/heart.svg";
import { Card } from "../../../components/index-component";

import {
  useCart,
  useProducts,
  useWishlist,
} from "../../../context/index-context";

const ProductsListing = () => {
  const { products } = useProducts();
  const { dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();
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
                wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: item });
              }}
              addToCart={() =>
                !item.outOfStock &&
                cartDispatch({ type: "ADD_TO_CART", payload: item })
              }
            />
          ))}
      </div>
    </div>
  );
};

export { ProductsListing };
