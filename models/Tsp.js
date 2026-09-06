const db = require('../database');

const Tsp = function(tsp) {
  this.id = tsp.id;
  this.cities = tsp.cities;
  this.distance = tsp.distance;
};

Tsp.create = (newTsp, result) => {
  db.query('INSERT INTO tsp SET ?', newTsp, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, { id: res.insertId, ...newTsp });
    }
  });
};

Tsp.findById = (tspId, result) => {
  db.query('SELECT * FROM tsp WHERE id = ? ', tspId, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Tsp;