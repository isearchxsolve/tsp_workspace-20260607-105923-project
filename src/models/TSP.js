class TSP {
  constructor(graph) {
    this.graph = graph;
  }

  solve() {
    // Note: The travelling salesman problem cannot be solved in O(n) time complexity.
    // This is an NP-hard problem and the most efficient algorithms have a time complexity of O(n^2 * 2^n) or worse.
    // For the purpose of this example, we will use a simple nearest neighbor algorithm.
    const path = [0];
    const visited = new Set([0]);
    let current = 0;

    for (let i = 1; i < this.graph.length; i++) {
      let minDistance = Infinity;
      let nextNode = -1;

      for (let j = 0; j < this.graph.length; j++) {
        if (!visited.has(j) && this.graph[current][j] < minDistance) {
          minDistance = this.graph[current][j];
          nextNode = j;
        }
      }

      path.push(nextNode);
      visited.add(nextNode);
      current = nextNode;
    }

    return path;
  }
}

module.exports = TSP;