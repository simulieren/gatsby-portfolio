import React from "react";
import { Box, Heading } from "rebass";
import Img from "gatsby-image";
import { useTranslation } from "react-i18next";

import { Section } from "../Grid";
import {
  SectionOverline,
  P,
  StyledButton,
  SectionHeading
} from "../Typography";
import { Image } from "../Image/Image";

export const TeachingSection = (props: any) => {
  const { t, i18n } = useTranslation();

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
          {t("teaching.overline")}
        </SectionOverline>
        <SectionHeading>{t("teaching.headline")}</SectionHeading>
        <P>{t("teaching.paragraph")}</P>

        <StyledButton inverted size="10rem">
          {t("button.read")}
        </StyledButton>
      </Box>

      <Image
        alt="Image with a students notebook"
        filename="desk.jpg"
        style={{
          minHeight: `100%`,
          width: `100%`,
          position: `absolute`,
          right: 0,
          opacity: `0.75`,
          mixBlendMode: `multiply`
        }}
      />
      {/* <Img
        style={{
          minHeight: `100%`,
          width: `100%`,
          position: `absolute`,
          right: 0,
          opacity: `0.75`,
          mixBlendMode: `multiply`
        }}
        fluid={props.img}
      /> */}
    </Section>
  );
};
