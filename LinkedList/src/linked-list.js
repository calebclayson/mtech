class LinkedList {
    constructor() {
        this.data = [];
    }

    insert(data) {

    }

    contains(str) {
        
    }

    remove(str) {
        let rtn;
        let currentNode;
        let i = 0;
        while(rtn == undefined) {
            if(currentNode == undefined) {
                currentNode = this.data[0];
            }
            if(currentNode.data.name == str) {
                if(i > 0) {
                    this.data[i-1].setNext(currentNode.next);
                }
                rtn = currentNode.data;
                this.data.splice(i, 1);
            } else {
                currentNode = currentNode.next;
            }
            if(currentNode == null) {
                rtn = false;
            }
            i++;
        }
        return rtn;
    }

    size() {
        return this.data.length;
    }
}

class LinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    setNext(node) {
        this.next = node;
    }
}