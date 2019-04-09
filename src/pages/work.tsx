import React, { useContext } from "react";
import Helmet from "react-helmet";
import { Box, Flex, Text } from "rebass";
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
import PostTags from "../components/PostTags/PostTags";

const ImageBox = (props: any) => {
  const { children, shadow } = props;
  return (
    <Box
      width={[1, 4 / 5]}
      p={[3, 4, 5]}
      bg={"#fff6f6"}
      css={{ overflow: "hidden" }}
      {...props}
    >
      <Box
        css={{
          boxShadow: shadow
            ? "0 10px 40px rgba(0,0,0,.2)" || props.boxShadow
            : ""
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

const WorkPage = (props: any) => {
  const { t, i18n } = useTranslation();
  const { current, send } = useContext(AnimationStateContainer.Context);

  // Style presets
  const verticalMargin = [5, 6];

  return (
    <Layout>
      {/* <Helmet title={`About | ${config.siteTitle}`} /> */}
      <Section my={verticalMargin}>
        <Box width={1} mb="5">
          <SectionHeading>Selected Projects</SectionHeading>
        </Box>
        <Flex
          width={[1, 1 / 5]}
          flexDirection="column"
          justifyContent="center"
          p="3"
        >
          <Box>
            <Text as="div" fontSize={1} fontFamily="Apercu">
              <Caps fontWeight={`bold`}>Design</Caps>
              <PostTags tags={["UX", "UI", "Development"]} />
            </Text>
            <SectionHeading fontSize={[4]}>MultiKulti Markt</SectionHeading>
          </Box>
        </Flex>
        <ImageBox shadow>
          <img src="/projects/multikulti/1.jpg" alt="" />
        </ImageBox>
      </Section>

      <Section my={verticalMargin}>
        {/* LEFT */}
        <Flex
          width={[1, 1 / 2]}
          flexDirection="column"
          justifyContent="center"
          p="3"
        >
          <Text as="div" fontSize={1} fontFamily="Apercu">
            <Caps fontWeight={`bold`}>Design + Development</Caps>
            <PostTags tags={["UX", "UI", "Development"]} />
          </Text>
          <SectionHeading fontSize={[4]}>Origami Films</SectionHeading>
        </Flex>

        {/* RIGHT */}
        <Box width={[1, 1 / 2]}>
          <ImageBox bg="transparent">
            <img src="projects/origami-1.png" alt="" />
          </ImageBox>
        </Box>
      </Section>

      <Section my={verticalMargin}>
        <ImageBox>
          <img src="projects/theme-elle-1.jpg" alt="" />
        </ImageBox>

        <Flex
          width={[1, 1 / 5]}
          flexDirection="column"
          justifyContent="center"
          p="3"
        >
          <Box>
            <Text as="div" fontSize={1} fontFamily="Apercu">
              <Caps fontWeight={`bold`}>Design</Caps>
              <PostTags tags={["UX", "UI", "Development"]} />
            </Text>
            <SectionHeading fontSize={[4]}>Projektname 1</SectionHeading>
          </Box>
        </Flex>
      </Section>
    </Layout>
  );
};

export default WorkPage;
