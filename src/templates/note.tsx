import React from 'react';
// import Helmet from "react-helmet";
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import MdxLink from '../components/MdxLink/index';
import './b16-tomorrow-dark.css';
import './post.css';

import { Box, Flex } from 'rebass';
import { Caps, SectionOverline } from '../components/Typography';
import { Section } from '../components/Grid';
import Intro from '../components/Intro';

const isHash = str => /^#/.test(str);
const isInternal = to => /^\/(?!\/)/.test(to);

const NoteTemplate = ({ data: { mdx } }: any) => (
  <div className="blogNote">
    <h1>{mdx.frontmatter.title}</h1>
    <MDXRenderer
      components={{
        a: MdxLink,
      }}
    >
      {mdx.code.body}
    </MDXRenderer>
  </div>
);

export default NoteTemplate;

/* eslint no-undef: "off" */
export const query = graphql`
  query Note($title: String!) {
    mdx(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`;
