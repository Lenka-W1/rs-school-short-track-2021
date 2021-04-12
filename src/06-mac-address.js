/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const string = n.split('-');
  let res = 0;
  for (let i = 0; i < string.length; i++) {
    if (/[A-F0-9]{2}/.test(string[i])) {
      res++;
    }
  }
  return res === 6;
}

module.exports = isMAC48Address;
