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

    // Insert first node

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert last node

    insertLast(data) {
        let node = new Node(data);
        let current;

        // If empty, make it the head
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

    // Insert at index

    insertAtIndex(data, index) {
        // If Index is out of range
        if(index > 0 && index > this.size) {
            return;
        }

        // If index is 0
        if(index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Get at index

    // Remove at index

    // Clear List

    // Print List Data
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}


const ll = new LinkedList();
ll.insertFirst(300);
ll.insertFirst(200);
ll.insertFirst(100);
ll.insertLast(400);
ll.insertAtIndex(250, 2);
ll.printListData();

// console.log(ll)

// const n1 = new Node(100);
// console.log(n1);

// const n1 = {
//     data: 100
// };

// const n2 = {
//     data:200
// };

// n1.next = n2;
