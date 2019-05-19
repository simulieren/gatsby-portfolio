import * as React from "react";
import styled from "styled-components";

import PostTags from "../PostTags/PostTags";

import Hammer from "hammerjs";
import { SectionHeading, P, Caps } from "../Typography";
import { Text, Flex, Box } from "rebass";

const Wrapper = styled.section`
  overflow-x: hidden;
`;

const Overline = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #00f;
  font-size: 14px;
`;

const ProjectDetails = styled.div`
  max-width: 400px;
`;

const SvgArrowRight = props => (
  <svg
    className="feather feather-arrow-right sc-dnqmqq jxshSx"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <line x1={5} y1={12} x2={19} y2={12} />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const SvgArrowLeft = props => (
  <svg
    className="feather feather-arrow-left sc-dnqmqq jxshSx"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <line x1={19} y1={12} x2={5} y2={12} />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const ProjectControlsContainer = styled.div`
  display: flex;
`;

const ProjectArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 2px solid #00f;
  border-radius: 50%;
  margin-left: 50px;
`;

interface ProjectControlsProps {
  prevPage: () => void;
  nextPage: () => void;
}

const ProjectControls = (props: ProjectControlsProps) => {
  const { prevPage, nextPage } = props;

  return (
    <ProjectControlsContainer>
      <ProjectArrow onClick={prevPage}>
        <SvgArrowLeft stroke="#00f" />
      </ProjectArrow>
      <ProjectArrow onClick={nextPage}>
        <SvgArrowRight stroke="#00f" />
      </ProjectArrow>
    </ProjectControlsContainer>
  );
};

const ProjectContainer = styled.div`
  background: rgba(0, 0, 255, 0.25);
  padding: 100px 100px;
  margin-left: 100px;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

interface CarouselItemProps {
  index: number;
  page: number;
}

const CarouselItem = styled.div<CarouselItemProps>`
  margin-right: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  max-width: 35vw;
  min-width: 35vw;
  width: 35vw;
  height: auto;

  transform: translateX(
    calc(${props => props.page * -35}vw - ${props => props.page * 50}px)
  );
  transition: transform 0.5s ease;

  pointer-events: none;

  img {
    width: 100%;
    display: block;
  }
`;

interface CarouselProps {
  page: number;
  images: string[];
  prevPage: () => void;
  nextPage: () => void;
}

const Carousel = (props: CarouselProps) => {
  const { page, images, prevPage, nextPage } = props;

  const carousel = React.useRef();

  React.useEffect(() => {
    if (carousel.current) {
      const hammer = new Hammer(carousel.current);
      hammer.on("swipe", event => {
        const { deltaX } = event;
        if (deltaX < -20) prevPage();
        if (deltaX > 20) prevPage();
      });
    }
  });

  return (
    <CarouselContainer ref={carousel}>
      {images.map((image, index) => (
        <CarouselItem key={index} page={page} index={index}>
          <img src={image} alt="" />
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

interface PortfolioCarouselProps {
  images: string[];
  overline: string;
  title: string;
  description: string;
  tags: string[];
}

export function PortfolioCarousel(props: PortfolioCarouselProps) {
  const { images, overline, title, description, tags } = props;
  const imageNumber = images.length - 1;

  const [page, setPage] = React.useState(0);

  const prevPage = () => setPage(page > 0 ? page - 1 : imageNumber);
  const nextPage = () => setPage(page < imageNumber ? page + 1 : 0);

  return (
    <Wrapper>
      <Flex
        my={[5]}
        ml={[5]}
        p={[6]}
        flexDirection="column"
        css={{ background: "rgba(0,0,255,0.25)" }}
      >
        <Flex alignItems="flex-end" mb={[5]}>
          <Box width={[2 / 4]}>
            <Text as="div" fontSize={1} fontFamily="Apercu">
              <Caps fontWeight={`bold`}>{overline}</Caps>
              <PostTags tags={tags} />
            </Text>
            <SectionHeading>{title}</SectionHeading>
            <P mb="0">{description}</P>
          </Box>
          <ProjectControls prevPage={prevPage} nextPage={nextPage} />
        </Flex>
        <Carousel
          page={page}
          images={images}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Flex>
    </Wrapper>
  );
}
