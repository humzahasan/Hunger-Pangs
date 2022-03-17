import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, Wishlist } from "./pages/indexPages";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
