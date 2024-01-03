const userdbInstance = require('./dbInstance');

async function adduserdata(req, res) {
        console.log("function called");
        const { userid, email } = req.body;
    
        try {
            const updateQuery = 'INSERT INTO public."user"(email, userid) VALUES($1, $2)';
            const updateValues = [email, userid];
    
            console.log('Update Query:', updateQuery);
            console.log('Update Values:', updateValues);
    
            const updateResult = await userdbInstance.userdb.query(updateQuery, updateValues);
    
            console.log('Add successful');
            res.status(200).json({ message: 'Add successful' });
        } catch (error) {
            console.error('Error in adduser function:', error);
            res.status(500).json({ error: 'Error adding data' });
        }
    }
    
    
    async function addcredentialsdata(req, res) {
        console.log("function called");
        const {username,password} = req.body;
    
        try {
            const updateQuery = 'INSERT INTO public."credentials"(username, password) VALUES($1, $2)';
            const updateValues = [username, password];
    
            console.log('Update Query:', updateQuery);
            console.log('Update Values:', updateValues);
    
            const updateResult = await userdbInstance.userdb.query(updateQuery, updateValues);
    
            console.log('Add successful');
            res.status(200).json({ message: 'Add successful' });
        } catch (error) {
            console.error('Error in adduser function:', error);
            res.status(500).json({ error: 'Error adding data' });
        }
    }

    module.exports={adduserdata,addcredentialsdata};
    
