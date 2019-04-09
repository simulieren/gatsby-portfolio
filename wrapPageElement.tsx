import React from "react";
import { AnimationStateContainer } from "./src/context/animationContext";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <AnimationStateContainer.Provider>
        {element}
      </AnimationStateContainer.Provider>
    </ThemeProvider>
  );
};

export default wrapPageElement;
