import React from "react";
import { Flex } from "rebass";

export const Section = props => (
  <Flex
    flexWrap="wrap"
    px={[3, 5]}
    bg="white"
    css={{ position: `relative`, zIndex: 1 }}
    {...props}
  >
    {props.children}
  </Flex>
);
