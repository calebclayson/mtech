class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.firstNode = null;
    this.listSize = 0;
  }

  size() {
    return this.listSize;
  }

  remove(valueToRemove) {
    let currentNode = this.firstNode;
    let previousNode = null;
    
    if(this.contains(valueToRemove)) {
      let foundValue = false;
      while (!foundValue) {
        if(valueToRemove === currentNode.value) {
          if(currentNode === this.firstNode) {
            this.firstNode = currentNode.next;
            currentNode.next = null;
          } else {
            previousNode.next = currentNode.next;
            currentNode.next = null;
          }
          this.listSize--;
          foundValue = true;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
    } else {
      console.log('does not contain');
    }
  }

  insert(newValue) {
    let nodeToInsert = new Node(newValue);
    
    if (!this.firstNode) {
      this.firstNode = nodeToInsert;
    } else {
      let currentNode = this.firstNode;
      
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = nodeToInsert;
    }
    this.listSize++;
  }

  contains(value) {
    let currentNode = this.firstNode;
    let done = false;
    while(!done) {
      if(value == currentNode.value) {
        done = true;
        return true;
      } else {
        if(currentNode.next == null) {
          done = true;
          return false;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  }
}