import React from "react";

import "./css/shop.css";
import "./css/style.css";

export default function App() {
  return (
    <React.Fragment>
      {/* 404 page */}
      <section class="about-inner py-lg-4 py-md-3 py-sm-3 py-3">
         <div class="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
            <div class="page-not-agile text-center">
               <h4>404</h4>
               <div class="sub-text-page">
                  <p>sorry but the page that you requested doesn't exist</p>
               </div>
               <div class="icons-social pt-lg-4 pt-md-3 pt-3">
                  <ul>
                     <li><a href="#"><span class="fab fa-facebook-f"></span></a></li>
                     <li><a href="#"><span class="fas fa-envelope"></span></a></li>
                     <li><a href="#"><span class="fas fa-rss"></span></a></li>
                     <li><a href="#"><span class="fab fa-vk"></span></a></li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
      {/* //404 page */}
    </React.Fragment>
  );
}