import React from "react";
import { useWishlist } from "../../context/wishlist-context";
import { Card, Navbar } from "../../components/index-component";
const Wishlist = () => {
  const { state } = useWishlist();
  const { itemInWishList } = state;
  const moveToCart = () => {};

  const { dispatch } = useWishlist();

  return (
    <>
      <Navbar />
      <div className="wishlist">
        <h2>Item in wishlist</h2>
        {itemInWishList.map((item) => (
          <Card
            key={item.name}
            title={item.name}
            cardMediaUrl={item.productUrl}
            subtitle={item.price}
            moveToCartHandler={() => moveToCart()}
            removefromWishlistHandler={() =>
              dispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: item,
              })
            }
          />
        ))}
      </div>
    </>
  );
};

export { Wishlist };
