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
        {/* <Helmet title={`About | ${config.siteTitle}`} /> */}
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
            <SectionHeading color="#000">Über mich</SectionHeading>
            <P>
              Hi, mein Name ist Simon. Ich glaube, dass die Kombination aus
              gutem digitalen Design und moderner Technologie Produkte und
              unseren Umgang mit ihnen verbessern kann. Ich bin misstrauisch
              gegenüber dem, was ist und entschlossen, die Art und Weise, wie
              unsere digitalen Produkte aussehen und funktionieren, verändern zu
              wollen.
            </P>
          </Box>
        </Section>
        <Section py={[3, 4, 5]}>
          <Box width={[1, 1 / 5]}>
            <SectionOverline>02</SectionOverline>
          </Box>
          <Box width={[1, 4 / 5, 3 / 5]}>
            <SectionHeading color="#000">
              Digitale Produkte in Handarbeit
            </SectionHeading>
            <P>
              Ich entwickle jedes Projekt, egal ob Website oder Web App,
              individuell in Handarbeit nach ihren Bedürfnissen. Ich verwende
              aktuellste Technologien, die auch bei Google, Facebook, Airbnb
              oder Trivago, eingesetzt werden. Ich arbeite gerne mit Menschen,
              die etwas bewegen wollen. Und die verstanden haben, wie digitale
              Projekte funktionieren.
            </P>
            <P>
              Ich liebe das, was ich tue, und ich verfeinere ständig meine
              Fähigkeit, Markengeschichten in eine visuell einzigartige und
              ansprechende Benutzererfahrung zu übersetzen.
            </P>
          </Box>
        </Section>
        <Section py={[3, 4, 5]}>
          <Box width={[1, 1 / 5]}>
            <SectionOverline>03</SectionOverline>
          </Box>
          <Box width={[1, 4 / 5, 3 / 5]}>
            <SectionHeading color="#000">
              Dozent beim Digital Career Institute
            </SectionHeading>
            <P>
              Seit Dezember 2017 unterrichte ich beim Digital Career Institute
              und habe seitdem insgesamt über 100 Teilnehmer in Düsseldorf,
              Hamburg und Berlin zum Thema “Modern Web Development” und “Digital
              Design” unterrichtet.
            </P>
          </Box>
        </Section>

        <TransitionLink to="/">
          <StyledButton>Mehr erfahren</StyledButton>
        </TransitionLink>

        <StyledButton onClick={() => send("NEXT")}>Start</StyledButton>
        <StyledButton onClick={() => send("NEXT")}>End</StyledButton>
        <StyledButton>Reset</StyledButton>
      </div>
    </Layout>
  );
};

export default AboutPage;
