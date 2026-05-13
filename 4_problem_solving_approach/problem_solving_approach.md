# Problem Solving Approach

## Overview

Problem solving is the most important skill in programming. Writing code is only the final step — the real work is understanding the problem and designing a solution.

An **algorithm** is a process or set of steps used to solve a problem.

> Algorithm = Step-by-step solution to a task

---

## Why This Matters

- Improves logical thinking
- Helps write efficient code
- Essential for coding interviews
- Builds strong problem-solving skills

---

## Problem Solving Steps

1. Understand the Problem
2. Explore Concrete Examples
3. Break It Down
4. Solve / Simplify
5. Look Back & Refactor

---

## 1. Understand the Problem

Before coding, clearly understand what is being asked.

### Questions to Ask

- Can I restate the problem in my own words?
- What are the inputs?
- What are the outputs?
- Do I have enough information?
- What are the important variables?

### Example

**Problem:**  
Write a function that takes two numbers and returns their sum.

- Input → two numbers
- Output → one number

---

## 2. Explore Concrete Examples

Examples help you understand how the solution should behave.

### Steps

- Start with simple examples
- Try more complex inputs
- Test empty inputs
- Test invalid inputs

### Example

```js
charCount("hello");
// { h:1, e:1, l:2, o:1 }

charCount("hi, Hello!");
// ignore special characters
```

---

## 3. Break It Down

Write steps in plain English before coding.

### Example Steps

1. Create an empty object
2. Loop through each character
3. Convert to lowercase
4. Check if alphanumeric
5. If exists → increment
6. Else → set to 1
7. Return result

---

## 4. Solve / Simplify

If the problem is difficult:

### Strategy

- Solve a simpler version first
- Ignore edge cases temporarily
- Focus on core logic

---

## 5. Look Back & Refactor

After solving, improve your code.

### Questions

- Can it be cleaner?
- Can it be faster?
- Is it readable?
- Can it be reused?

---

## Example: Character Count

### Basic Version

```js
function charCount(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }

  return result;
}
```

---

### Improved Version (Ignore Special Characters)

```js
function charCount(str) {
  let obj = {};

  for (let char of str) {
    char = char.toLowerCase();

    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }

  return obj;
}
```

---

### Optimized Version

```js
function charCount(str) {
  let obj = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
}
```

---

### Helper Function

```js
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);

  if (
    !(code > 47 && code < 58) && // 0-9
    !(code > 64 && code < 91) && // A-Z
    !(code > 96 && code < 123) // a-z
  ) {
    return false;
  }

  return true;
}
```

---

## Problem Solving Patterns

---

### 1. Frequency Counter

Use objects to count values.

**Use Cases:**

- Count characters
- Check anagrams
- Compare arrays

---

### 2. Multiple Pointers

Use two pointers to move through data.

**Use Cases:**

- Sorted arrays
- Finding pairs
- Removing duplicates

---

### 3. Divide and Conquer

Break problems into smaller parts.

**Use Cases:**

- Binary Search
- Merge Sort
- Quick Sort

---

## Final Recap

### Process

1. Understand
2. Example
3. Break Down
4. Solve
5. Refactor

---

## Key Insight

> Good developers don’t just write code fast — they think before they code.

---

## Next Step

- Practice problems daily
- Focus on patterns
- Review your solutions
