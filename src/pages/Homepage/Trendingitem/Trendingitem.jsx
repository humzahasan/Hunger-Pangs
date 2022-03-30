import React, { useEffect, useState } from "react";
import { useWishlist } from "../../../context/wishlist-context";
import { useCart } from "../../../context/cart-context";

import "./Trendingitem.css";
import { Card } from "../../../components/Card/Card";
import { useProducts } from "../../../context/products-context";

const Trendingitem = () => {
  const [trendingItem, setTrendingItem] = useState();

  const { products } = useProducts();
  useEffect(() => {
    setTrendingItem(products?.filter((item) => item.trending).splice(0, 5));
  }, [products]);

  const { dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();
  console.log(trendingItem);
  return (
    <section className="homepage-trending">
      <h2>Trending Items</h2>
      <div className="trending-item">
        {trendingItem &&
          trendingItem?.map((item) => {
            return (
              <Card
                key={item.id}
                badgeContent="Top Seller"
                title={item.name}
                subtitle={item.price}
                cardMediaUrl={item.productUrl}
                addToCart={() =>
                  cartDispatch({ type: "ADD_TO_CART", payload: item })
                }
                addToWishlist={() =>
                  wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: item })
                }
              />
            );
          })}
      </div>
    </section>
  );
};

export default Trendingitem;
