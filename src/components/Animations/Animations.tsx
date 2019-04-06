import React from 'react';
import { Spring, animated, config } from 'react-spring';

const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
};

const fadeInUp = x => ({
  from: {
    opacity: 0,
    transform: `translateY(${x * 1}%)`,
  },
  to: {
    opacity: 1,
    transform: `translateY(${x * 0}%)`,
  },
});

const fadeInUpSpin = x => ({
  from: {
    opacity: 0,
    transform: `translateY(${x * 1}%) rotate3d(0.2, 1, 0, ${x * 2}deg)`,
  },
  to: {
    opacity: 1,
    transform: `translateY(${x * 0}%) rotate3d(0.2, 1, 0, ${x * 0}deg)`,
  },
});

export const SpringFadeIn = props => (
  <Spring delay={props.delay} config={props.config} {...fadeIn}>
    {styles => <animated.div style={styles}>{props.children}</animated.div>}
  </Spring>
);

export const SpringFadeInUp = props => (
  <Spring delay={props.delay} {...fadeInUp(50)}>
    {styles => (
      <animated.div style={{ ...styles, transformOrigin: `center` }}>
        {props.children}
      </animated.div>
    )}
  </Spring>
);

export const SpringFadeInUpSpin = props => (
  <Spring delay={props.delay} config={props.config} {...fadeInUpSpin(200)}>
    {styles => (
      <animated.div style={{ ...styles, transformOrigin: `center` }}>
        {props.children}
      </animated.div>
    )}
  </Spring>
);
