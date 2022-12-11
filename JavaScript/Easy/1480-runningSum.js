/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let newNums = nums.slice();
  // reduce, accumulator, current value, index, array
  newNums.reduce((acc, curr, ind, arr) => (arr[ind] += acc));

  console.log(newNums);
  //   console.log(nums);
  return newNums;
};

runningSum([1, 2, 3, 4]);
