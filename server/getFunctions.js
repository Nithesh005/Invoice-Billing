// In getFunctions.js (or wherever you have your getdata function)
const userdbInstance = require('./dbInstance');

async function getUserData(req,res) {
    try {
         const data = await userdbInstance.userdb.query('SELECT * FROM public."user"');
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





    
    
    
    async function deleteuser(req,res){
    console.log("fucntion called");
    const {userid,email} = req.body;
    console.log(userid);
    console.log(email);
    
        
            try {        
                    const updateQuery =
                  'DELETE FROM public."user" WHERE email=$1 AND userid=$2';
                    
                const updateValues = [
                    email,
                    userid
                ];
        
                console.log('Delete Query:', updateQuery);
                console.log('Delete Values:', updateValues);
        
                const updateResult = await userdbInstance.userdb.query(updateQuery, updateValues);
        
                console.log('delete successfull');
                res.send('delete successful');
            }
         
          catch (error) {
                console.error('Error in updatestate function:', error);
                res.status(500).send(`Error updating data: ${error.message}`);
            }
        
        
        
        
    }





    
    







    


















module.exports = { getUserData , getUserData1, getUserData2, getUserData3, getUserData4,deleteuser };
