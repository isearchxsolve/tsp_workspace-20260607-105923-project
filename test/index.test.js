const nearestNeighbour = require('../index.js');

const graph = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0]
];

it('should return a path', () => {
  const path = nearestNeighbour(graph);
  expect(path.length).toBe(graph.length);
});

it('should start and end at the same node', () => {
  const path = nearestNeighbour(graph);
  expect(path[0]).toBe(0);
  expect(path[path.length - 1]).toBe(0);
});