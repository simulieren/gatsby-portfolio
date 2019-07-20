import React, { useContext } from "react";
import { Link } from "gatsby";
import { useTranslation } from "react-i18next";

import locales from "../../locales/config";
import { LocaleContext } from "../../context/LocaleContext";

// Use the globally available context to choose the right path
const LocalizedLink = ({
  to,
  animate,
  ...props
}: {
  to: string;
  animate?: boolean;
  props: any;
}) => {
  const { t, i18n } = useTranslation();
  const userLocale = i18n.language;
  let locale;

  const [state, setState] = useContext(LocaleContext);

  locale = state || "de";

  if (locale === undefined) return;

  const isIndex = to === `/`;

  if (isIndex) {
    return (
      <Link
        {...props}
        to={`/${
          locales[userLocale || locale].default
            ? "/"
            : `/${userLocale || locale}`
        }`}
      />
    );
  }

  // If it's the default language, don't do anything
  // If it's another language, add the "path"
  // However, if the homepage/index page is linked don't add the "to"
  // Because otherwise this would add a trailing slash

  const path = locales[locale].default
    ? to
    : `${locales[locale].path}${isIndex ? `` : `${to}`}`;

  return <Link {...props} to={path ? path : "/"} />;
};

export default LocalizedLink;
