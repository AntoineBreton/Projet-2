import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Mezali et Moi</h1>
      <nav className="container">
        <ul id="homepageList" style={{ listStyle: `none` }}>
          <li>
            <Link className="sections" to="/face-products">
              <h2>FACE</h2>
            </Link>
          </li>

          <li>
            <Link className="sections" to="/EyesProducts">
              <h2>EYES</h2>
            </Link>
          </li>

          <li>
            <Link className="sections" to="/lips-products">
              <h2>LIPS</h2>
            </Link>
          </li>

          <li>
            <Link className="sections" to="/nails-products">
              <h2>NAILS</h2>
            </Link>
          </li>
          <li>
            <Link className="sections" to="/all-products">
              <h2>See All Products</h2>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Home;
