import React from "react";
import "./Trendingitem.css";
import Pasta from "../../../assets/pasta.jpg";
import Burger from "../../../assets/burger.jpg";
import Pizza from "../../../assets/pizza.png";
import Pancake from "../../../assets/pancake.jpg";
import Salad from "../../../assets/salad.jpg";
import { Card } from "../../../components/Card/Card";
const Trendingitem = () => {
  const trendingItemList = [
    { name: "Pizza", price: 220, productUrl: Pizza },
    { name: "Burger", price: 110, productUrl: Burger },
    { name: "Pancake", price: 150, productUrl: Pancake },
    { name: "Pasta", price: 290, productUrl: Pasta },
    { name: "Salad", price: 100, productUrl: Salad },
  ];

  const addToCart = (item) => {
    console.log("Add to cart", item);
  };

  const addToWishlist = (item) => {
    console.log("Add to wishlist", item);
  };

  return (
    <section className="homepage-trending">
      <h2>Trending Items</h2>
      <div className="trending-item">
        {trendingItemList.map((item) => {
          return (
            <Card
              key={item.name}
              title={item.name}
              subtitle={item.price}
              cardMediaUrl={item.productUrl}
              addToCartHandler={() => addToCart(item)}
              addToWishlistHandler={() => addToWishlist(item)}
            />
          );
        })}
      </div>
    </section>
  );
};

export { Trendingitem };
