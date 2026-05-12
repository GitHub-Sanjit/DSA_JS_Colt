//* Detailed analysis and ten different ways to reverse a string and their performance details.



//* Implementation 1:

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
//* Implementation 2:

function reverse(s) {
  var o = [];
  for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
    o[j] = s[i];
  return o.join('');
}
//* Implementation 3:

function reverse(s) {
  var o = [];
  for (var i = 0, len = s.length; i <= len; i++)
    o.push(s.charAt(len - i));
  return o.join('');
}

//* Implementation 4:

function reverse(s) {
  return s.split('').reverse().join('');
}

//* Implementation 5:

function reverse(s) {
  var i = s.length,
      o = '';
  while (i > 0) {
    o += s.substring(i - 1, i);
    i--;
  }
  return o;
}

//* Implementation 6:

function reverse(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}

//* Implementation 7:

function reverse(s) {
  return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}

//* Implementation 8:

function reverse(s) {
  function rev(s, len, o) {
    return (len === 0) ? o : rev(s, --len, (o += s[len]));
  };
  return rev(s, s.length, '');
}

//* Implementation 9:

function reverse(s) {
  s = s.split('');
  var len = s.length,
      halfIndex = Math.floor(len / 2) - 1,
      tmp;
 

     for (var i = 0; i <= halfIndex; i++) {
        tmp = s[len - i - 1];
        s[len - i - 1] = s[i];
        s[i] = tmp;
      }
      return s.join('');
    }

//* Implementation 10

function reverse(s) {
  if (s.length < 2)
    return s;
  var halfIndex = Math.ceil(s.length / 2);
  return reverse(s.substr(halfIndex)) +
         reverse(s.substr(0, halfIndex));
}

//* Implementation 11

var reverser  = function(str){
let string = str.split('');

    for(i=0;i<string.length;i++){
        debugger;
        string.splice(i,0,string.pop());
    
    } 
    console.log(string.join())
}
reverser('abcdef')