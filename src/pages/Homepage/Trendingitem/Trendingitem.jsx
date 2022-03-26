import React from "react";
import { useWishlist } from "../../../context/wishlist-context";
import { useCart } from "../../../context/cart-context";
import "./Trendingitem.css";
import Pasta from "../../../assets/pasta.jpg";
import Burger from "../../../assets/burger.jpg";
import Pizza from "../../../assets/pizza.png";
import Pancake from "../../../assets/pancake.jpg";
import Salad from "../../../assets/salad.jpg";
import { Card } from "../../../components/Card/Card";

const Trendingitem = () => {
  const trendingItemList = [
    {
      name: "Pizza",
      price: 220,
      productUrl: Pizza,
      id: 1,
    },
    {
      name: "Burger",
      price: 110,
      productUrl: Burger,
      id: 2,
    },
    {
      name: "Pancake",
      price: 150,
      productUrl: Pancake,
      id: 3,
    },
    {
      name: "Pasta",
      price: 290,
      productUrl: Pasta,
      id: 4,
    },
    {
      name: "Salad",
      price: 100,
      productUrl: Salad,
      id: 5,
    },
  ];

  const { dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();

  return (
    <section className="homepage-trending">
      <h2>Trending Items</h2>
      <div className="trending-item">
        {trendingItemList.map((item) => {
          return (
            <Card
              key={item.id}
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
