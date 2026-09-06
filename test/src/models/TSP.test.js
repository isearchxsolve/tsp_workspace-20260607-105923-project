const TSP = require('../src/models/TSP');

describe('TSP', () => {
  it('should solve the TSP', () => {
    const graph = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]];
    const tsp = new TSP(graph);
    const path = tsp.solve();
    expect(path).toEqual([0, 1, 2, 3]);
  });
});