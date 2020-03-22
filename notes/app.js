// Return the character count of a string

// This function uses a regex to filter out any non-alphanumeric characters.
// This function also takes into account casing and uses toLowerCase()

// ------------------------------------------------
// function charCount(str) {
//   var obj = {};
//   for (let i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// }
// ------------------------------------------------

// Refactored

// Replaces standard forloop with a for of loop
// Uses isAlphaNumeric function check instead of Regex
// Moves toLowerCase after the check. May prevent unnecessary index checking?
// Shortens the if statements down to 1 clean line

// function charCount(str) {
//   var obj = {};
//   for (let char of str) {
//     if (isAlphaNumeric(char)) {
//       char = char.toLowerCase();
//       obj[char] = ++obj[char] || 1;
//     }
//   }
//   return obj;
// }

// Replaces regex with a callback(?) function that checks the character code of the character for numeric values, uppcase, and lowercase. Returns false if neither.

// function isAlphaNumeric(char) {
//   var code = char.charCodeAt(0);
//   if (
//     !(code > 47 && code < 58) &&
//     !(code > 64 && code < 91) &&
//     !(code > 96 && code < 123)
//   ) {
//     return false;
//   }
//   return true;
// }

// Check if the values in arr2 match the values in arr1^2. Doesn't have to be in order.

// This time complexity is O(n^2) Because of the for loop which is O(n), and the nested indexOf() method which is also O(n).
// const a = [1, 2, 3];
// const b = [4, 1, 9];

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// }

// ---------------------------------------

// Time Complexity of the same solution refactored is of O(n). Here we have 3 loops, but neither is nested. Which would give us O(3n) which is just O(n).
// It doesnt matter if it was O(1000n). This would mean that the function just loops 3000 times. Alternatively with a nested loop, the time complexity of 2 loops, nested, with a 1000 counter, would have to iterate 1,000,000 times!!.
// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for (let val of arr1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//     }
//     for (let val of arr2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//     }
//     for (let key in frequencyCounter1) {
//         if (!(key ** 2 in frequencyCounter2)) {
//             return false;
//         }
//         if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//             return false
//         }
//     }
//     return true;
// }

// console.log(same(a, b))

// ---------------------------

// Anagram Challenge
// Create a function that takes in 2 strings and returns true or false if the strings are Anagrams of each other.

// function isAnagram(str1, str2) {
//     let string1 = {};
//     let string2 = {};
//     if (str1 === "" || str2 === "") {
//         return;
//     }
//     if (str1.length !== str2.length) {
//         return;
//     }
//     for (let char of str1) {
//         char = char.toLowerCase();
//         string1[char] = (string1[char] || 0) + 1;
//     }
//     for (let char of str2) {
//         char = char.toLowerCase();
//         string2[char] = (string2[char] || 0) + 1;
//     }
//     for (let key in string1) {
//         if (string1[key] !== string2[key]) {
//             return false;
//         }
//     }
//     return true;
// }

// Another way to check Anagrams, this solution uses 2 for loops, and just 1 object. It stores all the letters from the first string, and decrements or in a way "crosses off" letters as it loops through the second string.

// function validAnagram(first, second) {
//     if (first.length !== second.length) {
//         return false;
//     }

//     const lookup = {};

//     for (let i = 0; i < first.length; i++) {
//         let letter = first[i]; // Makes it easier to type.

//         // If letter exists, increment, otherwise set to 1
//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }

//     for (let i = 0; i < second.length; i++) {
//         let letter = second[i];

//         // if can't find letter or letter is zero, then it's not an anagram.
//         if (!lookup[letter]) {
//             return false;
//         } else {
//             lookup[letter] -= 1;
//         }
//     }

//     return true;
// }

// console.log(validAnagram("anagram", "agnaram"));

// -----------------------------------------

// This is using a multiple pointers pattern. Setting variables has index values, one starts from the left, or start. The other starts from the right or end, and they work towards the middle.
// This approach removes the need for a nested forLoop which has a time complexity of O(n^2).
// This approach has a time complexity of O(n). Much much better.
// My question is, what if in a large array of sorted numbers, the pairs existed on either side of the middle? It wouldn't catch those pairs?
// Is this an issue? How could you account for that?

// function sumZero(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === 0) {
//             return [arr[left], arr[right]];
//         } else if (sum > 0) {
//             right--;
//         } else {
//             left++;
//         }
//         if (arr[left] === arr[right]) {
//             throw new Error;
//         }
//     }
// }
// // console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))
// console.log(sumZero([-4, -3, -2, -1, 0, 5, 10])) // No pairs, throws error

// Count the amount of Unique Values in an Array.
// The time complexity of this pattern is O(n)

// function countUniqueValues(arr) {
//     if (arr.length === 0) return 0;
//     let i = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     return i + 1;
// }
// const myArray = [-5, -5, -2, -1, 7, 7, 12]
// console.log(countUniqueValues(myArray));

// -----------------------------------------------------

// Function that returns the largest sum of a sub string in an array.
// e.g. if num = 3, find the largest sum of 3 sub string elements.
// The time complexity for this is O(n^2) because of the nested forLoops.

// function maxSubArraySum(arr, num) {
//     if (num > arr.length) {
//         return null;
//     }
//     var max = -Infinity; // To account for negatives numbers
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp;
//         }
//     }
//     return max;
// }

// console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// Same function refactored to O(n) time complexity.

// function maxSubArraySum(arr, num) {
//     let maxSum = 0;
//     let tempSum = 0;
//     if (arr.length < num) return null;
//     for (let i = 0; i < num; i++) {
//         maxSum += arr[i];
//     }
//     tempSum = maxSum;
//     for (let i = num; i < arr.length; i++) {
//         tempSum = tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum, tempSum); // Could also just use a simple if statement and compare the two, then setting whichever is greater to maxSum.
//     }
//     return maxSum;
// }
// console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// Check for Duplicates exercise
// My Solution
// --------------
// function areThereDuplicates(...args) {
//     let obj = {};
//     args.forEach(item => {
//         obj[item] ? obj[item] += 1 : obj[item] = 1;
//     })
//     let keys = Object.entries(obj)
//     let index = 1;
//     for (let i = 0; i < keys.length; i++) {
//         if (keys[i][index] >= 2) {
//             return true;
//         }
//     }
//     return false;
// }

// ------------------------------------------------
// Instructor Solutions
// Same Frequency
// function sameFrequency(num1, num2) {
//     let strNum1 = num1.toString();
//     let strNum2 = num2.toString();
//     if (strNum1.length !== strNum2.length) return false;

//     let countNum1 = {};
//     let countNum2 = {};

//     for (let i = 0; i < strNum1.length; i++) {
//         countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//     }

//     for (let j = 0; j < strNum1.length; j++) {
//         countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//     }

//     for (let key in countNum1) {
//         if (countNum1[key] !== countNum2[key]) return false;
//     }

//     return true;
// }

// ---------------------------------------

// Instructor Solution ( Frequency Counter)
// ---------------
// function areThereDuplicates() {
//     let collection = {}
//     for (let val in arguments) {
//         collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     for (let key in collection) {
//         if (collection[key] > 1) return true
//     }
//     return false;
// }

// ------------
// Multiple Pointers Solution
// function areThereDuplicates(...args) {
//     // Two pointers
//     args.sort((a, b) => a > b);
//     let start = 0;
//     let next = 1;
//     while (next < args.length) {
//         if (args[start] === args[next]) {
//             return true
//         }
//         start++
//         next++
//     }
//     return false
// }

// One-liner
// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }
// console.log(areThereDuplicates(1, 4, 6, 7, 1))
// console.log(areThereDuplicates(1, 2, 3))
// console.log(areThereDuplicates(1, 2, 2))
// console.log(areThereDuplicates('a', 'b', 'c', 'a'))
// console.log(areThereDuplicates('a', 'b', 'f', 'e', 'b'))

// ---------------------------------------------------------------------

// // Pair Average using Multiple Pointers
// function averagePair(arr, num) {
//     let start = 0
//     let end = arr.length - 1;
//     while (start < end) {
//         let avg = (arr[start] + arr[end]) / 2
//         if (avg === num) return true;
//         else if (avg < num) start++
//         else end--
//     }
//     return false;
// }

// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 4))
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);

// // Multiple Pointers - isSubsquence

// function isSubsequence(str1, str2) {
//     var i = 0;
//     var j = 0;
//     if (!str1) return true;
//     while (j < str2.length) {
//         if (str2[j] === str1[i]) i++;
//         if (i === str1.length) return true;
//         j++;
//     }
//     return false;
// }

// console.log(isSubsquence('hello', 'hello world')) // true
// console.log(isSubsquence('sing', 'sting')) // true
// console.log(isSubsquence('abc', 'acb')) // false

// ----------------------------------------------------

// SLIDING WINDOWS

// ---------------------------------------------------

// Max Sub Array Sum

// Given an array of integers and a number, write a function called maxSubArraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Time Complexity: O(n)
// Space Complexity O(1)

// Note that the subarray must consist of consecutive elements from the original array.

// e.g. maxSubbarraySum(  [ 100, 200, 300, 400], 2)  // 700 = 300 + 400

// function maxSubarraySum(arr, num) {
//     if (arr.length < num) {
//         return null;
//     }

//     let total = 0;
//     for (let i = 0; i < num; i++) {
//         total += arr[i];
//     }
//     let currentTotal = total;
//     for (let i = num; i < arr.length; i++) {
//         currentTotal += arr[i] - arr[i - num];
//         total = Math.max(total, currentTotal);
//     }
//     return total;
// }

// console.log(maxSubarraySum([1, 3, 6, 8, 13, 17], 3))

// Min Sub Array Length

// Write a function called minSubArrayLen which accepts two parameters, and array of POSITIVE integers and a POSITIVE integer.

// This function should return the minimal length of a contiguous subarray which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// Time Complexity: O(n)
// Space Complexity O(1)

// Examples
// minSubArrayLen([2,3,1,2,4,3], 7) => 2, because [4,3] is the smallest subarray.
// minsubArrayLen([2,1,6,5,4], 9) => 2, because [5,4] is the smallest subarray.
// minsubArrayLen([1,4,16,22,5,7,8,9,10], 39) // 3

// function minSubArrayLen(nums, sum) {
//     let total = 0;
//     let start = 0;
//     let end = 0;
//     let minLen = Infinity;

//     while (start < nums.length) {
//         // if current window doesn't add up to the given sum then
//         // move the window to right
//         if (total < sum && end < nums.length) {
//             total += nums[end];
//             end++;
//         }
//         // if current window adds up to at least the sum given then
//         // we can shrink the window
//         else if (total >= sum) {
//             minLen = Math.min(minLen, end - start);
//             total -= nums[start];
//             start++;
//         }
//         // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//         else {
//             break;
//         }
//     }

//     return minLen === Infinity ? 0 : minLen;
// }
// console.log(minSubArrayLen([1, 4, 6, 8, 10, 15, 17, 25], 10));

// -------------------------------------------------------------------------------

// Find the Longest Substring

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// Examples
// findLongestSubstring(' ') =>  0
// findLongestSubstring(' thisisawesome') => 6)
// findLongestSubstring('thecatinthehat') => 7
// findLongestSubstring('bbbbbb') => 1
// findLongestSubstring('thisishowwedoit') => 6

// Time Complexity => O(n)

// function findLongestSubstring(str) {
//     let longest = 0;
//     let seen = {};
//     let start = 0;

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (seen[char]) {
//             start = Math.max(start, seen[char]);
//         }
//         // index - beginning of substring + 1 (to include current in count)
//         longest = Math.max(longest, i - start + 1);
//         // store the index of the next char so as to not double count
//         seen[char] = i + 1;
//     }
//     return longest;
// }

// console.log(findLongestSubstring('Hello, this is a string, where is the longest substring?'))

// ----------------------------------------------------
// ----------------------------------------------------

//          RECURSION SOLUTIONS

// POWER SOLUTION

// function power(base, exponent) {
//     if (exponent === 0) {
//         return 1;
//     }
//     return base * power(base, exponent - 1);
// }

// console.log(power(2, 4));

// ----------------------------------------------------

// FACTORIAL SOLUTION

// function factorial(x) {
//     if (x < 0) return 0;
//     if (x <= 1) return 1;
//     return x * factorial(x - 1);
// }

// ----------------------------------------------------

// PRODUCT OF ARRAY SOLUTION

// function productOfArray(arr) {
//     if (arr.length === 0) {
//         return 1;
//     }
//     return arr[0] * productOfArray(arr.slice(1));
// }

// ----------------------------------------------------

// RECURSIVE RANGE SOLUTION

// function recursiveRange(x) {
//     if (x === 0) {
//         return 0;
//     }
//     return x + recursiveRange(x - 1);
// }

// ----------------------------------------------------

// FIBONACCI SOLUTION

// function fib(n) {
//     if (n <= 2) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }

// ----------------------------------------------------

// REVERSE STRING RECURSIVELY

// function reverse(str) {
//     if (str.length <= 1) {
//         return str;
//     }
//     return reverse(str.slice(1)) + str[0];
// }

// ----------------------------------------------------

// isPalindrome Solution

// function isPalindrome(str) {
//     if (str.length === 1) return true;
//     if (str.length === 2) return str[0] === str[1];
//     if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
//     return false;
// }

// ----------------------------------------------------

// someRecursive Solution

// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1), callback);
// }

// ----------------------------------------------------

//  FLATTEN SOLUTION

// function flatten(oldArr) {
//     var newArr = []
//     for (var i = 0; i < oldArr.length; i++) {
//         if (Array.isArray(oldArr[i])) {
//             newArr = newArr.concat(flatten(oldArr[i]))
//         } else {
//             newArr.push(oldArr[i])
//         }
//     }
//     return newArr;
// }

// ----------------------------------------------------

// capitalizeFirst Solution

// function capitalizeFirst(array) {
//     if (array.length === 1) {
//         return [array[0][0].toUpperCase() + array[0].substr(1)];
//     }
//     const res = capitalizeFirst(array.slice(0, -1));
//     const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
//     res.push(string);
//     return res;
// }

// ----------------------------------------------------

// nestedEvenSum Solution

// function nestedEvenSum(obj, sum = 0) {
//     for (var key in obj) {
//         if (typeof obj[key] === 'object') {
//             sum += nestedEvenSum(obj[key]);
//         } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
//             sum += obj[key];
//         }
//     }
//     return sum;
// }

// ----------------------------------------------------

// capitalizeWords Solution

// function capitalizeWords(array) {
//     if (array.length === 1) {
//         return [array[0].toUpperCase()];
//     }
//     let res = capitalizeWords(array.slice(0, -1));
//     res.push(array.slice(array.length - 1)[0].toUpperCase());
//     return res;

// }

// ----------------------------------------------------

// stringifyNumbers Solution

// function stringifyNumbers(obj) {
//     var newObj = {};
//     for (var key in obj) {
//         if (typeof obj[key] === 'number') {
//             newObj[key] = obj[key].toString();
//         } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//             newObj[key] = stringifyNumbers(obj[key]);
//         } else {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }

// ----------------------------------------------------

// collectStrings Solution
// Helper method version

// function collectStrings(obj) {
//     var stringsArr = [];

//     function gatherStrings(o) {
//         for (var key in o) {
//             if (typeof o[key] === 'string') {
//                 stringsArr.push(o[key]);
//             } else if (typeof o[key] === 'object') {
//                 return gatherStrings(o[key]);
//             }
//         }
//     }

//     gatherStrings(obj);

//     return stringsArr;
// }

// ----------------------------------------------------

// collectStrings Solution
// recursive version

// function collectStrings(obj) {
//     var stringsArr = [];
//     for (var key in obj) {
//         if (typeof obj[key] === 'string') {
//             stringsArr.push(obj[key]);
//         } else if (typeof obj[key] === 'object') {
//             stringsArr = stringsArr.concat(collectStrings(obj[key]));
//         }
//     }

//     return stringsArr;
// }

// ----------------------------------------------------

// function add(num) {
//     if (num <= 0) {
//         return 0;
//     } else {
//         return num + add(num - 1);
//     }
// }

// console.log(add(5));

// LINEAR SEARCH

// function linearSearch(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([10, 15, 20, 25, 30], 125));

// function binarySearch(arr, val) {
//     let left = 0;
//     let right = arr.length - 1;
//     let middle = Math.floor((left + right) / 2);

//     while (arr[middle] !== val && start <= end) {
//         if (val < arr[middle]) {
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if (arr[middle] === val) {
//         return middle;
//     }
//     return -1;
// }

// console.log(binarySearch([1, 3, 4, 5, 7, 8, 10, 16, 19], 16))
// console.log(binarySearch([1, 2, 3, 4, 5], 2))
// console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10))

// console.log(binarySearch([1, 2, 3, 4, 5], 6))

// function stringSearch(str1, str2) {
//     let counter;

//     for (let i = 0; i < str1.length; i++) {

//         for (let j = 0; j < str2.length; j++) {
//             if (string2[j] !== str1[i + j]) {
//                 break;
//             }
//             if (j === str2.length - 1) {
//                 counter++
//             }
//         }
//     }
//     return counter;
// }

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// bubbleSort([37, 45, 29, 8])

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[min]) {
//                 min = j;
//             }
//         }
//         if (i !== min) {
//             let temp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = temp;
//         }
//     }
//     return arr;
// }

// selectionSort([34, 22, 10, 19, 17])

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let currentValue = arr[i];
//         for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
//             arr[j + 1] = arr[j]
//         }
//         arr[j + 1] = currentValue;
//     }
//     return arr;
// }

// insertionSort([2, 1, 9, 76, 4]);

// MERGE SORT

// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// console.log(mergeSort([34, 27, 18, 5, 10, 22, 3, 4, 19, 37]));

// QUICK SORT

// Pivot helper functions

// const pivot = (arr, start = 0, end = arr.length + 1) => {
//   const swap = (array, i, j) => {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   };

//   let pivot = arr[start];
//   let swapIndex = start;
//   for (let i = start + 1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       swapIndex++;
//       swap(arr, swapIndex, i);
//     }
//   }
//   swap(arr, start, swapIndex);
//   return swapIndex;
// };
// // console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

// const quickSort = (arr, left = 0, right = arr.length - 1) => {
//   if (left < right) {
//     let pivotIndex = pivot(arr, left, right);
//     quickSort(arr, left, pivotIndex - 1);
//     quickSort(arr, pivotIndex + 1, right);
//   }
//   return arr;
// };

// console.log(quickSort([4, 6, 7, 1, 2, 5, 3]));

// RADIX SORT

// function getDigits(num, i) {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// function digitCount(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

// function mostDigits(nums) {
//   let maxDigits = 0;
//   for (let i = 0; i < nums.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//   }
//   return maxDigits;
// }

// function radixSort(nums) {
//   let maxDigitCount = mostDigits(nums);
//   for (let k = 0; k < maxDigitCount; k++) {
//     let digitBuckets = Array.from({ length: 10 }, () => []);
//     for (let i = 0; i < nums.length; i++) {
//       let digit = getDigits(nums[i], k);
//       digitBuckets[digit].push(nums[i]);
//     }
//     nums = [].concat(...digitBuckets);
//   }
//   return nums;
// }

// console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Singly Linked List
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
//   // Push method
//   push(val) {
//     var nextNode = new Node(val);
//     if (!this.head) {
//       this.head = nextNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = nextNode;
//       this.tail = nextNode;
//     }
//     this.length += 1;
//     return this;
//   }

//   // Pop method
//   pop() {
//     if (!this.head) {
//       return undefined;
//     } else {
//       let current = this.head;
//       let previous = current;
//       while (current.next) {
//         previous = current;
//         current = current.next;
//       }
//       this.tail = previous;
//       this.tail.next = null;
//       this.length--;
//       if (this.length === 0) {
//         this.head = null;
//         this.tail = null;
//       }
//       return current;
//     }
//   }

// Shift method
// shift() {
//   if (!this.head) {
//     return undefined;
//   } else {
//     let oldHead = this.head;
//     this.head = this.head.next;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return oldHead;
//   }
// }

// Unshift method
// unshift(val) {
//   let newNode = new Node(val);
//   if (!this.head) {
//     this.head = newNode;
//     this.tail = newNode;
//   } else {
//     newNode.next = this.head;
//     this.head = newNode;
//   }
//   this.length++;
//   return this;
// }

// Get method (my solution)
//   get(index) {
//     if (index < 0 || index >= this.length) {
//       return null;
//     }
//     let counter = 0;
//     let current = this.head;
//     while (counter < this.length - 1) {
//       if (counter === index) {
//         break;
//       }
//       current = current.next;
//       counter++;
//     }
//     return current;
//   }

// Get method (instructor solution)
// get(index) {
//   if (index < 0 || index >= this.length) return null;
//   let counter = 0;
//   let current = this.head;
//   while (counter !== index) {
//     current = current.next;
//     counter++;
//   }
//   return current;
// }

// // Set method (my solution)
// set(val, index) {
//   let getNode = this.get(index);
//   if (!getNode) {
//     return false;
//   } else {
//     getNode.val = val;
//   }
//   return true;
// }

// Set method (instructor solution)
//   set(index, val) {
//     let foundNode = this.get(index);
//     if (foundNode) {
//       foundNode.val = val;
//       return true;
//     }
//     return fase;
//   }

// Insert method (my solution / not working)
// insert(index, val) {
//   let newNode = new Node(val);
//   if (index < 0 || index > this.length) return false;
//   if (index === this.length) {
//     this.push(newNode);
//   } else if (index === 0) {
//     this.unshift(newNode);
//   } else {
//     let newIndex = this.get(index - 1);
//     let nextNode = newIndex.next;
//     newIndex.next = newNode;
//     newNode.next = nextNode;
//   }
//   this.length++;
//   return true;
// }

// Insert method (instructor solution)
//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === this.length) return this.push(val);
//     if (index === 0) return this.unshift(val);

//     let newNode = new Node(val);
//     let previous = this.get(index - 1);
//     let temp = previous.next;
//     previous.next = newNode;
//     newNode.next = temp;
//     this.length++;
//     return true;
//   }

//   // Remove method (my attempt)
//   remove(index) {
//     if (index < 0 || index > this.length) return null;
//     if (index === this.length - 1) return this.pop();
//     if (index === 0) this.shift();

//     let prev = this.get(index - 1);
//     let removed = prev.next;
//     prev.next = removed.next;
//     this.length--;
//     return removed;
//   }

//   // Reverse method (instructor solution)
//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;

//     let next = null;
//     let prev = null;

//     for (let i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this;
//   }
// }

// const list = new SinglyLinkedList();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOUBLY LINKED LIST

// class DoublyNode {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val) {
//     let newNode = new DoublyNode(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   // Pop method
//   pop() {
//     if (!this.head) return undefined;
//     const oldTail = this.tail;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = oldTail.prev;
//       this.tail.next = null;
//       oldTail.prev = null;
//     }
//     this.length--;
//     return oldTail;
//   }

//   // Shift method
//   shift() {
//     if (this.length === 0) return undefined;
//     let oldHead = this.head;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       let newHead = oldHead.next;
//       newHead.prev = null;
//       oldHead.next = null;
//       this.head = newHead;
//       // (instructor syntax)
//       // this.head = oldHead.next;
//       // this.head.prev = null;
//       // oldHead.next = null;
//     }
//     this.length--;
//     return oldHead;
//   }

//   // Unshift method
//   unshift(val) {
//     let newNode = new DoublyNode(val);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.head.prev = newNode;
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   // Get method
//   get(index) {
//     if (index < 0 || index >= this.length) return null;
//     let middle = Math.floor(this.length / 2);
//     let current = this.tail;
//     if (index <= middle) {
//       let counter = 0;
//       let current = this.head;
//       while (counter !== index) {
//         current = current.next;
//         counter++;
//       }
//     } else {
//       let counter = this.length - 1;
//       while (counter !== index) {
//         current = current.prev;
//         counter--;
//       }
//     }
//     return current;
//   }

//   // Set method
//   set(index, val) {
//     let foundNode = this.get(index);
//     if (foundNode) {
//       foundNode.val = val;
//       return true;
//     }
//     return false;
//   }

//   // Insert method
//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === 0) return this.unshift(val);
//     if (index === this.length) return this.push(val);

//     let newNode = new DoublyNode(val);
//     let beforeNode = this.get(index - 1);
//     let afterNode = beforeNode.next;

//     beforeNode.next = newNode;
//     newNode.prev = beforeNode;
//     newNode.next = afterNode;
//     afterNode.prev = newNode;
//     this.length++;
//     return true;
//   }

//   // Remove method
//   remove(index) {
//     if (index < 0 || index >= length) return undefined;
//     if (index === 0) return this.shift(index);
//     if (index === this.length - 1) return this.pop(index);
//     let removed = this.get(index);

//     // My attempt
//     // let prevNode = removed.prev;
//     // let nextNode = removed.next;
//     // prevNode.next = nextNode;
//     // nextNode.prev = prevNode;

//     // Instructor Solution
//     removed.prev.next = removed.next;
//     removed.next.prev = removed.prev;
//     removed.next = null;
//     removed.prev = null;

//     this.length--;
//     return removed;
//   }
// }

// const dList = new DoublyLinkedList();
// dList.push('1');
// dList.push('2');
// dList.push('3');
// dList.push('4');
// dList.push('5');
// dList.push('6');
// dList.push('7');
// dList.push('8');
// dList.push('9');
// dList.push('10');
// console.log(dList);

// // dList.pop();
// // console.log(dList);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// A Stack Class

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       let temp = this.first;
//       this.first = newNode;
//       this.first.next = temp;
//     }
//     return ++this.size;
//   }
//   // INSTRUCTOR SOLUTION
//   pop() {
//     if (!this.first) return null;
//     let temp = this.first;
//     if (this.first === this.last) {
//       this.last === null;
//     }
//     this.first = this.first.next;
//     this.size--;
//     return temp.value;
//   }
// MY SOLUTION
// pop() {
//   if (!this.first) return null;
//   let temp = this.first;
//   if (this.first === this.last) {
//     this.first = null;
//     this.last = null;
//   } else {
//     this.first = temp.next;
//   }
//   this.size--;
//   return temp;
// }
// }

// const stack = new Stack();
// stack.push('Hello');
// stack.push('Goodbye');
// stack.push('Greetings');
// stack.push('Salutations');

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// QUEUES

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }
//   enqueue(val) {
//     if (!this.first) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     return ++this.size;
//   }

//   dequeue() {
//     if (!this.first) return null;
//     let first = this.first;
//     if (this.first === this.last) {
//       this.last = null;
//     }
//     this.first.next = first;
//     this.size--;
//     return temp.value;
//   }
// }

// class BinaryNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   // Insert method
//   insert(value) {
//     let newNode = new BinaryNode(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     } else {
//       let current = this.root;
//       while (true) {
//         if (value === current.value) return undefined;
//         if (value < current.value) {
//           if (current.left === null) {
//             current.left = newNode;
//             return this;
//           } else {
//             current = current.left;
//           }
//         } else if (value > current.value) {
//           if (current.right === null) {
//             current.right = newNode;
//             return this;
//           } else {
//             current = current.right;
//           }
//         }
//       }
//     }
//   }

//   // Find method
//   find(value) {
//     if (this.root === null) return false;
//     let current = this.root;
//     let found = false;
//     while (current && !found) {
//       if (value < current.value) {
//         current = current.left;
//       } else if (value > current.value) {
//         current = current.right;
//       } else {
//         found = true;
//       }
//     }
//     if (!found) return undefined;
//     return current;
//   }

//   // Breadth-first Search
//   breadthFirstSearch() {
//     let data = [];
//     let queue = [];
//     let node = this.root;

//     queue.push(this.root);

//     while (queue.length) {
//       node = queue.shift();
//       data.push(node.value);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     return data;
//   }

//   // Depth-first Search (pre-order)
//   depthFirstSearch() {
//     let data = [];
//     function traverse(node) {
//       data.push(node);
//       if (node.left) traverse(node.left);
//       if (node.right) traverse(node.right);
//     }
//     traverse(this.root);
//     return data;
//   }

//   // Depth-first Search (post-order)
//   DFSPostOrder() {
//     let data = [];
//     function traverse(node) {
//       if (node.left) traverse(node.left);
//       if (node.right) traverse(node.right);
//       data.push(node.value);
//     }
//     traverse(this.root);
//     return data;
//   }

//   // Depth-first Search (in-order)
//   DFSInOrder() {
//     let data = [];
//     function traverse(node) {
//       if (node.left) traverse(node.left);
//       data.push(node.value);
//       if (node.right) traverse(node.right);
//     }
//     traverse(this.root);
//     return data;
//   }
// }

// class MaxBinaryHeap {
//   constructor() {
//     this.values = [];
//   }
//   insert(element) {
//     this.values.push(element);
//     let index = this.values.length - 1;
//     const value = this.values[index];
//     while (true) {
//       let parentIndex = Math.floor((index - 1) / 2);
//       let parent = this.values[parentIndex];
//       if (value <= parent) break;
//       this.values[parentIndex] = value;
//       this.values[index] = parent;
//       index = parentIndex;
//     }
//   }

//   extractMax() {
//     const max = this.values[0];
//     const end = this.values.pop();
//     if(this.values.length > 0) {
//       this.values[0] = end;
//       this.sinkDown();
//     }
//     return max;
//   }
//   sinkDown() {
//     let index = 0;
//     const length = this.values.length;
//     const element = this.values[0];
//     while (true) {
//       let leftChildIndex = 2 * index + 1;
//       let rightChildIndex = 2 * index + 2;
//       let leftChild;
//       let rightChild;
//       let swap = null;

//       if (leftChildIndex < length) {
//         leftChild = this.values[leftChildIndex];
//         if (leftChild > element) {
//           swap = leftChildIndex;
//         }
//       }
//       if (rightChildIndex < length) {
//         rightChild = this.values[rightChildIndex];
//         if (
//           (swap === null && rightChild > element) ||
//           (swap !== null && rightChild > leftChild)
//         ) {
//           swap = rightChildIndex;
//         }
//       }

//       if (swap === null) break;
//       this.values[index] = this.values[swap];
//       this.values[swap] = element;
//       index = swap;
//     }
//   }
// }

// let heap = new MaxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Priority Queue

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);

    // Bubble Up
    let index = this.values.length - 1;
    const value = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (value.priority >= parent.priority) break;
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild;
      let rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
