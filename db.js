const {Pool} = require('pg');
const dotenv = require('dotenv')
// const app = express
dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

module.exports = pool;