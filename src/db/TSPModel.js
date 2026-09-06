const mongoose = require('mongoose');

const tspSchema = new mongoose.Schema({
  graph: [[Number]]
});

const TSP = mongoose.model('TSP', tspSchema);

module.exports = TSP;