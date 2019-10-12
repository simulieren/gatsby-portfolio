import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import MdxLink from '../components/MdxLink/index';

import NoteList from '../components/NoteList/NoteList';

import { Box, Flex, Heading, Text } from 'rebass';
import { Caps, SectionOverline } from '../components/Typography';
import { Section } from '../components/Grid';
import { LinkIcon } from '../components/Icons';
import PostTags from '../components/PostTags/PostTags';

const NoteTemplate = ({ data: { mdx } }: any) => {
  const slug = mdx.fields.slug;
  const { tags, category, title, link } = mdx.frontmatter;
  const hasLink = link ? true : false;
  const url = () => {
    if (typeof window === `undefined`) return;
    if (!hasLink || link === null) return;
    return new URL(link).hostname;
  };

  return (
    <Box className="blogNote">
      <Helmet title={mdx.frontmatter.title}></Helmet>
      <Section flexDirection="column" alignItems="center" py={[4, 5, 6]}>
        <Flex flexDirection="column">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Heading
              as="h1"
              color="#00f"
              fontFamily="Cardo"
              width={[1, 4 / 5]}
              fontSize={[5, 6, 8]}
              fontWeight="400"
              mb={[4, 5]}
              lineHeight="1.5"
              style={{ fontStyle: `italic` }}
            >
              {title} ⤴
            </Heading>
          </a>
          <Text
            as="div"
            fontSize={1}
            fontFamily="Apercu"
            color="#666"
            fontWeight="300"
          >
            <Caps fontWeight="400">{category}</Caps>
            {` `}
            {tags ? <PostTags tags={tags} /> : ``}
            {` `}
            <a href={link} target="_blank" rel="noopener noreferrer">
              {hasLink ? ` · ` + url() + `⤴ ` : ``}
            </a>
            {slug ? (
              <Link to={`/notes/${slug}`}>
                {` `}
                · <LinkIcon height="12" width="12" />
              </Link>
            ) : (
              ``
            )}
          </Text>
        </Flex>
        <Box maxWidth={700} width={1}>
          <MDXRenderer
            components={{
              a: MdxLink,
            }}
          >
            {mdx.body}
          </MDXRenderer>

          <SectionOverline mt={[4, 5]} mb={[3, 4]} textAlign="left">
            More notes ⤵
          </SectionOverline>
          <NoteList filter={slug} />
        </Box>
      </Section>
    </Box>
  );
};

export default NoteTemplate;

/* eslint no-undef: "off" */
export const query = graphql`
  query Note($title: String!) {
    mdx(frontmatter: { title: { eq: $title } }) {
      fields {
        slug
      }
      frontmatter {
        title
        link
        tags
        category
      }
      body
    }
  }
`;
