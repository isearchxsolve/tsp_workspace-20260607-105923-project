function tspSolver(distances) {
  // Note: The travelling salesman problem cannot be solved in O(n) time complexity.
  // The problem is NP-hard, and the best known algorithms have a time complexity of O(n^2) or worse.
  // This implementation uses a nearest neighbor approach, which is a simple heuristic but not optimal.
  const numCities = distances.length;
  const path = [0];
  const visited = new Array(numCities).fill(false);
  visited[0] = true;
  for (let i = 1; i < numCities; i++) {
    let minDistance = Infinity;
    let nearestCity = -1;
    for (let j = 0; j < numCities; j++) {
      if (!visited[j] && distances[path[i - 1]][j] < minDistance) {
        minDistance = distances[path[i - 1]][j];
        nearestCity = j;
      }
    }
    path.push(nearestCity);
    visited[nearestCity] = true;
  }
  return path;
}

module.exports = tspSolver;
