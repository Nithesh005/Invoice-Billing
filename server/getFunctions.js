// In getFunctions.js (or wherever you have your getdata function)
const userdbInstance = require('./dbInstance');

// async function getdata(req, res) {
//     try {
//         console.log("hai");
//         const client = await userdb.connect();
//         const data = await client.query('SELECT * FROM manufacturer');
//         console.log(data.rows);
//         res.json(data.rows);
//         client.release(); // Release the client back to the pool
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// }

async function getdata(req) {
    try {
        const data = await userdbInstance.userdb.query('SELECT * FROM manufacturer');
        console.log(data.rows);
        return data.rows;
    } catch (error) {
        console.error('Error executing database query:', error);
        throw error; // Propagate the error to the calling function
    }
}

module.exports = { getdata };
