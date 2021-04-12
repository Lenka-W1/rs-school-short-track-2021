/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const S1 = s1;
  let S2 = s2;
  for (let i = 0; i < S1.length; i++) {
    if (S2.includes(S1[i])) {
      res++;
      S2 = S2.replace(S1[i]);
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
