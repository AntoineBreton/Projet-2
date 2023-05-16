import React, { useState } from "react";

function SearchCategoryPrice(props) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleAdvancedSearch = (event) => {
    event.preventDefault();
    props.setCategory(selectedCategory);
    props.setPriceRange(selectedPrice);
  };

  return (
    <form className="advanced-search" onSubmit={handleAdvancedSearch}>
      <label htmlFor="category"> Category : </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">All</option>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <br></br>
      <label htmlFor="price"> Price : </label>
      <select id="price" value={selectedPrice} onChange={handlePriceChange}>
        <option value="">All</option>
        <option value="category-1">$0 - $10</option>
        <option value="category-2">$10 - $20</option>
        <option value="category-3">$20 and more</option>
      </select>
      <div>
        <button className="advanced-button" type="submit">
          Advanced Search
        </button>
      </div>
    </form>
  );
}

export default SearchCategoryPrice;
