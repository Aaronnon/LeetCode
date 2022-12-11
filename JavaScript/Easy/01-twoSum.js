/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      //if the sum equal to target return the index of nums
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
    console.log([i, j]);
  }
};

//sample
twoSum([1, 2, 3], 5);
