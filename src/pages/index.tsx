import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { useTranslation } from "react-i18next";

import Layout from "../layout";

import { MissionSection } from "../components/sections/MissionSection";
import { TeachingSection } from "../components/sections/TeachingSection";
import { HireSection } from "../components/sections/HireSection";
import { PostSection } from "../components/sections/PostSection";
import { IntroSection } from "../components/sections/IntroSection";
import ProjectSection from "../components/sections/ProjectSection";

import { changeLanguage } from "../util/changeLanguage";
import { Box } from "rebass";

const Index = (props: any) => {
  const { t, i18n } = useTranslation();

  const locale: string | undefined = get(props, "pageContext.locale");
  if (locale && locale !== i18n.language) changeLanguage(locale, i18n);

  const allMdxEdges = get(props, "data.allMdx.edges");

  const imageEdges = get(props, `data.allFile.edges`);
  const images = imageEdges.map((img: any) =>
    get(img, `node.childImageSharp.fluid`)
  );

  return (
    <Layout>
      <IntroSection mdxEdges={allMdxEdges} />

      <ProjectSection />

      <MissionSection />

      <TeachingSection />

      <HireSection />
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
    allFile(filter: { extension: { regex: "/(jpg)/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
