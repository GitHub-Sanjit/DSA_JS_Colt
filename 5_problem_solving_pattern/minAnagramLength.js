/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function (s) {
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (!obj[letter]) {
      obj[letter] = 1;
    }
  }
  return Object.keys(obj).length;
};

console.log(minAnagramLength("aabb"));
