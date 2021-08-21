import React from "react";
import { loadCSS } from "fg-loadcss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Index.css";

import HeaderBar from "./utils/HeaderBar";
import Slideshow4 from "./utils/Slideshow4";
import Home from "./utils/Home";
import Subscribe from "./utils/Subscribe";
import ShortBanner from "./utils/ShortBanner";

import About from "./About";
import Service from "./Service";
import Shop from "./Shop";
import Icon from "./Icon";
import Typography from "./Typography";
import Product from "./Product";
import Contact from "./Contact";

const routes = [
  {
    path: "/",
    exact: true,
    slideshow: () => <Slideshow4 />,
    main: () => <Home />
  },
  {
    path: "/about",
    slideshow: () => <ShortBanner page="About" />,
    main: () => <About />
  },
  {
    path: "/service",
    slideshow: () => <ShortBanner page="Service" />,
    main: () => <Service />
  },
  {
    path: "/shop",
    slideshow: () => <ShortBanner page="Shop Now" />,
    main: () => <Shop />
  },
  {
    path: "/icon",
    slideshow: () => <ShortBanner page="Icons" />,
    main: () => <Icon />
  },
  {
    path: "/typography",
    slideshow: () => <ShortBanner page="Typography" />,
    main: () => <Typography />
  },
  {
    path: "/product",
    slideshow: () => <ShortBanner page="Products" />,
    main: () => <Product />
  },
  {
    path: "/contact",
    slideshow: () => <ShortBanner page="Contact" />,
    main: () => <Contact />
  }
];

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
      <Router>
        <div class="header-outs" id="home">
          <HeaderBar />
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.slideshow />}
              />
            ))}
          </Switch>
        </div>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
        <Subscribe />
      </Router>
    </React.Fragment>
  );
}
