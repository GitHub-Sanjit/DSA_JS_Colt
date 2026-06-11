# Recursion: A Comprehensive Guide

## What is Recursion?

**Recursion** is a process (specifically, a function in programming) that calls itself. It's a fundamental programming technique that appears everywhere in computer science.

> Think of recursion like Russian nesting dolls - each doll contains a smaller version of itself until you reach the smallest doll (the base case).

## Why Recursion Matters

Recursion is everywhere in programming:

- **JSON.parse()** and **JSON.stringify()**
- **DOM traversal algorithms** (like `document.getElementById`)
- **Object traversal** and manipulation
- **Complex algorithms** (tree traversal, graph algorithms, divide & conquer)
- Often a **cleaner alternative to iteration** for certain problems

## Core Components of Recursion

### 1. The Base Case
The condition that stops the recursion from continuing indefinitely. This is the **most important concept** to understand.

### 2. Different Input
Each recursive call must be invoked with a different input (typically moving toward the base case).

## How Recursive Functions Work

A recursive function invokes the **same function** with a different input until it reaches the **base case**.

## Basic Examples

### Example 1: Countdown

```javascript
function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// countDown(5)
// Output: 5, 4, 3, 2, 1, "All done!"
```

### Example 2: Sum Range

```javascript
function sumRange(num) {
    if (num === 1) return 1;  // Base case
    return num + sumRange(num - 1);  // Different input
}

// sumRange(4) returns 10
// How it works: 4 + 3 + 2 + 1 = 10
```

**Visualization of the Call Stack:**

```
sumRange(1) returns 1
sumRange(2) returns 2 + 1 = 3
sumRange(3) returns 3 + 3 = 6
sumRange(4) returns 4 + 6 = 10
```

### Example 3: Factorial

```javascript
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

// factorial(5) returns 120
// How it works: 5 * 4 * 3 * 2 * 1 = 120
```

## The All-Important `return` Keyword

When using recursion, the `return` keyword is crucial. It allows values to bubble back up through the call stack.

```javascript
// WITHOUT proper returns - THIS DOESN'T WORK
function sumRangeWrong(num) {
    if (num === 1) return 1;
    sumRangeWrong(num - 1);  // Missing return!
}

// WITH proper returns
function sumRangeCorrect(num) {
    if (num === 1) return 1;
    return num + sumRangeCorrect(num - 1);  // Has return!
}
```

## Common Recursion Pitfalls

1. **No Base Case** → Infinite recursion → Stack overflow
2. **Forgetting to return** → Undefined results
3. **Returning the wrong thing** → Incorrect calculations
4. **Not changing the input** → Infinite recursion

```javascript
// ERROR: No base case
function badFactorial(num) {
    return num * badFactorial(num - 1);  // Never stops!
}

// ERROR: Wrong input (doesn't change)
function infiniteLoop(num) {
    if (num === 1) return 1;
    return num * infiniteLoop(num);  // Same input every time!
}
```

## Helper Method Recursion

Helper method recursion uses an outer function with an inner recursive function. This pattern allows us to maintain state (like an array) across recursive calls.

### Example: Collecting Odd Values

```javascript
function collectOddValues(arr) {
    let result = [];
    
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        
        helper(helperInput.slice(1));
    }
    
    helper(arr);
    return result;
}

// collectOddValues([1, 2, 3, 4, 5]) returns [1, 3, 5]
```

## Pure Recursion

Pure recursion avoids helper functions by using the function itself recursively and combining results.

### Example: Same Problem with Pure Recursion

```javascript
function collectOddValuesPure(arr) {
    let newArr = [];
    
    if (arr.length === 0) {
        return newArr;
    }
    
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    
    newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
    return newArr;
}
```

### Pure Recursion Tips

- **For arrays**: Use `slice()`, the spread operator `[...]`, or `concat()` to create copies
- **For strings**: Use `slice()`, `substr()`, or `substring()` (strings are immutable)
- **For objects**: Use `Object.assign()` or the spread operator `{...obj}`

## Time and Space Complexity

### Time Complexity
The number of recursive calls needed relative to the input. Generally O(n) for linear recursion.

### Space Complexity
The **maximum** number of functions on the call stack at any given time. Each recursive call adds a frame to the call stack.

```javascript
// Factorial example
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
// Time: O(n) - n recursive calls
// Space: O(n) - n frames on the call stack at peak
```

## Tail Call Optimization (ES2015)

ES2015 introduced tail call optimization, which can prevent call stack growth for certain recursive patterns.

```javascript
// Tail-recursive factorial (optimized in some browsers)
function tailFactorial(n, accumulator = 1) {
    if (n === 0) return accumulator;
    return tailFactorial(n - 1, n * accumulator);
}
```

> **Note**: Tail call optimization is not yet implemented across all major browsers, so it's not suitable for production code that needs broad compatibility.

---

# Interview Questions & Answers

## Question 1: Power Function

**Problem:** Write a function called `power` that takes a base and an exponent and returns the result of raising the base to that exponent. Do this recursively.

**Solution:**
```javascript
function power(base, exponent) {
    // Base case: anything to the power of 0 is 1
    if (exponent === 0) return 1;
    // Recursive case: base^exponent = base * base^(exponent-1)
    return base * power(base, exponent - 1);
}

// Test cases
console.log(power(2, 4));  // 16
console.log(power(3, 2));  // 9
console.log(power(3, 3));  // 27
```

**Explanation:** 
- The base case is `exponent === 0`, returning 1
- Each recursive call reduces the exponent by 1
- The result is built as the call stack unwinds: 2 * (2 * (2 * (2 * 1))) = 16

---

## Question 2: Product of Array

**Problem:** Write a function `productOfArray` that takes an array of numbers and returns the product of all numbers.

**Solution:**
```javascript
function productOfArray(arr) {
    // Base case: empty array returns 1 (neutral element for multiplication)
    if (arr.length === 0) return 1;
    // Multiply first element by product of the rest
    return arr[0] * productOfArray(arr.slice(1));
}

// Test cases
console.log(productOfArray([1, 2, 3]));      // 6
console.log(productOfArray([1, 2, 3, 10]));  // 60
```

**Explanation:**
- Base case handles empty array, returning 1
- Each call multiplies the first element by the product of the remaining elements
- `slice(1)` creates a new array without the first element
- Example: `[1,2,3]` → 1 * `[2,3]` → 1 * 2 * `[3]` → 1 * 2 * 3 * `[]` → 1 * 2 * 3 * 1 = 6

---

## Question 3: Fibonacci Sequence

**Problem:** Write a recursive function to find the nth Fibonacci number. Fibonacci sequence: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)

**Solution:**
```javascript
function fibonacci(n) {
    // Base case 1
    if (n === 0) return 0;
    // Base case 2
    if (n === 1) return 1;
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test cases
console.log(fibonacci(0));  // 0
console.log(fibonacci(1));  // 1
console.log(fibonacci(5));  // 5 (0,1,1,2,3,5)
```

**Follow-up Question:** What's the time complexity, and can you optimize it?

**Answer:** Time complexity is O(2^n) - very inefficient! This can be optimized using memoization:

```javascript
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 0) return 0;
    if (n === 1) return 1;
    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}
// Now O(n) time complexity
```

---

## Question 4: Reverse String

**Problem:** Write a recursive function that reverses a string.

**Solution:**
```javascript
function reverseString(str) {
    // Base case: empty string or single character
    if (str.length <= 1) return str;
    // Recursive case: last char + reverse of string without last char
    return str[str.length - 1] + reverseString(str.slice(0, -1));
}

// Alternative approach
function reverseStringAlt(str) {
    if (str.length === 0) return '';
    return reverseStringAlt(str.slice(1)) + str[0];
}

// Test cases
console.log(reverseString('hello'));     // 'olleh'
console.log(reverseString('recursion')); // 'noisrucer'
```

**Explanation:**
- The function removes the first character and recursively reverses the rest
- When the recursion unwinds, characters are appended in reverse order
- String immutability means using `slice()` to create copies

---

## Question 5: Flatten Nested Array

**Problem:** Write a function that flattens a nested array (single level) using recursion.

**Solution:**
```javascript
function flattenArray(arr) {
    let result = [];
    
    function helper(input) {
        for (let i = 0; i < input.length; i++) {
            if (Array.isArray(input[i])) {
                helper(input[i]);  // Recursively flatten nested arrays
            } else {
                result.push(input[i]);
            }
        }
    }
    
    helper(arr);
    return result;
}

// Pure recursion version
function flattenArrayPure(arr) {
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flattenArrayPure(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
}

// Test cases
console.log(flattenArray([1, [2, [3, 4], 5], 6]));
// Returns: [1, 2, 3, 4, 5, 6]
```

---

## Question 6: Palindrome Checker

**Problem:** Write a recursive function to check if a string is a palindrome.

**Solution:**
```javascript
function isPalindrome(str) {
    // Clean the string (optional: remove non-alphanumeric chars)
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Base case: 0 or 1 character is always a palindrome
    if (str.length <= 1) return true;
    
    // Check first and last characters
    if (str[0] !== str[str.length - 1]) return false;
    
    // Recursively check the substring without first and last chars
    return isPalindrome(str.slice(1, -1));
}

// Test cases
console.log(isPalindrome('racecar'));        // true
console.log(isPalindrome('hello'));          // false
console.log(isPalindrome('A man, a plan, a canal, panama')); // true
```

---

## Question 7: Recursive Binary Search

**Problem:** Implement binary search using recursion.

**Solution:**
```javascript
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: element not found
    if (left > right) return -1;
    
    const mid = Math.floor((left + right) / 2);
    
    // Base case: element found
    if (arr[mid] === target) return mid;
    
    // Recursive cases
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

// Test cases
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(sortedArray, 7));   // 3 (index)
console.log(binarySearch(sortedArray, 2));   // -1 (not found)
```

**Time Complexity:** O(log n) - much more efficient than linear search!

---

## Question 8: Deep Object Comparison

**Problem:** Write a recursive function to deeply compare two objects for equality.

**Solution:**
```javascript
function deepEqual(obj1, obj2) {
    // Check if they're the same reference
    if (obj1 === obj2) return true;
    
    // Check if either is null or not an object
    if (obj1 === null || obj2 === null || 
        typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }
    
    // Get keys
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    // Check same number of keys
    if (keys1.length !== keys2.length) return false;
    
    // Recursively check each value
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    
    return true;
}

// Test cases
const objA = { a: 1, b: { c: 2, d: [1, 2, 3] } };
const objB = { a: 1, b: { c: 2, d: [1, 2, 3] } };
const objC = { a: 1, b: { c: 2, d: [1, 2, 4] } };

console.log(deepEqual(objA, objB));  // true
console.log(deepEqual(objA, objC));  // false
```

---

## Summary: Recursion Checklist for Interviews

✅ **Always identify the base case first**
✅ **Ensure the input changes with each recursive call**
✅ **Use `return` to pass values back up the call stack**
✅ **Watch for stack overflow with deep recursion**
✅ **Consider helper method recursion for accumulating results**
✅ **For arrays/strings, create copies to avoid mutation**
✅ **Be prepared to discuss time and space complexity**

---

## Key Takeaways

1. **Recursive functions call themselves** until reaching a base case
2. **Every recursive function needs:** a base case and different input each time
3. **The call stack** is crucial for understanding how recursion works
4. **Helper method recursion** maintains state across recursive calls
5. **Pure recursion** is elegant but can be harder to understand initially
6. **Always consider iteration vs recursion** - choose the clearest approach for the problem
```