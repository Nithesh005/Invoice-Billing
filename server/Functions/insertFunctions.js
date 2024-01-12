const userdbInstance = require('../instances/dbInstance');

async function addUser(req, res) {
    const { userid,
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
        PostalCode2 } = req.body;
    const status = 1;

    console.log(
        Positionid,
    );

    try {
        await userdbInstance.userdb.query('BEGIN');
        const ueserTable = await userdbInstance.userdb.query('INSERT INTO public."user" (userid, email, phno, altphoneno, aadhar, pan, name, positionid, adminid, pstreetname, pdistrictid, pstateid, ppostalcode,status) VALUES($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)',
            [userid, email, mobileNo, mobileNo, aadharNo, panNumber, fName, Positionid, adminid, streetAddress, City, State, pCode, status]);
        const credentialTable = await userdbInstance.userdb.query('INSERT INTO credentials (userid,username) VALUES ($1,$2)',
            [userid, email]);

        console.log(Positionid);
        // manifacture
        if (Positionid == 1) {
            distributor_ac = products_ac = Invoice_ac = staff_ac = '3';
            customer_ac = '0';
        }
        // distributer
        else if (Positionid == 2) {
            distributor_ac = staff_ac = '0';
            products_ac = Invoice_ac = customer_ac = '3';
        }
        // customer
        else if (Positionid == 3) {
            distributor_ac = products_ac = customer_ac = staff_ac = '0';
            Invoice_ac = '3';
        }
        // staff
        else if (Positionid == 4) {
            customer_ac = staff_ac = '0';
            distributor_ac = '2';
            products_ac = Invoice_ac = '3';
        }
        const access_controlTable = await userdbInstance.userdb.query('insert into accesscontroll (distributer,product,invoice,userid,customer,staff) values ($1,$2,$3,$4,$5,$6)',
            [distributor_ac, products_ac, Invoice_ac, userid, customer_ac, staff_ac]);
        await userdbInstance.userdb.query('COMMIT');
        return res.json({ message: "Data inserted Successfully", status: true });

    } catch (error) {
        console.error('Error executing database query:', error);
        // throw error; 
        if (error.message.includes('unique constraint')) {
            // Assuming a unique constraint violation indicates a duplicate entry
            return res.json({ message: "User Already Exist", status: false });
        } else {
            // For other errors, you might return a generic message or the error details
            return 'Failed to add user: ' + error.message;
        }
    }
}
async function addInvoice(req, res) {
    const { invoiceid } = req.body;
    console.log(invoiceid);

    try {
        await userdbInstance.userdb.query('BEGIN');

        // Execute the first query
        const userTableResult = await userdbInstance.userdb.query('INSERT INTO public."invoice" (invoiceid) VALUES ($1)', [invoiceid]);

        // Execute the second query
        const credentialTableResult = await userdbInstance.userdb.query('INSERT INTO invoiceitem (invoiceid) VALUES ($1)', [invoiceid]);

        // Commit the transaction if both queries are successful
        await userdbInstance.userdb.query('COMMIT');

        // return res.json({message:"Data inserted Successfully",status:true});
        return res.json({ message: "Data inserted Successfully", status: true });

    } catch (error) {
        console.error('Error executing database query:', error);
        // throw error; 
        if (error.message.includes('unique constraint')) {
            // Assuming a unique constraint violation indicates a duplicate entry
            return res.json({ message: "User Already Exist", status: false });
        } else {
            // For other errors, you might return a generic message or the error details
            return 'Failed to add user: ' + error.message;
        }
    }
}
async function addProduct(req, res) {
    // const { hsncode,quantity,priceperitem,userid } = req.body;
    const { hsncode, quantity, priceperitem, productname } = req.body.productdetial;
    const { updator } = req.body;
    console.log(hsncode, quantity, priceperitem, productname, updator);

    try {
        await userdbInstance.userdb.query('BEGIN');
        const insertProductResult = await userdbInstance.userdb.query(`INSERT INTO public.products(
            productid, quantity, priceperitem, "Lastupdatedby",productname,belongsto,status)
            VALUES ($1, $2, $3, $4,$5,$6,$7);`, [hsncode, quantity, priceperitem, updator, productname, updator, '1']);
        await userdbInstance.userdb.query('COMMIT');
        if (insertProductResult.rowCount === 1) {
            // console.log(insertProductResult);
            res.json({ message: "Data inserted Successfully", status: true });
            // res.json({ message: "Successfully Updated" });
        } else {
            res.status(404).json({ message: "User not found" });
        }

    } catch (error) {
        console.error('Error executing database query:', error);
        // throw error; 
        // if (error.message.includes('unique constraint')) {
        //     return res.json({ message: "User Already Exist", status: false });
        // } else {
        //     return 'Failed to add user: ' + error.message;
        // }
    }
}

module.exports = { addUser, addInvoice, addProduct };