function removeDuplicates(num) {
  let values = [];
  for (let i = 0; i < num.length; i++) {
    if (values.indexOf(num[i]) === -1) {
      values.push(num[i]);
    }
  }
  return values;
}

console.log(
  "exp1: " +
    removeDuplicates([
      1, 2, 2, 3, 1, 12, 3, 2, 1, 1, 2, 3, 1, 2, 3, 2, 1, 5, 2, 3, 1, 2, 3, 1,
      1, 2, 3, 1, 1, 5, 3, 3, 1,
    ])
);

const a = [
  1, 2, 2, 3, 1, 12, 3, 2, 1, 1, 2, 3, 1, 2, 3, 2, 1, 5, 2, 3, 1, 2, 3, 1, 1, 2,
  3, 1, 1, 5, 3, 3, 1,
];
const b = [...new Set(a)];
console.log("exp2: " + b);

function removeDuplicates1(array) {
  return array.filter((ele, val) => array.indexOf(ele) === val);
}
console.log(
  "exp3: " +
    removeDuplicates1([
      1, 2, 2, 3, 1, 12, 3, 2, 1, 1, 2, 3, 1, 2, 3, 2, 1, 5, 2, 3, 1, 2, 3, 1,
      1, 2, 3, 1, 1, 5, 3, 3, 1,
    ])
);

function factorialFind(num1) {
  if (num1 === 0 || num1 === 1) {
    return 1;
  } else return num1 * factorialFind(num1 - 1);
}
console.log(factorialFind(6));

function findArrayOfFactoirials(num) {
  let values = [];
  for (let i = 0; i < num.length; i++) {
    if (values.indexOf(num[i])) {
      values.push(factorialFind(num[i]));
    }
  }
  return values;
}
console.log(findArrayOfFactoirials([1, 4, 3, 2, 5, 10]));

function Palindrome(num1) {
  let findPalinderome = "";
  let pldrm = num1.toString();
  for (let alph of pldrm) {
    findPalinderome = alph + findPalinderome;
  }
  if (findPalinderome === pldrm) return "true";
  else return "false";
}
console.log(Palindrome("aaaannn"));

const number = "12524";
const reverseString1 = number.toString().split("").reverse().join("");
console.log(reverseString1);

setTimeout(() => {
  function reverseString(num) {
    let reversee = "";
    let reverseNumber = num.toString();
    for (let nums of reverseNumber) {
      console.log(nums.toString().split("").reverse().join(""));

      reversee = nums + reversee;
    }
    return reversee;
  }
  console.log(reverseString(12524));
}, 3000);
