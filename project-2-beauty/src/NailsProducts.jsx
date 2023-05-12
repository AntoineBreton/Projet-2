import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NailsProducts() {
  const [nailsProducts, setNailsProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((response) => {
        const filteredProducts = response.data.filter(
          (product) => product.product_type === "nail_polish"
        );
        setNailsProducts(filteredProducts);
      });
  }, []);

  if (!nailsProducts.length) return <div>List of nail products loading...</div>;

  return (
    <>
      <h1>Nails Products</h1>
      {nailsProducts.map((product) => (
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

export default NailsProducts;
