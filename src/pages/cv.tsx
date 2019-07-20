import React from "react";
import styled from "styled-components";
import { Box, Flex, Text } from "rebass";
import { Caption, BodyText, H3, H2 } from "../components/Typography";
import { Carousel } from "../components/Carousel/Carousel";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm/ContactForm";

const ListItem = styled.li`
  list-style: none;
  position: relative;
  word-spacing: 0.1em;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    height: 1px;
    width: 40px;
    background: black;
    top: 20px;
  }

  & p {
    margin-left: 60px;
  }
`;

interface DetailItemProps {
  label: string;
  children: any;
}

const DetailItem = (props: DetailItemProps) => {
  return (
    <Flex alignItems="baseline">
      <Box width={[1 / 4]}>
        <Caption as="div">{props.label}</Caption>
      </Box>
      <Box width={[3 / 4]}>
        <BodyText>{props.children}</BodyText>
      </Box>
    </Flex>
  );
};

const Divider = styled(Box)`
  width: 100%;
  height: 2px;
  background: #eee;
`;

const CV = (props: any) => {
  const { t, i18n } = useTranslation();
  i18n.changeLanguage("en");

  return (
    <Flex
      flexDirection="column"
      css={`
        overflowx: hidden;
      `}
    >
      <Flex alignItems="center" justifyContent="center" flexDirection="column">
        <Box p={[4]}>
          <H3 textAlign="center">CV Profile</H3>
          <Flex justifyContent="center" flexDirection="column">
            <Caption mb="2" textAlign="center">
              Digital Product Designer and Frontend Developer
            </Caption>
            <BodyText fontSize={[2]} as="p" textAlign="center">
              ✔ Available for design and development work.
            </BodyText>
          </Flex>
        </Box>
      </Flex>
      <Flex px="3" py={[3, 5]} justifyContent="center" flexDirection="column">
        <H2>Professional Experience</H2>
      </Flex>
      <Flex px="3" justifyContent="center">
        <Box as="ul" width={[1, 5 / 7, 5 / 7, 4 / 8]}>
          <ListItem>
            <BodyText>
              <em>Frontend developer</em> with focus on cutting edge
              <em> HTML, CSS, JavaScript, TypeScript </em>
              and associated frameworks such as{" "}
              <em>React.js, Next.js, Gatsby.js</em> and many modern{" "}
              <em>JavaScript</em> development tools.
            </BodyText>
          </ListItem>
          <ListItem>
            <BodyText>
              Experience as a <em>UI designer</em> for <em>small startups</em>{" "}
              and <em>international enterprise corporations</em> by following
              small and large scale <em>style guides</em> and creating{" "}
              <em>design systems</em> for{" "}
              <em>international multilingual websites</em> and{" "}
              <em>digital applications.</em>
            </BodyText>
          </ListItem>
          <ListItem>
            <BodyText>
              Professional knowledge in <em>conception, design, development</em>{" "}
              of
              <em>websites</em> and <em>digital applications</em>.
            </BodyText>
          </ListItem>
          <ListItem>
            <BodyText>
              Knowledge and experience of the React ecosystem and popular
              libraries like{" "}
              <em>
                Redux, styled-components, Next.js, Gatsby.js, Rebass, Storybook
              </em>{" "}
              and more. Understanding of{" "}
              <em>
                different patterns, approaches and techniques like CDD or TDD
              </em>{" "}
              to provide the best solution for each use case.
            </BodyText>
          </ListItem>
          <ListItem>
            <BodyText>
              Experience in <em>connecting frontend applications</em> to various
              different <em>APIs (REST, GraphQL, Firebase, Socket.io).</em>
            </BodyText>
          </ListItem>
          <ListItem>
            <BodyText>
              Development of applications and APIs with{" "}
              <em>Node.js and related libraries</em> in the backend.
            </BodyText>
          </ListItem>
          <ListItem>
            <BodyText>
              Professional experience with design tools like{" "}
              <em>Figma, Sketch, Framer X and Adobe CC</em> to{" "}
              <em>
                create sketches, wireframes, wireflows and mockups and fully
                interactive prototypes.
              </em>
            </BodyText>
          </ListItem>
        </Box>
      </Flex>
      <Flex px="3" py={[3, 5]} justifyContent="center" flexDirection="column">
        <H2>Technical Skills</H2>
      </Flex>
      <Flex px="3" justifyContent="center">
        <Box as="ul" width={[1, 5 / 7, 5 / 7, 4 / 8]}>
          <H3>Programming Skills</H3>
          <ListItem>
            <BodyText>
              <Caption as="div">JavaScript</Caption>
              ES2019, TypeScript, React / Redux, NodeJS, Express, Mongoose,
              Grunt, Gulp, Babel, jQuery, Webpack, Gatsby, Next, Storybook,
              Material UI, styled-components, react-admin ...
            </BodyText>
          </ListItem>
          <ListItem>
            <BodyText>
              <Caption as="div">CSS</Caption>
              CSS, LESS, SCSS, PostCSS, Bootstrap 4, ZURB Foundation
            </BodyText>
          </ListItem>
          <ListItem>
            <BodyText>
              <Caption as="div">HTML</Caption>
              HTML4, HTML5
            </BodyText>
          </ListItem>
          <ListItem>
            <BodyText>
              <Caption as="div">Databases</Caption>
              MongoDB, Firebase
            </BodyText>
          </ListItem>
          <H3>Design Skills</H3>
          <ListItem>
            <BodyText>
              <Caption as="div">User Interface Design</Caption>
              Responsive Webdesign, Design System, Design Styleguides,
              Responsive Newsletter Design, Code Prototyping
            </BodyText>
          </ListItem>
          <ListItem>
            <BodyText>
              <Caption as="div">User Experience Design</Caption>
              Wireframing, Wireflows, Design Prototyping
            </BodyText>
          </ListItem>
          <H3>General Skills</H3>
          <ListItem>
            <BodyText>
              <Caption as="div">Workflow</Caption>
              Git flow, GitHub flow, GitLab flow, Agile, Scrum, Kanban, Design
              Sprints
            </BodyText>
          </ListItem>
          <ListItem>
            <BodyText>
              <Caption as="div">Tools</Caption>
              Visual Studio Code, Docker, Jira, Confluence, Trello, Adobe CC,
              Sketch, Figma, Framer X, Invision, Prettier, ESLint, GitKraken ...
            </BodyText>
          </ListItem>
        </Box>
      </Flex>

      <Flex px="3" py={[3, 5]} justifyContent="center" flexDirection="column">
        <H2>Project History</H2>
      </Flex>

      <Flex
        px="3"
        justifyContent="center"
        alignItems="flex-start"
        style={{ overflowX: "hidden" }}
      >
        <Box as="ul" width={[1, 5 / 7, 5 / 7, 4 / 8]}>
          <Carousel images={["mystudiolo-1.png", "mystudiolo-2.png"]} />
          <Caption as="div" my="4">
            2019 — Now
          </Caption>
          <DetailItem label="Client">
            MyStudiolo <i>(WIP)</i>
          </DetailItem>
          <DetailItem label="Role">
            Freelance UI Designer and Frontend Developer <i>(Remote)</i>
          </DetailItem>
          <DetailItem label="Tech">
            Framer X, TypeScript, React, GatsbyJS, Storybook
          </DetailItem>
          <DetailItem label="Task">
            Designing the whole experience and developing the frontend of a new
            product startup for art collectors in Paris, France. Together with a
            group of freelancers from the{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jungleprogram.com/"
            >
              JungleProgram
            </a>
            . I am creating the UI design and frontend components design system
            in React for the upcoming product experience. I designed the UI/UX
            of the app and set up over 60 unique React components for
            development.
          </DetailItem>

          <Divider mb={[4, 5]} />

          <video src="../howfm_CMS.mp4" controls loop />
          <BodyText fontSize="2" textAlign="center" my="2">
            Admin CMS created with React, Redux and written in TypeScript
          </BodyText>
          <Caption as="div" my="4">
            2019 — Now
          </Caption>
          <DetailItem label="Client">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.soundreply.com/"
            >
              SoundReply GmbH
            </a>
          </DetailItem>
          <DetailItem label="Role">
            Freelance Frontend Developer <i>(Remote)</i>
          </DetailItem>
          <DetailItem label="Tech">
            Firebase, Typescript, ES2019, React, Redux, Gatsby.js, react-admin,
            GitLab
          </DetailItem>
          <DetailItem label="Task">
            Creating the frontend of the custom CMS experience. Supporting a
            start up run by many Ex-Trivago engineers and helping them create
            their vision to provide a perfect user experience including a
            interactive backend for a machine learning and natural language
            processing application. Mostly written in Typescript in the Google
            Cloud as part of a Flutter / Firebase application.
          </DetailItem>

          <Divider mb={[4, 5]} />

          <Caption as="div" my="4">
            Dezember 2017 — Dezember 2018
          </Caption>
          <DetailItem label="Client">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://digitalcareerinstitute.org/"
            >
              Digital Career Institute gGmbH
            </a>{" "}
          </DetailItem>
          <DetailItem label="Role">
            Freelance Fullstack JavaScript Dozent
          </DetailItem>
          <DetailItem label="Tech">
            HTML, CSS, JavaScript, React, Redux, NodeJS, MongoDB, Git, GitHub
          </DetailItem>
          <DetailItem label="Task">
            Teaching a full year course on Fullstack JavaScript Development. I
            have thaught over a hundred students starting from the very basics
            of web development until they are ready to work with real world tech
            in companies in Germany. Doing workshops with the topic digital
            design in different cities across Germany.
          </DetailItem>

          <Divider mb={[4, 5]} />

          <Carousel
            images={[
              "beka-1.png",
              "beka-2.png",
              "beka-3.png",
              "technocargo-1.png",
              "technocargo-2.png"
            ]}
          />

          <Caption as="div" my="4">
            Juni 2017 — November 2017
          </Caption>
          <DetailItem label="Client">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.allefreiheit.de/"
            >
              alle freiheit GmbH
            </a>
          </DetailItem>
          <DetailItem label="Role">
            Fulltime Junior Art Director and Frontend Developer
          </DetailItem>
          <DetailItem label="Tech">
            HTML, CSS, JavaScript, WordPress, Joomla, PHP, Git, GitHub, Adobe XD
          </DetailItem>
          <DetailItem label="Task">
            Working as a designer and developer on various projects for regional
            clients. My tasks started at the conception and ended at the
            technical realization of the project with ongoing maintenance.
          </DetailItem>
          <DetailItem label="Clients">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.beka.de/"
            >
              beka GmbH
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fuka.de/de/"
            >
              FUKA GmbH
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://folienjargon.de/"
            >
              Folienjargon
            </a>
            , MACTAC, ...
          </DetailItem>

          <Divider mb={[4, 5]} />

          <Carousel
            images={[
              "eizo-1.png",
              "eizo-2.png",
              "covestro-1.png",
              "covestro-2.png",
              "myfujifilm-1.png"
            ]}
          />

          <Caption as="div" my="4">
            Mai 2015 — Juni 2017
          </Caption>
          <DetailItem label="Client">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twt-rb.de/"
            >
              TWT reality bytes GmbH
            </a>
          </DetailItem>
          <DetailItem label="Role">Fulltime Junior Art Director</DetailItem>
          <DetailItem label="Tech">
            HTML, CSS, JavaScript, WordPress, Typo3, PHP, Gulp, Git, GitHub,
            Adobe CC
          </DetailItem>
          <DetailItem label="Task">
            Working as a designer and developer on various projects for small
            startups and big international coprorations. My tasks started at the
            design stage and ended at the technical prototype of the project
            with ongoing maintenance.
          </DetailItem>
          <DetailItem label="Clients">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.eizo.de/"
            >
              EIZO
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.lekkerland.de/"
            >
              Lekkerland GmbH
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.myfujifilm.de/start"
            >
              FUJIFILM
            </a>
            ,{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.covestro.com/de"
            >
              Covestro
            </a>
            , ...
          </DetailItem>
        </Box>
      </Flex>

      <Flex
        mt={[5, 6]}
        p={3}
        as="section"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <H2>Contact</H2>
        <Text
          fontFamily="Apercu"
          lineHeight="1.7"
          fontSize={[3, 5]}
          mb="3"
          style={{ fontStyle: "italic" }}
          as="a"
          href="https://wa.me/491738823363"
        >
          <Caption mr={[3, 4]}>WhatsApp:</Caption>
          +49 173 882 336 3
        </Text>
        <Text
          fontFamily="Apercu"
          lineHeight="1.7"
          fontSize={[3, 5]}
          mb="5"
          style={{ fontStyle: "italic" }}
          as="a"
          href="mailto:hello@simonhalimonov.de"
        >
          <Caption mr={[3, 4]}>Mail:</Caption>
          hello@simonhalimonov.de
        </Text>
      </Flex>

      <Flex
        px="3"
        justifyContent="center"
        alignItems="flex-start"
        style={{ overflowX: "hidden" }}
      >
        <Box as="ul" width={[1, 5 / 7, 5 / 7, 4 / 8]}>
          <ContactForm subject={t("hire-me.headline")} />
        </Box>
      </Flex>

      <Flex
        p={3}
        as="footer"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      />
      <Flex
        p={3}
        as="section"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Text
          mt="5"
          as="p"
          fontSize={2}
          lineHeight="1.7"
          fontFamily="Apercu"
          width={[1, 1 / 2]}
          textAlign="center"
        >
          The code used for this project can be found here:{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/simulieren/gatsby-portfolio"
          >
            GitHub Repository.
          </a>{" "}
          A list of all open-source packages can be found{" "}
          <a href="https://github.com/simulieren/gatsby-portfolio/blob/master/package.json">
            here
          </a>
          .
        </Text>
      </Flex>
    </Flex>
  );
};

export default CV;
