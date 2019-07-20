import React, { useContext, Fragment } from "react";
import Helmet from "react-helmet";
import { Box, Flex, Heading, Text } from "rebass";
import { useTranslation } from "react-i18next";

import config from "../../data/SiteConfig";
import {
  P,
  SectionOverline,
  DotPattern,
  SectionHeading,
  ListItem,
  StyledButton
} from "../components/Typography";

import Intro from "../components/Intro";
import { Section } from "../components/Grid";
import ContactForm from "../components/ContactForm/ContactForm";
import { HireSection } from "../components/sections/HireSection";
import { PortfolioCarousel } from "../components/PortfolioSlider/PortfolioSlider";
import LocalizedLink from "../components/LocalizedLink";
import { Link } from "gatsby";

const HireMePage = (props: any) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet title={`Hire Me | ${config.siteTitle}`} />
      <Intro
        bg="
            radial-gradient(rgba(255,255,255,0), rgba(255,255,255,1)),
            linear-gradient(rgba(0,0,255,0.1), rgba(0,0,255,0.4))
            "
        overline={t("hire-me.overline")}
        headline={t("hire-me.headline")}
        link={"cv"}
        linkText={t("hire-me.cv")}
      />

      <Section py={[3, 4, 5]}>
        <Box width={[1, 1 / 5]}>
          <SectionOverline>01</SectionOverline>
        </Box>
        <Box width={[1, 4 / 5, 3 / 5]}>
          <SectionHeading color="#000">
            {t("hire-me.section.1.headline")}
          </SectionHeading>
          <P>{t("hire-me.section.1.text.1")}</P>
          <P>{t("hire-me.section.1.text.2")}</P>

          <Link to="/cv">
            <StyledButton>{t("hire-me.cv")}</StyledButton>
          </Link>
        </Box>
      </Section>

      <PortfolioCarousel
        images={[
          "mk_01",
          "mk_02",
          "mk_03",
          "mk_04",
          "of_01",
          "of_02",
          "of_03",
          "sc_01",
          "sc_02",
          "sc_03",
          "bk_01",
          "bk_02",
          "bk_03",
          "wp_01",
          "wp_02",
          "wp_03",
          "af_01",
          "af_02",
          "af_03"
        ]}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title={t("hire-me.work")}
        background="rgba(223, 223, 255, .5)"
      />

      <Section py={[3, 4, 5]}>
        <Box width={[1, 1 / 5]}>
          <SectionOverline>{t("skills")}</SectionOverline>
        </Box>
        <Box width={[1, 2 / 5]}>
          <SectionHeading color="#000" fontSize={[4, 5]} mb="3">
            Design
          </SectionHeading>
          <ListItem as="li">Digital Product Design</ListItem>
          <ListItem as="li">Responsive Webdesign</ListItem>
          <ListItem as="li">User Experience Design</ListItem>
          <ListItem as="li">User Interface Design</ListItem>
          <ListItem as="li">Interaction Design</ListItem>
          <ListItem as="li">Wireframing</ListItem>
          <ListItem as="li">Design System</ListItem>
          <ListItem as="li">Design Prototyping</ListItem>
          <ListItem as="li">Design Styleguides</ListItem>
          <ListItem as="li">Newsletter Design</ListItem>
        </Box>
        <Box width={[1, 2 / 5]}>
          <SectionHeading color="#000" fontSize={[4, 5]} mb="3">
            Development
          </SectionHeading>
          <ListItem as="li">Frontend Development</ListItem>
          <ListItem as="li">React Development</ListItem>
          <ListItem as="li">GatsbyJS</ListItem>
          <ListItem as="li">NodeJS Development</ListItem>
          <ListItem as="li">Performance Optimization</ListItem>
          <ListItem as="li">Mobile Optimization</ListItem>
          <ListItem as="li">User Interface Animation</ListItem>
          <ListItem as="li">Technical Prototyping</ListItem>
          <ListItem as="li">Living Styleguide</ListItem>
          <ListItem as="li">Responsive Newsletter Development</ListItem>
        </Box>
      </Section>

      <HireSection />

      <Section py={[3, 4, 5]}>
        <Box width={[1, 1 / 5]}>
          <SectionOverline>{t("hire-me.contact")}</SectionOverline>
        </Box>
        <Box width={[1, 3 / 5]}>
          <SectionHeading color="#000" fontSize={[4, 5, 6]} mb="3">
            Let's work together
          </SectionHeading>
          <ContactForm subject={t("hire-me.headline")} />
        </Box>
      </Section>
    </>
  );
};

export default HireMePage;
