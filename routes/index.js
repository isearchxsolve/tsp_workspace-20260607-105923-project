const express = require('express');
const router = express.Router();
const tsp = require('../utils');

router.post('/solve', (req, res) => {
  const { cities } = req.body;
  const solution = tsp.solve(cities);
  res.json(solution);
});

module.exports = router;