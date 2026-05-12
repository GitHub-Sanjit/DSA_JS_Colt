# Big O Notation — Complete Detailed Notes

# Table of Contents

1. Introduction to Big O
2. What Does “Better” Mean?
3. Timing Our Code
4. Counting Operations
5. Visualizing Time Complexities
6. Official Definition of Big O
7. Simplifying Big O Expressions
8. Common Time Complexities
9. Big O Time Complexity Quiz
10. Space Complexity
11. Big O Space Complexity Quiz
12. Graph of Common Complexities
13. Why Big O Matters
14. Logarithms in Big O
15. Recap

---

# 1. Introduction to Big O

## What is Big O?

Big O Notation is used to describe the performance or efficiency of an algorithm.

It tells us:

* How fast an algorithm grows as input size grows
* How much memory an algorithm uses
* Which solution is better for large inputs

Big O does **NOT** measure exact execution time.

Instead, it measures:

* Growth rate
* Trend of performance
* Scalability

---

## Real-Life Example

Imagine two students solving a problem:

### Student A

Checks every page manually.

### Student B

Uses the table of contents to jump directly.

For 10 pages:

* Both may seem fast.

For 10 million pages:

* Student B becomes dramatically faster.

This is why Big O matters.

---

# 2. What Does “Better” Mean?

When comparing algorithms, “better” can mean:

## 1. Faster Execution

How quickly the algorithm finishes.

Example:

```js
for(let i = 0; i < n; i++) {
  console.log(i);
}
```

This grows linearly.

---

## 2. Less Memory Usage

Some algorithms use extra arrays or objects.

Example:

```js
function double(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }

  return result;
}
```

This uses extra memory because of `result` array.

---

## 3. More Readable

Readable code is easier to:

* Debug
* Maintain
* Improve

Sometimes a slightly slower solution is preferred if it is easier to understand.

---

# 3. Timing Our Code

We often try to measure performance using time.

Example:

```js
function addUpTo(n) {
  let total = 0;

  for(let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}
```

We can use:

```js
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);
```

---

## Problems with Measuring Time

Execution time depends on:

* Machine speed
* CPU performance
* Background processes
* Programming language

So execution time is unreliable.

That is why we count operations instead.

---

# 4. Counting Operations

Instead of measuring seconds, we count simple operations.

Example:

```js
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

This always performs:

* 1 multiplication
* 1 addition
* 1 division

No matter how large `n` becomes.

So this is:

# O(1)

Constant time.

---

Another example:

```js
function printAllNumbers(n) {
  for(let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

If `n = 5`

* Loop runs 5 times.

If `n = 1000`

* Loop runs 1000 times.

Operations increase with input size.

So this is:

# O(n)

Linear time.

---

# 5. Visualizing Time Complexities

## O(1) — Constant Time

```txt
Input Size: 1 → 1 step
Input Size: 1000 → 1 step
Input Size: 1M → 1 step
```

Performance stays constant.

Example:

```js
arr[0]
```

---

## O(n) — Linear Time

```txt
Input Size: 10 → 10 steps
Input Size: 100 → 100 steps
Input Size: 1000 → 1000 steps
```

Example:

```js
for(let i = 0; i < n; i++) {}
```

---

## O(n²) — Quadratic Time

Nested loops.

Example:

```js
for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

If `n = 100`

* Total operations = 100 × 100 = 10,000

Growth becomes very large.

---

## O(log n) — Logarithmic Time

Very efficient.

The problem size gets divided repeatedly.

Example:

Binary Search.

```txt
16 items
→ 8
→ 4
→ 2
→ 1
```

Only 4 operations needed.

---

# 6. Official Definition of Big O

We say that an algorithm is:

# O(f(n))

if the number of simple operations the computer has to do is eventually less than a constant times `f(n)` as `n` increases.

---

## Examples

### Linear

```txt
f(n) = n
```

Big O:

# O(n)

---

### Quadratic

```txt
f(n) = n²
```

Big O:

# O(n²)

---

### Constant

```txt
f(n) = 1
```

Big O:

# O(1)

---

# 7. Simplifying Big O Expressions

Big O focuses on overall growth.

We ignore:

* Constants
* Smaller terms

---

## Constants Don’t Matter

### Example 1

```txt
O(2n)
```

Simplifies to:

# O(n)

Because constants are ignored.

---

### Example 2

```txt
O(500)
```

Simplifies to:

# O(1)

Still constant.

---

### Example 3

```txt
O(13n²)
```

Simplifies to:

# O(n²)

---

## Smaller Terms Don’t Matter

### Example 1

```txt
O(n + 10)
```

Simplifies to:

# O(n)

---

### Example 2

```txt
O(1000n + 50)
```

Simplifies to:

# O(n)

---

### Example 3

```txt
O(n² + 5n + 8)
```

Simplifies to:

# O(n²)

Because `n²` grows much faster than `n`.

---

# 8. Common Time Complexities

| Complexity | Name         | Example             |
| ---------- | ------------ | ------------------- |
| O(1)       | Constant     | Access array index  |
| O(log n)   | Logarithmic  | Binary Search       |
| O(n)       | Linear       | Single loop         |
| O(n log n) | Linearithmic | Merge Sort          |
| O(n²)      | Quadratic    | Nested loops        |
| O(2^n)     | Exponential  | Recursive Fibonacci |

---

# 9. Big O Time Complexity Quiz

## Quiz 1

```js
for(let i = 0; i < n; i++) {
  console.log(i);
}
```

### Answer

# O(n)

---

## Quiz 2

```js
for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

### Answer

# O(n²)

---

## Quiz 3

```js
console.log(arr[0]);
```

### Answer

# O(1)

---

## Quiz 4

```js
while(n > 1) {
  n = n / 2;
}
```

### Answer

# O(log n)

---

# 10. Space Complexity

Space Complexity measures:

# How much additional memory an algorithm needs.

---

## Primitive Values

Primitive values use constant space.

Examples:

* numbers
* booleans
* undefined
* null

Example:

```js
let x = 5;
```

Space Complexity:

# O(1)

---

## Arrays and Objects

Space depends on input size.

Example:

```js
function double(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }

  return result;
}
```

If input grows, result array also grows.

Space Complexity:

# O(n)

---

# 11. Big O Space Complexity Quiz

## Quiz 1

```js
function sum(arr) {
  let total = 0;

  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}
```

### Answer

# O(1)

Only one variable is used.

---

## Quiz 2

```js
function copy(arr) {
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
}
```

### Answer

# O(n)

Because a new array is created.

---

# 12. Graph of Common Complexities

```txt
Best → Worst

O(1)
  |
  |
O(log n)
  |
  |
O(n)
  |
  |
O(n log n)
  |
  |
O(n²)
```

---

## Visual Growth Comparison

```txt
n = 10

O(1)      → 1
O(log n)  → 3
O(n)      → 10
O(n logn) → 30
O(n²)     → 100
```

---

# 13. Why Big O Matters

Big O is important in:

## 1. Searching Algorithms

### Linear Search

Checks elements one by one.

Complexity:

# O(n)

---

### Binary Search

Divides the search space repeatedly.

Complexity:

# O(log n)

---

## 2. Efficient Sorting

### Bubble Sort

Complexity:

# O(n²)

---

### Merge Sort

Complexity:

# O(n log n)

Much faster for large datasets.

---

## 3. Recursion

Recursive solutions can affect:

* Time complexity
* Space complexity

Example:

```js
function countDown(n) {
  if(n <= 0) return;

  console.log(n);
  countDown(n - 1);
}
```

Each recursive call adds memory to the call stack.

---

# 14. Logarithms in Big O

Logarithms appear very frequently.

Especially in:

* Searching algorithms
* Sorting algorithms
* Trees
* Divide and conquer

---

## Understanding Logarithm

```txt
log₂(8) = 3
```

Because:

```txt
2³ = 8
```

---

## Example of O(log n)

```txt
Input Size: 32

32 → 16 → 8 → 4 → 2 → 1
```

Only 5 operations.

This is why logarithmic algorithms are extremely efficient.

---

# 15. Recap

## Important Points

* Big O helps analyze algorithm performance.
* It measures growth rate, not exact time.
* Big O ignores constants and smaller terms.
* Common complexities:

  * O(1)
  * O(log n)
  * O(n)
  * O(n log n)
  * O(n²)
* Space complexity measures memory usage.
* Efficient searching and sorting rely heavily on Big O.
* Big O is one of the most important concepts in Data Structures and Algorithms.

---

# Final Summary

Big O Notation is the language used to describe algorithm efficiency.

It allows developers to:

* Compare solutions
* Build scalable applications
* Write optimized code
* Understand performance bottlenecks

The more you practice analyzing algorithms, the easier Big O becomes.

---

# Practice Problems

## Problem 1

Find the time complexity:

```js
for(let i = 0; i < n; i++) {
  console.log(i);
}
```

---

## Problem 2

Find the time complexity:

```js
for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

---

## Problem 3

Find the space complexity:

```js
function createArray(n) {
  let arr = [];

  for(let i = 0; i < n; i++) {
    arr.push(i);
  }

  return arr;
}
```

---

## Problem 4

What is the complexity of Binary Search?

---

# Answers

1. O(n)
2. O(n²)
3. O(n)
4. O(log n)
