function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj = {};
  for (let idx in str1) {
    let letter = str1[idx];
    obj[letter] = obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
  }
  for (let idx in str2) {
    let letter = str2[idx];
    if (!obj[letter]) {
      return false;
    } else {
      obj[letter] -= 1;
    }
  }
}

// console.log(validAnagram("anagram", "naagram"));
console.log(validAnagram("aacc", "ccac"));
// console.log(validAnagram("anagram", "naagram"));
// console.log(validAnagram("", "")); // true
// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("anagram", "nagaram")); // true
// console.log(validAnagram("rat", "car")); // false
// console.log(validAnagram("awesome", "awesom")); // false
// console.log(validAnagram("qwerty", "qeywrt")); // true
// console.log(validAnagram("texttwisttime", "timetwisttext")); // true
