import React, { useContext } from "react";
import Helmet from "react-helmet";
import { Box } from "rebass";
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

const AboutPage = (props: any) => {
  const { t, i18n } = useTranslation();
  const { current, send } = useContext(AnimationStateContainer.Context);

  return (
    <Layout>
      <div className="about-container">
        <Helmet
          title={`${t("about.section1.headline")} | ${config.siteTitle}`}
        />
        <Intro
          bg="
            radial-gradient(rgba(255,255,255,0), rgba(255,255,255,1)),
            linear-gradient(rgba(0,0,255,0.1), rgba(0,0,255,0.4))
            "
          overline={t("homepage.overline")}
          headline={t("about.headline")}
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
              {t("about.section1.headline")}
            </SectionHeading>
            <P>{t("about.section1.paragraph")}</P>
          </Box>
        </Section>
        <Section py={[3, 4, 5]}>
          <Box width={[1, 1 / 5]}>
            <SectionOverline>02</SectionOverline>
          </Box>
          <Box width={[1, 4 / 5, 3 / 5]}>
            <SectionHeading color="#000">
              {t("about.section2.headline")}
            </SectionHeading>
            <P>{t("about.section2.paragraph1")}</P>
            <P>{t("about.section2.paragraph2")}</P>
          </Box>
        </Section>
        <Section py={[3, 4, 5]}>
          <Box width={[1, 1 / 5]}>
            <SectionOverline>03</SectionOverline>
          </Box>
          <Box width={[1, 4 / 5, 3 / 5]}>
            <SectionHeading color="#000">
              {t("about.section3.headline")}
            </SectionHeading>
            <P>{t("about.section3.paragraph")}</P>
          </Box>
        </Section>
      </div>
    </Layout>
  );
};

export default AboutPage;
