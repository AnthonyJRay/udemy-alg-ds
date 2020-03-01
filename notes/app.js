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
const a = [1, 2, 3];
const b = [4, 1, 9];

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

// console.log(isAnagram("anagram", "agnaram"));


// -----------------------------------------

// This is using a multiple pointers pattern. Setting variables has index values, one starts from the left, or start. The other starts from the right or end, and they work towards the middle.
// This approach removes the need for a nested forLoop which has a time complexity of O(n^2).
// This approach has a time complexity of O(n). Much much better.
// My question is, what if in a large array of sorted numbers, the pairs existed on either side of the middle? It wouldn't catch those pairs.
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

function dupes(...args) {
    console.log(args)
}

dupes('a', 'a', 'b', 'e', 2, 5, 6, 7);