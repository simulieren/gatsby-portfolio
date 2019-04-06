import React from 'react';
import { Flex } from 'rebass';

export const Section = props => (
  <Flex
    flexWrap="wrap"
    px={[4, 5, 6]}
    bg="white"
    css={{ position: 'relative', zIndex: 1 }}
    {...props}
  >
    {props.children}
  </Flex>
);
