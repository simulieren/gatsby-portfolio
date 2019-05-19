import debounce from "lodash/debounce";
export const changeLanguage = debounce(
  (locale, i18n) => i18n.changeLanguage(locale),
  1000,
  { leading: true, trailing: false }
);
