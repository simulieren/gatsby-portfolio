import * as React from "react";
import styled from "styled-components";

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

import { Text, Flex, Box } from "rebass";
import { Image } from "../Image/Image";

const Wrapper = styled.section`
  & .glide__track,
  & .glide__slides {
    overflow: visible !important;
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

interface CarouselProps {
  images: string[];
}

export function Carousel(props: CarouselProps) {
  const { images } = props;

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
      <div className="glide" ref={slider}>
        <div data-glide-el="track" className="glide__track">
          <ul className="glide__slides">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                index={index}
                slide={slide}
                className="glide__slide"
              >
                <Image alt="" filename={image} />
              </CarouselItem>
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
}
