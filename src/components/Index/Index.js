import React from "react";
import "./Index.css";

import "./css/style.css";

export default function Index() {
  return (
    <React.Fragment>
      <div class="header-outs" id="home">
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
                  <p><a href="mailto:info@example.com">info@example1.com</a></p>
                </li>
                <li>
                </li>
              </ul>
            </div>
          </div>
          <div class="container-fluid">
            <div class="hedder-up row">
              <div class="col-lg-3 col-md-3 logo-head">
                  <h1><a class="navbar-brand" href="index.html">Toys-Shop</a></h1>
              </div>
              <div class="col-lg-5 col-md-6 search-right">
                <form class="form-inline my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" />
                  <button class="btn" type="submit">Search</button>
                </form>
              </div>
              <div class="col-lg-4 col-md-3 right-side-cart">
                  <div class="cart-icons">
                    <ul>
                        <li>
                          <span class="far fa-heart"></span>
                        </li>
                        <li>
                          <button type="button" data-toggle="modal" data-target="#exampleModal"> <span class="far fa-user"></span></button>
                        </li>
                        <li class="toyscart toyscart2 cart cart box_1">
                          <form action="#" method="post" class="last">
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="display" value="1" />
                              <button class="top_toys_cart" type="submit" name="submit" value="">
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
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav ">
                    <li class="nav-item active">
                      <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                      <a href="about.html" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                      <a href="service.html" class="nav-link">Service</a>
                    </li>
                    <li class="nav-item">
                      <a href="shop.html" class="nav-link">Shop Now</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Pages
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="nav-link" href="icon.html">404 Page</a>
                          <a class="nav-link " href="typography.html">Typography</a>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Product
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="nav-link" href="product.html">Kids Toys</a>
                          <a class="nav-link " href="product.html">Dolls</a>
                          <a class="nav-link " href="product.html">Key Toys</a>
                          <a class="nav-link " href="product.html">Boys Toys</a>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a href="contact.html" class="nav-link">Contact</a>
                    </li>
                </ul>
              </div>
          </nav>
        </div>
        {/* Slideshow 4 */}
        <div class="slider text-center">
          <div class="callbacks_container">
              <ul class="rslides" id="slider4">
                <li>
                    <div class="slider-img one-img">
                      <div class="container">
                          <div class="slider-info ">
                            <h5>Pick The Best Toy For <br />Your Kid</h5>
                            <div class="bottom-info">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolorL orem ipsum dolor sit amet eget dolor</p>
                            </div>
                            <div class="outs_more-buttn">
                                <a href="about.html">Read More</a>
                            </div>
                          </div>
                      </div>
                    </div>
                </li>
                <li>
                    <div class="slider-img two-img">
                      <div class="container">
                          <div class="slider-info ">
                            <h5>Sort Toys And Teddy bears<br />For Kids</h5>
                            <div class="bottom-info">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolorL orem ipsum dolor sit amet eget dolor</p>
                            </div>
                            <div class="outs_more-buttn">
                                <a href="about.html">Read More</a>
                            </div>
                          </div>
                      </div>
                    </div>
                </li>
                <li>
                    <div class="slider-img three-img">
                      <div class="container">
                          <div class="slider-info">
                            <h5>Best Toys And Dolls<br /> For Kids</h5>
                            <div class="bottom-info">
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolorL orem ipsum dolor sit amet eget dolor</p>
                            </div>
                            <div class="outs_more-buttn">
                                <a href="about.html">Read More</a>
                            </div>
                          </div>
                      </div>
                    </div>
                </li>
              </ul>
          </div>
          {/* This is here just to demonstrate the callbacks */}
          {/* <ul class="events">
              <li>Example 4 callback events</li>
              </ul> */}
          <div class="clearfix"></div>
        </div>
      </div>
      {/* //banner */}
      {/* about */}
      <section class="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
          <div class="container py-lg-5 py-md-5 py-sm-4 py-4">
            <h3 class="title text-center mb-lg-5 mb-md-4  mb-sm-4 mb-3">Best Products</h3>
            <div class="row banner-below-w3l">
                <div class="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">
                  <img src="images/a1.jpg" class="img-thumbnail" alt="" />
                  <div class="banner-right-icon">
                      <h4 class="pt-3">Baby Toys</h4>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">
                  <img src="images/a2.jpg" class="img-thumbnail" alt="" />
                  <div class="banner-right-icon">
                      <h4 class="pt-3">Lite-Brite</h4>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 text-center banner-agile-flowers">
                  <img src="images/a3.jpg" class="img-thumbnail" alt="" />
                  <div class="banner-right-icon">
                      <h4 class="pt-3">Key Toys</h4>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 mt-3 text-center banner-agile-flowers">
                  <img src="images/a4.jpg" class="img-thumbnail" alt="" />
                  <div class="banner-right-icon">
                      <h4 class="pt-3">Play Toys</h4>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 mt-3 text-center banner-agile-flowers">
                  <img src="images/a5.jpg" class="img-thumbnail" alt="" />
                  <div class="banner-right-icon">
                      <h4 class="pt-3">Gift Toys</h4>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 mt-3 text-center banner-agile-flowers">
                  <img src="images/a6.jpg" class="img-thumbnail" alt=""/>
                  <div class="banner-right-icon">
                      <h4 class="pt-3">Soft Toys</h4>
                  </div>
                </div>
                <div class="toys-grids-upper">
                  <div class="about-toys-off">
                      <h2>Get Up to <span>70% Off </span>On Selected Toys</h2>
                  </div>
                </div>
            </div>
          </div>
      </section>
      {/* //about */}
      {/* new Arrivals */}
      <section class="blog py-lg-4 py-md-3 py-sm-3 py-3">
          <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
            <h3 class="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">New Arrivals</h3>
            <div class="slid-img">
                <ul id="flexiselDemo1">
                  <li>
                      <div class="agileinfo_port_grid">
                        <img src="images/a1.jpg" alt=" " class="img-fluid" />
                        <div class="banner-right-icon">
                            <h4 class="pt-3">Soft Toys</h4>
                        </div>
                        <div class="outs_more-buttn">
                            <a href="shop.html">Shop Now</a>
                        </div>
                      </div>
                  </li>
                  <li>
                      <div class="agileinfo_port_grid">
                        <img src="images/a2.jpg" alt=" " class="img-fluid" />
                        <div class="banner-right-icon">
                            <h4 class="pt-3">Soft Toys</h4>
                        </div>
                        <div class="outs_more-buttn">
                            <a href="shop.html">Shop Now</a>
                        </div>
                      </div>
                  </li>
                  <li>
                      <div class="agileinfo_port_grid">
                        <img src="images/a3.jpg" alt=" " class="img-fluid" />
                        <div class="banner-right-icon">
                            <h4 class="pt-3">Soft Toys</h4>
                        </div>
                        <div class="outs_more-buttn">
                            <a href="shop.html">Shop Now</a>
                        </div>
                      </div>
                  </li>
                  <li>
                      <div class="agileinfo_port_grid ">
                        <img src="images/a4.jpg" alt=" " class="img-fluid" />
                        <div class="banner-right-icon">
                            <h4 class="pt-3">Soft Toys</h4>
                        </div>
                        <div class="outs_more-buttn">
                            <a href="shop.html">Shop Now</a>
                        </div>
                      </div>
                  </li>
                  <li>
                      <div class="agileinfo_port_grid">
                        <img src="images/a5.jpg" alt=" " class="img-fluid" />
                        <div class="banner-right-icon">
                            <h4 class="pt-3">Soft Toys</h4>
                        </div>
                        <div class="outs_more-buttn">
                            <a href="shop.html">Shop Now</a>
                        </div>
                      </div>
                  </li>
                  <li>
                      <div class="agileinfo_port_grid ">
                        <img src="images/a6.jpg" alt=" " class="img-fluid" />
                        <div class="banner-right-icon">
                            <h4 class="pt-3">Soft Toys</h4>
                        </div>
                        <div class="outs_more-buttn">
                            <a href="shop.html">Shop Now</a>
                        </div>
                      </div>
                  </li>
                </ul>
            </div>
          </div>
      </section>
      {/* //about */}
      {/* Customers Review */}
      <section class="clients py-lg-4 py-md-3 py-sm-3 py-3" id="clients">
          <div class="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 class="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Customers Review</h3>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                      <div class="row">
                        <div class="col-lg-6 clients-w3layouts-row">
                            <div class="least-w3layouts-text-gap">
                              <div class="row">
                                  <div class="col-md-4 col-sm-4 news-img">
                                    <img src="images/t1.jpg" alt="" class="image-fluid" />
                                  </div>
                                  <div class="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Milky Deo 
                                    </h4>
                                    <span class="mt-2">Duis posuere</span>
                                  </div>
                                  <div class="mt-3 news-agile-text">
                                    <img src="images/tt1.jpg" alt="" class="image-fluid" />
                                    <p class="mt-3"><span class="fas fa-quote-left"></span>  velit sagittis vehicula. Duis posuere 
                                        ex in mollis iaculis. Suspendisse tincidunt
                                        velit sagittis vehicula. Duis posuere 
                                        velit sagittis vehicula. Duis posuere <span class="fas fa-quote-right"></span>
                                    </p>
                                  </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-lg-6 clients-w3layouts-row">
                            <div class="least-w3layouts-text-gap">
                              <div class="row">
                                  <div class="col-md-4 col-sm-4 news-img">
                                    <img src="images/t2.jpg" alt="" class="image-fluid" />
                                  </div>
                                  <div class="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Sam Deo 
                                    </h4>
                                    <span class="mt-2">Duis posuere</span>
                                  </div>
                                  <div class="mt-3 news-agile-text">
                                    <img src="images/tt2.jpg" alt="" class="image-fluid" />
                                    <p class="mt-3"><span class="fas fa-quote-left"></span>  velit sagittis vehicula. Duis posuere 
                                        ex in mollis iaculis. Suspendisse tincidunt
                                        velit sagittis vehicula. Duis posuere 
                                        velit sagittis vehicula. Duis posuere <span class="fas fa-quote-right"></span>
                                    </p>
                                  </div>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class="row">
                        <div class="col-lg-6 clients-w3layouts-row">
                            <div class="least-w3layouts-text-gap">
                              <div class="row">
                                  <div class="col-md-4 col-sm-4 news-img">
                                    <img src="images/t1.jpg" alt="" class="image-fluid" />
                                  </div>
                                  <div class="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Milky Deo 
                                    </h4>
                                    <span class="mt-2">Duis posuere</span>
                                  </div>
                                  <div class="mt-3 news-agile-text">
                                    <img src="images/tt1.jpg" alt="" class="image-fluid" />
                                    <p class="mt-3"><span class="fas fa-quote-left"></span>  velit sagittis vehicula. Duis posuere 
                                        ex in mollis iaculis. Suspendisse tincidunt
                                        velit sagittis vehicula. Duis posuere 
                                        velit sagittis vehicula. Duis posuere <span class="fas fa-quote-right"></span>
                                    </p>
                                  </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-lg-6 clients-w3layouts-row">
                            <div class="least-w3layouts-text-gap">
                              <div class="row">
                                  <div class="col-md-4 col-sm-4 news-img">
                                    <img src="images/t3.jpg" alt="" class="image-fluid" />
                                  </div>
                                  <div class="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Sam Deo 
                                    </h4>
                                    <span class="mt-2">Duis posuere</span>
                                  </div>
                                  <div class="mt-3 news-agile-text">
                                    <img src="images/tt1.jpg" alt="" class="image-fluid" />
                                    <p class="mt-3"><span class="fas fa-quote-left"></span>  velit sagittis vehicula. Duis posuere 
                                        ex in mollis iaculis. Suspendisse tincidunt
                                        velit sagittis vehicula. Duis posuere 
                                        velit sagittis vehicula. Duis posuere <span class="fas fa-quote-right"></span>
                                    </p>
                                  </div>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class="row">
                        <div class="col-lg-6 clients-w3layouts-row">
                            <div class="least-w3layouts-text-gap">
                              <div class="row">
                                  <div class="col-md-4 col-sm-4 news-img">
                                    <img src="images/t2.jpg" alt="" class="image-fluid" />
                                  </div>
                                  <div class="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Milky Deo 
                                    </h4>
                                    <span class="mt-2">Duis posuere</span>
                                  </div>
                                  <div class="mt-3 news-agile-text">
                                    <img src="images/tt2.jpg" alt="" class="image-fluid" />
                                    <p class="mt-3"><span class="fas fa-quote-left"></span>  velit sagittis vehicula. Duis posuere 
                                        ex in mollis iaculis. Suspendisse tincidunt
                                        velit sagittis vehicula. Duis posuere 
                                        velit sagittis vehicula. Duis posuere <span class="fas fa-quote-right"></span>
                                    </p>
                                  </div>
                              </div>
                            </div>
                        </div>
                        <div class="col-lg-6 clients-w3layouts-row">
                            <div class="least-w3layouts-text-gap">
                              <div class="row">
                                  <div class="col-md-4 col-sm-4 news-img">
                                    <img src="images/t3.jpg" alt="" class="image-fluid" />
                                  </div>
                                  <div class="col-md-8 col-sm-8 clients-says-w3layouts">
                                    <h4>Sam Deo 
                                    </h4>
                                    <span class="mt-2">Duis posuere</span>
                                  </div>
                                  <div class="mt-3 news-agile-text">
                                    <img src="images/tt1.jpg" alt="" class="image-fluid" />
                                    <p class="mt-3"><span class="fas fa-quote-left"></span> velit sagittis vehicula. Duis posuere 
                                        ex in mollis iaculis. Suspendisse tincidunt
                                        velit sagittis vehicula. Duis posuere 
                                        velit sagittis vehicula. Duis posuere <span class="fas fa-quote-right"></span>
                                    </p>
                                  </div>
                              </div>
                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
          </div>
      </section>
      {/* //Customers Review */}
      {/* Product-view */}
      <section class="product py-lg-4 py-md-3 py-sm-3 py-3">
          <div class="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 class="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Latest Toys</h3>
            <div class=" img-toy-w3l-top">
            </div>
            <div class="mt-lg-4 mt-3 product-info-img">
                <p>velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
                  velit sagittis vehicula. Duis posuere 
                </p>
                <div class="clients_more-buttn">
                  <a href="shop.html">Shop Now</a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 img-toy-w3l-left">
                  <div class="toys-img-one">
                  </div>
                  <div class="mt-lg-4 mt-3 product-info-img">
                      <p>velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                        velit sagittis vehicula. Duis posuere 
                      </p>
                      <div class="clients_more-buttn">
                        <a href="shop.html">Shop Now</a>
                      </div>
                  </div>
                </div>
                <div class="col-lg-6 img-toy-agile-right">
                  <div class="toys-img-one-two">
                  </div>
                  <div class="mt-lg-4 mt-3 product-info-img">
                      <p>velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                        velit sagittis vehicula. Duis posuere 
                      </p>
                      <div class="clients_more-buttn">
                        <a href="shop.html">Shop Now</a>
                      </div>
                  </div>
                  <div class="toys-img-one-three">
                  </div>
                  <div class="mt-lg-4 mt-3 product-info-img">
                      <p>velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                        velit sagittis vehicula. Duis posuere 
                      </p>
                      <div class="clients_more-buttn">
                        <a href="shop.html">Shop Now</a>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      </section>
      {/* //Product-view */}
      {/* /Product-view */}
      <section class="premium py-lg-4 py-md-3 py-sm-3 py-3">
          <div class="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 class="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Premium Toys</h3>
            <div class="row">
                <div class="col-lg-6 agileits-toys-left"></div>
                <div class="col-lg-6 agileits-toys-right">
                  <div class="sub-agile-info-toys">
                      <p>velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                        velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                      </p>
                      <div class="clients_more-buttn">
                        <a href="shop.html" class="mb-0">Shop Now</a>
                      </div>
                  </div>
                </div>
            </div>
            <div class="row mt-lg-4 mt-md-4 mt-3">
                <div class="col-lg-6 agileits-toys-right">
                  <div class="sub-agile-info-toys">
                      <p>velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                        velit sagittis vehicula. Duis posuere 
                        ex in mollis iaculis. Suspendisse tincidunt
                        velit sagittis vehicula. Duis posuere 
                      </p>
                      <div class="clients_more-buttn ">
                        <a href="shop.html" class="mb-0">Shop Now</a>
                      </div>
                  </div>
                </div>
                <div class="col-lg-6 agileits-toys-left"></div>
            </div>
          </div>
      </section>
      {/* Product-about */}
      <section class="about py-lg-4 py-md-3 py-sm-3 py-3">
        <div class="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 class="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">About Toys</h3>
            <div class="about-products-w3layouts">
              <p>velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
                  velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
              </p>
              <p class="my-lg-4 my-md-3 my-3">velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
                  velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
              </p>
              <p>velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
                  velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
              </p>
            </div>
        </div>
      </section>
      {/* //Product-about */}
      {/* subscribe-address */}
      <section class="subscribe">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-6 map-info-right px-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3150859.767904157!2d-96.62081048651531!3d39.536794757966845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1408111832978"> </iframe>
            </div>
            <div class="col-lg-6 col-md-6 address-w3l-right text-center">
                <div class="address-gried ">
                  <span class="far fa-map"></span>
                  <p>25478 Road St.121<br />USA New Hill
                  </p>
                </div>
                <div class="address-gried mt-3">
                  <span class="fas fa-phone-volume"></span>
                  <p> +(000)123 4565<br />+(010)123 4565</p>
                </div>
                <div class=" address-gried mt-3">
                  <span class="far fa-envelope"></span>
                  <p><a href="mailto:info@example.com">info@example1.com</a>
                      <br /><a href="mailto:info@example.com">info@example2.com</a>
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
      {/* //subscribe-address */}
      <section class="sub-below-address py-lg-4 py-md-3 py-sm-3 py-3">
          <div class="container py-lg-5 py-md-5 py-sm-4 py-3">
            <h3 class="title clr text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Get In Touch Us</h3>
            <div class="icons mt-4 text-center">
                <ul>
                  <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                  <li><a href="#"><span class="fas fa-envelope"></span></a></li>
                  <li><a href="#"><span class="fas fa-rss"></span></a></li>
                  <li><a href="#"><span class="fab fa-vk"></span></a></li>
                </ul>
                <p class="my-3">velit sagittis vehicula. Duis posuere 
                  ex in mollis iaculis. Suspendisse tincidunt
                  velit sagittis vehicula. Duis posuere 
                  velit sagittis vehicula. Duis posuere 
                </p>
            </div>
            <div class="email-sub-agile">
                <form action="#" method="post">
                  <div class="form-group sub-info-mail">
                      <input type="email" class="form-control email-sub-agile" placeholder="Email" />
                  </div>
                  <div class="text-center">
                      <button type="submit" class="btn subscrib-btnn">Subscribe</button>
                  </div>
                </form>
            </div>
          </div>
      </section>
      {/* //subscribe */}
      {/* footer */}
      <footer class="py-lg-4 py-md-3 py-sm-3 py-3 text-center">
          <div class="copy-agile-right">
            <p> 
                © 2018 Toys-Shop. All Rights Reserved | Design by <a href="http://www.W3Layouts.com" target="_blank">W3Layouts</a>
            </p>
          </div>
      </footer>
      {/* //footer */}
      {/* Modal 1 */}
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="register-form">
                  <form action="#" method="post">
                    <div class="fields-grid">
                        <div class="styled-input">
                          <input type="text" placeholder="Your Name" name="Your Name" required="" />
                        </div>
                        <div class="styled-input">
                          <input type="email" placeholder="Your Email" name="Your Email" required="" />
                        </div>
                        <div class="styled-input">
                          <input type="password" placeholder="password" name="password" required="" />
                        </div>
                        <button type="submit" class="btn subscrib-btnn">Login</button>
                    </div>
                  </form>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/*  //Modal 1 */}
    </React.Fragment>
  );
}