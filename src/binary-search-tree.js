// const {
//   Node
// } = require('../extensions/list-tree.js');
Node = class {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
};

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    if (this._root) return this._root;
    else return null;
  }

  add(data) {
    if (!this._root) {
      this._root = new Node(data);
    } else {
      let node = this._root;
      while (true) {
        if (data > node.data) {
          if (!node.right) {
            node.right = new Node(data);
            return;
          } else {
            node = node.right;
          }
        } else {
          if (!node.left) {
            node.left = new Node(data);
            return;
          } else {
            node = node.left;
          }
        }
      }
    }
  }

  has(data) {
    if (!this._root) {
      return false;
    } else {
      let node = this._root;
      while (node) {
        if (data === node.data) {
          return true;
        } else {
          node = data > node.data ? node.right : node.left;
        }
      }
      return false;
    }
  }

  find(data) {
    if (!this._root) {
      return null;
    } else {
      let node = this._root;
      while (node) {
        if (data === node.data) {
          return node;
        } else {
          node = data > node.data ? node.right : node.left;
        }
      }
      return null;
    }
  }

  minNode(node) {
    if (node.left === null) return node;
    else return this.minNode(node.left);
  }

  remove(data) {
    this._root = this.removeNode(this._root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  min() {
    if (!this._root) {
      return undefined;
    } else {
      let node = this._root;
      while (node.left) {
        node = node.left;
      }
      return node.data;
    }
  }

  max() {
    if (!this._root) {
      return undefined;
    } else {
      let node = this._root;
      while (node.right) {
        node = node.right;
      }
      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};