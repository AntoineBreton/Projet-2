import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchProduct from "./SearchProduct";
import SearchCategoryPrice from "./SearchCategoryPrice";

function LipsProducts({ handleAddToCart }) {
  const [lipsProducts, setLipsProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const dialog = useRef();

  useEffect(() => {
    axios.get("/api/products.json?brand=maybelline").then((response) => {
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
      {/* Création et apparition d'une fenêtre Pop-Up lorsque l'utilisateur clique sur le bouton "Add to cart" de manière à l'avertir que son produit a bien été ajouté à la page panier*/}
      {/* Création d'un bouton permettant d'être redirigé directement à la page panier */}
      {/* Création de deux boutons permettant à l'utilisateur de fermer la fenêtre Pop-up et de poursuivre son parcours client*/}
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

      <h2>Lips Products</h2>
      {/* Création d'une barre de recherche intuitive, par nom du produit (fonction créée dans le component "SearchProduct") */}
      <SearchProduct search={search} setSearch={setSearch} />
      {/* Création de deux barres de recherche à option, par catégorie et prix du produit (fonction créée dans le component "SearchCategoryprice") */}
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
                <p> Category: {product.product_type}</p>
                <br></br>
                <p> Price: ${product.price} </p>
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

export default LipsProducts;
