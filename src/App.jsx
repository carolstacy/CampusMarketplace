import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import SellProduct from "./pages/SellProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/sell" element={<SellProduct />} />
      <Route path="/sell-product" element={<SellProduct />} />

      {/* Catch all unknown routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;