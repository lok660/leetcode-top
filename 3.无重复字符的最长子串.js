// 无重复字符的最长子串 https://leetcode.cn/problems/longest-substring-without-repeating-characters/
// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
/**
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 */

// 思路:
// 1.创建一个max，用来存储最大值,创建一个map，用来存储字符串中的字符和下标,创建一个start，用来存储字符串的起始下标
// 2.遍历字符串，如果map中存在当前字符，则将start设置为当前字符的下标+1，并将map中的当前字符的下标设置为当前下标
// 3.如果map中不存在当前字符，则将map中的当前字符的下标设置为当前下标

var lengthOfLongestSubstring = function (s) {
  let max = 0; // 最大值
  let map = {}; // 存储字符串中的字符和下标
  let start = 0; // 字符串的起始下标
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      start = Math.max(start, map[s[i]] + 1); // 如果map中存在当前字符，则将start设置为当前字符的下标+1，并将map中的当前字符的下标设置为当前下标
    }
    map[s[i]] = i; // 将map中的当前字符的下标设置为当前下标
    max = Math.max(max, i - start + 1);
  }
  return max;
}

// 测试
let s = "abcabcbb";
debugger
console.log(lengthOfLongestSubstring(s));