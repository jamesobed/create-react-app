function countNumbers(arr) {
  var count = 0;
  for (let num of arr) {
    if (typeof num == NaN) {
      console.log(num)
      count++;
    }
  }
  console.log(count);
  return count;
}
var myNumber = NaN;

// Implicitly assigning NaN to a variable
var myNumberi = Math.sqrt(-1);
let p = countNumbers([
  1,
  2,
  1,
  2,
  3,
  4,
  5,
  6,
  9,
  "",
  "p",
  6,
  myNumber,
  myNumberi,
]);
p