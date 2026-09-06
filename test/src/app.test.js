const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

describe('POST /solve', () => {
  it('should return 200 OK', async () => {
    const graph = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]];
    const response = await request(app)
      .post('/solve')
      .send({ graph });
    expect(response.status).toBe(200);
  });
});