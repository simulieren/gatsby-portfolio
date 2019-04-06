import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import get from "lodash/get";

import Layout from "../layout";
import SEO from "../components/SEO/SEO";

import SiteConfig from "../../data/SiteConfig";

import { MissionSection } from "../components/sections/MissionSection";
import { TeachingSection } from "../components/sections/TeachingSection";
import { HireSection } from "../components/sections/HireSection";
import { PostSection } from "../components/sections/PostSection";
import { IntroSection } from "../components/sections/IntroSection";
import { PostEdge } from "../components/Post/Post";

class Index extends React.Component {
  render() {
    const postEdges: PostEdge[] = get(
      this,
      "props.data.allMarkdownRemark.edges"
    );
    const imageEdges = get(this, "props.data.allFile.edges");
    const images = imageEdges.map((img: any) =>
      get(img, "node.childImageSharp.fluid")
    );

    return (
      <Layout>
        <Helmet title={SiteConfig.siteTitle} />
        <SEO />

        <IntroSection postEdges={postEdges} />

        <MissionSection />

        <TeachingSection img={images[2]} />

        <HireSection />

        <PostSection type="blog" postEdges={postEdges} overline={"Blog"} />

        <PostSection type="note" postEdges={postEdges} overline={"Notes"} />
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 100
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            category
            type
            title
            tags
            cover
            date
            link
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
