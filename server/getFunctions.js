// In getFunctions.js (or wherever you have your getdata function)
const userdbInstance = require('./dbInstance');


// async function getUserData(req, res) {
//     const { adminid } = req.body;
//     console.log(adminid);
//     const userDeleteResult = await userdbInstance.userdb.query('select * from public."user" where adminid=$1 and positionid=$2;',
//         [adminid,'4']);
//     // return res.json({ message: "Successfully Data Fetched" , data : userDeleteResult.rows });
//     // return res.json({ message: "Successfully Data Fetched"});
//     res.json({ message: "Successfully Data Fetched", data: userDeleteResult.rows });
//     // try {
//     // } catch (error) {
//     //     console.error('Error executing database query:', error);
//     // }
// }


async function getUserData(req, res) {
    try {
        const { adminid ,position} = req.body;
        // console.log(adminid,position);
        const userDeleteResult = await userdbInstance.userdb.query('select * from public."user" where adminid=$1 and positionid=$2;', [adminid, position]);
        res.json({ message: "Successfully Data Fetched", data: userDeleteResult.rows });
    } catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
async function getUserDataIndividual(req, res) {
    try {
        // const { adminid ,position} = req.body;
        const { userid } = req.params
        const userDeleteResult = await userdbInstance.userdb.query('select * from public."user" where userid=$1;', [userid]);
        res.json({ message: "Successfully Data Fetched", data: userDeleteResult.rows[0] });
    } catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


module.exports = {getUserData , getUserDataIndividual};