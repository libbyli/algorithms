var Graph = function() {

  this._nodes = {};
  };

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  this._nodes[node] = this._nodes[node] || { edges: {} };
  };

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  return !!this._nodes[node];
  };

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  if (this.contains(node)) {
    // Removes edges between node to be deleted and all other connected nodes.
    for (var targetNode in this._nodes[node].edges) {
      this.removeEdge(node, targetNode);
    }
    delete this._nodes[node];
  }
  };

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  if (!this.contains(fromNode)) {
    return false;
  }
  return !!this._nodes[fromNode].edges[toNode];
  };

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  // Add an edge to each node pointing to the other
  this._nodes[fromNode].edges[toNode] = toNode;
  this._nodes[toNode].edges[fromNode] = fromNode;
  };

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  // Remove edges from each node's edge list
  delete this._nodes[fromNode].edges[toNode];
  delete this._nodes[toNode].edges[fromNode];
  };

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var node in this._nodes) {
    cb(node);
  }
};
