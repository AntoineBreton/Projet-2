import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllProducts() {
  const [allproduct, setAllProduct] = useState([]);

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
      <h1>All Products</h1>
      {allproduct.map((products) => (
        <div key={products.id}>
          <Link to={`/all-products/${products.id}`}>
            <div className="allproducts-list">
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
