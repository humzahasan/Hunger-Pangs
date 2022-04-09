import React, { useEffect, useState } from "react";
import { useWishlist } from "../../../context/wishlist-context";
import { useCart } from "../../../context/cart-context";

import "./Trendingitem.css";
import { Card } from "../../../components/Card/Card";
import { useProducts } from "../../../context/products-context";
import { useAuth } from "../../../context";
import { useNavigate } from "react-router-dom";

const Trendingitem = () => {
  const [trendingItem, setTrendingItem] = useState();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { products } = useProducts();
  useEffect(() => {
    const random = Math.floor(Math.random() * products?.length);
    console.log(random);
    setTrendingItem(
      products?.filter((item) => item.trending).slice(random, random + 5)
    );
  }, [products]);

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
                outOfStock={item.outOfStock}
                cardMediaUrl={item.productUrl}
                addToCart={() =>
                  !item.outOfStock &&
                  (user ? addToCart(item) : navigate("/login"))
                }
                addToWishlist={() =>
                  user ? addToWishlist(item) : navigate("/login")
                }
              />
            );
          })}
      </div>
    </section>
  );
};

export default Trendingitem;
