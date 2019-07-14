import React from "react";
import { Flex } from "rebass";

export const Section = props => (
  <Flex
    flexWrap="wrap"
    px={[3, 5]}
    bg="white"
    css={`
      position: relative;
      z-index: 1;
    `}
    {...props}
  >
    {props.children}
  </Flex>
);
