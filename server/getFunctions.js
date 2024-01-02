// In getFunctions.js (or wherever you have your getdata function)
const userdbInstance = require('./dbInstance');

async function getUserData(req,res) {
    try {
         const data = await userdbInstance.userdb.query('SELECT * FROM user');
        //  console.log(data.rows);
         return data;
        
    } catch (error) {
        console.error('Error executing database query:', error);
        throw error; // Propagate the error to the calling function
    }
}

async function getUserData1(req,res) {
    try {
         const data = await userdbInstance.userdb.query('SELECT * FROM credentials');
        //  console.log(data.rows);
         return data;
        
    } catch (error) {
        console.error('Error executing database query:', error);
        throw error; // Propagate the error to the calling function
    }
}
async function getUserData2(req,res) {
    try {
         const data = await userdbInstance.userdb.query('SELECT * FROM state');
        //  console.log(data.rows);
         return data;
        
    } catch (error) {
        console.error('Error executing database query:', error);
        throw error; // Propagate the error to the calling function
    }
}

async function getUserData3(req,res) {
    try {
         const data = await userdbInstance.userdb.query('SELECT * FROM district');
        //  console.log(data.rows);
         return data;
        
    } catch (error) {
        console.error('Error executing database query:', error);
        throw error; // Propagate the error to the calling function
    }
}

async function getUserData4(req,res) {
    try {
         const data = await userdbInstance.userdb.query('SELECT * FROM accesscontroll');
        //  console.log(data.rows);
         return data;
        
    } catch (error) {
        console.error('Error executing database query:', error);
        throw error; // Propagate the error to the calling function
    }
}
async function updatestate(req, res) {
    console.log("function called");

    try {
        const {
            rno,
            stateid,
            statecode,
            statename,
            lastupdateby,
            updatedon,
            newrno,
            newstateid,
            newstatecode,
            newstatename,
            newlastupdateby,
            newupdatedon
        } = req.params;

        console.log('Received Parameters:', req.params);

        // Check if required parameters are provided
        if (!rno || !stateid || !statecode || !statename || !lastupdateby || !updatedon || !newrno || !newstateid || !newstatecode || !newstatename || !newlastupdateby || !newupdatedon) {
            console.log('Missing parameters');
            res.status(400).send('Missing parameters');
            return;
        }

        const updateQuery =
            'UPDATE state SET rno = $1, stateid = $2, statecode = $3, statename = $4, lastupdateby = $5, updatedon = $6 WHERE rno = $7 AND statecode = $8 AND statename = $9 AND lastupdateby = $10 AND updatedon = $11';

        const updateValues = [
            newrno,
            newstateid,
            newstatecode,
            newstatename,
            newlastupdateby,
            newupdatedon,
            rno,
            stateid,
            statecode,
            statename,
            lastupdateby,
            updatedon
        ];

        console.log('Update Query:', updateQuery);
        console.log('Update Values:', updateValues);

        const updateResult = await userdbInstance.userdb.query(updateQuery, updateValues);

        console.log('Update successful');
        res.send('Update successful');
    } catch (error) {
        console.error('Error in updatestate function:', error);
        res.status(500).send(`Error updating data: ${error.message}`);
    }
}












module.exports = { getUserData , getUserData1, getUserData2, getUserData3, getUserData4, updatestate };
