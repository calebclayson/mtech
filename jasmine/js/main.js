function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(e) {
    this.dataStore.push(e);
}
function dequeue() {
    this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length -1];
}
function toString() {
    let result = "";
    for(let i = 0; i < this.dataStore.length; i++) {
        result += this.dataStore[i] + "\n";
    }
    return result;
}
function empty() {
    if(this.dataStore.length === 0) {
        return true;
    } else {
        return false;
    }
}
let q = new Queue();
q.enqueue("Bob Belcher");
q.enqueue("Banana");
q.enqueue("Spider Man");
console.log(q.toString());
q.dequeue();
console.log(q.toString());