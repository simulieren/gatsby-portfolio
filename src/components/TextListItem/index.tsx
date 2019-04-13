import React from "react";
import { Box, Text, Heading } from "rebass";
import { useTranslation } from "react-i18next";

import { Caps, StyledLinkHeading } from "../Typography";

// @ts-ignore
import PostTags from "../PostTags/PostTags";
import { Post } from "../Post/Post";
import LocalizedLink from "../LocalizedLink";

interface TextListItemProps extends Post {
  post: Post;
  headlineFontSize?: number | number[];
}

const TextListItem = (props: TextListItemProps) => {
  const { t, i18n } = useTranslation();
  const post = props.post ? props.post : undefined;
  const hasLink = props.link ? true : false;
  const url = () => {
    if (typeof window === "undefined") return;
    if (!hasLink || props.link === null) return;
    return new URL(props.link).hostname;
  };

  return (
    <Box>
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
          <a target="_blank" href={props.link ? props.link : undefined}>
            {props.title}
          </a>
        ) : (
          <LocalizedLink to={props.path}>{props.title}</LocalizedLink>
        )}
      </StyledLinkHeading>
    </Box>
  );
};

export default TextListItem;
