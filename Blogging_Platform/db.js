const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    port: '5433',
    database: 'blog',
    password: 'Portable-@19'
})

module.exports = pool;