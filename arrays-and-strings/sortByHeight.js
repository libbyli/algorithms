/* Some people are standing in a row in a park. There are trees between them which cannot be moved.
Your task is to rearrange the people by their heights in a non-descending order without moving the
trees. People can be very tall! */

function sortByHeight(a) {
  let treeIndex = [];
  let people = [];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === -1) {
      treeIndex.push(i);
    } else {
      people.push(a[i]);
    }
  }

  const sortedPeople = people.sort((a, b) => a - b);

  for (let i = 0; i < treeIndex.length; i += 1) {
    sortedPeople.splice(treeIndex[i], 0, -1);
  }

  return sortedPeople;
}
