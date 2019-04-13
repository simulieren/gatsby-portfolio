import React, { Component } from "react";
import { Link } from "gatsby";
import { Box, Text, Heading } from "rebass";
import { useTranslation } from "react-i18next";

import HeaderFader from "../Animations/HeaderSlider";
import { SectionOverline, P, StyledLinkText } from "../Typography";
import { Section } from "../Grid";
import { SocialLinks } from "../Header";

const Footer = props => {
  const { t, i18n } = useTranslation();

  const { config } = props;
  const url = config.siteRss;

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
        {/* <SectionOverline textAlign="center" mr={0} mb={4} color="#fff">
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
          <HeaderFader
            time={4000}
            items={[
              `Warte nicht länger, lass uns einfach reden.`,
              `Morgen ist es zu spät.`,
              `Die Zukunft war früher auch besser.`,
              `Jeder Gedanke in uns ist bestrebt, Wirklichkeit zu werden.`,
              `Vergiss niemals das "Warum".`
            ]}
          />
        </Heading> */}
        <SocialLinks mt="4" color={"#fff"} />
      </Section>
      <Section py={4} bg="#00f">
        <Box width={[1, 1 / 3]}>
          <SectionOverline textAlign="left" color="#fff">
            {t("nav.contact")}
          </SectionOverline>
          <Text fontFamily="Apercu" fontSize={2} color="#fff">
            Simon Halimonov <br />
            Marktstraße 8 <br />
            50968 Köln <br /> <br />
            <a href="mailto:hello@simonhalimonov.de">
              <StyledLinkText inverted>hello@simonhalimonov.de</StyledLinkText>
            </a>
          </Text>
        </Box>
        <Box width={[1, 1 / 3]}>
          <SectionOverline textAlign="left" color="#fff">
            Social Media
          </SectionOverline>
          {/* <div className="notice-container">
            <Link to={url}>
              <button>RSS Abonnieren</button>
            </Link>
          </div> */}
        </Box>
        <Box width={[1, 1 / 3]}>
          <SectionOverline textAlign="left" color="#fff">
            {t("footer.legal")}
          </SectionOverline>
          <Text fontFamily="Apercu" fontSize={2} color="#fff">
            <a href="mailto:hello@simonhalimonov.de">
              <StyledLinkText inverted>{t("footer.imprint")}</StyledLinkText>
            </a>
            {` `}
            <br />
            <a href="mailto:hello@simonhalimonov.de">
              <StyledLinkText inverted>{t("footer.privacy")}</StyledLinkText>
            </a>
          </Text>
        </Box>
      </Section>
    </footer>
  );
};

export default Footer;
