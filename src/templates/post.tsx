import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
import UserInfo from '../components/UserInfo/UserInfo';
// import Disqus from "../components/Disqus/Disqus";
import PostTags from '../components/PostTags/PostTags';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import './b16-tomorrow-dark.css';
import './post.css';

import { Box, Text, Flex } from 'rebass';
import { Caps, SectionOverline } from '../components/Typography';
import { Section } from '../components/Grid';
import Intro from '../components/Intro';

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pageContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />

        <Box>
          <Box
            p={4}
            mt={5}
            pt={4}
            css={{ position: 'absolute', zIndex: -1, width: '100vw' }}
          >
            <Box
              css={{
                width: '100%',
                height: '100%',
                overflowX: 'hidden',
                background: post.covercolor ? post.covercolor : '#0000ff22',
                minHeight: post.cover ? 'auto' : '80vh',
              }}
            >
              <img
                style={{ width: '100vw', minWidth: '100vw' }}
                src={post.cover}
                alt=""
              />
            </Box>
          </Box>
          <Intro
            bg={post.color}
            overline={
              <Flex>
                <Caps as="span" fontWeight="bold" color="#00f">
                  {post.category}
                </Caps>
                <PostTags tags={post.tags} />
              </Flex>
            }
            headline={post.title}
          >
            <Section p={[3, 4, 5]}>
              <Box width={[1, 1, 1, 1 / 5]}>
                <SectionOverline>{post.date}</SectionOverline>
              </Box>
              <Box
                width={[1, 1, 4 / 5]}
                className="post-content"
                dangerouslySetInnerHTML={{ __html: postNode.html }}
              />
              <div className="post-meta">
                <SocialLinks postPath={slug} postNode={postNode} />
              </div>
            </Section>
            <UserInfo config={config} />
          </Intro>
        </Box>
        <div>{/* <Disqus postNode={postNode} /> */}</div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        covercolor
        color
        date
        category
        tags
      }
      fields {
        # nextTitle
        # nextSlug
        # prevTitle
        # prevSlug
        slug
        date
      }
    }
  }
`;
