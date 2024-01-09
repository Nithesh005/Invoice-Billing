const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');  // Require the 'fs' module to read files
const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
const addData = require('./insertFunctions');
const verifyData = require('./verifyFunction');
const deleteData = require('./deletefunctions');
const getData = require('./getFunctions');


app.post('/verify/:entity(user|credentials)', async (req, res) => {
    const entity = req.params.entity; // Corrected from req.params.elements
    const dataFromClient = req.body; // Assuming the data to be inserted is in the request body
    // console.log(entity);
    if (entity === 'credentials') {
        let result = await verifyData.checkCredentials(req, res);
        res.json(result);
    }
    else {
        res.status(400).send('Invalid elements value');
    }

});

// Insert into DB
app.post('/add/:entity(user|products)', async (req, res) => {
    const entity = req.params.entity;
    if (entity === 'user') {
        try {
            const addUser = await addData.addUser(req, res);
            // res.json(addUser);
        } catch (error) {
            console.error('Error retrieving user details:', error);
            res.status(500).send('Internal Server Error');
        }
    }
    if (entity === 'products') {
        try {
            const addUser = await addData.addInvoice(req, res);
            // res.json(addUser);
        } catch (error) {
            console.error('Error retrieving products details:', error);
            res.status(500).send('Internal Server Error');
        }
    }
})

// Get Data From DB
app.post('/get/:entity(user|credentials|products|state|district|access_control)', async (req, res) => {
    const entity = req.params.entity;
    const requestData = req.body;
    // console.log(entity);
    if (entity === 'user') {
        try {
            var userdata = await getData.getUserData(req, res);
            // res.send(userdata);
        }
        catch (error) {
            res.send("error");
            console.error("Error retrieving data");
        }
    }
    if (entity === 'products') {
        try {
            // var userdata = await getdata.getUserData(req, res);
            // res.send(userdata);
        }
        catch (error) {
            res.send("error");
            console.error("Error retrieving data");
        }
    }
    // else {
    //     res.status(400).send('Invalid elements value');
    // }
});


// Update Data from DB
app.get('/update/:elements', async (req, res) => {
    const elements = req.params.elements;
    const requestData = req.body; // Assuming the data to be inserted is in the request body
    if (elements === 'user') {
        insertDataIntoTable(requestData);
        res.send('Data insertion initiated');
    }
    else if (elements === 'credentials') {
        insetintocdential();
    }
    else if (elements === 'userdetials') {
        try {
            await getdata(req, res);
        } catch (error) {
            console.error('Error retrieving user details:', error);
            res.status(500).send('Internal Server Error');
        }
    }
    else {
        res.status(400).send('Invalid elements value');
    }
});

// Delete data
app.post('/delete/:entity(user|products)',async(req,res)=>{
    const entity = req.params.entity;
    if (entity === 'user') {
        try {
            const deleteUser = await deleteData.deleteUser(req, res);
            // res.json(deleteUser);
        } catch (error) {
            console.error('Error retrieving user details:', error);
            res.status(500).send('Internal Server Error');
        }
    }
    if (entity === 'products') {
        try {
            const deleteUser = await deleteData.deleteInvoice(req, res);
            // res.json(deleteUser);
        } catch (error) {
            console.error('Error retrieving user details:', error);
            res.status(500).send('Internal Server Error');
        }
    }
})


app.post('/send-email', async (req, res) => {
    // console.log("Sss");
    const { to, data, subject } = req.body;
    console.log(data);
    const filePath = path.join(__dirname, 'mail-template.html');
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'terionorganization@gmail.com', // Replace with your Gmail email
            pass: 'imkq rydg xtla lvmx', // Replace with your Gmail password or app-specific password
        },
    });
    const mailOptions = {
        from: 'terionorganization@gmail.com',
        to: to,
        subject: "Official mail from Terion Organization",
        html: htmlContent, // Include HTML content in the email body
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});




app.listen(4000, () => {
    console.log("server is running on port 4000");
});


























































// dont change
// POST endpoint to insert data
// app.post('/admin/insert', async (req, res) => {
//     try {
//         const {
//             MF_Id,
//             M_Email,
//             M_Phone_No,
//             M_Pan_Number,
//             M_Aadhar_Number,
//             M_Name,
//             M_Position,
//             M_Alternate_Phone_No,
//             M_User_Name,
//             M_Password,
//             M_Business_Type,
//             M_GST_Number,
//             M_Organization_Name,
//             M_Account_Name,
//             M_Account_Number,
//             M_Linked_Phone_no,
//             M_Pass_Img,
//             M_Upi_Id,
//             M_PR_Street_Address,
//             M_PR_City,
//             M_PR_State,
//             M_PR_PostalCode,
//             M_CD_Street_Address,
//             M_CD_City,
//             M_CD_State,
//             M_CD_PostalCode,
//             M_DS_Id,
//             M_Amount,
//             M_Updated_By
//         } = req.body; // Use req.body to get values from the request body
//         console.log("HII Hello", MF_Id, M_Email)
//         const result = await User_db_connection.query(`
//             INSERT INTO public.manufacturer(
//                 "MF_Id", "M_Email", "M_Phone_No", "M_Pan_Number", "M_Aadhar_Number",
//                 "M_Name", "M_Position", "M_Alternate_Phone_No", "M_User_Name",
//                 "M_Password", "M_Business_Type", "M_GST_Number", "M_Organization_Name",
//                 "M_Account_Name", "M_Account_Number", "M_Linked_Phone_no", "M_Pass_Img",
//                 "M_Upi_Id", "M_PR_Street_Address", "M_PR_City", "M_PR_State", "M_PR_PostalCode",
//                 "M_CD_Street_Address", "M_CD_City", "M_CD_State", "M_CD_PostalCode", "M_DS_Id",
//                 "M_Amount","M_Updated_By"
//             )
//             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29)
//             RETURNING *;
//         `, [
//             MF_Id,
//             M_Email,
//             M_Phone_No,
//             M_Pan_Number,
//             M_Aadhar_Number,
//             M_Name,
//             M_Position,
//             M_Alternate_Phone_No,
//             M_User_Name,
//             M_Password,
//             M_Business_Type,
//             M_GST_Number,
//             M_Organization_Name,
//             M_Account_Name,
//             M_Account_Number,
//             M_Linked_Phone_no,
//             M_Pass_Img,
//             M_Upi_Id,
//             M_PR_Street_Address,
//             M_PR_City,
//             M_PR_State,
//             M_PR_PostalCode,
//             M_CD_Street_Address,
//             M_CD_City,
//             M_CD_State,
//             M_CD_PostalCode,
//             M_DS_Id,
//             M_Amount,
//             M_Updated_By
//         ]);

//         console.log(result.rows);
//         res.json(result.rows);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });