class Stack {
  constructor() {
    this.array = [];
  }
  push(value) {
    return this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }
}

module.exports = {
  Stack
};