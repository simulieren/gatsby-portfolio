import React from "react";
import { Box, Heading } from "rebass";
import Img from "gatsby-image";

import { Section } from "../Grid";
import { SectionOverline, P, StyledButton } from "../Typography";

export const TeachingSection = (props: any) => {
  return (
    <Section
      justifyContent="center"
      flexDirection="column"
      py={[4, 5]}
      pt={6}
      css={{ overflow: `hidden`, minHeight: `80vh`, position: `relative` }}
      bg="hsla(240, 100%, 70%, 1)"
    >
      <Box color="#fff" width={[1, 1 / 2]} css={{ zIndex: 1 }}>
        <SectionOverline color="#fff" textAlign="left">
          Teaching
        </SectionOverline>
        <Heading as="h3" fontSize={[5, 6]} fontFamily="Spectral" mt={0}>
          Ich unterrichte beim Digital Career Institute
        </Heading>
        <P>
          Seit dem Dezember 2018 habe ich über 100 Teilnehmer zum Thema
          Webdevelopment unterrichtet. Ich habe zusammen mit anderen Dozenten am
          Curriculum gearbeitet und den Schülern das Programmieren beigebracht.
        </P>
        <P>
          Von HTML, CSS und JavaScript bis zu React.js, Node.js und MongoDB habe
          ich die Schüler zum Fullstack JavaScript Developer ausgebildet.
        </P>

        <StyledButton inverted size="10rem">
          Mehr erfahren
        </StyledButton>
      </Box>

      <Img
        style={{
          minHeight: `100%`,
          width: `100%`,
          position: `absolute`,
          right: 0,
          opacity: `0.75`,
          mixBlendMode: `multiply`
        }}
        fluid={props.img}
      />
    </Section>
  );
};
