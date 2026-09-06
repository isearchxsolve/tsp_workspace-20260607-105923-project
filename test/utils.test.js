const tsp = require('../utils');

describe('Travelling Salesman Problem Solver', () => {
  it('should solve the problem', () => {
    const cities = [[0, 0], [0, 1], [1, 0], [1, 1]];
    const solution = tsp.solve(cities);
    expect(solution).toBeInstanceOf(Array);
  });
});