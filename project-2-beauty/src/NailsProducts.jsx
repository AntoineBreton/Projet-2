import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchProduct from "./SearchProduct";
import SearchCategoryPrice from "./SearchCategoryPrice";

function NailsProducts({ handleAddToCart }) {
  const [nailsProducts, setNailsProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [productTypes, setProductTypes] = useState([]);

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

        const types = response.data
          .map((product) => product.product_type)
          .filter((type, index, self) => self.indexOf(type) === index);
        setProductTypes(types);
      });
  }, []);

  useEffect(() => {
    filterProducts();
  }, [search, category, priceRange]);

  const filterProducts = () => {
    let filtered = nailsProducts;

    if (category) {
      filtered = filtered.filter(
        (product) =>
          product.product_type.toLowerCase() === category.toLowerCase()
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

  return (
    <>
      <h2>Nails Products</h2>
      <SearchProduct search={search} setSearch={setSearch} />
      <SearchCategoryPrice
        options={["nail_polish"]}
        setCategory={setCategory}
        setPriceRange={setPriceRange}
      />
      <div className="main-container">
        {filterProducts()
          .filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
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

export default NailsProducts;
