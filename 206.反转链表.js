// 反转链表 https://leetcode.cn/problems/reverse-linked-list/
// 给你单链表的头节点 head, 请你翻转这个链表并返回新链表的头节点。

/**
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 */
/**
 * 输入：head = [1,2]
 * 输出：[2,1]
 */

// 思路：
// 1. 创建一个新链表，用来存储反转后的数据
// 2. 创建一个指针，指向新链表的头节点
// 3. 创建一个指针，指向原链表的头节点
// 4. 如果原链表不为空，则将原链表的头节点的next指向新链表的头节点
// 5. 如果原链表为空，则将新链表的头节点的next指向空
// 6. 将新链表的头节点赋值给原链表的头节点

var reverseList = function (head) {
  let cur = head;  // 创建一个指针，指向原链表的头节点
  let pre = null; // 创建一个指针，指向新链表的头节点
  while (cur) {
    const next = cur.next; // 将原链表的头节点的next指向新链表的头节点
    cur.next = pre; // 将原链表的头节点的next指向新链表的头节点
    pre = cur; // 将新链表的头节点的next指向原链表的头节点
    cur = next; // 将原链表的头节点赋值给新链表的头节点
  }
  return pre
}

// 测试
let head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}
console.log(reverseList(head));