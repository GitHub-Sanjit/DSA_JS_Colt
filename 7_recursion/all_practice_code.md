# All Practice Recursion Solutions

## Power Solution

```javascript
function power(base, exponent){
  if(exponent === 0) return 1;
  return base * power(base,exponent-1);
}
```

## Factorial Solution

```javascript
function factorial(x){
  if (x < 1 ) return 0;
  if (x === 1 ) return 1;
  return x * factorial(x-1);
}
```

## Product Of Array Solution

```javascript
function productOfArray(arr) {
  if(arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
```

## Recursive Range Solution

```javascript
function recursiveRange(x){
  if (x === 0 ) return 0;
  return x + recursiveRange(x-1);
}
```

## Fibonacci Solution

```javascript
function fib(n){
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}
```

## Recursion Challenge Section Solutions

### Reverse Solution

```javascript
function reverse(str){
  if(str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}
```

### isPalindrome Solution

```javascript
function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}
```

### someRecursive Solution

```javascript
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1),callback);
}
```

### flatten Solution

```javascript
function flatten(oldArr){
  var newArr = []
  for(var i = 0; i < oldArr.length; i++){
    if(Array.isArray(oldArr[i])){
      newArr = newArr.concat(flatten(oldArr[i]))
    } else {
      newArr.push(oldArr[i])
    }
  }
  return newArr;
}
```

## Recursion Challenge Problem Set Solutions Part 2

### capitalizeWords Solution

```javascript
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}
```

### nestedEvenSum Solution

```javascript
function nestedEvenSum (obj, sum=0) {
  for (var key in obj) {
    if (typeof obj[key] === 'object'){
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
      sum += obj[key];
    }
  }
  return sum;
}
```

### capitalizeFirst Solution

```javascript
function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}
```

### stringifyNumbers Solution

```javascript
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
```

### collectStrings Solution: Helper Method Recursion Version

```javascript
function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for(var key in o) {
      if(typeof o[key] === 'string') {
        stringsArr.push(o[key]);
      }
      else if(typeof o[key] === 'object') {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}
```

### collectStrings Solution: Pure Recursion Version

```javascript
function collectStrings(obj) {
  var stringsArr = [];
  for(var key in obj) {
    if(typeof obj[key] === 'string') {
      stringsArr.push(obj[key]);
    }
    else if(typeof obj[key] === 'object') {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}
```