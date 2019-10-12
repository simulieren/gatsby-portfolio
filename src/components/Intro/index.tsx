import React from 'react';
import { Box, Heading, Text } from 'rebass';
import { Caps, StyledLinkText } from '../Typography';

const Intro = props => (
  <Box
    as="section"
    px={[3, 4, 5]}
    pt={[6, 6, 7]}
    pb={[4, 5]}
    css={`
      min-height: 60vh;
      background: ${props.bg};
      background-size: cover;
      background-position: top center;
      position: relative;
      z-index: 1;
    `}
  >
    <Box px={[0, 4, 5]}>
      <Caps as="div" fontSize={3} mt={0} mb={[4, 5, 5]}>
        {props.overline}
      </Caps>
      <Heading
        color="#00f"
        fontFamily="Spectral"
        width={[1, 4 / 5]}
        as="h1"
        fontSize={[5, 6, 8]}
        mb={[5, 6]}
      >
        {props.headline}
      </Heading>

      {props.link && props.linkText && (
        <Text
          as="a"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          fontFamily="Apercu"
          fontSize={3}
          lineHeight="1.5"
          color="#000"
        >
          <StyledLinkText color="#000">{props.linkText} ➝</StyledLinkText>
        </Text>
      )}
    </Box>

    {props.children}
  </Box>
);

export default Intro;
