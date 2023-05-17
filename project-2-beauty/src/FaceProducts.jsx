import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchProduct from "./SearchProduct";
import SearchCategoryPrice from "./SearchCategoryPrice";

function FaceProducts({ handleAddToCart }) {
  const [faceProducts, setFaceProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const dialog = useRef();

  useEffect(() => {
    axios.get("/api/products.json?brand=maybelline").then((response) => {
      const filteredProducts = response.data.filter(
        (product) =>
          product.product_type === "foundation" ||
          product.product_type === "powder" ||
          product.product_type === "blush" ||
          product.product_type === "bronzer"
      );
      setFaceProducts(filteredProducts);
    });
  }, []);

  useEffect(() => {
    filterProducts();
  }, [search, category, priceRange]);

  const filterProducts = () => {
    let filtered = faceProducts;

    if (category) {
      filtered = filtered.filter(
        (product) =>
          product.product_type.toLowerCase() === category.toLowerCase() ||
          (category.toLowerCase() === "blush" &&
            product.product_type.toLowerCase() === "blusher") ||
          (category.toLowerCase() === "foundation" &&
            product.product_type.toLowerCase() === "foundation") ||
          (category.toLowerCase() === "powder" &&
            product.product_type.toLowerCase() === "powder")
      );
    }

    if (priceRange) {
      switch (priceRange) {
        case "category-1":
          filtered = filtered.filter(
            (product) => product.price >= 0 && product.price <= 10
          );
          break;
        case "category-2":
          filtered = filtered.filter(
            (product) => product.price > 10 && product.price <= 20
          );
          break;
        case "category-3":
          filtered = filtered.filter((product) => product.price > 20);
          break;
        default:
          break;
      }
    }

    return filtered;
  };

  const handleAdvancedSearch = (selectedCategory, selectedPriceRange) => {
    setCategory(selectedCategory);
    setPriceRange(selectedPriceRange);
  };

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

      <h2>Face Products</h2>
      <SearchProduct search={search} setSearch={setSearch} />
      <SearchCategoryPrice
        options={["blush", "bronzer", "foundation", "powder"]}
        setCategory={setCategory}
        setPriceRange={setPriceRange}
      />
      <div className="main-container">
        {filterProducts()
          .filter((faceProduct) =>
            faceProduct.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
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

export default FaceProducts;
