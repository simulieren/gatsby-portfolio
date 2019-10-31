import React from 'react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, Text, Heading } from 'rebass';
import { useTranslation } from 'react-i18next';

import { Caps, StyledLinkHeading } from '../Typography';

// @ts-ignore
import PostTags from '../PostTags/PostTags';
import { Post } from '../Post/Post';
import LocalizedLink from '../LocalizedLink';
import { LinkIcon } from '../Icons/index';
import MdxLink from '../MdxLink/index';

interface TextListItemProps extends Post {
  slug?: string;
  body?: string;
  post?: Post;
  headlineFontSize?: number | number[];
}

const TextListItem = (props: TextListItemProps) => {
  const { t, i18n } = useTranslation();
  const post = props.post ? props.post : undefined;
  const hasLink = props.link ? true : false;
  const url = () => {
    if (typeof window === `undefined`) return;
    if (!hasLink || props.link === null) return;
    if (props.link.length === 0) return;
    try {
      return new URL(props.link).hostname;
    } catch (error) {
      return ``;
    }
  };

  return (
    <Box>
      <Text
        as="div"
        fontSize={1}
        fontFamily="Apercu"
        color="#666"
        fontWeight="300"
      >
        <Caps fontWeight="400">{props.category}</Caps>
        {` `}
        {props.tags ? <PostTags tags={props.tags} /> : ``}
        {` `}
        {hasLink && url() !== `` ? ` · ` + url() : ``}
        {props.slug ? (
          <Link to={`/notes/${props.slug}`}>
            {` `}
            · <LinkIcon height="12" width="12" />
          </Link>
        ) : (
          ``
        )}
      </Text>
      <StyledLinkHeading
        as="h4"
        fontSize={props.headlineFontSize || [3, 4]}
        fontFamily={`Spectral`}
        mt={0}
        mb={3}
      >
        {hasLink ? (
          <a target="_blank" href={props.link ? props.link : undefined}>
            {props.title}
          </a>
        ) : (
          <LocalizedLink to={props.path}>{props.title}</LocalizedLink>
        )}
      </StyledLinkHeading>
      {props.body && (
        <Box>
          <MDXRenderer
            components={{
              a: MdxLink,
            }}
          >
            {props.body}
          </MDXRenderer>

          <Box
            my={[3]}
            css={{ borderTop: `1px solid #eee`, height: `1px`, width: `100%` }}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextListItem;
