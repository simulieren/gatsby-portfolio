import React, { Fragment } from "react";
import { graphql } from "gatsby";

import MDXRenderer from "gatsby-mdx/mdx-renderer";
import MdxLink from "../components/MdxLink/index";
import SyntaxHighlighter from "react-syntax-highlighter";
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";

import config from "../../data/SiteConfig";
// import "./post.css";

import { Box } from "rebass";
import { Caps, SectionOverline, P, H1, H2, H3 } from "../components/Typography";
import { Section } from "../components/Grid";
import Helmet from "react-helmet";

const CodeComponent = props => <SyntaxHighlighter {...props} style={xcode} />;

const PostTemplate = (props: any) => {
  const title = props.pageContext.title;
  const mdxBody = props.pageContext.mdx;

  return (
    <>
      <Helmet>
        <title>{`${title} | ${config.siteTitle}`}</title>
      </Helmet>
      <Section p={[3, 4, 5]}>
        <Box width={[1, 1, 3 / 6]} m="auto">
          <H1>{title}</H1>
          <MDXRenderer
            components={{
              h1: H1,
              h2: H2,
              h3: H3,
              p: P,
              a: MdxLink,
              code: CodeComponent
            }}
          >
            {mdxBody}
          </MDXRenderer>
        </Box>
      </Section>
    </>
  );
};

export default PostTemplate;

/* eslint no-undef: "off" */
export const query = graphql`
  query Post($locale: String!, $title: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;
