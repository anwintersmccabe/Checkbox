const Pool = require("pg").Pool;

const pool = new Pool({
  user: "[Your User]",
  password: "[Your Password]",
  host: "localhost",
  port: 5432,
  database: "perntodo"
});

module.exports = pool;
