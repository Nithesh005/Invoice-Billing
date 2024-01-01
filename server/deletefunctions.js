const userdbInstance = require('./dbInstance');

async function deleteUser(req, res) {
    const {userid} = req.body; 
    try {
        const userDeleteResult = await userdbInstance.userdb.query('DELETE FROM public."user" WHERE userid = $1;',
        [userid]);
        
        if (userDeleteResult.rowCount === 0) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }
        const credentialsDeleteResult = await userdbInstance.userdb.query('DELETE FROM public.credentials WHERE userid = $1;',
        [userid]);
        return res.json({ message: "Data Deleted Successfully" });
    } catch (error) {
        console.error('Error executing database query:', error);

        if (error.message.includes('unique constraint')) {
            return res.status(404).json({ message: "User not found" });
        } else {
            return res.status(500).json({ message: 'Failed to delete user: ' + error.message });
        }
    }
}

module.exports = { deleteUser };

