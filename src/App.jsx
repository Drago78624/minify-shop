import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="products/product" element={<Product />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </HashRouter>
  );
}

export default App;
