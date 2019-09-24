import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import get from 'lodash/get';
// Enable experimental react hooks: https://github.com/gatsbyjs/gatsby/issues/9489#issuecomment-434868882
import { setConfig } from 'react-hot-loader';

// Import Typefaces from node modules
import 'typeface-spectral';
import 'typeface-cardo';
// Import local typeface
import '../fonts/fonts.css';

import config from '../../data/SiteConfig';
import Header from './Header';
import Footer from './Footer';

import SEO from './SEO/SEO';

import SiteConfig from '../../data/SiteConfig';
import '../i18next/i18n';
import Portal from './Portal';
import { PageTransition } from './Animations/PageTransition';
import { AnimationStateContainer } from '../context/animationContext';
import { LocaleContext, LocaleProvider } from '../context/LocaleContext';
import { GlobalStyles } from '../styles/GlobalStyles';

setConfig({ pureSFC: true });

const PortalContainer = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  right: 0;
`;

const Layout = props => {
  const { current, send } = useContext(AnimationStateContainer.Context);

  const { children } = props;
  const locale = get(props, `pageContext.locale`);

  return (
    <div>
      <GlobalStyles />

      <LocaleProvider>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>

        <Helmet title={SiteConfig.siteTitle} />

        <SEO />

        <Header />

        {children}

        <Footer config={config} />
      </LocaleProvider>
    </div>
  );
};

export default Layout;
