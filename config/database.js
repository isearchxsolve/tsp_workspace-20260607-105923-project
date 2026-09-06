const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tsp', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;