// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'moodduck_admin',
  host: 'localhost',
  database: 'moodduck_db',
  password: 'icoder33',
  port: 5432,
});

module.exports = pool;
