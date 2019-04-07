import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import get from "lodash/get";
import { useTranslation } from "react-i18next";

import Layout from "../layout";
import SEO from "../components/SEO/SEO";

import SiteConfig from "../../data/SiteConfig";

import { MissionSection } from "../components/sections/MissionSection";
import { TeachingSection } from "../components/sections/TeachingSection";
import { HireSection } from "../components/sections/HireSection";
import { PostSection } from "../components/sections/PostSection";
import { IntroSection } from "../components/sections/IntroSection";

const Index = (props: any) => {
  const { t, i18n } = useTranslation();
  const locale: string | undefined = get(props, "pageContext.locale");
  if (locale && locale !== i18n.language) i18n.changeLanguage(locale);

  const allMdxEdges = get(props, "data.allMdx.edges");

  // const imageEdges = get(props, `data.allFile.edges`);
  // const images = imageEdges.map((img: any) =>
  //   get(img, `node.childImageSharp.fluid`)
  // );

  return (
    <Layout>
      {/* <Helmet title={SiteConfig.siteTitle} /> */}

      <SEO />

      <IntroSection mdxEdges={allMdxEdges} />

      <MissionSection />

      {/* <TeachingSection img={images[2]} /> */}

      <HireSection />

      <PostSection type="blog" mdxEdges={allMdxEdges} overline={`Blog`} />

      <PostSection type="note" mdxEdges={allMdxEdges} overline={`Notes`} />
    </Layout>
  );
};

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query Index($locale: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            category
            tags
            type
            link
          }
          fields {
            locale
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`;
