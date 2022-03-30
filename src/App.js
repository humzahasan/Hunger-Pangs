import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Cart, Homepage, Wishlist } from "./pages/index-pages";
import { Products } from "./pages/Products/Products";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
