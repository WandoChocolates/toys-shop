import React from "react";
import { Link } from "react-router-dom";

import "../css/style.css";
import "../css/shop.css";

export default function HeaderBar() {
  return (
    <React.Fragment>
      <div class="header-bar">
        <div class="info-top-grid">
          <div class="info-contact-agile">
            <ul>
              <li>
                <span class="fas fa-phone-volume"></span>
                <p>+(000)123 4565 32</p>
              </li>
              <li>
                <span class="fas fa-envelope"></span>
                <p>
                  <a href="mailto:info@example.com">info@example1.com</a>
                </p>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="container-fluid">
          <div class="hedder-up row">
            <div class="col-lg-3 col-md-3 logo-head">
              <h1>
                <a class="navbar-brand" href="index.html">
                  Toys-Shop
                </a>
              </h1>
            </div>
            <div class="col-lg-5 col-md-6 search-right">
              <form class="form-inline my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                />
                <button class="btn" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div class="col-lg-4 col-md-3 right-side-cart">
              <div class="cart-icons">
                <ul>
                  <li>
                    <span class="far fa-heart"></span>
                  </li>
                  <li>
                    <button
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      {" "}
                      <span class="far fa-user"></span>
                    </button>
                  </li>
                  <li class="toyscart toyscart2 cart cart box_1">
                    <form action="#" method="post" class="last">
                      <input type="hidden" name="cmd" value="_cart" />
                      <input type="hidden" name="display" value="1" />
                      <button
                        class="top_toys_cart"
                        type="submit"
                        name="submit"
                        value=""
                      >
                        <span class="fas fa-cart-arrow-down"></span>
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/service" class="nav-link">
                  Service
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/shop" class="nav-link">
                  Shop Now
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="nav-link" to="/icon">
                    404 Page
                  </Link>
                  <Link class="nav-link " to="/typography">
                    Typography
                  </Link>
                </div>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown1"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Product
                </Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="nav-link" to="/product">
                    Kids Toys
                  </Link>
                  <Link class="nav-link " to="/product">
                    Dolls
                  </Link>
                  <Link class="nav-link " to="/product">
                    Key Toys
                  </Link>
                  <Link class="nav-link " to="product">
                    Boys Toys
                  </Link>
                </div>
              </li>
              <li class="nav-item">
                <Link to="/contact" class="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
