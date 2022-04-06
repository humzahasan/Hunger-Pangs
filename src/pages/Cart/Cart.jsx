import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Card, Navbar } from "../../components/index";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
const Cart = () => {
  const {
    state: { cart },
    dispatch: cartDispatch,
    removeFromCart,
    changeQuantity,
  } = useCart();

  const { dispatch: wishlistDispatch } = useWishlist();

  const [cartValue, setCartValue] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  const getCartValue = (cart) => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartQuantity = (cart) => {
    return cart.reduce((total, item) => total + Number(item.quantity), 0);
  };

  useEffect(() => {
    setCartValue(getCartValue(cart));
    setCartQuantity(getCartQuantity(cart));
  }, [cart]);

  return (
    <>
      <Navbar />
      <main className="flex-center-column">
        {cart.length > 0 ? (
          <>
            <h1 className="md-title">My Shopping Cart</h1>
            <div className="grid-col-2 grid-col-7by3 cart-container">
              <div className="grid-item">
                {cart.map((item) => {
                  return (
                    <Card
                      orientation="horizontal"
                      size="lg"
                      key={item.id}
                      title={item.name}
                      imageOverlay={item.name}
                      subtitle={item.price}
                      cardMediaUrl={item.productUrl}
                      showQuantity={true}
                      quantity={item.quantity}
                      changeQuantity={(event) =>
                        changeQuantity(item.id, event.target.value)
                      }
                      moveToWishlist={() => {
                        wishlistDispatch({
                          type: "ADD_TO_WISHLIST",
                          payload: item,
                        });
                        cartDispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item.id,
                        });
                      }}
                      removeFromCart={() => removeFromCart(item.id)}
                    />
                  );
                })}
              </div>
              <div className="grid-item">
                {
                  <div className="cart-summary">
                    <p className="sm-title">PRICE DETAILS</p>
                    <hr />
                    <div className="row-flex">
                      <p className="regular-text">
                        Price ({cartQuantity} items)
                      </p>
                      <p className="regular-text">Rs.{cartValue}</p>
                    </div>
                    <div className="row-flex">
                      <p className="regular-text">Discount</p>
                      <p className="regular-text">-Rs.60</p>
                    </div>
                    <div className="row-flex">
                      <p className="regular-text">Delivery Charges</p>
                      <p className="regular-text">Rs.60</p>
                    </div>
                    <hr />
                    <div className="row-flex">
                      <p className="sm-title">TOTAL AMOUNT</p>
                      <p className="sm-title">Rs.{cartValue}</p>
                    </div>
                    <hr />
                    <button className="btn btn-primary">
                      <a href="#btnaction"> PROCEED TO PAYMENT</a>
                    </button>
                  </div>
                }
              </div>
            </div>
          </>
        ) : (
          <h1 className="md-title">
            You haven't added anything to the cart yet
          </h1>
        )}
      </main>
    </>
  );
};

export { Cart };
