import React from "react";
import { Link } from "react-router-dom";

import "../css/shop.css";
import "../css/style.css";

export default function ShortBanner(props) {
  return(
    <React.Fragment>
      {/* banner */}
      <div class="inner_page-banner one-img">
      </div>
      {/* //banner */}
      {/* short */}
      <div class="using-border py-3">
         <div class="inner_breadcrumb  ml-4">
            <ul class="short_ls">
               <li>
                  <Link to="/">Home</Link>
                  <span>/ /</span>
               </li>
               <li>{props.page}</li>
            </ul>
         </div>
      </div>
      {/* //short */}
    </React.Fragment>
  ); 
}
