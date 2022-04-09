import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import {
  CartProvider,
  ProductsProvider,
  UserProvider,
  WishlistProvider,
} from "./context";

import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <WishlistProvider>
          <CartProvider>
            <ProductsProvider>
              <App />
            </ProductsProvider>
          </CartProvider>
        </WishlistProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
