import React, { useEffect, useState } from "react";

import "./Trendingitem.css";
import { Card } from "../../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useProducts, useWishlist } from "../../../context";

const Trendingitem = () => {
  const [trendingItem, setTrendingItem] = useState();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const {
    state: { products },
  } = useProducts();

  useEffect(() => {
    setTrendingItem(products?.filter((item) => item.trending).slice(0, 5));
  }, [products]);

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
                outOfStock={item.outOfStock}
                cardMediaUrl={item.productUrl}
                addToCart={() =>
                  !item.outOfStock && getToken()
                    ? addToCart(item)
                    : navigate("/login")
                }
                addToWishlist={() =>
                  getToken() ? addToWishlist(item) : navigate("/login")
                }
              />
            );
          })}
      </div>
    </section>
  );
};

export default Trendingitem;
