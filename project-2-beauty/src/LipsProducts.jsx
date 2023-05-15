import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchProduct from "./SearchProduct";
import SearchCategoryPrice from "./SearchCategoryPrice";

function LipsProducts({ handleAddToCart }) {
  const [lipsProducts, setLipsProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

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

  const filteredProducts = lipsProducts
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
      <h2>Lips Products</h2>
      <SearchProduct search={search} setSearch={setSearch} />
      <SearchCategoryPrice
        options={["lip_liner", "lipstick"]}
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
              onClick={() => handleAddToCart(product)}
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

export default LipsProducts;
