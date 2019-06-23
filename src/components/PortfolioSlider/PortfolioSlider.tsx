import * as React from "react";
import styled from "styled-components";

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

import PostTags from "../PostTags/PostTags";
import {
  SectionHeading,
  P,
  Caps,
  StyledLinkText,
  RightArrowSVG
} from "../Typography";
import { Text, Flex, Box } from "rebass";
import { Image } from "../Image/Image";

const Wrapper = styled.section`
  overflow-x: hidden;

  & .glide__track,
  & .glide__slides {
    overflow: visible !important;
  }
`;

interface CarouselSectionProps {
  background: string;
}

const CarouselSection = styled(Flex)<CarouselSectionProps>`
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: "";
    z-index: -1;
    background: ${props => props.background};
    right: 0;
    bottom: 0;
  }

  &::after {
    top: 50%;
    left: 20%;
  }

  &::before {
    top: 40%;
    left: 10%;
  }
`;

interface CarouselItemProps {
  index: number;
  slide: number;
  key: number;
}

const CarouselItem = styled.div<CarouselItemProps>`
  cursor: grab;
  box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.2);

  transition: all 0.5s ease;
  transform: scale(0.95);

  &.glide__slide--active {
    transform: scale(1.02);
  }

  .gatsby-image-wrapper {
    border-radius: 5px;
    overflow: hidden;
  }
`;

interface PortfolioCarouselProps {
  images: string[];
  overline: string;
  title: string;
  tags: string[];
  background: string;
  description?: string;
  link?: string;
  linkText?: string;
}

export function PortfolioCarousel(props: PortfolioCarouselProps) {
  const {
    images,
    overline,
    title,
    description,
    tags,
    background,
    link,
    linkText
  } = props;

  const [slide, setSlide] = React.useState(0);
  const imageNumber = images.length - 1;
  const slider = React.useRef("");

  const settings = {
    gap: 32,
    peek: { before: 0, after: 32 },
    breakpoints: {
      660: {
        gap: 8,
        peek: { before: 0, after: 8 }
      }
    }
  };

  React.useLayoutEffect(() => {
    if (slider) {
      if (slider.current) {
        const glider = new Glide(slider.current, settings).mount();
      }
    }
  });

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
          <Box width={[1, 1, 2 / 4]}>
            <Text as="div" fontSize={1} fontFamily="Apercu">
              <Caps fontWeight={`bold`}>{overline}</Caps>
              <PostTags tags={tags} />
            </Text>
            <SectionHeading mt="4" mb="4">
              {title}
            </SectionHeading>

            {description && <P>{description}</P>}

            {link &&
              linkText && (
                <Text
                  as="a"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  fontFamily="Apercu"
                  fontSize={3}
                  lineHeight="1.5"
                  color="#000"
                >
                  <StyledLinkText color="#000">{linkText} ➝</StyledLinkText>
                </Text>
              )}
          </Box>
        </Flex>

        <div className="glide" ref={slider}>
          <div data-glide-el="track" className="glide__track">
            <ul className="glide__slides">
              {images.map((el, index) => (
                <CarouselItem
                  key={index}
                  index={index}
                  slide={slide}
                  className="glide__slide"
                >
                  <Image alt="" filename={el} />
                </CarouselItem>
              ))}
            </ul>
          </div>
        </div>
      </CarouselSection>
    </Wrapper>
  );
}
