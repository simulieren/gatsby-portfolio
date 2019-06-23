import React, { useContext } from "react";
import Helmet from "react-helmet";
import { Box, Flex } from "rebass";
import { useTranslation } from "react-i18next";

import Layout from "../layout";

import config from "../../data/SiteConfig";
import {
  Caps,
  P,
  SectionOverline,
  StyledButton,
  DotPattern,
  SectionHeading
} from "../components/Typography";
import { AnimationStateContainer } from "../context/animationContext";
import Intro from "../components/Intro";
import { Section } from "../components/Grid";
import { TransitionLink } from "../components/TransitionLink";

const ServicePage = (props: any) => {
  const { t, i18n } = useTranslation();
  const { current, send } = useContext(AnimationStateContainer.Context);

  return (
    <Layout>
      <Helmet title={`About | ${config.siteTitle}`} />
      <Intro
        bg="
            radial-gradient(rgba(255,255,255,0), rgba(255,255,255,1)),
            linear-gradient(rgba(0,0,255,0.1), rgba(0,0,255,0.4))
            "
        overline={t("homepage.overline")}
        headline={t("homepage.headline")}
      >
        <DotPattern
          fill="#00f"
          style={{ position: "absolute", right: 0, top: 0 }}
        />
      </Intro>

      <Section py={[3, 4, 5]}>
        <Box width={[1, 1 / 5]}>
          <SectionOverline>01</SectionOverline>
        </Box>
        <Box width={[1, 4 / 5, 3 / 5]}>
          <SectionHeading color="#000">
            {t("service.section.1.headline")}
          </SectionHeading>
          <P>{t("service.section.1.text")}</P>
        </Box>
      </Section>
      <Section py={[3, 4, 5]}>
        <Box width={[1, 1 / 5]}>
          <SectionOverline>02</SectionOverline>
        </Box>
        <Box width={[1, 4 / 5, 3 / 5]}>
          <SectionHeading color="#000">
            {t("service.section.2.headline")}
          </SectionHeading>
          <P>{t("service.section.2.text.1")}</P>
          <P>{t("service.section.2.text.2")}</P>
        </Box>
      </Section>
      <Section py={[3, 4, 5]}>
        <Box width={[1, 1 / 5]}>
          <SectionOverline>{t("skills")}</SectionOverline>
        </Box>
        <Box width={[1, 2 / 5]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            Design
          </SectionHeading>
          <li>Digital Product Design</li>
          <li>Responsive Webdesign</li>
          <li>User Experience Design</li>
          <li>User Interface Design</li>
          <li>Interaction Design</li>
          <li>Wireframing</li>
          <li>Design System</li>
          <li>Design Prototyping</li>
          <li>Design Styleguides</li>
          <li>Newsletter Design</li>
        </Box>
        <Box width={[1, 2 / 5]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            Development
          </SectionHeading>
          <li>Frontend Development</li>
          <li>React.js Development</li>
          <li>Wordpress CMS</li>
          <li>Performance Optimization</li>
          <li>Mobile Optimization</li>
          <li>User Interface Animation</li>
          <li>Technical Prototyping</li>
          <li>Living Styleguide</li>
          <li>Mobile-First RWD</li>
          <li>Responsive Newsletter Development</li>
        </Box>
      </Section>
      <Section py={[3, 4, 5]}>
        <Box width={[1, 1 / 5]}>
          <SectionOverline>.</SectionOverline>
        </Box>
        <Box width={[1, 4 / 5, 3 / 5]}>
          <SectionHeading color="#000">
            {t("service.section.3.headline")}
          </SectionHeading>
          <P>{t("service.section.3.text")}</P>
        </Box>
      </Section>

      <Flex py={[3, 4, 5]}>
        <Box width={[1, 1 / 12]}>
          <SectionOverline>01</SectionOverline>
        </Box>
        <Box width={[1, 2 / 12]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            {t("service.section.4.headline")}
          </SectionHeading>
        </Box>
        <Box width={[1, 4 / 12]}>
          <P>{t("service.section.4.text.1")}</P>
        </Box>
        <Box width={[1, 4 / 12]}>
          <li>{t("service.section.4.text.2")}</li>
          <li>{t("service.section.4.text.3")}</li>
        </Box>
      </Flex>

      <Flex py={[3, 4, 5]}>
        <Box width={[1, 1 / 12]}>
          <SectionOverline>02</SectionOverline>
        </Box>
        <Box width={[1, 2 / 12]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            {t("service.section.5.headline")}
          </SectionHeading>
        </Box>
        <Box width={[1, 4 / 12]}>
          <P>{t("service.section.5.text.1")}</P>
        </Box>
        <Box width={[1, 4 / 12]}>
          <li>{t("service.section.5.text.2")}</li>
          <li>{t("service.section.5.text.3")}</li>
          <li>{t("service.section.5.text.4")}</li>
        </Box>
      </Flex>

      <Flex py={[3, 4, 5]}>
        <Box width={[1, 1 / 12]}>
          <SectionOverline>03</SectionOverline>
        </Box>
        <Box width={[1, 2 / 12]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            {t("service.section.6.headline")}
          </SectionHeading>
        </Box>
        <Box width={[1, 4 / 12]}>
          <P>{t("service.section.6.text.1")}</P>
        </Box>
        <Box width={[1, 4 / 12]}>
          <li>{t("service.section.6.text.2")}</li>
          <li>{t("service.section.6.text.3")}</li>
        </Box>
      </Flex>

      <Flex py={[3, 4, 5]}>
        <Box width={[1, 1 / 12]}>
          <SectionOverline>04</SectionOverline>
        </Box>
        <Box width={[1, 2 / 12]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            {t("service.section.7.headline")}
          </SectionHeading>
        </Box>
        <Box width={[1, 4 / 12]}>
          <P>{t("service.section.7.text.1")}</P>
        </Box>
        <Box width={[1, 4 / 12]}>
          <li>{t("service.section.7.text.2")}</li>
          <li>{t("service.section.7.text.3")}</li>
          <li>{t("service.section.7.text.4")}</li>
        </Box>
      </Flex>
    </Layout>
  );
};

export default ServicePage;
