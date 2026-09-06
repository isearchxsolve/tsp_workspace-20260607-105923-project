const TSP = require('../models/TSP');

class TSPController {
  constructor() {}

  solveTSP(req, res) {
    const graph = req.body.graph;
    const tsp = new TSP(graph);
    const path = tsp.solve();
    res.json({ path });
  }
}

module.exports = TSPController;