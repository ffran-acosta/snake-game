const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.S_USER,
    host: process.env.S_HOST,
    database: process.env.S_DATABASE,
    password: process.env.S_PASSWORD,
    port: process.env.S_PORT,
})

module.exports = pool
