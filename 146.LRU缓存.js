// LRU缓存 https://leetcode.cn/problems/lru-cache/
// 设计并实现最近最少使用缓存（LRU）。它应该支持以下操作：get 和 put。

/**
 * 输入:
        ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
        [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
   输出:
        [null, null, null, 1, null, -1, null, -1, 3, 4]
 */

// 思路：
// 1. 创建一个map，存储数组中的值和下标, 并创建一个list，存储数组中的值
// 2. 遍历数组，如果map中存在目标值-当前值，则返回下标
// 3. 如果map中不存在目标值-当前值，则将当前值存入map
// 4. 如果map中存在目标值-当前值，则将当前值移动到list的最后一位


var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = {};
  this.list = [];
}

LRUCache.prototype.get = function (key) {
  if (this.map[key] === undefined) {
    return -1;
  }
  let index = this.list.indexOf(key);
  this.list.splice(index, 1);
  this.list.push(key);
  return this.map[key];
}

LRUCache.prototype.put = function (key, value) {
  if (this.map[key] === undefined) {
    if (this.list.length >= this.capacity) {
      let key = this.list.shift();
      delete this.map[key];
    }
    this.list.push(key);
  } else {
    let index = this.list.indexOf(key);
    this.list.splice(index, 1);
    this.list.push(key);
  }
  this.map[key] = value;
}


// 测试
let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // 返回 1
cache.put(3, 3);                 // 该操作会使得密钥 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)