import React from "react";
import "./Wishlist.css";
import { Card, Navbar } from "../../components/index";
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
const Wishlist = () => {
  const {
    state: { wishlist },
    removeFromWishlist,
  } = useWishlist();
  console.log(wishlist);
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />

      <main className="wishlist-container flex-center-column">
        {wishlist.length > 0 ? (
          <>
            <h1 className="md-title">Your Wishlist</h1>
            <div className="flex-center-row flex-wrap">
              {wishlist.map((item) => (
                <Card
                  key={item.id}
                  dismisable={() => removeFromWishlist(item.id)}
                  cardMediaUrl={item.productUrl}
                  imageOverlay={item.name}
                  moveToCart={() => {
                    removeFromWishlist(item.id);
                    addToCart(item);
                  }}
                  removeFromWishlist={() => {
                    removeFromWishlist(item.id);
                  }}
                  title={item.name}
                  subtitle={item.price}
                />
              ))}
            </div>
          </>
        ) : (
          <h1 className="md-title">
            You haven't added your favourite foods yet!
          </h1>
        )}
      </main>
    </>
  );
};

export { Wishlist };
