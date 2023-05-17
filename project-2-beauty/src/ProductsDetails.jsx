import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductsDetails({ handleAddToCart }) {
  const dialog = useRef();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${id}.json`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) return <div>Loading product details...</div>;

  return (
    <div>
      <dialog ref={dialog} className="popup">
        <button className="close-button" onClick={() => dialog.current.close()}>
          X
        </button>
        <h3 style={{ fontSize: "2.5rem" }}>Added to Cart !</h3>
        <button className="go-to-cart-button">
          <Link to="/cart">Go to cart !</Link>
        </button>
        <br></br>
        <button
          className="continue-shopping-button"
          onClick={() => dialog.current.close()}
        >
          Continue Shopping...
        </button>
      </dialog>
      <div>
        <h2>Product Details</h2>
        <div className="product-details">
          <img
            src={product.image_link}
            alt={product.name}
            style={{ border: "1px solid white", boxShadow: "0px 0px 50px" }}
          />
          <h2>{product.name}</h2>
          <p>
            <span>Category : </span>
            <span className="details">{product.product_type}</span>
          </p>
          <p>
            Price : <span className="details">${product.price}</span>{" "}
          </p>
          <p style={{ marginLeft: "25px" }}>
            Description : <span className="details">{product.description}</span>
          </p>
          <p>
            Where to shop :{" "}
            <a
              className="where-to-shop"
              href={product.product_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              ({product.product_link})
            </a>
          </p>
        </div>
        <button
          className="addtocart-button-details"
          onClick={() => {
            dialog.current.showModal();
            handleAddToCart(product);
          }}
        >
          {" "}
          Add To Cart{" "}
        </button>
      </div>
    </div>
  );
}

export default ProductsDetails;
