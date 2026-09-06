const request = require('supertest');
const app = require('../app');

describe('Travelling Salesman Problem Solver API', () => {
  it('should return a solution', async () => {
    const response = await request(app).post('/solve').send({ cities: [[0, 0], [0, 1], [1, 0], [1, 1]] });
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});