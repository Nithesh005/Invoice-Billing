
const userdbInstance = require('./dbInstance');



async function updateuser(req,res)
{
    console.log("fucntion called");
    const {userid,email} = req.body;
    console.log(userid);
    console.log(email);
    
        
            try {        
                    const updateQuery =
                    'UPDATE public."user" SET email=$1 WHERE userid= $2';
                   // 'INSERT INTO public."user"(email,userid)  VALUES($1,$2)';
                    //  'DELETE FROM public."user" WHERE email=$1 AND userid=$2';
                    console.log("woll");
                const updateValues = [
                    email,
                    userid
                ];
        
                console.log('Update Query:', updateQuery);
                console.log('Update Values:', updateValues);
        
                const updateResult = await userdbInstance.userdb.query(updateQuery, updateValues);
        
                console.log('Update successful');
                res.send('Update successful');
            }
         
          catch (error) {
                console.error('Error in updatestate function:', error);
                res.status(500).send(`Error updating data: ${error.message}`);
            }
        
        
        
        
    }

    async function updateaccesscontroll(req,res)
{
    console.log("fucntion called");
    const {userid,product} = req.body;
    
    console.log(product);
    console.log(userid);
    
        
            try {        
                    const updateQuery =
                    'UPDATE public."accesscontroll" SET product=$1 WHERE userid= $2';
                   // 'INSERT INTO public."user"(email,userid)  VALUES($1,$2)';
                    //  'DELETE FROM public."user" WHERE email=$1 AND userid=$2';
                    
                const updateValues = [
                    product,
                    userid
                ];
        
                console.log('Update Query:', updateQuery);
                console.log('Update Values:', updateValues);
        
                const updateResult = await userdbInstance.userdb.query(updateQuery, updateValues);
        
                console.log('Update successful');
                res.send('Update successful');
            }
         
          catch (error) {
                console.error('Error in updatestate function:', error);
                res.status(500).send(`Error updating data: ${error.message}`);
            }
        
        
        
        
    }

    module.exports={updateuser,updateaccesscontroll};

    
    
