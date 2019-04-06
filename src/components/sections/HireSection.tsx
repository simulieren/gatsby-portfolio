import React from 'react';
import { Box, Heading, Text } from 'rebass';

import { Section } from '../Grid';
import { SectionOverline } from '../Typography';

export const HireSection = (props: any) => {
  return (
    <Section
      py={[4, 5]}
      bg="rgba(255,255,255,0.9)"
      css={{ position: `relative` }}
    >
      <Box width={[1, 1 / 5]}>
        <SectionOverline>Hire me</SectionOverline>
      </Box>
      <Box width={[1, 4 / 5, 2 / 5]}>
        <Heading as="h4" fontSize={[5, 6]} fontFamily="Spectral" mt={0} mb={4}>
          So kann ich helfen
        </Heading>
        <Heading
          as="h4"
          fontSize={[3]}
          fontFamily="Apercu"
          fontWeight="400"
          mt={0}
          mb={[4, 5]}
        >
          <Text
            as="span"
            mr={3}
            fontSize={[6, 7]}
            fontFamily="Spectral"
            fontWeight="900"
            lineHeight={1}
            color="#00f"
            css={{ fontStyle: `italic`, float: `left` }}
          >
            1.
          </Text>
          {` `}
          Ich plane, konzipiere, gestalte und realisiere ihr digitales Vorhaben.
        </Heading>
        <Heading
          as="h4"
          fontSize={[3]}
          fontFamily="Apercu"
          fontWeight="400"
          mt={0}
          mb={[4, 5]}
        >
          <Text
            as="span"
            mr={3}
            fontSize={[6, 7]}
            fontFamily="Spectral"
            fontWeight="900"
            lineHeight={1}
            color="#00f"
            css={{ fontStyle: `italic`, float: `left` }}
          >
            2.
          </Text>
          {` `}
          Ich unterstütze ihr Team mit meinen Kompetenzen bei ihrem Projekt.
        </Heading>
        <Heading
          as="h4"
          fontSize={[3]}
          fontFamily="Apercu"
          fontWeight="400"
          mt={0}
          mb={[4, 5]}
        >
          <Text
            as="span"
            mr={3}
            fontSize={[6, 7]}
            fontFamily="Spectral"
            fontWeight="900"
            lineHeight={1}
            color="#00f"
            css={{ fontStyle: `italic`, float: `left` }}
          >
            3.
          </Text>
          {` `}
          Ich gebe ihrem Team einen Workshop um euch auf das nächste Level zu
          bringen.
        </Heading>
        <Heading
          as="h4"
          fontSize={[3]}
          fontFamily="Apercu"
          fontWeight="400"
          mt={0}
          mb={[4, 5]}
        >
          <Text
            as="span"
            mr={3}
            fontSize={[6, 7]}
            fontFamily="Spectral"
            fontWeight="900"
            lineHeight={1}
            color="#00f"
            css={{ fontStyle: `italic`, float: `left` }}
          >
            4.
          </Text>
          {` `}
          Ich spreche bei ihrem Event über aktuelle Themem im Bereich Design und
          Development.
        </Heading>
      </Box>
    </Section>
  );
};
