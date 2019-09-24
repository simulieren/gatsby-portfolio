/**
 * Get the user locale.
 *
 * @returns string E.g: "de-DE" or "en-us" if not found
 *
 * https://stackoverflow.com/a/52112155
 */

const getNavigatorLanguage = () => {
  // Get the navigator language
  try {
    if (navigator && navigator.languages && navigator.languages.length) {
      return navigator.languages[0];
    } else {
      return (
        navigator.userLanguage ||
        navigator.language ||
        navigator.browserLanguage ||
        `en-us`
      );
    }
  } catch (error) {
    // Return en-us if this is run during SSR
    return `en-us`;
  }
};

export default getNavigatorLanguage;
