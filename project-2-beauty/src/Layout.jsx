import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="layout">
        <div className="container">
          <a className="layout-brand" href="/">
            <p>Find all your favorite beauty products on our website...</p>
            <img
              className="fr-flag"
              src="/assets/img/france.png"
              alt="France"
            />
            <img
              className="uk-flag"
              src="/assets/img/royaume-uni.png"
              alt="UK"
            />
            <img
              className="cart"
              src="/assets/img/istockphoto-1201806395-1024x1024.png"
              alt="Cart"
            />

            <h1 className="title" href="/">
              {" "}
              Mezali et Moi{" "}
            </h1>
          </a>
        </div>
      </nav>

      <Outlet />

      <div className="footer-background">
        <footer className="footer-container">
          <div>
            <h3>Coordonnées :</h3>
            <p className="adress">
              IronSkydive
              <br />
              33 Rue la Fayette,
              <br />
              75009 Paris,
              <br />
              France
              <br />
              +33 (0) 619 193 088
            </p>
            <h3>Suivez-nous :</h3>
            <ul>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3354330160472316!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sIronhack!5e0!3m2!1sen!2ses!4v1495208746099"
            className="map-frame"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            title="Google Maps"
          ></iframe>
        </footer>
      </div>
    </>
  );
}

export default Layout;