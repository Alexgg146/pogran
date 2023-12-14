const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password:"146641",
    host:"localhost",
    port: 5432,
    database:"kontraktfsb"
})

module.exports = pool