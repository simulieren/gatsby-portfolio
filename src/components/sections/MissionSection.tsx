import React from "react";
import { Box, Heading } from "rebass";
import { Section } from "../Grid";
import { SectionOverline, P } from "../Typography";
import { useTranslation } from "react-i18next";

export const MissionSection = (props: any) => {
  const { t, i18n } = useTranslation();

  return (
    <Section py={[3, 4, 5]} pt={6}>
      <Box width={[1, 1 / 5]}>
        <SectionOverline>{t("mission.overline")}</SectionOverline>
      </Box>
      <Box width={[1, 4 / 5, 2 / 5]}>
        <Heading as="h3" fontSize={[5, 6]} fontFamily="Spectral" mt={0}>
          {t("mission.headline")}
        </Heading>
        <P>{t("mission.paragraph1")}</P>
        <P>{t("mission.paragraph2")}</P>
      </Box>
    </Section>
  );
};
