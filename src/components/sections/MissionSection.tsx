import React from "react";
import { Box, Heading } from "rebass";
import { Section } from "../Grid";
import { SectionOverline, P } from "../Typography";

export const MissionSection = (props: any) => {
  return (
    <Section py={[3, 4, 5]} pt={6}>
      <Box width={[1, 1 / 5]}>
        <SectionOverline>Mission</SectionOverline>
      </Box>
      <Box width={[1, 4 / 5, 2 / 5]}>
        <Heading as="h3" fontSize={[5, 6]} fontFamily="Spectral" mt={0}>
          Digitaler Fokus
        </Heading>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          ratione veniam nobis, expedita impedit earum, minima, ex quo amet quis
          assumenda nam. Nesciunt officiis sit aperiam suscipit odit nihil
          distinctio.
        </P>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          ratione veniam nobis, expedita impedit earum, minima, ex quo amet quis
          assumenda nam. Nesciunt officiis sit aperiam suscipit odit nihil
          distinctio.
        </P>
      </Box>
    </Section>
  );
};
