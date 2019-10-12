import React, { useContext } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Helmet from 'react-helmet';
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
import { LocaleContext, LocaleProvider } from '../context/LocaleContext';
import { GlobalStyles } from '../styles/GlobalStyles';

import {
  SectionOverline,
  P,
  StyledButton,
  SectionHeading,
  BodyText,
  ListItem,
} from '../components/Typography';
import MdxLink from '../components/MdxLink';

setConfig({ pureSFC: true });

const Layout = props => {
  const { children } = props;

  return (
    <div>
      <GlobalStyles />

      <LocaleProvider>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>

        <Helmet titleTemplate={`%s | ${SiteConfig.siteTitle}`} />

        <SEO />

        <Header />

        <MDXProvider
          components={{
            // Map HTML element tag to React component
            // Or define component inline
            p: BodyText,
            a: MdxLink,
            li: ListItem,
          }}
        >
          {children}
        </MDXProvider>

        <Footer config={config} />
      </LocaleProvider>
      {/* <!-- Start of HubSpot Embed Code --> */}
      {/* <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/6545168.js"
      ></script> */}
      {/* <!-- End of HubSpot Embed Code -->Í */}
    </div>
  );
};

export default Layout;
