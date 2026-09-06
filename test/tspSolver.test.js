const tspSolver = require('../tspSolver');

describe('tspSolver', () => {
  it('should return a path', () => {
    const distances = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]];
    const path = tspSolver(distances);
    expect(path).toBeInstanceOf(Array);
  });
  it('should return a path with the correct length', () => {
    const distances = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]];
    const path = tspSolver(distances);
    expect(path.length).toBe(4);
  });
});
