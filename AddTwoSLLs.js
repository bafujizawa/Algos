// You are given two non-empty linked lists representing two non-negative integers
// The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list
// You may assume the two numbers do not contain any leading zero, except the number 0 itself

// l1 = [2,4,3] l2 = [5,6,4]
// [7,0,8] 342 + 465 = 807

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertLast(data) {
        let node = new Node(data);
        let current;

        if(!this.head) {
            this.head = node;
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node;
        }
        this.size++;
    }
}

var addTwoNumbers = function(l1, l2) {
    let l1Runner = l1.head;
    let l2Runner = l2.head;

    let l1Value = "";
    let l2Value = "";

    while(l1Runner) {
        l1Value += l1Runner.data;
        l1Runner = l1Runner.next;
    }
    while(l2Runner) {
        l2Value += l2Runner.data;
        l2Runner = l2Runner.next;
    }
    finalArray = (parseInt(l1Value) + parseInt(l2Value)).toString().split('').reverse();

    finalList = new LinkedList();
    for(i=0;i<finalArray.length;i++) {
        finalList.insertLast(finalArray[i]);
    }
    
    return finalList;
};

l1 = new LinkedList();
l1.insertFirst(2);
l1.insertLast(4);
l1.insertLast(3);

l2 = new LinkedList();
l2.insertFirst(4);
l2.insertFirst(6);
l2.insertFirst(5);

console.log(addTwoNumbers(l1, l2));





