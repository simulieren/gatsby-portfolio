import React, { useContext, useState, Fragment } from "react";
import anime from "animejs";

import styled from "styled-components";
import { useSpring, animated, useTransition } from "react-spring";

import { AnimationStateContainer } from "../../context/animationContext";

const PageTransitionItem = styled(animated.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${props => (props.color ? color : "#000")};
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition: all 1s ease;
`;

export const PageTransition = (props: any) => {
  const { current, send } = useContext(AnimationStateContainer.Context);

  let v = current.value;
  let isTransitioning = v !== "end";

  const anim = useSpring({
    opacity: isTransitioning ? 1 : 0,
    transform: isTransitioning ? "scaleX(1)" : "scaleX(0)",
    from: { opacity: 1, transform: "scaleX(1)" }
  });

  return (
    <>
      <PageTransitionItem transition={isTransitioning} style={anim} />
      <animated.div style={anim} />
    </>
  );

  // const transitions = useTransition("", item => item.key, {
  //   from: { transform: "scaleX(0)" },
  //   enter: { transform: isTransitioning ? "scaleX(0)" : "scale(1)" },
  //   leave: { transform: "scaleX(0)" }
  // });
  return transitions.map(({ item, props, key }) => (
    <PageTransitionItem key={key} style={props} />
  ));
};
