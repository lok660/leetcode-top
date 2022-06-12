// 三数之和 
// 给你一个包含n个整数的数组nums，判断是否存在三个元素a，b，c，使得a + b + c = 0？请你找出所有满足条件且不重复的三元组。

/**
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 */
/**
 * 输入：nums = [0]
 * 输出：[]
 */

var threeSum = function (nums) {
  if (nums.length < 3) return [];
  let result = [];
  let second = 0;
  let third = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    second = i + 1;
    third = nums.length - 1;
    while (second < third) {
      let sum = nums[i] + nums[second] + nums[third];
      if (sum === 0) {
        result.push([nums[i], nums[second], nums[third]]);
        while (second < third && nums[second] === nums[second + 1]) second++;
        while (second < third && nums[third] === nums[third - 1]) third--;
        second++;
        third--;
      } else if (sum > 0) {
        third--;
      }
      else {
        second++;
      }
    }
  }
  return result;
}

// 测试
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));