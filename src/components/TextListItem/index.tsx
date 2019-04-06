import React from 'react';
import { Box, Text, Heading } from 'rebass';
import { Caps, StyledLinkHeading } from '../Typography';
// @ts-ignore
import { AniLink } from 'gatsby-plugin-transition-link';
import 'intersection-observer';
// @ts-ignore
import withIntersectionObserverProps from '@hocs/with-intersection-observer-props';

// @ts-ignore
import PostTags from '../PostTags/PostTags';

const TextListItem = (props: any) => {
  const post = props.post ? props.post : undefined;
  const hasLink = props.link ? true : false;
  const url = () => {
    if (!hasLink) return;
    return new URL(props.link).hostname;
  };

  return (
    <Box
      ref={props.onRef}
      css={{
        transition: `all .5s ease`,
        opacity: props.isFullVisible ? 1 : 0,
        willChange: `opacity`,
      }}
    >
      <Text as="div" fontSize={1} fontFamily="Apercu">
        <Caps fontWeight={`bold`}>{props.category}</Caps>
        {` `}
        {props.tags ? <PostTags tags={props.tags} /> : ``}
        {` `}
        {hasLink ? ` · ` + url() : ``}
      </Text>
      <StyledLinkHeading
        as="h4"
        fontSize={props.headlineFontSize || [3, 4]}
        fontFamily={`Spectral`}
        mt={0}
        mb={3}
      >
        {hasLink ? (
          <a target="_blank" href={post.link}>
            {props.headline}
          </a>
        ) : (
          <AniLink
            cover
            bg="rebeccapurple"
            direction="up"
            to={post ? post.path : `/`}
          >
            {props.headline}
          </AniLink>
        )}
      </StyledLinkHeading>
    </Box>
  );
};

export default withIntersectionObserverProps({ isFullVisible: 1.0 })(
  TextListItem
);
