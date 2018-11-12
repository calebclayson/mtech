class BinarySearchTree {
    constructor() {
        this.data;
    }
    insert(value) {
        let newNode = new BinaryNode(value);
        
        if(this.data != undefined) {
            this.data.newValue(value);
        } else {
            this.data = newNode;
        }
    }
    find(str) {
        
    }
    remove(str) {
        
    }
    min() {
        
    }
    max() {
        
    }
    toString() {
        if(this.data != undefined) {
            return this.data.returnString();
        } else {
            return false;
        }
    }
}

class BinaryNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    setLeft(left) {
        this.left = left;
    }
    setRight(right) {
        this.right = right;
    }
    setValue(value) {
        this.value = value;
    }
    newValue(value) {
        if(value < this.value) {
            if(this.left == null) {
                this.left = new BinaryNode(value);
            } else {
                this.left.newValue(value);
            }
        } else {
            if(this.right == null) {
                this.right = new BinaryNode(value);
            } else {
                this.right.newValue(value);
            }
        }
    }
    returnString() {
        let rtn = "";
        if(this.left != null) {
            rtn += this.left.returnString();
        }
        if(this.right != null) {
            rtn += this.right.returnString();
        }
        rtn += this.value + " ";
        return rtn;
    }
}

let B = new BinarySearchTree();
B.insert(5);
B.insert(3);
B.insert(7);
B.insert(2);
B.insert(10);

console.log(B.toString());