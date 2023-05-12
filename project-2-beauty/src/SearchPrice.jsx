import React from "react";

function SearchPrice() {
  return (
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
  );
}

export default SearchPrice;
