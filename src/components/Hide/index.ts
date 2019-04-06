// Hide Component for rebass
// https://gist.github.com/Kikobeats/0dbda3ec8154fa942dc47d36504681c6
// API:
// <Hide breakpoints={[0]}>I‘m hidden on extra small screens</Hide>
// <Hide breakpoints={[1]}>I‘m hidden on small screens</Hide>
// <Hide breakpoints={[2]}>I‘m hidden on medium screens</Hide>
// <Hide breakpoints={[3]}>I‘m hidden on large screens</Hide>
// <Hide breakpoints={[2, 3]}>I‘m hidden on medium and large screens</Hide>

import styled from 'styled-components';
// import { theme } from 'rebass' Not available in 3.0

const breakpoints = ['40em', '52em', '64em'];
const lastIndex = breakpoints.length - 1;

const getMediaBreakpoint = (
  breakpoints: string[],
  breakpoint: string,
  index: number
) => {
  if (index === 0) return `@media screen and (max-width: ${breakpoint})`;
  const prevBreakpoint = breakpoints[index - 1];
  if (index === lastIndex) {
    return `@media screen and (min-width: ${prevBreakpoint})`;
  }
  return `@media screen and (min-width: ${prevBreakpoint}) and (max-width: ${breakpoint})`;
};

const mediaBreakpoints = breakpoints.reduce(
  (acc: Object, breakpoint: string, index: number) => {
    acc[index] = getMediaBreakpoint(breakpoints, breakpoint, index);
    return acc;
  },
  {}
);

const hidden = key => props => {
  const breakpoints = [].concat(props.breakpoints);
  return breakpoints.includes(key)
    ? {
        [mediaBreakpoints[key]]: {
          display: 'none',
        },
      }
    : null;
};

const Hide = styled.div(
  [],
  ...Object.keys(mediaBreakpoints).map(i => hidden(Number(i)))
);

export default Hide;
