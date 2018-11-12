// class LinkedList {
//     constructor() {
//         this.data = [];
//     }

//     insert(data) {

//     }

//     contains(str) {

//     }

//     remove(str) {
//         let rtn;
//         let currentNode;
//         let i = 0;
//         while(rtn == undefined) {
//             if(currentNode == undefined) {
//                 currentNode = this.data[0];
//             }
//             if(currentNode.data.name == str) {
//                 if(i > 0) {
//                     this.data[i-1].setNext(currentNode.next);
//                 }
//                 rtn = currentNode.data;
//                 this.data.splice(i, 1);
//             } else {
//                 currentNode = currentNode.next;
//             }
//             if(currentNode == null) {
//                 rtn = false;
//             }
//             i++;
//         }
//         return rtn;
//     }

//     size() {
//         return this.data.length;
//     }
// }

// class LinkedListNode {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
//     setNext(node) {
//         this.next = node;
//     }
// }




function Node(e) {
    this.element = e;
    this.next = null;
}

function lList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
}

function insert(newE, item) {
    let newNode = new Node(newE);
    if (item > newNode) {
        item = item.next;
    } else {
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }
}

function find(item) {
    let currNode = this.head;
    while (currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item) {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next;
    }
}

function findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.next === null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}