import React from "react";

import "./css/shop.css";
import "./css/style.css";

export default function Service() {
  return (
    <React.Fragment>
      {/* service */}
      <section class="service py-lg-4 py-md-3 py-sm-3 py-3">
         <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
            <h3 class="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">Services</h3>
            <div class="row text-center">
               <div class="col-lg-4 col-md-6 abut-gride">
                  <span class="fas fa-truck"></span>
                  <h5>Shipping</h5>
                  <p class="mt-3"> velit sagittis vehicula. Duis posuere 
                     ex in mollis iaculis. Suspendisse tincidunt
                  </p>
               </div>
               <div class="col-lg-4 col-md-6 abut-gride">
                  <span class="fas fa-phone-volume"></span>  
                  <h5>Support</h5>
                  <p class="mt-3"> velit sagittis vehicula. Duis posuere 
                     ex in mollis iaculis. Suspendisse tincidunt
                  </p>
               </div>
               <div class="col-lg-4 col-md-6 abut-gride">
                  <span class="fas fa-undo"></span>
                  <h5> Return</h5>
                  <p class="mt-3"> velit sagittis vehicula. Duis posuere 
                     ex in mollis iaculis. Suspendisse tincidunt
                  </p>
               </div>
               <div class="col-lg-4 col-md-6 mt-lg-4 mt-3 abut-gride">
                  <span class="fas fa-money-bill-alt"></span>
                  <h5>Online Cash</h5>
                  <p class="mt-3"> velit sagittis vehicula. Duis posuere 
                     ex in mollis iaculis. Suspendisse tincidunt
                  </p>
               </div>
               <div class="col-lg-4 col-md-6 mt-lg-4 mt-3 abut-gride">
                  <span class="fas fa-exchange-alt"></span>
                  <h5>Exchange</h5>
                  <p class="mt-3"> velit sagittis vehicula. Duis posuere 
                     ex in mollis iaculis. Suspendisse tincidunt
                  </p>
               </div>
               <div class="col-lg-4 col-md-6 mt-lg-4 mt-3 abut-gride">
                  <span class="fas fa-thumbs-up"></span>
                  <h5>Quality</h5>
                  <p class="mt-3"> velit sagittis vehicula. Duis posuere 
                     ex in mollis iaculis. Suspendisse tincidunt
                  </p>
               </div>
            </div>
         </div>
      </section>
      {/* //service */}	 
    </React.Fragment>
  );
}