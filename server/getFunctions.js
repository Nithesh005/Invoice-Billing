// In getFunctions.js (or wherever you have your getdata function)
const userdbInstance = require('./dbInstance');

async function getUserData(req,res) {
    try {
         const data = await userdbInstance.userdb.query('SELECT * FROM bike');
        //  console.log(data.rows);
         return data;
        
    } catch (error) {
        console.error('Error executing database query:', error);
        throw error; // Propagate the error to the calling function
    }
}

module.exports = { getUserData };
