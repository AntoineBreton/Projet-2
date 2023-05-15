import React, { useState } from "react";

import "./App.css";
import Layout from "./Layout";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./AllProducts";
import FaceProducts from "./FaceProducts";
import EyesProducts from "./EyesProducts";
import LipsProducts from "./LipsProducts";
import NailsProducts from "./NailsProducts";
import ProductsDetails from "./ProductsDetails";
import CartPage from "./CartPage";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState(allProducts);

  function handleAddToCart(product) {
    setAllProducts([...allProducts, product]);
  }

  function handleDelete(name) {
    const updatedAllProducts = allProducts.filter(
      (element) => element.name !== name
    );
    const updatedFilteredProducts = filteredProducts.filter(
      (element) => element.name !== name
    );
    setAllProducts(updatedAllProducts);
    setfilteredProducts(updatedFilteredProducts);
  }

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/all-products"
            element={<AllProducts handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/face-products"
            element={<FaceProducts handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/eyes-products/"
            element={<EyesProducts handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/lips-products"
            element={<LipsProducts handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/nails-products"
            element={<NailsProducts handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductsDetails handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage allProducts={allProducts} handleDelete={handleDelete} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
