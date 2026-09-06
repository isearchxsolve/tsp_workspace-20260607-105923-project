const mysql = require('mysql');
const config = require('./config');

const db = mysql.createConnection(config.db);

db.connect((err) => {
  if (err) {
    console.error('error connecting:', err);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

module.exports = db;