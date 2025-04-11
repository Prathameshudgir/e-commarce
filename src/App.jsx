import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import OrderOnline from "./Pages/OrderOnline";
import PartnerWithUs from "./Pages/PartnerWithUs";
import More from "./Pages/More";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/ProductPage"; 
import CakeDetailPage from "./Pages/CakeDetailPage";
import CartPage from "./Pages/CartPage";
import FavoritesPage from "./Pages/FavoritesPage";
import CheckoutPage from "./Pages/CheckoutPage";
import UPIDPage from "./Pages/UPIDPage";
// import Product1 from "./Pages/Product1";
const App = () => {
  const [cart, setCart] = useState([]); // 🛒 Cart state
  const [favorites, setFavorites] = useState([]); // ❤️ Favorites state

  // Function to add a cake to cart (automatically when selected)
  const addToCart = (cake) => {
    setCart((prevCart) => [...prevCart, cake]);
  };

  // Function to add/remove favorite cakes
  const toggleFavorite = (cake) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.id === cake.id)
        ? prevFavorites.filter((fav) => fav.id !== cake.id)
        : [...prevFavorites, cake]
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderOnline />} />
        <Route path="/Partner" element={<PartnerWithUs />} />
        <Route path="/more" element={<More />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/CategoryPage" element={<CategoryPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/upid" element={<UPIDPage />} />

        <Route path="/products/:category" element={<ProductPage cart={cart} setCart={setCart} favorites={favorites} setFavorites={setFavorites} />} />
        {/* <Route path="/products/:category" element={<Product1 />} /> */}

        {/* ✅ Pass addToCart and toggleFavorite correctly */}
        <Route path="/:category/:id" element={<CakeDetailPage addToCart={addToCart} toggleFavorite={toggleFavorite} favorites={favorites} />} />
        {/* <Route path="/masala/:id" element={<CakeDetailPage addToCart={addToCart} toggleFavorite={toggleFavorite} favorites={favorites} />} /> */}

        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        {/* <Route path="/:category/:id" element={<CakeDetailPage />} /> */}

        <Route path="/favorites" element={<FavoritesPage favorites={favorites} setFavorites={setFavorites} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
