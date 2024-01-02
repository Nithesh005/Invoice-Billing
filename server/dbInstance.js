const Pool = require('pg').Pool;
const userdb = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'billing',
    password: 'priya',
    port: 5432,
});

module.exports = {userdb};