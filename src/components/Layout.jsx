import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="layout-container">
        <div className="layout-banner">
          <div>
            <Link to="/">
              <img
                className="home-logo"
                src="/assets/img/home-button.png"
              ></img>
            </Link>
          </div>

          <div className="links-to-pages">
            <Link to="/face-products">Face</Link>
            <Link to="/eyes-products">Eyes</Link>
            <Link to="/lips-products">Lips</Link>
            <Link to="/nails-products">Nails</Link>
            <Link to="/all-products">All Products</Link>
          </div>
          <div className="flag">
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

            <Link to="/cart">
              <img
                className="cart-logo"
                src="/assets/img/istockphoto-1201806395-1024x1024.png"
                alt="Cart"
              />
            </Link>
          </div>
        </div>
        <div className="layout-title">
          <Link to="/">
            <h1 className="title" href="/">
              {" "}
              Mezali <span>&</span> Moi{" "}
            </h1>
          </Link>
        </div>
      </nav>

      <Outlet />

      <div className="footer-background">
        <footer className="footer-container">
          <div>
            <h3>Contact Details :</h3>
            <p className="adress">
              MEZALI & MOI
              <br />
              3 rue Maillard,
              <br />
              75011 Paris,
              <br />
              France
              <br />
              +33 (0) 619 193 088
            </p>
            <h3>Follow us :</h3>
            <ul className="social-medias">
              <li>
                <a href="https://twitter.com/?lang=fr">Twitter</a>
              </li>
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/accounts/login/?__coig_restricted=1">
                  Instagram
                </a>
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
