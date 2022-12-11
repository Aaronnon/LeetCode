/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // set all to value to zero
  let pivot = 0;
  let leftSum = 0;
  let rightSum = 0;

  // add all nums to the right
  for (let i = pivot + 1; i < nums.length; i++) {
    rightSum += nums[i];
  }

  // loop until left is equal to right or return -1
  for (let pivot = 0; pivot < nums.length; pivot++) {
    if (leftSum == rightSum) return pivot;
    leftSum += nums[pivot];
    rightSum -= nums[pivot + 1];

    // console.log(rightSum);
    // console.log(leftSum);
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
