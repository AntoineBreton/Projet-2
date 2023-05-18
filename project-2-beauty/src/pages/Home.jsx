import React from "react";
import { Link } from "react-router-dom";

// Fonction permettant d'être renvoyé vers la page relative à chaque catégorie de produit (Face, Eyes, Nails, Lips, All products), en cliquant sur le bouton à lintérieur duquel un path de destination est Linké

function Home() {
  return (
    <>
      <nav className="container">
        <div className="container1">
          <div className="button-face">
            <Link to="/face-products">
              <h2>FACE</h2>
            </Link>
          </div>
          <div className="button-eyes">
            <Link to="/eyes-products">
              <h2>EYES</h2>
            </Link>
          </div>
        </div>

        <div className="container2">
          <div className="button-lips">
            <Link to="/lips-products">
              <h2>LIPS</h2>
            </Link>
          </div>

          <div className="button-nails">
            <Link to="/nails-products">
              <h2>NAILS</h2>
            </Link>
          </div>
        </div>
        <div className="container3">
          <div className="button-all-products">
            <Link to="/all-products">
              <h2>See All Products</h2>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Home;
