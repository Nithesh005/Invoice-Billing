const userdbInstance = require('./dbInstance');
async function updateUserDataIndividual(req, res) {
    const {
        userid,
        OrganizationName,
        bussinessType,
        gstNumber,
        panNumber,
        aadharNo,
        fName,
        lName,
        email,
        mobileNo,
        upiPaymentNo,
        accName,
        accNo,
        passbookImg,
        pAddress,
        streetAddress,
        City,
        State,
        pCode,
        CommunicationAddress,
        StreetAddress2,
        City2,
        State2,
        PostalCode2
    } = req.body.inputValues;
    const hi = req.body.inputValues;
    try {
        console.log(streetAddress);
        console.log(hi);
        const userUpdateResult = await userdbInstance.userdb.query(`UPDATE public."user"
        SET phno=$1, altphoneno=$2, aadhar=$3, pan=$4, name=$5, pstreetname=$6, pdistrictid=$7, pstateid=$8,ppostalcode=$9, cstreetname=$10, cdistrictid=$11, cstateid=$12, cpostalcode=$13
        WHERE userid=$14;`, [mobileNo, mobileNo, aadharNo, panNumber, fName, streetAddress, City, State, pCode, StreetAddress2, City2, State2, PostalCode2,userid]);
        if (userUpdateResult.rowCount === 1) {
            // The update was successful
            res.json({ message: "Successfully Updated" });
        } else {
            // No rows were updated, handle accordingly
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
async function updateStatusToRemove(req, res) {
    // const {userid,currectStatus} = req.body;
    const {userid,status} = req.body;
    // if (status == 1) {
    //     updateStatus = 0;
    // }else{
    //     updateStatus = 1;
    // }
    try {
        const userUpdateResult = await userdbInstance.userdb.query(`UPDATE public."user"
        SET status=$1
        WHERE userid=$2;`, [status,userid]);
        if (userUpdateResult.rowCount === 1) {
            // The update was successful
            res.json({ resStatus: status, qos:"success" });
        } else {
            // No rows were updated, handle accordingly
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error('Error executing database query:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


module.exports = { updateUserDataIndividual , updateStatusToRemove };