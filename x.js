let x = 10;
let y = 20;
console.log("Before swap", x, y);

[x, y] = [y, x];

console.log("After swapping", x, y);

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let findTarget = 180;

function findIndex(nums) {
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
    for (nextIndex = firstIndex + 1; nextIndex < nums.length; nextIndex++) {
      if (nums[firstIndex] + nums[nextIndex] === findTarget) {
        return [firstIndex, nextIndex];
      }
    }
  }
  return "No indexes found";
}

console.log("Index of two number which = 180", findIndex(numbers));

let number1 = [1, 2, 1, 2, 4, 3, 2, 3, 4, 5, 4, 2, 3, 2, 1, 2, 3, 5, 6, 4];
function repeatedValue(nums) {
  let numberCount = {};
  for (let num of nums) {
    if (numberCount[num]) {
      numberCount[num] += 1;
    } else {
      numberCount[num] = 1;
    }
  }

  console.log("Number and key is repetated --------", numberCount);

  let mostRepeatedCount = 0;
  let mostRepeatedValue = 0;
  for (let key in numberCount) {
    if (numberCount[key] > mostRepeatedCount) {
      mostRepeatedCount = numberCount[key];
      mostRepeatedValue = key;
    }
  }
  console.log(
    "Let's break the code ",
    mostRepeatedValue + " repeated " + mostRepeatedCount + " times"
  );
}
repeatedValue(number1);

let a = 10;
let b = 10;
function system_plus_Design(a, b) {
  console.log(a + b);
}
system_plus_Design(a, b);

