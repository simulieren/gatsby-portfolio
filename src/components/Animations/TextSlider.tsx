import React, { useState } from "react";
import { Text } from "rebass";
import styled from "styled-components";
import useInterval from "../../util/useInterval";

interface TextSliderItemProps {
  index: number;
  sliderIndex: number;
}

const TextSliderItem = styled(Text)<TextSliderItemProps>`
  position: absolute;
  width: 100%;

  transition: all 0.25s ease;

  transform: translateY(
    ${props =>
      props.index < props.sliderIndex
        ? "100%"
        : props.index > props.sliderIndex
          ? "-100%"
          : "0%"}
  );

  opacity: ${props =>
    props.index < props.sliderIndex
      ? "0"
      : props.index > props.sliderIndex
        ? "-0"
        : "1"};
`;

interface TextSliderProps {
  items: string[];
  time: number;
}

const TextSlider = (props: TextSliderProps) => {
  const { time, items } = props;
  const [state, setState] = useState({
    index: 0
  });

  useInterval(() => {
    setState({ index: (state.index + 1) % items.length });
  }, time);

  return (
    <div style={{ perspective: `400px` }}>
      {items.map((item, index) => {
        return (
          <TextSliderItem
            key={index}
            index={index}
            sliderIndex={state.index}
            textAlign="center"
            fontFamily="Apercu"
            fontSize={2}
            color="#fff"
          >
            {item}
          </TextSliderItem>
        );
      })}
    </div>
  );
};

export default TextSlider;
