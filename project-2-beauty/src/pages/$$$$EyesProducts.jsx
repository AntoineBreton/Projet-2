import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchProduct from "../components/SearchProduct";
import SearchCategoryPrice from "../components/SearchCategoryPrice";

function EyesProducts({ handleAddToCart }) {
  const [eyesProducts, setEyesProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const dialog = useRef();

  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((response) => {
        const filteredProducts = response.data.filter(
          (product) =>
            product.product_type === "eyeshadow" ||
            product.product_type === "eyeliner" ||
            product.product_type === "mascara"
        );
        setEyesProducts(filteredProducts);
      });
  }, []);

  if (!eyesProducts.length) return <div>List of eye products loading...</div>;

  const filteredProducts = eyesProducts
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => (category ? product.product_type === category : true))
    .filter((product) => {
      if (priceRange === "category-1") {
        return product.price >= 0 && product.price <= 10;
      } else if (priceRange === "category-2") {
        return product.price > 10 && product.price <= 20;
      } else if (priceRange === "category-3") {
        return product.price > 20;
      } else {
        return true;
      }
    });

  return (
    <>
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

      <h2>Eyes Products</h2>
      <SearchProduct search={search} setSearch={setSearch} />
      <SearchCategoryPrice
        options={["eyeshadow", "eyeliner", "mascara"]}
        setCategory={setCategory}
        setPriceRange={setPriceRange}
      />
      <div className="main-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="container-all-products">
            <Link to={`/product/${product.id}`}>
              <div className="products-list">
                <img src={product.image_link} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Category: {product.product_type}</p>
                <p>Price: ${product.price} </p>
              </div>
            </Link>
            <button
              className="addtocart-button"
              onClick={() => {
                dialog.current.showModal();
                handleAddToCart(product);
              }}
            >
              {" "}
              Add To Cart{" "}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default EyesProducts;
