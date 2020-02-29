# Algorithms and Data Structures Masterclass

### By: Colt Steele

## Section: 1 - Big O Notation

Count the _number_ of simple operations the computer has to person.

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2; // 3 Operations
}
```

Each of the arithmetic operations count as 1 operation.
Neither of the arithmetic operations rely on "n", no many how big "n" gets, they will still only run 1 time each, or 3 times total. This is equivelant to **O(1)** or _Constant_ time.

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return;
}
```

Each time the loop runs, the total "+" operation runs. It is no longer 1 operation, as it now relies on "n", which would be "n" operations.

The equals sign, is another operation which relies on "n".
The "i++" ALSO runs "n" times.
"Total" and "i = 1" are both each 1 assignment operation.
"i <= n" is another "n" operations.

So one way of displaying the algorithm, would be "5n + 2".
There are _5n_ operations, and 2 single operations.

It doesn't matter what or how many things grow with "n", the algorithms number of operations grows roughly in proportion to "n".

This is the equivelant of **O(n)** or _O of n times_

BigO Notation is a way to formalize fuzzy counting. It allows us to talk formally about how the runtime of an algorithm _grows as the input grows_

We don't care about the details, only the trends.

---

An _algorithm_ is **O(f(n))** if the number of simple operations the computer has to do is eventually less than a _constant_ times **f(n)** as **n** increases.

f(n) could be _linear_ (f(n) = n)
f(n) could be _quadratic_ (f(n) = n^2)
f(n) could be constant (f(n) = 1)

When talking about _BigO_ you are talking about the _worst case scenario_ or the _upper bound_

```js
function countUpAndDown(n) {
  for (let i = 0; i < n; i++) {
    // O(n)
    console.log(i);
  }
  for (let j = n - 1; j >= 0; j--) {
    // O(n)
    console.log(j);
  }
}
```

An O(n) nested inside an O(n) operation is O(n \* n) or _O(n^2)_

---

#### Simplifying BigO Expressions

---

- Constants don't matter. _O(2n) === O(n)_ or _O(500) === O(1)_
- Smaller terms don't matter _O(n + 10)_ === O(n) or _O(1000n + 50)_ === O(n)

There are other rules that may not ALWAYS work but are good shorthands to follow.

- Arithmetic operations are _constant_
- Variable assignment is _constant_
- Accessing elements in an array or objects, are _constant_
- In a loop, the complexity if the length of the loop times the complexity of whatever happens inside of the loop.

_Math.max()_ = O(n)
_Math.min()_ = O(1)

---

### Space Complexity

---

Time Complexity - Runtime of an algorithm based on it's input.
Space Complexity - Amount of memory needed or used by an algorithm

- Most primitives (booleans, numbers, undefined, null) are _constant_ space.
- Strings require O(n) space (where n is the string length)
  - A string of 50 characters takes up roughly 50x more space than a single char.
- Reference types are generally O(n), where _n_ is the length (arrays) or the number of keys (objects).

```js
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

Remember, we are looking at _Space Complexity_ not _time_
Here, we have just 2 variable declarations. This would _O(1)_ space complexity.

We aren't adding new variables based on the size of _n_. The _total,_ and _i_ variables are there, no matter the size of the input.

```js
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

Here, we have 2 variables taking up _constant_ space, BUT because of the _push()_ method, which increases the size of _newArr_ based on _n_, the space complexity would be _O(n)_

---

### Logarithms

Another common bigO expression is _Logarithms_

A _Logarithm_ is the inverse of _exponential_

log2(8) === 2^3 = 8;

log base 2 is the more common base in Computer Science. Generally if and when you see _log_ you assume base 2. The 2 is omitted.

The logarithm of a number roughly measures the number of times you can divide that number by 2 _before you get a value that's less than or equal to one._

_Logarithmic_ time complexity is great! It is slightly greater than _Constant_ time complexity.

_Constant_ time complexity is _flat_ and doesn't grow with input.

_Logarithmic_ time complexity grows very slowly.

O(1) < O(log n) < O(n) < O(nlog n) < O(n^2)< O(n^n)

Certain _searching_ algorithms have _logarithmic_ time complexity.

Efficient _sorting_ algorithms involve _logarithms_

_Recursion_ sometimes involves logarithmic _space_ complexity.

---

## Section: 2 - Analyzing Performance of Arrays and Objects

**Objects**

Objects are _unordered_ data structures.

When to use Objects?

- When you don't need order
- When you need fast access / insertion and removal

**BigO of Objects**

- Insertion - O(1)
- Removal - O(1)
- Accessing - O(1)
- Searching - O(N)

**BigO of Object Methods**

- Object.keys - O(N)
- Object.values - O(N)
- Object.entries - O(N)
- hasOwnProperty - O(1)

_Arrays_ are ordered lists.

When to use Arrays

- When you _need_ order

**BigO of Arrays**

- Insertion - _It depends..._
- Removal - _It depends..._
- Searching - O(N)
- Access - O(1)

When trying to access an array index, JavaScript does this in _constant_ time. It doesn't have to search through each index to find a specific index you are trying to access, you have direct access to them. _IF_ you know the index you need.

If you are adding or inserting something into an array, it depends on how/where you are trying to insert the element.

_Inserting_ to the _end_ of the array using the _push()_ method, is done in _constant_ time. O(1).

_Inserting_ into the beginning of an array using the _shift()_ method is done in _linear_ time, or O(N).

The reason for this is because when you insert something into the beginning of the array, the whole array then needs to re-index itself to accomodate the added element/elements.

The same goes for _removing_ elements from the beginning of an array, as the entire array will need to re-index itself.

Sometimes, it may be meaningful to add or remove items from the beginning of an array. It's not something that _needs_ to be avoided. _Just be mindful of._

**BigO of Array Methods**

## Section: 3 - Problem Solving Approach

## Section: 4 - Problem Solving Patterns

## Section: 5 - Recursion

## Section: 6 - Searching Algorithms

## Section: 7 - Sorting Algorithms

## Section: 8 - Intro to Data Structures

## Section: 9 - Singly Linked Lists

## Section: 10 - Doubly Linked Lists

## Section: 11 - Stacks and Queues

## Section: 12 - Binary Search Trees

## Section: 13 - Tree Traversal ( Depth / Breadth First Search)

## Section: 14 - Binary Heaps ( Priority Queue)

## Section: 15 - Hash Tables

## Section: 16 - Graphs

## Section: 17 - Graph Traversal

## Section: 18 - Dijkstra's Algorithm ( Shortest Path )

```

```

```

```

```

```
