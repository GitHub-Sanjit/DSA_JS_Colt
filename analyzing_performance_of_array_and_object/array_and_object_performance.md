# BUILT-IN DATA STRUCTURES IN JAVASCRIPT
# Through the Lens of Big O

---

# Table of Contents

1. Introduction
2. Why Big O Matters for Data Structures
3. JavaScript Objects
4. When to Use Objects
5. Big O of Objects
6. Big O of Object Methods
7. JavaScript Arrays
8. When to Use Arrays
9. Big O of Arrays
10. Big O of Array Operations
11. Why `shift()` and `unshift()` are Slow
12. Arrays vs Objects
13. Real-World Examples
14. Key Takeaways
15. Conclusion

---

# 1. Introduction

JavaScript provides two built-in data structures that developers use constantly:

- Objects
- Arrays

Understanding how these structures behave internally is important because performance matters when applications grow larger.

Big O notation helps us measure:

- How fast operations are
- How performance changes as data grows

This allows us to choose the right data structure for the job.

---

# 2. Why Big O Matters for Data Structures

Imagine:

- An array with 5 items
- Another array with 5 million items

Some operations remain fast no matter how large the array gets.

Others become slower and slower.

Big O tells us how an operation scales.

---

# Common Big O Complexities

| Big O | Meaning | Performance |
|---|---|---|
| O(1) | Constant Time | Very Fast |
| O(log N) | Logarithmic | Fast |
| O(N) | Linear | Slower |
| O(N log N) | Sorting Complexity | Moderate |
| O(N²) | Nested Loops | Slow |

---

# 3. JavaScript Objects

Objects store data as key-value pairs.

## Example

```js
let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4]
};
````

---

# Structure of an Object

```text
{
  key: value
}
```

## Example

```js
{
  name: "John",
  age: 25
}
```

---

# Accessing Object Data

```js
person.name
```

OR

```js
person["name"]
```

---

# 4. When to Use Objects

Objects are best when:

* You do NOT need order
* You need fast lookup
* You need fast insertion/removal
* Data has labels or properties

---

# Example Use Cases

## User Profile

```js
const user = {
  id: 1,
  username: "alex",
  email: "alex@example.com"
};
```

## Product Information

```js
const product = {
  title: "Keyboard",
  price: 50,
  inStock: true
};
```

---

# 5. Big O of Objects

| Operation | Big O |
| --------- | ----- |
| Insertion | O(1)  |
| Removal   | O(1)  |
| Searching | O(N)  |
| Access    | O(1)  |

---

# Understanding These Operations

## Insertion → O(1)

Adding a property is extremely fast.

```js
user.age = 30;
```

The size of the object does not matter much.

---

## Removal → O(1)

Deleting a property is also fast.

```js
delete user.email;
```

---

## Access → O(1)

Accessing a property is instant.

```js
user.username
```

The engine directly jumps to the property.

---

## Searching → O(N)

Searching through object values is slower because JavaScript may need to inspect every property.

```js
for (let key in user) {
  if (user[key] === "alex") {
    console.log("Found");
  }
}
```

---

# Visual Representation

```text
Object

{
  name: "Alex",
  age: 25,
  city: "Dhaka"
}
```

Accessing `"age"`:

```text
Direct lookup → Fast → O(1)
```

Searching for value `25`:

```text
Check name
Check age
Found

May require checking many properties → O(N)
```

---

# 6. Big O of Object Methods

---

## Object.keys()

Returns all keys.

```js
Object.keys(user);
```

### Output

```js
["id", "username", "email"]
```

### Complexity

O(N)

Because every key must be visited.

---

## Object.values()

Returns all values.

```js
Object.values(user);
```

### Complexity

O(N)

---

## Object.entries()

Returns key-value pairs.

```js
Object.entries(user);
```

### Output

```js
[
  ["id", 1],
  ["username", "alex"]
]
```

### Complexity

O(N)

---

## hasOwnProperty()

Checks whether a key exists.

```js
user.hasOwnProperty("email");
```

### Complexity

O(1)

Very fast lookup.

---

# 7. JavaScript Arrays

Arrays are ordered collections.

## Example

```js
let names = ["Michael", "Melissa", "Andrea"];
```

Arrays can store mixed data types.

```js
let values = [true, {}, [], 2, "awesome"];
```

---

# Visual Representation

```text
Index:   0        1         2
       -------------------------
Value: | Michael | Melissa | Andrea |
       -------------------------
```

---

# Accessing Array Elements

```js
names[1]
```

### Output

```js
"Melissa"
```

---

# 8. When to Use Arrays

Use arrays when:

* Order matters
* You need indexed data
* You need iteration
* You frequently access by position

---

# Real-World Examples

## List of Students

```js
const students = ["Alice", "Bob", "Charlie"];
```

## Shopping Cart

```js
const cart = [
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 50 }
];
```

---

# 9. Big O of Arrays

| Operation | Big O   |
| --------- | ------- |
| Access    | O(1)    |
| Searching | O(N)    |
| Insertion | Depends |
| Removal   | Depends |

---

# Why "Depends"?

Because where you insert/remove matters.

---

## Access → O(1)

```js
arr[3]
```

Arrays use indexes.

Direct access is very fast.

---

## Searching → O(N)

```js
arr.includes(10)
```

JavaScript may scan the whole array.

---

# 10. Big O of Array Operations

| Method    | Big O      |
| --------- | ---------- |
| push()    | O(1)       |
| pop()     | O(1)       |
| shift()   | O(N)       |
| unshift() | O(N)       |
| concat()  | O(N)       |
| slice()   | O(N)       |
| splice()  | O(N)       |
| sort()    | O(N log N) |
| forEach() | O(N)       |
| map()     | O(N)       |
| filter()  | O(N)       |
| reduce()  | O(N)       |

---

# push() → O(1)

Adds to the end.

```js
arr.push(5);
```

Very efficient.

```text
[1,2,3]
       ↓
[1,2,3,5]
```

No re-indexing needed.

---

# pop() → O(1)

Removes from the end.

```js
arr.pop();
```

Efficient.

---

# shift() → O(N)

Removes from the beginning.

```js
arr.shift();
```

Problem:

All remaining elements must shift left.

---

# Example

Before:

```text
Index: 0 1 2 3
Value: A B C D
```

After removing `A`:

```text
Index: 0 1 2
Value: B C D
```

Every index changes.

This requires looping internally.

---

# unshift() → O(N)

Adds to the beginning.

```js
arr.unshift("X");
```

All existing elements move right.

---

# Example

Before:

```text
[A, B, C]
```

After:

```text
[X, A, B, C]
```

Indexes must be updated.

---

# concat() → O(N)

Combines arrays.

```js
arr1.concat(arr2);
```

JavaScript creates a new array and copies elements.

---

# slice() → O(N)

Copies part of an array.

```js
arr.slice(1, 3);
```

Copying takes time.

---

# splice() → O(N)

Can insert/remove anywhere.

```js
arr.splice(2, 1);
```

Elements may need shifting.

---

# sort() → O(N log N)

Sorting is more expensive.

```js
arr.sort();
```

Most modern engines use highly optimized sorting algorithms.

---

# Iteration Methods → O(N)

Methods like:

* forEach
* map
* filter
* reduce

visit every element.

```js
arr.map(num => num * 2);
```

---

# 11. Why `shift()` and `unshift()` are Slow

This is one of the most important concepts.

Arrays are indexed.

```text
0 1 2 3
```

When the first item changes:

* Every index after it must also change.

---

# Visualization

## Using push()

```text
[1,2,3]
       ↓
[1,2,3,4]
```

Only one operation.

---

## Using unshift()

```text
[1,2,3]

↓

[0,1,2,3]
```

But internally:

```text
1 moves
2 moves
3 moves
```

More work = slower.

---

# 12. Arrays vs Objects

| Feature        | Objects        | Arrays       |
| -------------- | -------------- | ------------ |
| Ordered        | No             | Yes          |
| Fast Access    | Yes            | Yes          |
| Fast Insertion | Yes            | Usually      |
| Fast Removal   | Yes            | Usually      |
| Best For       | Key-value data | Ordered data |

---

# Quick Comparison

## Objects

Good for:

```js
user.name
product.price
settings.theme
```

---

## Arrays

Good for:

```js
students[0]
todos[5]
messages[2]
```

---

# 13. Real-World Examples

---

# Example 1 — User Database

Use Objects:

```js
const user = {
  id: 1,
  name: "Alex"
};
```

Why?

Because properties matter more than order.

---

# Example 2 — Todo List

Use Arrays:

```js
const todos = [
  "Study",
  "Exercise",
  "Sleep"
];
```

Why?

Order matters.

---

# Example 3 — Shopping Cart

Use Array + Objects Together

```js
const cart = [
  {
    name: "Keyboard",
    price: 100
  },
  {
    name: "Mouse",
    price: 50
  }
];
```

This is extremely common in real applications.

---

# 14. Key Takeaways

# Objects

✅ Fast insertion
✅ Fast removal
✅ Fast access
❌ No ordering

Best for:

* Dictionaries
* User data
* Configurations

---

# Arrays

✅ Ordered data
✅ Fast access by index
✅ Great for iteration
❌ Slow insertion/removal at beginning

Best for:

* Lists
* Queues
* Collections

---

# Important Rule

## End of array = Fast

```js
push()
pop()
```

---

## Beginning of array = Slow

```js
shift()
unshift()
```

Because re-indexing is required.

---

# 15. Conclusion

Understanding the performance of arrays and objects is foundational in:

* Data Structures
* Algorithms
* Competitive Programming
* Frontend Development
* Backend Development

Choosing the correct data structure can make your code:

* Faster
* More scalable
* Easier to maintain

---

# Final Summary Table

| Structure | Best Use Case          |
| --------- | ---------------------- |
| Object    | Fast key-value storage |
| Array     | Ordered collections    |

---

# Final Big O Cheat Sheet

## Objects

| Operation | Complexity |
| --------- | ---------- |
| Insert    | O(1)       |
| Remove    | O(1)       |
| Access    | O(1)       |
| Search    | O(N)       |

---

## Arrays

| Operation     | Complexity |
| ------------- | ---------- |
| push/pop      | O(1)       |
| shift/unshift | O(N)       |
| Access        | O(1)       |
| Search        | O(N)       |
| sort          | O(N log N) |

---

# End Notes

These concepts are extremely important before learning advanced data structures like:

* Linked Lists
* Stacks
* Queues
* Trees
* Hash Tables
* Graphs

Because those structures are designed to solve limitations of arrays and objects.

```
```
