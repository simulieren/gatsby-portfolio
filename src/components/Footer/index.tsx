import React from "react";
import { Text, Heading, Flex } from "rebass";
import { useTranslation } from "react-i18next";

import TextSlider from "../Animations/TextSlider";
import { SectionOverline, P, StyledLinkText } from "../Typography";
import { Section } from "../Grid";
import { SocialLinks } from "../Header";

const Footer = (props: any) => {
  const { t, i18n } = useTranslation();

  const { config } = props;

  return (
    <footer className="footer">
      <Section
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py={6}
        pb={6}
        bg="#00f"
      >
        <SectionOverline textAlign="center" mr={0} mb={4} color="#fff">
          {t("footer.letsChat")}
        </SectionOverline>
        <Heading
          width={1}
          textAlign="center"
          fontFamily="Spectral"
          fontSize={[4, 5]}
          color="#fff"
          css={{ position: `relative` }}
        >
          <TextSlider
            time={4000}
            items={[
              t("footer.textslider.1"),
              t("footer.textslider.2"),
              t("footer.textslider.3"),
              t("footer.textslider.4"),
              t("footer.textslider.5")
            ]}
          />
        </Heading>
      </Section>
      <Section py={4} bg="#00f">
        <Flex alignItems="center" justifyContent="space-between" width="100%">
          <Text fontFamily="Apercu" fontSize={2} color="#fff">
            <a href="mailto:hello@simonhalimonov.de">
              <StyledLinkText inverted>hello@simonhalimonov.de</StyledLinkText>
            </a>
          </Text>
          <Text fontFamily="Apercu" fontSize={2} color="#fff">
            <a href="mailto:hello@simonhalimonov.de">
              <StyledLinkText inverted>{t("footer.imprint")}</StyledLinkText>
            </a>
            {` - `}
            <a href="mailto:hello@simonhalimonov.de">
              <StyledLinkText inverted>{t("footer.privacy")}</StyledLinkText>
            </a>
          </Text>
          <SocialLinks mt="0" color={"#fff"} />
        </Flex>
      </Section>
    </footer>
  );
};

export default Footer;
