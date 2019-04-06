import React from "react";
import Helmet from "react-helmet";

import "./index.css";

// Enable experimental react hooks: https://github.com/gatsbyjs/gatsby/issues/9489#issuecomment-434868882
import { setConfig } from "react-hot-loader";

import { TransitionPortal } from "gatsby-plugin-transition-link";
import config from "../../data/SiteConfig";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../i18next/i18n";

setConfig({ pureSFC: true });

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>

        {children}
        <TransitionPortal style={{ width: `100%` }}>
          <Header />
        </TransitionPortal>

        <Footer config={config} />
      </div>
    );
  }
}
