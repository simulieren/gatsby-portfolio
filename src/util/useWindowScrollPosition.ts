// We need to import lodash throttle if we want to throttle our scroll events
import React from 'react';
import throttle from 'lodash.throttle';

const useWindowScrollPosition = (options = {}) => {
  const { throttleMs = 100 } = options;
  const [scroll, setScroll] = React.useState({
    x: window.pageXOffset,
    y: window.pageYOffset,
  });

  const handle = throttle(() => {
    setScroll({
      x: window.pageXOffset,
      y: window.pageYOffset,
    });
  }, throttleMs);

  React.useEffect(() => {
    window.addEventListener('scroll', handle);

    return () => {
      window.removeEventListener('scroll', handle);
    };
  }, []);

  return scroll;
};

export default useWindowScrollPosition;
