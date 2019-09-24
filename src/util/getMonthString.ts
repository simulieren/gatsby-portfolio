import getNavigatorLanguage from './getNavigatorLanguage';

/**
 * Get the name of the month in the user locale.
 *
 * @param date date value in ms
 * @returns string: E.g.: "January"
 */

const getMonthString = date => {
  return new Date(date).toLocaleString(getNavigatorLanguage(), {
    month: `long`,
  });
};

export default getMonthString;
