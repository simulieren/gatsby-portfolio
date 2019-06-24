import React from "react";
import { AnimationStateContainer } from "./src/context/animationContext";
import { NavigationStateContainer } from "./src/components/Header";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components";
import Layout from "./src/components/Layout";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => {
  console.log("TCL: wrapPageElement -> props", props);

  return (
    <ThemeProvider theme={theme}>
      <NavigationStateContainer.Provider>
        <AnimationStateContainer.Provider>
          <Layout {...props}>{element}</Layout>
        </AnimationStateContainer.Provider>
      </NavigationStateContainer.Provider>
    </ThemeProvider>
  );
};

export default wrapPageElement;
