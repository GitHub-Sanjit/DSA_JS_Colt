function charCount(str) {
  //* make object to return at the end
  let result = {};
  //* loop over string, for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    //* if the char is a number/latter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    }
    //* if the char is a number/latter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    }
  }
  //* if character is something else (space, period, special character etc), don't do anything
  //* return object at the end
  return result;
}

console.log(charCount("hello"))
console.log(charCount("hi, Hello there!"))
