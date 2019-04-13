import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import get from "lodash/get";
import debounce from "lodash/debounce";
import { useTranslation } from "react-i18next";

import Layout from "../layout";

import { MissionSection } from "../components/sections/MissionSection";
import { TeachingSection } from "../components/sections/TeachingSection";
import { HireSection } from "../components/sections/HireSection";
import { PostSection } from "../components/sections/PostSection";
import { IntroSection } from "../components/sections/IntroSection";
import ProjectSection from "../components/sections/ProjectSection";

const changeLanguage = debounce(
  (locale, i18n) => i18n.changeLanguage(locale),
  1000,
  { leading: true, trailing: false }
);

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

      <TeachingSection img={images[2]} />

      <HireSection />

      <PostSection
        type="blog"
        mdxEdges={allMdxEdges}
        overline={t("nav.blog")}
      />

      <PostSection
        type="note"
        mdxEdges={allMdxEdges}
        overline={t("nav.notes")}
      />
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
