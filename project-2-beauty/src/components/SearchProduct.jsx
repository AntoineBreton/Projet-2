import React, { useState } from "react";

function SearchProduct(props) {
  function handleSearch(event) {
    const searchValue = event.target.value;
    props.setSearch(searchValue);
  }

  // Création d'une barre de recherche intuitive, qui grâce à la fontion handleSearch intégrée dans le onChange de l'input, permet à l'utilisateur de filtrer sa recherche et trouver plus rapidement un produit
  return (
    <>
      <div className="search-product">
        <label className="search-product-title">
          {" "}
          Search your beauty product :{" "}
        </label>
        <br></br>

        <input
          placeholder="Enter your search..."
          value={props.search}
          type="search"
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default SearchProduct;
