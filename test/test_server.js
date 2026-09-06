const request = require('supertest');
const app = require('../server');

describe('GET /api/tsp', () => {
    it('responds with json', (done) => {
        request(app)
            .get('/api/tsp')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});