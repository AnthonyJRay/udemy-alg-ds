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
