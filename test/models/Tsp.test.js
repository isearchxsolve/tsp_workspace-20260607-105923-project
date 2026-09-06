const Tsp = require('../models/Tsp');
const db = require('../database');

beforeEach((done) => {
  db.query('DELETE FROM tsp', (err) => {
    done();
  });
});

afterAll((done) => {
  db.end((err) => {
    done();
  });
});

describe('Tsp model', () => {
  it('should create a new Tsp', (done) => {
    const newTsp = { cities: 'New York', distance: 100 };
    Tsp.create(newTsp, (err, data) => {
      expect(err).toBeNull();
      expect(data).toHaveProperty('id');
      done();
    });
  });

  it('should find a Tsp by id', (done) => {
    const newTsp = { cities: 'New York', distance: 100 };
    Tsp.create(newTsp, (err, data) => {
      Tsp.findById(data.id, (err, tsp) => {
        expect(err).toBeNull();
        expect(tsp).toHaveProperty('id', data.id);
        done();
      });
    });
  });
});