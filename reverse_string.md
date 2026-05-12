# Reverse String in JavaScript — Detailed Analysis

## Table of Contents

1. Introduction
2. What is String Reversal?
3. Time Complexity Basics
4. Space Complexity Basics
5. Implementation 1 — Basic Loop with String Concatenation
6. Implementation 2 — Array Assignment + join()
7. Implementation 3 — push() with charAt()
8. Implementation 4 — Built-in Methods
9. Implementation 5 — while Loop + substring()
10. Implementation 6 — Compact for Loop
11. Implementation 7 — Recursive Solution
12. Implementation 8 — Tail Recursive Style
13. Implementation 9 — In-place Swap Technique
14. Implementation 10 — Divide and Conquer Recursion
15. Implementation 11 — splice() + pop()
16. Overall Performance Comparison
17. Best Recommended Approaches
18. Final Conclusion

---

# 1. Introduction

Reversing a string is one of the most common programming problems.

It is frequently used in:

* Coding interviews
* Competitive programming
* Algorithm learning
* String manipulation tasks
* Data processing systems

Example:

```js
Input:  "hello"
Output: "olleh"
```

Although the problem looks simple, there are many ways to solve it.

Each solution teaches different programming concepts such as:

* Loops
* Arrays
* Recursion
* Swapping
* Divide and conquer
* Built-in JavaScript methods
* Complexity analysis

---

# 2. What is String Reversal?

String reversal means rearranging the characters of a string from last to first.

Example:

```txt
Original String : JavaScript
Reversed String : tpircSavaJ
```

Another example:

```txt
abcde
↓
edcba
```

---

# 3. Time Complexity Basics

Time complexity measures how much time an algorithm takes as input size grows.

## Common Complexities

| Complexity | Meaning       |
| ---------- | ------------- |
| O(1)       | Constant Time |
| O(log n)   | Logarithmic   |
| O(n)       | Linear        |
| O(n log n) | Linearithmic  |
| O(n²)      | Quadratic     |

---

## Important Notes

### O(n)

If input size doubles, execution time roughly doubles.

### O(n²)

If input size doubles, execution time becomes roughly four times larger.

Quadratic algorithms become slow for large data.

---

# 4. Space Complexity Basics

Space complexity measures extra memory used by an algorithm.

Example:

| Complexity | Meaning                            |
| ---------- | ---------------------------------- |
| O(1)       | No extra memory                    |
| O(n)       | Extra memory proportional to input |

Most string reverse algorithms use O(n) space because JavaScript strings are immutable.

Immutable means:

```txt
Strings cannot be modified directly.
```

Every modification creates a new string.

---

# 5. Implementation 1 — Basic Loop with String Concatenation

## Code

```js
function reverse(s) {
  var o = '';

  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];

  return o;
}
```

---

## Step-by-Step Explanation

### Input

```txt
hello
```

### Iteration Process

| i | Character | Output |
| - | --------- | ------ |
| 4 | o         | o      |
| 3 | l         | ol     |
| 2 | l         | oll    |
| 1 | e         | olle   |
| 0 | h         | olleh  |

---

## How It Works

1. Start from the last character.
2. Append each character into a new string.
3. Return the final reversed string.

---

## Complexity Analysis

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n²)      |
| Space | O(n)       |

---

## Why O(n²)?

JavaScript strings are immutable.

This line:

```js
o += s[i]
```

creates a completely new string every iteration.

So repeated copying increases total operations.

---

## Advantages

* Very easy to understand
* Beginner friendly

## Disadvantages

* Slow for large strings
* Inefficient memory usage

---

# 6. Implementation 2 — Array Assignment + join()

## Code

```js
function reverse(s) {
  var o = [];

  for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
    o[j] = s[i];

  return o.join('');
}
```

---

## How It Works

Instead of repeatedly creating strings, this implementation:

1. Stores characters inside an array
2. Joins them once at the end

---

## Example

```txt
hello
```

### Array Building

```txt
['o']
['o', 'l']
['o', 'l', 'l']
['o', 'l', 'l', 'e']
['o', 'l', 'l', 'e', 'h']
```

### Final Output

```txt
olleh
```

---

## Complexity Analysis

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n)       |
| Space | O(n)       |

---

## Why Faster?

Array insertion is efficient.

The string is created only once using:

```js
o.join('')
```

---

## Advantages

* Faster than string concatenation
* Better for large input
* Cleaner memory behavior

## Disadvantages

* Slightly more memory usage because of array

---

# 7. Implementation 3 — push() with charAt()

## Code

```js
function reverse(s) {
  var o = [];

  for (var i = 0, len = s.length; i <= len; i++)
    o.push(s.charAt(len - i));

  return o.join('');
}
```

---

## How It Works

This implementation:

1. Uses `push()` to insert characters
2. Uses `charAt()` to access characters

---

## Problem in This Code

The loop condition is:

```js
i <= len
```

It should be:

```js
i < len
```

because the current condition adds one extra empty character.

---

## Fixed Version

```js
function reverse(s) {
  var o = [];

  for (var i = 0, len = s.length; i < len; i++)
    o.push(s.charAt(len - i - 1));

  return o.join('');
}
```

---

## Complexity Analysis

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n)       |
| Space | O(n)       |

---

## Advantages

* Efficient
* Uses array push operation

## Disadvantages

* Original implementation contains logical bug

---

# 8. Implementation 4 — Built-in Methods

## Code

```js
function reverse(s) {
  return s.split('').reverse().join('');
}
```

---

# Step-by-Step Explanation

## Step 1 — split('')

```js
"hello".split('')
```

Result:

```js
['h', 'e', 'l', 'l', 'o']
```

---

## Step 2 — reverse()

```js
['h', 'e', 'l', 'l', 'o'].reverse()
```

Result:

```js
['o', 'l', 'l', 'e', 'h']
```

---

## Step 3 — join('')

```js
['o', 'l', 'l', 'e', 'h'].join('')
```

Result:

```txt
olleh
```

---

## Complexity Analysis

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n)       |
| Space | O(n)       |

---

## Advantages

* Short and readable
* Most commonly used solution
* Easy to maintain

## Disadvantages

* Creates multiple intermediate arrays
* Slightly more memory usage

---

# 9. Implementation 5 — while Loop + substring()

## Code

```js
function reverse(s) {
  var i = s.length,
      o = '';

  while (i > 0) {
    o += s.substring(i - 1, i);
    i--;
  }

  return o;
}
```

---

## How It Works

`substring(start, end)` extracts part of a string.

Example:

```js
"hello".substring(1, 2)
```

Result:

```txt
e
```

This implementation extracts one character at a time from the end.

---

## Complexity Analysis

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n²)      |
| Space | O(n)       |

---

## Why Slow?

Because:

```js
o += something
```

creates new strings repeatedly.

---

## Advantages

* Demonstrates substring usage

## Disadvantages

* Slower than array-based methods

---

# 10. Implementation 6 — Compact for Loop

## Code

```js
function reverse(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }

  return o;
}
```

---

## How It Works

This is a compact version of Implementation 1.

Everything happens inside the loop declaration.

---

## Equivalent Expanded Version

```js
function reverse(s) {
  var o = '';

  for (var i = s.length - 1; i >= 0; i--) {
    o += s[i];
  }

  return o;
}
```

---

## Complexity Analysis

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n²)      |
| Space | O(n)       |

---

## Advantages

* Short code

## Disadvantages

* Hard to read
* Difficult for beginners
* Same performance problem as Implementation 1

---

# 11. Implementation 7 — Recursive Solution

## Code

```js
function reverse(s) {
  return (s === '')
    ? ''
    : reverse(s.substr(1)) + s.charAt(0);
}
```

---

## What is Recursion?

Recursion means a function calls itself.

---

## Step-by-Step Example

```txt
reverse("abc")
```

### Step 1

```txt
reverse("bc") + "a"
```

### Step 2

```txt
reverse("c") + "b" + "a"
```

### Step 3

```txt
reverse("") + "c" + "b" + "a"
```

### Final Result

```txt
cba
```

---

## Complexity Analysis

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n²)      |
| Space | O(n)       |

---

## Problems

### 1. Recursive Calls

Each function call consumes stack memory.

### 2. Stack Overflow

Large strings may crash.

### 3. String Concatenation

Still inefficient.

---

## Advantages

* Good for learning recursion
* Elegant logic

## Disadvantages

* Poor performance
* Unsafe for large input

---

# 12. Implementation 8 — Tail Recursive Style

## Code

```js
function reverse(s) {

  function rev(s, len, o) {
    return (len === 0)
      ? o
      : rev(s, --len, (o += s[len]));
  };

  return rev(s, s.length, '');
}
```

---

## How It Works

Uses a helper function with:

* Current length
* Accumulated output

---

## Tail Recursion

Tail recursion means:

```txt
The recursive call is the final operation.
```

Some languages optimize this.

JavaScript engines usually do not.

---

## Complexity Analysis

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n²)      |
| Space | O(n)       |

---

## Advantages

* Better recursive structure
* Educational value

## Disadvantages

* JavaScript lacks reliable tail call optimization
* Still uses expensive concatenation

---

# 13. Implementation 9 — In-place Swap Technique

## Code

```js
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
```

---

## How It Works

This implementation swaps characters from both ends.

---

## Visualization

```txt
abcdef
```

### Swap 1

```txt
a ↔ f
```

Result:

```txt
fbcdea
```

---

### Swap 2

```txt
b ↔ e
```

Result:

```txt
fecdba
```

---

### Swap 3

```txt
c ↔ d
```

Result:

```txt
fedcba
```

---

## Complexity Analysis

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n)       |
| Space | O(n)       |

---

## Why Efficient?

* No repeated string creation
* Only swaps elements
* Minimal operations

---

## Advantages

* Very fast
* Interview friendly
* Algorithmically efficient

## Disadvantages

* Slightly more complex than built-in method

---

# 14. Implementation 10 — Divide and Conquer Recursion

## Code

```js
function reverse(s) {

  if (s.length < 2)
    return s;

  var halfIndex = Math.ceil(s.length / 2);

  return reverse(s.substr(halfIndex)) +
         reverse(s.substr(0, halfIndex));
}
```

---

## What is Divide and Conquer?

Divide and conquer means:

1. Divide problem into smaller parts
2. Solve smaller parts
3. Combine results

---

## Example

```txt
abcdef
```

### Divide

```txt
abc | def
```

### Reverse Separately

```txt
fed + cba
```

### Final Result

```txt
fedcba
```

---

## Complexity Analysis

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n log n) |
| Space | O(log n)   |

---

## Advantages

* Interesting recursive strategy
* Better theoretical complexity than normal recursion

## Disadvantages

* More difficult to understand
* Extra recursive overhead

---

# 15. Implementation 11 — splice() + pop()

## Code

```js
var reverser = function(str) {

  let string = str.split('');

  for(i = 0; i < string.length; i++) {

    string.splice(i, 0, string.pop());

  }

  console.log(string.join())
}

reverser('abcdef')
```

---

## How It Works

### pop()

Removes the last element.

### splice(i, 0, value)

Inserts value at index `i`.

---

## Example

```txt
abcdef
```

### Step 1

Remove:

```txt
f
```

Insert at index 0:

```txt
fabcde
```

---

### Step 2

Remove:

```txt
e
```

Insert at index 1:

```txt
feabcd
```

---

Continues until reversed.

---

## Problems

### Problem 1 — join()

```js
string.join()
```

creates comma-separated output.

Example:

```txt
f,e,d,c,b,a
```

Correct version:

```js
string.join('')
```

---

### Problem 2 — splice() Cost

`splice()` shifts many elements internally.

That makes this algorithm slow.

---

## Complexity Analysis

| Type  | Complexity |
| ----- | ---------- |
| Time  | O(n²)      |
| Space | O(n)       |

---

## Advantages

* Demonstrates array operations

## Disadvantages

* Poor performance
* Hard to understand
* Not recommended for production

---

# 16. Overall Performance Comparison

| Implementation         | Time Complexity | Space Complexity | Performance |
| ---------------------- | --------------- | ---------------- | ----------- |
| #1 Basic Concatenation | O(n²)           | O(n)             | Slow        |
| #2 Array Assignment    | O(n)            | O(n)             | Fast        |
| #3 push() + charAt()   | O(n)            | O(n)             | Fast        |
| #4 split-reverse-join  | O(n)            | O(n)             | Very Fast   |
| #5 while + substring   | O(n²)           | O(n)             | Slow        |
| #6 Compact for Loop    | O(n²)           | O(n)             | Slow        |
| #7 Recursive           | O(n²)           | O(n)             | Slow        |
| #8 Tail Recursive      | O(n²)           | O(n)             | Slow        |
| #9 In-place Swap       | O(n)            | O(n)             | Excellent   |
| #10 Divide & Conquer   | O(n log n)      | O(log n)         | Good        |
| #11 splice() + pop()   | O(n²)           | O(n)             | Poor        |

---

# 17. Best Recommended Approaches

## Best for Beginners

```js
str.split('').reverse().join('')
```

Reason:

* Easy to read
* Easy to remember
* Production friendly

---

## Best for Performance

Implementation 9 — In-place Swap Technique

Reason:

* Efficient operations
* Minimal unnecessary work
* Better algorithmic behavior

---

## Best for Learning Recursion

Use:

* Implementation 7
* Implementation 10

These teach:

* Recursive thinking
* Divide and conquer strategy

---

## Best for Interviews

Implementation 9 is often preferred because it demonstrates:

* Loop understanding
* Swapping logic
* Algorithmic thinking
* Complexity optimization

---

# 18. Final Conclusion

There are many ways to reverse a string in JavaScript.

Each implementation teaches different concepts.

| Concept          | Implementation |
| ---------------- | -------------- |
| Loops            | #1, #5, #6     |
| Arrays           | #2, #3, #4, #9 |
| Recursion        | #7, #8, #10    |
| Swapping         | #9             |
| Built-in Methods | #4             |
| Array Operations | #11            |

---

## Most Common Real-World Solution

```js
function reverse(s) {
  return s.split('').reverse().join('');
}
```

Reason:

* Simple
* Readable
* Maintainable
* Fast enough for most applications

---

## Most Algorithmically Efficient Solution

Implementation 9 — In-place Swap Technique

Reason:

* Avoids repeated string recreation
* Efficient swapping
* Better low-level performance

---

## Final Advice

When learning algorithms:

* Focus on understanding logic
* Compare complexity
* Practice multiple approaches
* Learn trade-offs between readability and performance

Understanding multiple solutions improves:

* Problem-solving skills
* Interview performance
* Algorithmic thinking
* JavaScript fundamentals
