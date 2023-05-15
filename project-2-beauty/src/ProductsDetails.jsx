import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductsDetails({ handleAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then((response) => {
        setProduct(response.data);
      });
  }, [id]);

  if (!product) return <div>Loading product details...</div>;

  return (
    <div>
      <h2>Product</h2>
      <div className="product-details">
        <img src={product.image_link} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Category: {product.product_type}</p>
        <p>Price: ${product.price} </p>
        <p>Description: {product.description}</p>
        <p>
          Where to shop:{" "}
          <a
            href={product.product_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            ({product.product_link})
          </a>
        </p>
        <button
          className="addtocart-button"
          onClick={() => handleAddToCart(product)}
        >
          {" "}
          Add To Cart{" "}
        </button>
      </div>
    </div>
  );
}

export default ProductsDetails;
