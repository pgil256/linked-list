/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = new Node;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    if (this.length === 0){
      this.tail = this.head;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length -1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currIdx = this._get(idx);
    currIdx.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let prevIdx = this._get(idx-1);
    let newNode = new Node(val);
    newNode.next = prevIdx.next;
    prevIdx.next = newNode;

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      if (this.length = 1){
        this.tail = prev = this.head;
        return val;
      }

      let prevIdx = this._get(idx - 1);

      if (idx === this.length - 1) {
        let val = prevIdx.next.val;
        prevIdx.next = null;
        this.tail = prevIdx;
        this.length -=1;
        return val;
      }

      let val = prev.next.val;
      prev.next = prev.next.next;
      this.length -=1;
      return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let total = 0; 
    let currentIdx = this.head;

    while (current) {
      total += current.val;
      current = current.next
    }

    return total/this.length;
  }
}

module.exports = LinkedList;
