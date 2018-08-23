/* Given a directed graph, design an algorithm to find out whether there is a route between two
nodes. */

const routeExists = (graph, startNode, endNode) => {
  let queue = [];
  const visitedObject = { startNode: true };

  for (let i = 0; i < startNode.edges.length; i += 1) {
    queue.push(startNode.edges[i]);
  }

  while (queue.length) {
    let firstItem = queue.shift();

    if (JSON.stringify(firstItem) === JSON.stringify(endNode)) {
      return true;
    }

    if (!visitedObject[firstItem]) {
      visitedObject[firstItem] = true;
    }

    for (let i = 0; i < firstItem.edges.length; i += 1) {
      if (!visitedObject[firstItem.edges[i]]) {
        queue.push(firstItem.edges[i]);
      }
    }
  }

  return false;
};
