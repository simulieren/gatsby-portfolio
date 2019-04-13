import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

interface HeaderFaderProps {
  items: string[];
  time: number;
}

let faderInterval: any = null;

const setFaderInterval = (setState, state, items) => {
  faderInterval = setInterval(() => {
    if (state.timer) return;
    console.log("Interval");

    setState({ index: (state.index + 1) % items.length });
  }, 2000);
};

const HeaderFader = (props: HeaderFaderProps) => {
  const { time, items } = props;
  const [state, setState] = useState({
    textItems: [],
    index: 0,
    timer: false
  });
  const transitions = useTransition(state.textItems, item => item, {
    from: {
      opacity: 0,
      transform: `translateY(-100%) rotateX(60deg)`
    },
    enter: {
      opacity: 1,
      transform: `translateY(0%) rotateX(0deg)`
    },
    leave: {
      opacity: 0,
      transform: `translateY(100%) rotateX(-60deg)`
    }
  });

  if (!state.timer) {
    setState({ ...state, textItems: items, timer: true });
    console.log(items, state.index);

    setFaderInterval(setState, state, items);
  }
  const renderItems = (props, i) => {
    return (
      <animated.div key={i} style={props.style}>
        {items[state.index]}
      </animated.div>
    );
  };

  // clearInterval(faderInterval);

  return (
    <div style={{ perspective: `400px` }}>
      {transitions.map(({ item, props, key }, i) => {
        // return i === state.index ? renderItems(props, i) : null;
      })}
    </div>
  );
};

export default HeaderFader;
