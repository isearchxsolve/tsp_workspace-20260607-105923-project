const request = require('supertest');
const app = require('../app');

describe('Tsp routes', () => {
  it('should create a new Tsp', async () => {
    const response = await request(app)
      .post('/tsp')
      .send({ cities: 'New York', distance: 100 });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should find a Tsp by id', async () => {
    const response = await request(app)
      .post('/tsp')
      .send({ cities: 'New York', distance: 100 });
    const tspId = response.body.id;
    const response2 = await request(app)
      .get(`/tsp/${tspId}`);
    expect(response2.status).toBe(200);
    expect(response2.body).toHaveProperty('id', tspId);
  });
});