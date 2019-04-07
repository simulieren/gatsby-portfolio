import React from "react";

import { useSSR, I18nextProvider } from "react-i18next";
import i18n from "./src/i18next/i18n";
import de from "./src/locales/de/translation.json";
import en from "./src/locales/en/translation.json";

const i18nStore = { de, en };

export const Layout = ({ children, ...props }: any) => {
  console.log("WRAP PAGE", props);

  return <div {...props}>{children}</div>;
};

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, ...props }) => {
  // useSSR(i18nStore, `de`);

  return (
    <I18nextProvider {...props} i18n={i18n}>
      {element}
    </I18nextProvider>
  );
};

export default wrapPageElement;
