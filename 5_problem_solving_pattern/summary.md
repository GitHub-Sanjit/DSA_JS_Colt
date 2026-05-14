# 🧠 Problem Solving Patterns in JavaScript

## 🚀 How Do You Improve Problem Solving?

1. Devise a clear plan before coding
2. Master common problem-solving patterns
3. Practice consistently and analyze your mistakes

---

# 🔍 Problem Solving Patterns

## 📌 Common Patterns

- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking

These patterns help you reduce time complexity and write efficient code.

---

# 🔢 Frequency Counter Pattern

## 💡 Concept

Use objects or maps to count occurrences of values.

👉 Helps avoid nested loops (**O(n²)** → **O(n)**)

---

## ✅ Example: `same`

### Problem

Check if every value in `arr1` has its squared value in `arr2` with the same frequency.

---

### ❌ Naive Solution (O(n²))

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
```

---

### ✅ Optimized Solution (O(n))

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}
```

---

# 🔤 Anagram Problem

## 💡 Concept

Two strings are anagrams if they have the same characters with the same frequency.

---

## ✅ Example

```js
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let lookup = {};

  for (let char of str1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!lookup[char]) {
      return false;
    }
    lookup[char]--;
  }

  return true;
}
```

---

# 👉 Multiple Pointers Pattern

## 💡 Concept

Use two pointers moving through data to reduce complexity.

Best for:

- Sorted arrays
- Pair problems

---

## ✅ Example: `sumZero`

### Problem

Find the first pair that sums to zero in a sorted array.

---

### ❌ Naive (O(n²))

```js
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
```

---

### ✅ Optimized (O(n))

```js
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
```

---

# 🔢 Example: countUniqueValues

## 💡 Problem

Count unique values in a **sorted array**

---

### ✅ Solution (Non-Mutating)

```js
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      count++;
    }
  }

  return count;
}
```

---

# 🪟 Sliding Window Pattern

## 💡 Concept

Create a "window" over part of data and move it efficiently.

---

## ✅ Example: maxSubarraySum

### Problem

Find max sum of `n` consecutive elements.

---

### ❌ Naive (O(n²))

```js
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }

  return max;
}
```

---

### ✅ Optimized (O(n))

```js
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}
```

---

# ⚔️ Divide and Conquer

## 💡 Concept

Break problem into smaller parts, solve efficiently.

---

## ✅ Example: Binary Search

### Problem

Find index of a value in a sorted array

---

### ❌ Linear Search (O(n))

```js
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
```

---

### ✅ Binary Search (O(log n))

```js
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}
```

---

# 📌 Final Recap

- Always **plan before coding**
- Recognize patterns → saves time
- Replace nested loops when possible
- Use:
  - Frequency Counter → counting problems
  - Multiple Pointers → sorted data
  - Sliding Window → subarray problems
  - Divide & Conquer → searching

---

# 🧠 Key Insight

> The difference between average and strong problem solvers is not syntax — it's recognizing patterns.

---
