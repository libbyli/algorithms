/* Write code to remove duplicates from an unsorted linked list. */
const LinkedList = require('./linkedList');
const list = LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(5);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(2);

const removeDups = (node) => {
  const holder = {};
  let previous;

  while (node) {
    if (!holder[node.value]) {
      holder[node.value] = true;
      previous = node;
    } else {
      if (node === list.tail) {
        list.tail = previous;
      }
      previous.next = node.next;
    }
    node = node.next;
  }
};

removeDups(list.head); // 1 -> 2 -> 5 -> 3 -> 4
