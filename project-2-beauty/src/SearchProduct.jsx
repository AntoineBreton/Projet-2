import React, { useState } from "react";

function SearchProduct(props) {
  function handleSearch(event) {
    const searchValue = event.target.value;
    props.setSearch(searchValue);
  }

  return (
    <>
      <div className="search-product">
        <label>Search your beauty product : </label>
        <br></br>

        <input
          placeholder="Enter your search"
          value={props.search}
          type="search"
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default SearchProduct;
