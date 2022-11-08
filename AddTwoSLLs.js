// You are given two non-empty linked lists representing two non-negative integers
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list
// You may assume the two numbers do not contain any leading zero, except the number 0 itself

// l1 = [2,4,3] l2 = [5,6,4]
// [7,0,8] 342 + 465 = 807

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

const addTwoNumbers = function(l1, l2) {
    const head = new ListNode();
    let cursor = head;
    let carry = 0;
    while (l1 || l2 || carry) {
        cursor.next = new ListNode();
        cursor = cursor.next;
        let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = val >= 10 ? 1 : 0;
        cursor.val = val % 10;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return head.next;
};

let list1 = [2,4,3]
let list2 = [5,6,4]

console.log(addTwoNumbers(list1, list2))


