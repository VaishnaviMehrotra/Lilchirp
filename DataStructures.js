// ### level 2:
// 1. Write a function to remove all even numbers from an Array.
// ```
// Input array:
// [1, 3, 4, 6, 7, 8]
// ```
// ```
// Output should be array: [1, 3, 7]

function even(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      res.push(arr[i]);
    }
  }
  console.log(res);
}
even([1, 3, 4, 6, 7, 8]);
// ```
// 2. Replace all the vowels in a string with uppercase vowels.
// ```
// Input string: 'Elie'
// ```
// ```
// Output should be string: 'ElIE'
// ```

function vowels(st) {
  var res = "";
  for (var i = 0; i < st.length; i++) {
    if (
      st[i] === "a" ||
      st[i] === "e" ||
      st[i] === "i" ||
      st[i] === "o" ||
      st[i] === "u"
    ) {
      res += st[i].toUpperCase();
    } else {
      res += st[i];
    }
  }
  console.log(res);
}
vowels("Elie");
// 3. Write a function to find the maximum number in an array.
// ```
// Input array: [1, 3, 4, 6, 7, 8, 2, 5]
// ```
// ```
// Output should be a number: 8
function maxNumber(arr) {
  var res = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > res) {
      res = arr[i];
    }
  }
  console.log(res);
}
maxNumber([1, 3, 4, 6, 7, 8, 2, 5]);
