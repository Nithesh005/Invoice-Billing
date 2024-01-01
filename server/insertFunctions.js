const userdbInstance = require('./dbInstance');

async function addUser(req, res) {
    const {userid,email,positionid} = req.body; 
    try {
        const ueserTable = await userdbInstance.userdb.query('INSERT INTO public."user" (userid, email, positionid) VALUES($1, $2, $3)',
            [userid, email, positionid]);
        const credentialTable = await userdbInstance.userdb.query('INSERT INTO credentials (userid,username) VALUES ($1,$2)',
            [userid,email]);

        // console.log(positionid );
        // manifacture
        if (positionid == 1) {
            distributor_ac = products_ac = Invoice_ac = '3';
            customer = '0';
        }
        // distributer
        else if (positionid == 2) {
            distributor_ac = '0';
            products_ac = Invoice_ac = customer = '3';
        }
        // customer
        else if (positionid == 3) {
            distributor_ac =products_ac= customer='0';
            Invoice_ac = '3';
        }
        const access_controlTable = await userdbInstance.userdb.query('insert into accesscontroll (distributer,product,invoice,userid,customer) values ($1,$2,$3,$4,$5)',
            [distributor_ac,products_ac,Invoice_ac,userid,customer]);
        
        return res.json({message:"Data inserted Successfully"});
    } catch (error) {
        console.error('Error executing database query:', error);
        // throw error; 
        if (error.message.includes('unique constraint')) {
            // Assuming a unique constraint violation indicates a duplicate entry
            return 'User already exists';
        } else {
            // For other errors, you might return a generic message or the error details
            return 'Failed to add user: ' + error.message;
        }
    }
}

module.exports = { addUser };