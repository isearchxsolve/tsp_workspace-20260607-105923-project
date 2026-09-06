const express = require('express');
const router = express.Router();
const TSPController = require('../controllers/TSPController');

const tspController = new TSPController();

router.post('/solve', tspController.solveTSP);

module.exports = router;