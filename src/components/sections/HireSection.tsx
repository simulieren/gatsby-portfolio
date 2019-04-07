import React from "react";
import { Box, Heading, Text } from "rebass";

import { Section } from "../Grid";
import { SectionOverline } from "../Typography";
import { useTranslation } from "react-i18next";

export const HireSection = (props: any) => {
  const { t, i18n } = useTranslation();

  return (
    <Section
      py={[4, 5]}
      bg="rgba(255,255,255,0.9)"
      css={{ position: `relative` }}
    >
      <Box width={[1, 1 / 5]}>
        <SectionOverline>{t("hire.overline")}</SectionOverline>
      </Box>
      <Box width={[1, 4 / 5, 2 / 5]}>
        <Heading as="h4" fontSize={[5, 6]} fontFamily="Spectral" mt={0} mb={4}>
          {t("hire.headline")}
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
          {t("hire.step1")}
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
          {t("hire.step2")}
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
          {t("hire.step3")}
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
          {t("hire.step4")}
        </Heading>
      </Box>
    </Section>
  );
};
