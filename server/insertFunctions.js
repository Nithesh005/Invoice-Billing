const userdbInstance = require('./dbInstance');

async function addUser(req, res) {
    const {userid,
    OrganizationName,
    gstNumber,
    panNumber,
    aadharNo,
    fName,
    lName,
    Positionid,
    email,
    mobileNo,
    adminid,
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
    PostalCode2} = req.body; 
    
    try {
        const ueserTable = await userdbInstance.userdb.query('INSERT INTO public."user" (userid, email, phno, altphoneno, aadhar, pan, name, positionid, adminid, pstreetname, pdistrictid, pstateid, ppostalcode) VALUES($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)',
            [userid, email, mobileNo,mobileNo,aadharNo,panNumber,fName,Positionid,adminid,streetAddress,City,State,pCode]);
        const credentialTable = await userdbInstance.userdb.query('INSERT INTO credentials (userid,username) VALUES ($1,$2)',
            [userid,email]);

        console.log(Positionid );
        // manifacture
        if (Positionid == 1) {
            distributor_ac = products_ac = Invoice_ac = '3';
            customer = '0';
        }
        // distributer
        else if (Positionid == 2) {
            distributor_ac = '0';
            products_ac = Invoice_ac = customer = '3';
        }
        // customer
        else if (Positionid == 3) {
            distributor_ac =products_ac= customer='0';
            Invoice_ac = '3';
        }
        const access_controlTable = await userdbInstance.userdb.query('insert into accesscontroll (distributer,product,invoice,userid,customer) values ($1,$2,$3,$4,$5)',
            [distributor_ac,products_ac,Invoice_ac,userid,customer]);
        
        // return res.json({message:"Data inserted Successfully",status:true});
        return res.json({ message: "Data inserted Successfully", status: true });

    } catch (error) {
        console.error('Error executing database query:', error);
        // throw error; 
        if (error.message.includes('unique constraint')) {
            // Assuming a unique constraint violation indicates a duplicate entry
            return res.json({message: "User Already Exist" , status:false});
        } else {
            // For other errors, you might return a generic message or the error details
            return 'Failed to add user: ' + error.message;
        }
    }
}

module.exports = { addUser };