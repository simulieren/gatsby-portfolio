import React from "react";
import { Box } from "rebass";

import { Section } from "../Grid";
import { SectionOverline } from "../Typography";
import PostListing from "../PostListing/PostListing";

export const PostSection = (props: any) => {
  return (
    <Section py={[3, 4, 5]}>
      <Box width={[1, 1 / 5]}>
        <SectionOverline>{props.overline}</SectionOverline>
      </Box>
      <Box width={[1, 4 / 5, 3 / 5]}>
        <PostListing postEdges={props.postEdges} type={props.type} />
      </Box>
    </Section>
  );
};
