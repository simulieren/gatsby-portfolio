import React from 'react';
import { Box, Heading } from 'rebass';
import { Section } from '../Grid';
import { SectionOverline } from '../Typography';
import Intro from '../Intro';
import TextListItem from '../TextListItem';
import PostListing from '../PostListing/PostListing';

export const IntroSection = (props: any) => {
  return (
    <Intro
      bg="
            radial-gradient(rgba(255,255,255,0), rgba(255,255,255,1)),
            linear-gradient(rgba(0,0,255,0.1), rgba(0,0,255,0.4))
            "
      overline="Digital Product Design & Frontend Development"
      headline="Ich gestalte und entwickle digitale Produkte."
    >
      <Section px={[3, 4, 5]} py={[3, 4, 5]}>
        <Box width={[1, 1, 1, 1 / 5]}>
          <SectionOverline>Arbeit</SectionOverline>
        </Box>

        <Box width={[1, 1 / 2, 1 / 2, 1 / 4]}>
          <Heading
            as="h3"
            fontSize={3}
            fontFamily="Apercu"
            fontWeight="400"
            mt={1}
            color="#00f"
            mb={3}
          >
            Referenzen
          </Heading>
          <TextListItem category="DESIGN" headline="beka.de" />
          <TextListItem category="DESIGN" headline="lekkerland.de" />
          <TextListItem category="DESIGN" headline="eizo.de" />
          <TextListItem category="DESIGN" headline="covestro.de" />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 4]}>
          <Heading
            as="h3"
            fontSize={3}
            fontFamily="Apercu"
            fontWeight="400"
            mt={1}
            color="#00f"
            mb={3}
          >
            Projekte
          </Heading>
          <TextListItem
            category="DESIGN + DEVELOPMENT"
            headline="Origami Films"
          />
          <TextListItem
            category="DESIGN + DEVELOPMENT"
            headline="StreetstyleCon"
          />
          <TextListItem
            category="DESIGN + DEVELOPMENT"
            headline="MultiKulti Markt"
          />
          <TextListItem category="DESIGN + DEVELOPMENT" headline="Futur.ist" />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 4]}>
          <Heading
            as="h3"
            fontSize={3}
            fontFamily="Apercu"
            fontWeight="400"
            mt={1}
            color="#00f"
            mb={3}
          >
            Artikel
          </Heading>
          <PostListing
            postEdges={props.postEdges}
            type="blog"
            headlineFontSize={4}
          />
        </Box>
      </Section>
    </Intro>
  );
};
