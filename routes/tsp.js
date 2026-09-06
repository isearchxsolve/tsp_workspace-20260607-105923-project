const express = require('express');
const router = express.Router();
const Tsp = require('../models/Tsp');

router.post('/tsp', (req, res) => {
  Tsp.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({ message: err.message || 'Some error occurred while creating the Tsp.' });
    } else {
      res.send(data);
    }
  });
});

router.get('/tsp/:tspId', (req, res) => {
  Tsp.findById(req.params.tspId, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({ message: `Not found Tsp with id ${req.params.tspId}.` });
      } else {
        res.status(500).send({ message: 'Error retrieving Tsp with id ' + req.params.tspId });
      }
    } else {
      res.send(data);
    }
  });
});

module.exports = router;