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
          <SectionHeading color="#000">Dienstleistung</SectionHeading>
          <P>
            Ich sehe mich als Ihr Partner und arbeite im Interesse Ihrer Kunden.
            Vertrauen und Ehrlichkeit sind mir wichtig als Basis für eine
            erfolgreiche Partnerschaft. Von der Webseite bis zur App, von der
            ersten Idee bis zur Veröffentlichung: Ich berate und begleite Sie
            durch alle Phasen – von der Planung bis zum fertigen Konzept.
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
            aktuellste Technologien, die auch bei Google, Facebook, Airbnb oder
            Trivago, eingesetzt werden. Ich arbeite gerne mit Menschen, die
            etwas bewegen wollen. Und die verstanden haben, wie digitale
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
          <SectionOverline>Kompetenzen</SectionOverline>
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
          <SectionHeading color="#000">Prozess</SectionHeading>
          <P>
            Sorgfalt und die richtige Methodik führen zum Erfolg jedes Projekts
            und jeder Idee.
          </P>
        </Box>
      </Section>

      <Flex py={[3, 4, 5]}>
        <Box width={[1, 1 / 12]}>
          <SectionOverline>01</SectionOverline>
        </Box>
        <Box width={[1, 2 / 12]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            Plannung und Strategie
          </SectionHeading>
        </Box>
        <Box width={[1, 4 / 12]}>
          <P>
            Hier fängt alles an. Wir starten mit einem ersten Meeting, um Ihre
            Bedürfnisse zu ermitteln. Indem ich von Anfang an ein klares
            Verständnis für Projektumfang und -kosten gewinne, kann ich
            erkennen, was kurz-, mittel- und langfristig zu tun ist. Mein Fokus
            liegt darauf, Ihre Unternehmensziele in Kommunikationsziele zu
            verwandeln und einen klaren Aktionsplan zu entwickeln, um Sie
            dorthin zu bringen, wo Sie hinwollen.
          </P>
        </Box>
        <Box width={[1, 4 / 12]}>
          <li>Erstes Meeting</li>
          <li>Zuhören, verstehen, fragen</li>
        </Box>
      </Flex>

      <Flex py={[3, 4, 5]}>
        <Box width={[1, 1 / 12]}>
          <SectionOverline>02</SectionOverline>
        </Box>
        <Box width={[1, 2 / 12]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            Konzept
          </SectionHeading>
        </Box>
        <Box width={[1, 4 / 12]}>
          <P>
            Dies ist das Rückgrat meines kreativen Prozesses. Ich dekonstruiere
            Ideen in ihre einfachste Form, ein Prozess, der mir hilft, die
            richtige Positionierung der Marke zu finden.
          </P>
        </Box>
        <Box width={[1, 4 / 12]}>
          <li>Diskutieren</li>
          <li>Recherchieren</li>
          <li>Konzeptionieren</li>
        </Box>
      </Flex>

      <Flex py={[3, 4, 5]}>
        <Box width={[1, 1 / 12]}>
          <SectionOverline>03</SectionOverline>
        </Box>
        <Box width={[1, 2 / 12]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            Kreative Entwicklung
          </SectionHeading>
        </Box>
        <Box width={[1, 4 / 12]}>
          <P>
            Hier setze ich Ideen in Prototypen um. In dieser Phase weiß ich, in
            welche Richtung wir gehen, aber wir sind immer noch auf halbem Weg.
          </P>
        </Box>
        <Box width={[1, 4 / 12]}>
          <li>Wireframe & Prototypen</li>
          <li>User Testing</li>
        </Box>
      </Flex>

      <Flex py={[3, 4, 5]}>
        <Box width={[1, 1 / 12]}>
          <SectionOverline>04</SectionOverline>
        </Box>
        <Box width={[1, 2 / 12]}>
          <SectionHeading color="#000" fontSize={[4, 5]}>
            Technische Realisierung
          </SectionHeading>
        </Box>
        <Box width={[1, 4 / 12]}>
          <P>
            Jetzt nehmen die Dinge Gestalt an. Sobald die Konzepte, Mock-ups und
            Prototypen genehmigt sind, stellen ich das beste Produktionsteam für
            den Auftrag zusammen.
          </P>
        </Box>
        <Box width={[1, 4 / 12]}>
          <li>Realistation</li>
          <li>Performance Optimization</li>
          <li>Monitoring</li>
        </Box>
      </Flex>
    </Layout>
  );
};

export default ServicePage;
