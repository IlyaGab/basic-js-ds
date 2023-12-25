const {
  ListNode
} = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new ListNode(value);
    } else {
      let tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = new ListNode(value);
    }
  }

  dequeue() {
    if (this.head) {
      const top = this.head.value;
      this.head = this.head.next || null;
      return top;
    } else {
      return null;
    }
  }
};

module.exports = {
  Queue
};