import React, { useContext } from "react";
import { Box, Flex, Text } from "rebass";
import { useTranslation } from "react-i18next";

import { Caps, SectionHeading } from "../Typography";
import { Section } from "../Grid";
import PostTags from "../PostTags/PostTags";
import { PortfolioCarousel } from "../PortfolioSlider/PortfolioSlider";

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

const ProjectSection = (props: any) => {
  const { t, i18n } = useTranslation();

  const verticalMargin = [5, 6];

  const MockImageData = [
    "https://picsum.photos/600/700",
    "https://picsum.photos/500/700",
    "https://picsum.photos/800/700"
  ];

  return (
    <>
      <Section mb={verticalMargin} pt={verticalMargin}>
        <Box width={1}>
          <SectionHeading>{t("work.headline")}</SectionHeading>
        </Box>
      </Section>

      <PortfolioCarousel
        images={MockImageData}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="Portfolio Project"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        dolores alias quibusdam asperiores explicabo, laborum natus
        accusantium blanditiis cum quia?"
      />

      <PortfolioCarousel
        images={MockImageData}
        overline="Design + Development"
        tags={["UX", "UI", "Development"]}
        title="Portfolio Project"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
        dolores alias quibusdam asperiores explicabo, laborum natus
        accusantium blanditiis cum quia?"
      />

      <Section mb={verticalMargin} pt={verticalMargin}>
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
            <SectionHeading fontSize={[4]}>WordPress Theme Elle</SectionHeading>
          </Box>
        </Flex>
      </Section>
    </>
  );
};

export default ProjectSection;
