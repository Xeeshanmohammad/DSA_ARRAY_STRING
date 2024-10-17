function sumOfNaturalNumber1(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumOfNaturalNumber1(5));

// 1.
function sumOfNaturalNumbers(num) {
  return (num * (num + 1)) / 2;
}

console.log(sumOfNaturalNumbers(5));

// 2.
function nums(a, b) {
  return a + b;
}
setTimeout(() => {
  console.log(nums(4, 5));
}, 2000);

// 3.
setTimeout(() => {
  try {
    function sumOfDigits(num1) {
      let sum = 0;
      while (num1 > 0) {
        sum += num1 % 10;
        num1 = Math.floor(num1 / 10);
      }
      return sum;
    }
    console.log(sumOfDigits(1287), "sum of 1287");
  } catch (error) {
    console.log(error, "error");
  }
}, 3000);
// 4.
const numbers = [1, 2, 3, 4, 5, 6];

function findMax(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + max) {
      max = max + nums[i];
    }
  }
  return max;
}

console.log(findMax(numbers));