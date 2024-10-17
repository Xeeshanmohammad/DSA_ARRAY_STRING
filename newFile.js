
const numbers = [
  1, 2, 22, 5, 3, 5, 5, 54, 3, 22, 1, 2, 3, 54, 6, 5, 43, 3, 2, 1, 1, 1,
];
function removeDuplicates(array) {
  return array.filter((ele, val) => array.indexOf(ele) === val);
}
console.log(removeDuplicates(numbers));




