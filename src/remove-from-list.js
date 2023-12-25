function removeKFromList(list, k) {
  while (list.value && list.value === k) list = list.next;

  const head = list;
  let node = head;

  while (node.next !== null) {
    if (node.next.value === k) node.next = node.next.next;
    else node = node.next;
  }

  return head;
};

module.exports = {
  removeKFromList
};