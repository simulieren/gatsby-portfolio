import React, { useContext } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import "./index.css";

// Enable experimental react hooks: https://github.com/gatsbyjs/gatsby/issues/9489#issuecomment-434868882
import { setConfig } from "react-hot-loader";

import config from "../../data/SiteConfig";
import Header from "../components/Header";
import Footer from "../components/Footer";

import SEO from "../components/SEO/SEO";

import SiteConfig from "../../data/SiteConfig";
import "../i18next/i18n";
import Portal from "../components/Portal";
import { PageTransition } from "../components/Animations/PageTransition";
import { AnimationStateContainer } from "../context/animationContext";

setConfig({ pureSFC: true });

const PortalContainer = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  right: 0;
`;

const MainLayout = (props: any) => {
  const { current, send } = useContext(AnimationStateContainer.Context);

  if (current.value === "enter") send("NEXT");

  const { children } = props;
  return (
    <div>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
      </Helmet>

      <Helmet title={SiteConfig.siteTitle} />

      <SEO />

      <Portal>
        <PortalContainer>
          <PageTransition />
          <Header />
        </PortalContainer>
      </Portal>

      {children}

      <Footer config={config} />
    </div>
  );
};

export default MainLayout;
