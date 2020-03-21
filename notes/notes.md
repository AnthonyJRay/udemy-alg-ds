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

- push() - O(1)
- pop() - O(1)
- shift() - O(N)
- unshift() - O(N)
- concat() - O(N)
- slice() - O(N)
- splice() - O(N)
- sort() - O(N \* log N)
- forEach/map/filter/reduce/etc. - O(N)

---

## Section: 3 - Problem Solving Approach

Problem Solving

- Understand the Problem

  - Can I restate the problem in my own words?
  - What are the inputs that go into the problem?
  - What are the outputs that should come from the solution?
  - Can the outputs be determined from the inputs?
  - How should I label the important pieces of data?

- Explore Concrete Examples

  - Start with Simple Examples
  - Progress to more Complex Examples
  - Explore Examples with Empty Inputs
  - Explore Examples with Invalid Inputs

- Break It Down

  - Write out steps needed to take, or small comments.
  - Pseudo Code

- Solve/Simplify

  - Solve the problem, if you can't, solve a simpler problem.
  - Find the core difficulty in what you're trying to do.
  - Temporarily ignore that difficulty
  - Write a simplified solution
  - Then incorporate that difficulty back in

- Look Back and Refactor
  - Can you check the result?
  - Can you derive the result differently?
  - Can you understand it at a glance?
  - Can you use the result or method for some other problem?
  - Can you improve the performance of your solution?
  - Can you think of other ways to refactor?
  - How have other people solved this problem?

## Section: 4 - Problem Solving Patterns

Some patterns include

- Frequency Counter

  - Using Objects or Sets to collect values/frequencies of values
  - This can often avoid the need for nested loops or O(N^2) operations with arrays/strings.

    - _comparing values_
    - _tracking frequencies_

- Multiple Pointers

  - Creating _pointers_ or values that correspond to an index or position and move towards the begining, end or middle based on a certain condition.
  - Very efficient for solving problems with minimal space complexity as well.
  - Good for **sorted** data structures. Doesn't work well for unsorted data structures.

  _Visual Example_
  Finding sum of a substring on numbers

```
[  1,  2,  3,  4,  5,  6,  7,  8,  9]
   ^  ^
[  1,  2,  3,  4,  5,  6,  7,  8,  9]
    ^       ^
[  1,  2,  3,  4,  5,  6,  7,  8,  9]
    ^              ^
[  1,  2,  3,  4,  5,  6,  7,  8,  9]
    ^                 ^
[  1,  2,  3,  4,  5,  6,  7,  8,  9]
    ^                       ^
[  1,  2,  3,  4,  5,  6,  7,  8,  9]
    ^                           ^
[  1,  2,  3,  4,  5,  6,  7,  8,  9]
    ^                                 ^
[  1,  2,  3,  4,  5,  6,  7,  8,  9]
   ^                                     ^
[  1,  2,  3,  4,  5,  6,  7,  8,  9]
        ^   ^
[  1,  2,  3,  4,  5,  6,  7,  8,  9]
        ^        ^
[  1,  2,  3,  4,  5,  6,  7,  8,  9]
        ^             ^
```

- Sliding Window
  - Creating a _window_ which can either be an array or number from one position to another.
  - Depending on a certain condition, the window either increases or closes(and a new window is created)
  - Very useful for keep track of a subset of data in an array/string etc.

_Visual Example_

```

[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
^ ^
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
^ ^
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
^ ^
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
^ ^
[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
^ ^

```

- Divide and Conquer

  - This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
  - This pattern can TREMENDOUSLY _decrease_ time complexity.

- Dynamic Programming
- Greedy Algorithms
- Backtracking
- Many more!

## Section: 5 - Recursion

We can write a solution to a problem in 2 ways,

- Iteratively (loops)
- Recursive (function calling itself)

Sometimes Recursion is a "cleaner" alternative to Iteration.

**The Call Stack**

The _call stack_ is what manages function calls and their order.

The "call stack" is actually a data structure called a "_stack_". (re Stacks and Queues)

- Anytime a function is invoked, it's placed (pushed) to the top of the call stack.
- When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop) it from the stack.

You might be used to functions being pushed on the call stack and popped off when they are done.

When writing "recursive" functions. functions will continue pushing new functions onto the call stack.

Invoke the same function with different input until you reach your base case.

The base is the condition when the recursion ends.

It's important to remember a "return" statement even if you're not returning anything. This would allow the recursion to break out of the base case.

Common pitfalls with Recursion, where things can go wrong..

- No base case
- Forgetting to return or returning the wrong thing
- Stack overflow! ( Maximum call stack size exceeded )

**Helper Method Recursion**

Commong recursive design pattern.

Good for when you are needing to compile an array or a list of data.

---

```js
function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);

  return outerScopedVariable;
}
```

When using recursion, variables get set or reset to the values they are assigned inside the function. So on each function call, you'll end up losing that data if needed. I believe this is where you can take advantage of closures. Wrapping the recursive function inside of a wrapping function, that holds things like variables, arrays, objects, the helper function can still have access to them if it needs because of the closure. Likewise, your variables are safe from being assigned the values assigned to them with each recursive call, and new execution contexts and variable environments.

```js
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInut.slice(1));
  }

  helper(arr);

  return result;
}
```

The above code, takes in an array of numbers, and outputs all the odd values.

First, there's a wrapper function, "closing" in the result array.
There is also the recursive function that contains the logic. With each recursive call of it,
it is calling itself with the _slice()_ method setting it's value to 1, targeting only the first value. As you can see in the checks and _push_ methods, we are always targeting only the first vlue, or index 0 value. Running slice(1) on the parameter each call, will return a copy of the original array, with the first index value being sliced out each time. This is where a base case comes in and is important. Without the if helperInput.length check, recursion would continue until you encountered that max stack size limit.

```js
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
```

You can also use "Pure Recursion" and eliminate the need for a wrapper function to house the array.
Here, i'm using just one function.

- Looks at [0] index, determines if it's even or odd, then pushes it to the array.
- reassigning the new array, to "concat" the same recursive code, will concatenate the arrays returned from each function call, all the way up to the original array, and then just returning that array.

Remember, when a function is called, it's put onto a _stack_ data structure. So each time the function calls itself, each call is put on the stack, ontop of the previous function call. ONLY until the base case is met, and then function calls end, do they start to return 1 by 1 back up.
Or back _down_ the stack, depending on how you picture it. I picture it as a stack of coins, so downward would be a easier picture to remember, instead of back _up_ for instance a tree.

As each function returns the _newArr_ array, the array's are being concatenated until the last function call which is concatenated together and returned.

Instructor illustrates a nice representation of what is happening..

```js
collectOddValue([1,2,3,4,5])
    [1].concat(collectOddValues([2,3,4,5]))
        [].concat(collectOddValues([3,4,5]))
            [3].concat(collectOddValues([4,5]))
                [].concat(collectOddValues([5]))
                    [5].concat(collectOddValues([]))
```

**Pure Recursion Tips**

- For arrays, use methods like _slice, the spread operator, and concat_ that make copies of arrays so you do not _mutate_ them.
- Remember that strings are _immutable_, so you will need to use methods like _slice, substr, or substring_ to make copies of strings.
- To make copies of objects, use _Object.assign_ or the _spread operator_

## Section: 6 - Searching Algorithms

**Linear Search**

Given an _unsorted_ array, the best way to search through it is with _Linear Search_

JavaScript has search methods built-in like,

- indexOf
- includes
- find
- findIndex

All these methods are done with Linear Search.

Linear Search would be starting at the beginning, and checking each index 1 by 1 until you find what you're looking for, if it isn't there, return false, or -1.

The time complexity of Linear Search at BEST is O(1). Depending on the size of the data being searched, you would need to already _know_ or get lucky.

The average time is also the worst case time complexity of O(n).

Linear Search is O(n) Time Complexity.

**Binary Search**

Binary Search can be much faster than Linear Search.

Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.

Binary Search only works on _sorted_ arrays, or data.

The idea of Binary Search is _Divide and Conquer_

_Time Complexity_

Worst/Average Case: O(log n)
Best Case: O(1)

As the size of data _doubles_ it takes 1 extra step.

## Section: 7 - Sorting Algorithms

- Implement Bubble Sort
- Implement Selection Sort
- Implement Insertion Sort

These are the least efficient of the sorting algorithms, but much simpler.

It's good to understand why it is important to learn these more simpler algorithms.

Some of these simpler sorting algorithms perform really well for certain special circumstances.

_JavaScript built-in sorting methods_

The JavaScript built-in _sort()_ method might work well on strings, or letters, but it doesn't work well with numbers. The reason is, is that it converts those numbers to strings and sorts them by their _Unicode_ code value, instead of their number or integer value.

This creates some bizzare behavior and sorting results when working with numbers.

The _sort()_ method, can take an optional _comparator_ function. Which you can then use to tell JavaScript _how_ you want it to sort that data.

The comparator looks at pairs of elements (a and b), and determines their sort order based on the return value.

- If it returns a negative number, _a_ should come before _b_

- If it returns a negative number, _a_ should come AFTER _b_

- If it returns 0, _a_ and _b_ are the same as far as the sort is concerned.

```js
function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);
// [ 4, 6, 10, 15]
```

If you were to not use a comparator function, the output would like something like...

```js
// [10, 15, 4, 6]
```

This is why it is important to understand the _sort()_ method, and the _comparator_ function.

You can use a comparator function to instead of sorting strings alphabetically, to sort them shortest to longest based on their length.

```js
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}
```

All of these sorting orders can be done in reverse by simply reversing the order of the first and second paramter being passed to the comparator function.

---

**Bubble Sort**

---

_Bubble Sort_ isn't commonly used, as it doesn't perform very well, but there is one use case where it does excel.

_Bubble Sort_ is a sorting algorithm where the largest values bubble up to the top.

_Swapping function examples_

```js
// ES5 way
function swap(arr, index1, index2) {
  let temp = index1;
  index1 = index2;
  index2 = temp;
}

// ES6 way
function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

// Both functions accomplish the same goal. The ES6 way has a lower Space Complexity, but isn't as readable.
```

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([37, 45, 29, 8]);
```

This is a working _Bubble Sort_ solution. The problem is that it isn't very optimized. It makes needless comparisons from start to finish on each pass through the array.

It also, compares outside the array. When _j_ becomes the end of the array, and it compares to _j + 1_ it is comparing to an index that is 1 higher than the end would wouldn't exist, therefore it compares j to undefined.

_Instead_ what you want is for it to stop comparing once it gets to the end, and shrink the end each time an element gets sorted, or bubble to it.

```js
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([37, 45, 29, 8]);
```

You can further optimize _Bubble Sort_ when in situations where you array, or Data is nearly sorted. When it is nearly or close to being sorted, you can alter the Bubble Sort algorithm with a boolean flag to say if swaps were made or not, and break out of the loop if no swaps were made.

Without this, if you had an array which required only 1 item to be sorted, the bubble sort algorithm would continue looping and comparing until reaching the end, even if the array had finished sorting in a previous iteration.

```js
// Bubble Sort | noSwap Optimization
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
```

Here, we are initializing a variable to act as a flag. If no swaps are made, set it to true, once a swap is made, set it to false.

So after each iteration of the _inner loop_ it will check if noSwaps is true or false. If true, break out of the loops entirely, if false, continue looping.

The _Time Complexity_ for _Bubble Sort_ is roughly O(N^2).

However, in the case your data or array is almost or nearly sorted, using the _noSwaps_ optimization, it's closer to O(n) or Linear Time.

That would be a _best case_ for Bubble Sort, and ONLY if you know your data is almost or nearly sorted.

---

**Selection Sort**

Similar to Bubble Sort, but instead of first placing large values into a sorted position, it places small values into sorted position.

```js
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

selectionSort([34, 22, 10, 19, 17]);
```

Without using the check for the swap, you would end up swapping even if the position you started in was the lowest. This would swap an unnecessary amount of times.

_Selection Sort_ has a Time Complexity of O(N^2) also, like Bubble Sort.

The only area where Selection Sort is effective, is if you are trying to minimize the amount of swaps you are doing.

Where _Bubble Sort_ performs many swaps to get the largest value to the end, _Selection Sort_ only makes 1 swap at the end of each loop.

This would only be important if for some reason you are worried about writing to memory, which is not very often.

Selection Sort is not common to use, but very easy to understand and implement.

---

**Insertion Sort**

Builds up the sort, by gradually creating a larger left half which is always sorted.

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}
```

Insertion Sort time complexity is also O(N^2).
A niche edge case situation where insertion sort is good is if for some reason you need an _online_ algorithm. Meaning if you have data coming in realtime, and you want/need to sort it as it comes in, insertion sort would be a good option.

---

**Intermediate Sorting Algorithms**

- The basic algorithms (Bubble, Insertion, and Selection Sort) don't scale very well. They work with small amounts of data, but an array with 100,000 elements, these would take quite some time to finish.

- Fortunately there are faster sorting algorithms (Merge, Quick, Radix Sort)

- These are a family of sorting algorithms that can improve time complexity from O(n^2) to O(n log n).

- With these algorithms there is a tradeoff between _efficiency_ and _simplicity_

- The more efficient algorithms are much less simple, and generally take longer to understand.

---

**Merge Sort**

_Merge Sort_ is like a combination of 3 things, splitting, sorting, and then merging.

_Merge Sort_ exploits the fact that arrays of 0 or 1 element are always sorted.

_Merge Sort_ works by decomposing an array into smaller arrays of 0 or 1 elements, then build up a newly sorted array.

Most _merge sort_ algorithms take advangage of _Recursion_

- Break up the array into halves until you have arrays that are empty or have one element.
  - One good way to do this is by using the _slice()_ method.
  - From 0 to the middle of the array, then from the middle of the array to 0.
- Then, call the mergeSort again, to break each half, into their own halves, continuing recursively.
- The base case being that each arrays length, is either less than or equal to one. ( <= 1 )
- That way the length of the arrays are either 1, or 0.
- Once you have smaller sorted arrays, ( arrays with length of 1 or 0 are assumed sorted ), merge those arrays with other sorted arrays until you are back at the full length of the array.

_Time Complexity_
Best - O(n log n)
Average - O(n log n)
Worst - O(n log n)

_Space Complexity_
O(n)

**Quick Sort**

- Like Merge Sort, Quick Sort exploits the fact that arrays of 0 or 1 element are always sorted.

- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.

- Once the pivot is positioned, appropriately, _quick sort_ can be applied on either side of the pivot.

_Pivot Helper_

- In order to implement merge sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot.

- Given an array, this helper function should designate an element as the pivot.

- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.

- The order of element on either side of the pivot doesn't matter!

- The helper should do this _in place_ that is, it should not create a new array.

- When complete, the helper should return the index of the pivot.

_Picking a Pivot_

Picking a pivot, is actually an important decision.

- The runtime of quick sort depends in part on how one selects the pivot.

- Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.

_Pivot Pseudocode_

- Write a function that accepts three arguments: an array, a start index, and an end index. (these can default to 0 and the array length minus 1, respectively)

- Grab the pivot ( start, middle, end, anywhere )

- Store the current pivot index in a variable ( this will keep track of where the pivot should end up )

- Loop through the array form the start until the end.

  - If the pivot is greater than the current element, increment the pivot index variable and than swap the current element with the element at the pivot index.

- Swap the starting element (i.e. the pivot ) with the pivot index.

- Return the pivot index.

_Quicksort Pseudocode_

- Call the pivot helper on the array

- When the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of that index and the subarray to the right of that index.

_Quicksort_ time complexity can increase when taking the very minimum or the maximum number, in that case the decomposition time goes from O(n logn) to O(n).

With comparison time being O(n) already, this would turn Quicksort into O(n^2), or quadratic time.

Usually good to pick something from the middle somewhere are your pivot. It's best to try and pick from where the minimum or maximum could be least likely. Although keep in mind, in an unsorted array, the middle you are grabbing could end up being the minimum or maximum value.

---

All of the previous sorts, are all _Comparison Sorts_ with the worst of them being O(n^2) like Bubble, Selection, and Insertion Sort and O(n log(n)) like Merge and Quicksort.

We _can_ do even _better_ than O(n log(n))...... **sometimes**

It depends, but we can't do it by using comparisons or a comparison type of sort.

For example, there are a group of sorts called _Integer Sorting Algorithms_ that would only work on _integers_

**Radix Sort**

- _Radix Sort_ is a special sorting algorithm that works on lists of numbers.

- It never makes comparisons between elements.

- It exploits the fact that information about the size of a number is encoded in the number of digits. More digits obviously mean a bigger number!
  - For example, 99 < 111

_Radix Sort Helpers_

In order to implement _Radix Sort_ it's helpful to build a few helper functions first:

getDigit(num place) - returns the digit in _num_ at the given _place_ value.

```js
getDigit(12345, 0); // 5
getDigit(12345, 1); // 4
getDigit(12345, 2); // 3
getDigit(12345, 3); // 2
getDigit(12345, 4); // 1
getDigit(12345, 5); // 0
```

Unlike an array or string, getDigit works in reverse, where the last digit is the first index, ie (12345, 0) = 5.

Unfortunately there isn't an easy way to achieve this in JavaScript, you will have to write your own methods.

```js
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// 7323 / 100
// 73.23 <-- floor to 73
// 73 % 10 = 3

// The value at index 2, of 7323 is 3..
// Remember we are working backwards.
```

In the above example, you can ignore the _Math.abs()_ as it is there just in case of negative numbers.

_Radix Sort Pseudocode_

- Define a function that accepts a list of numbers.
- Figure out how many digits in the largest number.
- Loop from k = 0 up to this largest number of digits.
  - Each time through, create "buckets" for each digit ( 0 to 9 )
    - A bucket being an array. A good way is creating an array, with 10 sub arrays.
    - Place each number in the corresponding bucket based on it's _k'th_ digit.
    - Replace our existing array with value in our buckets, starting with 0 and going up to 9.
    - return list at the end.

---

## Section: 8 - Intro to Data Structures

_What is a data structure?_

- _Data Structures_ are collections of values, the relationships among them, and then functions or operations that can be applied to the data.

- The more time you spend as a developer, the more likely you'll need to use one of these data structures.
  - You've already worked with many of them unknowingly! (i.e. The DOM)

_There is no one "Best" data structure_

- They all excel in different situations.

  - Working with Maps or Location? Use a _Graph_!

  - Need an ordered list with fast inserts/removals at the beginning and end? Use a _Linked List_!

  - Web scraping nested HTML? Use a _Tree_!

  - Need to write a scheduler w/ tasks? Use a _Binary Heap_!

**ES2015 Class Syntax**

A _class_ is a blueprint for creating objects with pre-defined properties and methods.

The method to create new objects _must_ be called constructor.

The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!

```js
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 1) {
      return 'You are expelled!';
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    this.scores.reduce((a, b) => {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

let anthony = new Student('Anthony', 'Eriksen');
anthony.fullName(); // Anthony Eriksen
anthony.addScore(92);
anthony.addScore(89);
anthony.scores; // [ 92, 89 ]
anthony.addScore(78);
anthony.calculateAverage(); // 86.333333...
```

_Instance Methods_

- Instance Methods are methods that provide functionality to a single instance, or individual class.
  - For example, _.push()_ is an Instance Method of an array, and it pertains only to the array it's being called on.
  - The above _fullName()_ method is an example of an Instance Method.

---

_Class Methods_

- Class methods are more like a utility function, than being related to a _single_ instance.

- The _static_ keyword defines a static method for a class. Static methods are called without _instantiating_ their class and _cannot_ be called through a class instance. Static methods are often used to create utility functions for an application.

- Class methods are not commonly used.

- Class methods can only be used on/with the class itself! Not with any of the instances created by that class. It is not accessible, only the class can access it.

- It allows the Class itself to run functionality using the data in objects created by it. This is how it's more of a _utility_ function.

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
  }
}

const p1 = new Points(5, 5);
const p2 = new Points(10, 10);

p1.distance(); // Error
Point.distance(p1, p2); // 7.07106.......
```

**RECAP**

- Classes are blueprints that when created make objects known as _instances_
- Classes are created with the _new_ keyword.
- The _constructor_ function is a special function that gets run when the class is instantiated.
- Instance methods can be added to classes similar to methods in objects.
- Class methods can be added using the _static_ keyword.

---

## Section: 9 - Singly Linked Lists

- A _Linked List_ is a data structure that contains a _head, tail and length_ property.

- _Linked Lists_ consist of nodes, and each _node_ has a _value_ and a _pointer_ to another node or null.

A _Singly_ linked list only contains a pointer to the next node, whereas a _Doubly_ linked list also contains a pointer to it's previous node.

_Comparisons with Arrays_

- Linked Lists

  - Do not have indices!
  - Connected via nodes with a next pointer
  - Random access is not allowed

- Arrays

  - Indexed in order!
  - Insertion and deletion can be expensive
  - Can quickly be accessed at a specific index

Linked Lists start with a _head_ which points to the NEXT node in the list until the _tail_ which is the end. The end has no pointer to next, or it points to null.

Using Linked Lists allows you to insert and remove nodes in _constant_ time. Whereas with Arrays, when an item is inserted or removed from the start, the array must re-index itself to update the values with the proper indices.
This makes _Linked Lists_ extremely good at _insertion_ and _deletion_

Random access is not allowed because the nodes or values are _not_ indexed like an array, therefore to get a node, you MUST start at the head and go through each node in the chain (list) unless you get to the node you are trying to access.

So one of the biggest, or only reason you would want to use a Linked List is if you care or need to care about the speed of insertion and deletion.

A good idea for in the case of having a very long or large amount of data, and you don't need random access to it but just to add and/or remove items, is to use a _Linked List_

When popping something off the list, remember to add a check if the length is === 0, then set the head and tail to null. Otherwise the length will decrement and the current, or head will remain.

See _app.js_ for methods code.

---

_Push_

- Inserts a new element to the end of a Linked List.
  _Pop_
- Removes the last element in a Linked List.
  _Shift_
- Removes the first element in a Linked List and returns it.
  _Unshift_
- Inserts a new element at the beginning of the Linked List.
  _Get_
- Returns a given positions value in the Linked List.
  _Set_
- Changing the value of a node based on it's position in the Linked List.
  _Insert_
- Adding a node to the Linked List at a specific position.
  _Remove_
- Removing a node from the Linked List at a specific position.
  _Reverse_
- Reversing the Linked List in place.

Linked Lists BigO Complexity -

- Insertion O(1)
- Removal: O(1) or O(n)
  - This depends on where the removal is. At the beginning is easy at O(1), at the end it takes O(n) because you must iterate through the list, starting from the head.
- Searching: O(n)
- Accessing: O(n)

_Recap_

- Singly Linked Lists are an excellent alternative to arrays when insertion and deletiong at the beginning are frequently required.

- Arrays contain a built in index whereas Linked Lists do not.

- The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues.

## Section: 10 - Doubly Linked Lists

Doubly Linked Lists are almost identical to Singly Linked Lists, except that every node has another pointer the it's previous node.

The real _drawback_ to Doubly Linked Lists versus Singly Linked Lists is more memory. Each node will have their own previous property taking up more memory.

With the added drawback of more memory usage, comes the advantage of more flexibility.

_Recap_

- Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes.

- Better than Singly Linked Lists for finding nodes and can be done in half the time.

- However, they do take up more memory considering the extra pointer.

## Section: 11 - Stacks and Queues

**Stacks**

- A collection of data, that must abide by a _LIFO_ principal.

- A stack is a _LIFO_ data structure.

  - _Last in - First out_

- The last element added to the stack will be the first element removed from the stack.

- There a several ways to implement a stack, a Linked List is one of them!

_Where Stacks are used_

- Managing function invocations.
- Undo / Redo functionality e.g. Like in PhotoShop!
- Routing (this history object in the browser) is treated like a stack!

There is more than one way of implementing a stack. It is an abstract concept.

The easiest way to implement a _Stack_ is to use an _array_
Many other programming languages come with their own _Stack_ functionality, but JavaScript does not.

By using push and pop in tandem on an Array, you are already using a Stack! As long as these are the only methods of adding and removing elements, and not being able to add or remove elements from the middle, etc.

_Recap_

- Stacks are a LIFO (last in - first out) data structure where the last value in is always the first one out.

- Stacks are used to handle function invocations (the call stack, see recursion), for operations like undo/redo, and for routing(remembering pages previously visited, and go back/forward) and much more!

- They are not a built-in data structure in JavaScript, but are simple to implement.

---

**Queues**

---

_What is a queue?_

- Queues are a FIFO (first in - first out) data structure.

- Background tasks
- Uploading resources
- Printing / Task processing

Can be implemented using an _array_ or _class_

Creating and using queues in arrays is simple as long as you follow the first in/first out principle!

Push - Add items to end of array
Shift - Remove items from the beginning

_OR_

Unshift - Add items from the beginning
Pop - Remove items from the end.

Either methods work, as long as you are removing starting from the the _first_ item that was added to the Queue data structure, FIRST.

No matter which way you choose, because of arrays having to reindex, this requires O(n) time, or linear time.

When creating/using a Queue data structure, the methods for adding and removing and generally name _enqueue_ and _dequeue_

## Section: 12 - Binary Search Trees

_What is a Tree?_

- A data structure that consists of nodes in a _parent/child_ relationship.

_Tree Terminology_

Root - The top node in a tree.
Child - A node directly connected to another node when moving away from the Root.
Parent - The converse notion of a child.
Siblings - A group of nodes with the same parent.
Leaf - A node with no children.
Edge - The connection between one node and another.

_Uses for Trees_

There are many different applications for Trees.

- The DOM (Document Object Model)
- Network Routing
- Abstract Syntax Trees
- Artificial Intelligence
- Folders in an operating system
- JSON

Linked Lists are great when you don't require indexes and need fast insertion and removal from the beginning. Whereas arrays, take the advantage of indexing, they are also slow to add or remove elements from the beginning because the array needs to re-index itself.

A _Binary Search Tree_ excels at.... Searching!

- Every parent node has at most _two_ children.

There are many ways of traversing a tree.
The search part of a Binary Tree comes into play when it follows these principles...
- Every node to the _left_ of a parent node is _always less_ than the parent.
- Every node to the _right_ of a parent node is _always greater_ than the parent.

## Section: 13 - Tree Traversal ( Depth / Breadth First Search)

There are many ways to traverse tree's, whereas with Linked Lists, there's really only 1 way. Start from the head, until you reach the tail.

There are 2 _main_ ways of traversing a tree.

- Breadth-first Search
- Depth-first Search





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

```

```

```

```
