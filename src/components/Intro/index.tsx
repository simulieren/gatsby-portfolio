import React from "react";
import { Box, Heading } from "rebass";
import { relative } from "path";
import { Caps } from "../Typography";

import { SpringFadeIn, SpringFadeInUp } from "../Animations/Animations";

const Intro = props => (
  <Box
    as="section"
    px={[3, 4, 5]}
    pt={[6, 6, 7]}
    pb={[4, 5]}
    css={{
      minHeight: `60vh`,
      background: props.bg,
      backgroundSize: `cover`,
      backgroundPosition: `top center`,
      position: `relative`,
      zIndex: 1
    }}
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
    </Box>

    {props.children}
  </Box>
);

export default Intro;
