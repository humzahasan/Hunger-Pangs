import React from "react";
import "./Wishlist.css";
import { Card, Navbar } from "../../components/index";
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
const Wishlist = () => {
  const { state } = useWishlist();
  const { itemInWishList } = state;

  const { dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();

  return (
    <>
      <Navbar />

      <main className="wishlist-container flex-center-column">
        {itemInWishList.length > 0 ? (
          <>
            <h1 className="md-title">Your Wishlist</h1>
            <div className="flex-center-row flex-wrap">
              {itemInWishList.map((item) => (
                <Card
                  key={item.id}
                  dismisable={() =>
                    wishlistDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item,
                    })
                  }
                  cardMediaUrl={item.productUrl}
                  imageOverlay={item.name}
                  moveToCart={() => {
                    cartDispatch({
                      type: "ADD_TO_CART",
                      payload: item,
                    });
                  }}
                  removeFromWishlist={() => {
                    wishlistDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: item,
                    });
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
