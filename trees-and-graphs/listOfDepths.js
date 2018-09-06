// const LinkedList = required('LinkedList)
// const Tree = require('BST')

const listsPerDepth = (tree) => {
  const lists = [];
  const { root } = tree;
  root.level = 0;
  const q = [root];
  let level = 0;

  while (q.length) {
    const current = q.shift();

    if (current.left) {
      current.left.level = level + 1;
      q.push(current.left);
    }

    if (current.right) {
      current.right.level = level + 1;
      q.push(current.right);
    }

    if (current.level === level) {
      if (lists[level]) {
        lists[level].addToTail(current);
      } else {
        lists[level] = new LinkedList(current);
      }
    } else {
      level += 1;
      lists[level] = new LinkedList(current);
    }
  }

  return lists;
};
