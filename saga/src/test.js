let arr = [1, 2, 3, 4, 5, 6];
console.log(
  arr
    .map((x) => x * 3)
    .filter((y) => y % 2 === 0)
    .reduce((acc, curr) => acc * curr, 0)
);
// console.log(res)
