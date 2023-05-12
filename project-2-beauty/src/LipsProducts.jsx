import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchProduct from "./SearchProduct";

function LipsProducts() {
  const [lipsProducts, setLipsProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((response) => {
        const filteredProducts = response.data.filter(
          (product) =>
            product.product_type === "lip_liner" ||
            product.product_type === "lipstick"
        );
        setLipsProducts(filteredProducts);
      });
  }, []);

  if (!lipsProducts.length) return <div>List of lip products loading...</div>;

  return (
    <>
      <SearchProduct search={search} setSearch={setSearch} />
      <h1>Lips Products</h1>
      {lipsProducts
        .filter((lipsProducts) =>
          lipsProducts.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <div className="products-list">
                <img src={product.image_link} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Category: {product.product_type}</p>
                <p>Price: {product.price} $</p>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}

export default LipsProducts;
