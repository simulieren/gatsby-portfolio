import React from "react";
import { Box, Heading } from "rebass";
import { useTranslation } from "react-i18next";
import { Section } from "../Grid";
import { SectionOverline } from "../Typography";
import Intro from "../Intro";
import TextListItem from "../TextListItem";
import PostListing from "../PostListing/PostListing";

export const IntroSection = (props: any) => {
  const { t, i18n } = useTranslation();

  return (
    <Intro
      bg="
            radial-gradient(rgba(255,255,255,0), rgba(255,255,255,1)),
            linear-gradient(rgba(0,0,255,0.1), rgba(0,0,255,0.4))
            "
      overline={t("homepage.overline")}
      headline={t("homepage.headline")}
    >
      <Section px={[3, 4, 5]} py={[3, 4, 5]}>
        <Box width={[1, 1, 1, 1 / 5]}>
          <SectionOverline>{t("nav.work")}</SectionOverline>
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
            {t("references")}
          </Heading>
          <TextListItem category={t("design").toUpperCase()} title="beka.de" />
          <TextListItem
            category={t("design").toUpperCase()}
            title="lekkerland.de"
          />
          <TextListItem category={t("design").toUpperCase()} title="eizo.de" />
          <TextListItem
            category={t("design").toUpperCase()}
            title="covestro.de"
          />
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
            {t("projects")}
          </Heading>
          <TextListItem
            category={`t("design").toUpperCase() + t("development").toUpperCase()`}
            title="Origami Films"
          />
          <TextListItem
            category={`t("design").toUpperCase() + t("development").toUpperCase()`}
            title="StreetstyleCon"
          />
          <TextListItem
            category={`t("design").toUpperCase() + t("development").toUpperCase()`}
            title="MultiKulti Markt"
          />
          <TextListItem
            category={`t("design").toUpperCase() + t("development").toUpperCase()`}
            title="Futur.ist"
          />
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
            {t("article")}
          </Heading>
          <PostListing
            mdxEdges={props.mdxEdges}
            type="blog"
            headlineFontSize={4}
          />
        </Box>
      </Section>
    </Intro>
  );
};
