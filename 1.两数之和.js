// 两数之和: https://leetcode.cn/problems/two-sum/
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

/**
 *  输入：nums = [2,7,11,15], target = 9
 *  输出：[0,1]
 *  解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 
 */
/**
 *  输入：nums = [3,2,4], target = 6
 *  输出：[1,2]
 */

// 思路：
// 1. 创建一个map，存储数组中的值和下标
// 2. 遍历数组，如果map中存在目标值-当前值，则返回下标
// 3. 如果map中不存在目标值-当前值，则将当前值存入map
// 4. 如果map中存在目标值-当前值，则返回下标

var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]; // 目标值与当前值的差值
    if (map[diff] !== undefined) {
      // 如果map中存在目标值-当前值，则返回下标
      return [map[diff], i];
    }
    // 如果map中不存在目标值-当前值，则将当前值存入map
    map[nums[i]] = i;
  }
}

// 测试
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));