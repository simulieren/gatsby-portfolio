import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

interface HeaderFaderProps {
  items: string[];
  time: number;
}

const HeaderFader = (props: HeaderFaderProps) => {
  const { time, items } = props;
  const [state, setState] = useState({
    textItems: [`Hello`],
    index: 0,
    timer: true
  });
  const transitions = useTransition(state.textItems, item => item.key, {
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

  let faderInterval: any = null;

  const setFaderInterval = () => {
    faderInterval = setInterval(() => {
      if (!state.timer) return;
      let i = state.index;
      i++;
      i = i % state.textItems.length;
      setState({ index: i });
    }, 2000);
  };

  setState({ ...state, textItems: items, timer: true });
  setFaderInterval();

  setState({ ...state, timer: false });
  clearInterval(faderInterval);

  return (
    <div style={{ perspective: `400px` }}>
      {transitions.map(({ item, props, key }, i) => {
        return (
          <animated.div key={key} style={props}>
            {item.text}
          </animated.div>
        );
      })}
    </div>
  );
};

export default HeaderFader;
