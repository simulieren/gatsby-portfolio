import * as React from "react";
import styled from "styled-components";
import TinySlider from "tiny-slider-react";

import PostTags from "../PostTags/PostTags";
import { SectionHeading, P, Caps } from "../Typography";
import { Text, Flex, Box } from "rebass";
import { Image } from "../Image/Image";

const Wrapper = styled.section`
  overflow-x: hidden;

  & .tns-ovh {
    overflow: visible !important;
  }
`;

interface CarouselSectionProps {
  background: string;
}

const CarouselSection = styled(Flex)<CarouselSectionProps>`
  position: relative;

  &:after {
    position: absolute;
    content: "";
    z-index: -1;
    background: ${props => props.background};
    top: 50%;
    right: 0;
    left: 20%;
    bottom: 0;
  }
`;

interface CarouselItemProps {
  index: number;
  slide: number;
  key: number;
}

const CarouselItem = styled.div<CarouselItemProps>`
  pointer-events: none;

  .gatsby-image-wrapper {
    box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.2);
  }
`;

interface PortfolioCarouselProps {
  images: string[];
  overline: string;
  title: string;
  description: string;
  tags: string[];
  background: string;
}

export function PortfolioCarousel(props: PortfolioCarouselProps) {
  const { images, overline, title, description, tags, background } = props;

  const [slide, setSlide] = React.useState(0);
  const imageNumber = images.length - 1;
  const slider = React.useRef("");

  React.useEffect(() => {
    if (slider) {
      if (slider.current.slider) {
        slider.current.slider.events.on("indexChanged", info => {
          setSlide(info.index);
        });
      }
    }
  });

  const settings = {
    nav: false,
    mouseDrag: true,
    gutter: 50,
    items: 1,
    center: true,
    controls: false,
    loop: false
  };

  return (
    <Wrapper>
      <CarouselSection
        my={[0, 4, 5, 6]}
        ml={[0, 3, 4, 5]}
        px={[3, 4, 6]}
        py={[4, 5, 6]}
        flexDirection="column"
        css={{ background }}
        background={background}
      >
        <Flex alignItems="flex-end" mb={[5]}>
          <Box width={[1, 2 / 4]}>
            <Text as="div" fontSize={1} fontFamily="Apercu">
              <Caps fontWeight={`bold`}>{overline}</Caps>
              <PostTags tags={tags} />
            </Text>
            <SectionHeading mt="4">{title}</SectionHeading>
            <P mb="0">{description}</P>
          </Box>
        </Flex>
        <TinySlider settings={settings} ref={slider} style={{ width: "100%" }}>
          {images.map((el, index) => (
            <CarouselItem key={index} index={index} slide={slide}>
              <Image alt="" filename={el} />
            </CarouselItem>
          ))}
        </TinySlider>
      </CarouselSection>
    </Wrapper>
  );
}
