const userdbInstance = require('./dbInstance');

async function checkCredentials(req, res) {
    const {username,password} = req.body; 
    try {
        // console.log(dataFromClient.username);
        // console.log(dataFromClient.password);
        const data = await userdbInstance.userdb.query(`SELECT 
        "user".userid,"user".email,"user".phno,"user".name,
        (select position from position where positionid = "user".positionid),
        "user".userprofile ,accesscontroll.distributer,accesscontroll.product,
        accesscontroll.invoice
        FROM public.credentials
        JOIN public."user" ON credentials.userid = "user".userid
        JOIN public.accesscontroll on accesscontroll.userid = "user".userid
        WHERE credentials.username=$1 and credentials.password = $2;
        `,[username,password]);
        const rowCount = data.rows.length;
        if (rowCount === 1) {
            const result = data.rows[0];
            console.log(result);
            return { success: true, data: result };
          } else {
            return { success: false, message: 'Invalid username or password' };
          }
    } catch (error) {
        console.error('Error executing database query:', error);
        throw error; // Propagate the error to the calling function
    }
}

module.exports = { checkCredentials };
