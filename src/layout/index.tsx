import React from "react";
import Helmet from "react-helmet";

import "./index.css";

// Enable experimental react hooks: https://github.com/gatsbyjs/gatsby/issues/9489#issuecomment-434868882
import { setConfig } from "react-hot-loader";

import { TransitionPortal } from "gatsby-plugin-transition-link";
import config from "../../data/SiteConfig";
import Header from "../components/Header";
import Footer from "../components/Footer";

import SEO from "../components/SEO/SEO";

import SiteConfig from "../../data/SiteConfig";
import "../i18next/i18n";

setConfig({ pureSFC: true });

const MainLayout = (props: any) => {
  const { children } = props;
  return (
    <div>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>

      <Helmet title={SiteConfig.siteTitle} />

      <SEO />

      {children}
      <TransitionPortal style={{ width: `100%` }}>
        <Header />
      </TransitionPortal>

      <Footer config={config} />
    </div>
  );
};

export default MainLayout;
