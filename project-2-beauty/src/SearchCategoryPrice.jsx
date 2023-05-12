import React, { useState } from "react";

function SearchCategoryPrice() {
  const [searchCategory, setSearchCategory] = useState("");
  const [searchPrice, setSearchPrice] = useState("");

  return (
    <form>
      <div className="search-category">
        <label>Category : </label>
        <br></br>
        <select name="category">
          <option value="-1" selected disabled>
            Select a category
          </option>
          <option value="bronzer">Bronzer</option>
          <option value="blush">Blush</option>
          <option value="foundation">Foundation</option>
        </select>
      </div>
      <div className="search-price">
        <label>Price : </label>
        <br></br>
        <select name="price">
          <option value="-1" selected disabled>
            Select a price
          </option>
          <option value="category-1">0$ to 10$</option>
          <option value="category-2">10$ to 20$</option>
          <option value="category-3">+20$</option>
        </select>
      </div>
      <button>Advanced Search</button>
    </form>
  );
}

export default SearchCategoryPrice;
