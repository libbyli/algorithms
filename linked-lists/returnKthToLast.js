// Implement an algorithm to find the kth to last element of a singly linked list.

const kthToLast = (k, list) => {
  let slow = list.head;
  let fast = list.head;

  for (let i = 0; i < k; i += 1) {
    if (fast === null) {
      return null;
    }
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
