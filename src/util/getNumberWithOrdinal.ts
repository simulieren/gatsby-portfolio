/**
 * Return a string with and ordinal affix for a number.
 * Example: 1 => 1st
 *
 * @param n number
 */
function getNumberWithOrdinal(n: number): string {
  const s = [`th`, `st`, `nd`, `rd`],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default getNumberWithOrdinal;
