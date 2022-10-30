const dotenv = require("dotenv");
const Pool = require("pg").Pool;


dotenv.config();
var PGDATABASE = process.env.PGDATABASE;
var PGHOST = process.env.PGHOST;
var PGPASSWORD = process.env.PGPASSWORD;
var PGPORT = process.env.PGPORT;
var PGUSER = process.env.PGUSER;



const pool = new Pool({
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
});

module.exports = pool;
