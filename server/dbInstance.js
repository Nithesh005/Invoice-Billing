const Pool = require('pg').Pool;
const userdb = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'Terion',
    password: '123',
    port: 5432,
});
async function getdata1(req) {
    try {
        console.log("hello");
        // const data = await userdb.query('SELECT * FROM manufacturer');
        // console.log(data.rows);
        // return data.rows;
    } catch (error) {
        console.error(error);
        throw error; // Propagate the error to the calling function
    }
}
module.exports = {userdb , getdata1};