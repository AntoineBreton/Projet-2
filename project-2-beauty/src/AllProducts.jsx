import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchProduct from "./SearchProduct";

function AllProducts() {
  const [allproduct, setAllProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((response) => {
        setAllProduct(response.data);
      });
  }, []);

  if (!allproduct.length) return <div>list of products on its way...</div>;
  return (
    <>
      <SearchProduct search={search} setSearch={setSearch} />

      <h1>All Products</h1>
      {allproduct
        .filter((allproduct) =>
          allproduct.name.toLowerCase().includes(search.toLowerCase())
        )

        .map((products) => (
          <div key={products.id}>
            <Link to={`/product/${products.id}`}>
              <div className="products-list">
                <img src={products.image_link} alt={products.name} />
                <h2>{products.name}</h2>
                <p>Category : {products.product_type}</p>
                <p>Price : {products.price} $</p>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}

export default AllProducts;
