import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchProduct from "../components/SearchProduct";
import SearchCategoryPrice from "../components/SearchCategoryPrice";

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

  if (!faceProducts.length) return <div>List of face products loading...</div>;


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

      <h2>Face Products</h2>
      {/* Création d'une barre de recherche intuitive, par nom du produit (fonction créée dans le component "SearchProduct") */}
      <SearchProduct search={search} setSearch={setSearch} />
      {/* Création de deux barres de recherche à option, par catégorie et prix du produit (fonction créée dans le component "SearchCategoryprice") */}
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
