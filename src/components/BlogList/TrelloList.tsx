import React, { Fragment } from "react";
import { Box, Flex } from "rebass";

import { Section } from "../Grid";
import {
  SectionOverline,
  StyledLinkHeading,
  P,
  SectionHeading
} from "../Typography";

import { StaticQuery, graphql, Link } from "gatsby";
import { slugify } from "../../util/gatsby-node-helpers.js";

const TrelloList = (props: any) => {
  let lastMonth = undefined;
  let lastYear = undefined;

  return (
    <Section py={[3, 4, 5]}>
      <Box width={[1, 1 / 5]}>
        <SectionOverline>Blog</SectionOverline>
      </Box>
      <Box width={[1, 4 / 5, 3 / 5]}>
        <SectionHeading mb="4">Blog</SectionHeading>
        <StaticQuery
          query={graphql`
            query {
              allTrelloCard {
                edges {
                  node {
                    childMdx {
                      id
                      frontmatter {
                        title
                        date_posted
                        locale
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            const trelloPostList = data.allTrelloCard.edges;

            return trelloPostList.map((post: any) => {
              const {
                title,
                locale,
                date_posted
              } = post.node.childMdx.frontmatter;

              let month = new Date(date_posted).getMonth();
              let year = new Date(date_posted).getFullYear();

              const yearString = new Date(date_posted).toLocaleString(
                undefined,
                {
                  year: "numeric"
                }
              );

              const monthString = new Date(date_posted).toLocaleString(
                undefined,
                {
                  month: "long"
                }
              );

              const dayString = new Date(date_posted).toLocaleString(
                undefined,
                {
                  month: "long",
                  day: "numeric"
                }
              );

              if (year !== lastYear) {
                lastYear = new Date(date_posted).getYear();

                return (
                  <>
                    <Flex
                      alignItems="baseline"
                      justifyContent="space-between"
                      mb="4"
                    >
                      <P
                        textAlign="right"
                        css={`
                          font-style: italic;
                        `}
                      >
                        {yearString}
                      </P>
                      <P
                        textAlign="right"
                        css={`
                          font-style: italic;
                        `}
                      >
                        {monthString}
                      </P>
                    </Flex>
                    <Flex
                      alignItems="baseline"
                      justifyContent="space-between"
                      mb="4"
                    >
                      <StyledLinkHeading
                        fontSize={props.headlineFontSize || [3, 4]}
                        fontFamily={`Spectral`}
                        mt={0}
                        mb={3}
                        //@ts-ignore
                        as={Link}
                        //@ts-ignore
                        to={`/${locale}/${slugify(title)}`}
                      >
                        {title}
                      </StyledLinkHeading>

                      <P
                        textAlign="right"
                        ml="3"
                        css={`
                          font-style: italic;
                        `}
                      >
                        {dayString}
                      </P>
                    </Flex>
                  </>
                );
              }

              if (month !== lastMonth) {
                lastMonth = new Date(date_posted).getMonth();

                return (
                  <>
                    <P
                      textAlign="right"
                      css={`
                        font-style: italic;
                      `}
                    >
                      {monthString}
                    </P>
                    <Flex alignItems="baseline" justifyContent="space-between">
                      <StyledLinkHeading
                        fontSize={props.headlineFontSize || [3, 4]}
                        fontFamily={`Spectral`}
                        mt={0}
                        mb={3}
                        //@ts-ignore
                        as={Link}
                        //@ts-ignore
                        to={`/${locale}/${slugify(title)}`}
                      >
                        {title}
                      </StyledLinkHeading>

                      <P
                        textAlign="right"
                        ml="3"
                        css={`
                          font-style: italic;
                        `}
                      >
                        {dayString}
                      </P>
                    </Flex>
                  </>
                );
              }

              return (
                <Flex alignItems="baseline" justifyContent="space-between">
                  <StyledLinkHeading
                    fontSize={props.headlineFontSize || [3, 4]}
                    fontFamily={`Spectral`}
                    mt={0}
                    mb={3}
                    //@ts-ignore
                    as={Link}
                    //@ts-ignore
                    to={`/${locale}/${slugify(title)}`}
                  >
                    {title}
                  </StyledLinkHeading>

                  <P
                    textAlign="right"
                    ml="3"
                    css={`
                      font-style: italic;
                    `}
                  >
                    {dayString}
                  </P>
                </Flex>
              );
            });
          }}
        />
        {/* <PostListing mdxEdges={props.mdxEdges} type={props.type} /> */}
      </Box>
    </Section>
  );
};

export default TrelloList;
