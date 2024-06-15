// React Required
import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";

// Create Import File
import "./index.scss";

import PageScrollTop from "./component/PageScrollTop";

// Dark Home Layout
import CreativePortfolio from "./dark/CreativePortfolio";
import DarkPortfolioLanding from "./dark/PortfolioLanding";

// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import About from "./elements/About";
import Contact from "./elements/Contact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import error404 from "./elements/error404";

// Blocks Layout

import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ContactForm from "./blocks/ContactForm";
import Columns from "./blocks/Columns";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <PageScrollTop>
          <Switch>
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={DarkPortfolioLanding}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/dark-portfolio-landing`}
              component={DarkPortfolioLanding}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/all-projects`}
              component={CreativePortfolio}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/service`}
              component={Service}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/service-details`}
              component={ServiceDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={Contact}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              component={About}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio-details`}
              component={PortfolioDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog`}
              component={Blog}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/blog-details`}
              component={BlogDetails}
            />

            {/* Blocks Elements  */}
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/team`}
              component={Team}
            /> */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/counters`}
              component={Counters}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/testimonial`}
              component={Testimonial}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/portfolio`}
              component={Portfolio}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/video-popup`}
              component={VideoPopup}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/gallery`}
              component={Gallery}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/clint-logo`}
              component={Brand}
            />
            {/* <Route
              exact
              path={`${process.env.PUBLIC_URL}/progressbar`}
              component={ProgressBar}
            /> */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact-form`}
              component={ContactForm}
            />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/columns`}
              component={Columns}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/404`}
              component={error404}
            />
            <Route component={error404} />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
serviceWorker.register();
