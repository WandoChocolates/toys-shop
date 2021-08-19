import React from "react";
import { loadCSS } from "fg-loadcss";
import Icon from "@material-ui/core/Icon";
import "./Index.css";

import "./css/style.css";
import "./css/shop.css";

import HeaderBar from "./utils/HeaderBar";
import Slideshow4 from "./utils/Slideshow4";
import Home from "./utils/Home";
import Subscribe from "./utils/Subscribe";

export default function Index() {
  //Material-ui and Fontawsome
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <React.Fragment>
      <div class="header-outs" id="home">
        <HeaderBar />
        <Slideshow4 />
      </div>
      <Home />
      <Subscribe />
    </React.Fragment>
  );
}
