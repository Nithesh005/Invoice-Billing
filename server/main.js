const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const getdata = require('./getFunctions');

// Insert into DB
app.post('/add/:entity(user|credentials)', async (req, res) => {
    const entity = req.params.entity; // Corrected from req.params.elements
    const dataFromClient = req.body; // Assuming the data to be inserted is in the request body
    console.log(entity);
    // if (elements === 'user') {
    //     try {
    //         const gettingdata = await geting.getdata(req, res);
    //         res.json(gettingdata);
    //     } catch (error) {
    //         console.error('Error retrieving user details:', error);
    //         res.status(500).send('Internal Server Error');
    //     }
    // }
    // else if (elements === 'credentials') {
    //     console.log("two");
    // }
    // else {
    //     res.status(400).send('Invalid elements value');
    // }

});

// Get Data From DB
    app.get('/get/:entity(user|credentials|state|district|accesscontroll)', async (req, res) => {
        const entity = req.params.entity;
        const requestData = req.body;
    
        if (entity === 'user') {
            try {
                var a=  getdata.getUserData(req,res);
                console.log(a);
                res.send((await a).rows);
                //var userDataPromise = getdata.getUserData(req, res);
                //var userData = await userDataPromise;
                //console.log(userData);
                //res.send(userData.rows[0]);
            } catch (error) {
                res.send("error");
                console.error("Error retrieving data", error);
            }
        }
    
    
    else if(entity === 'credentials'){
        try{
            var a =  getdata.getUserData1(req,res);
            console.log(a);
            res.send((await a).rows);
        }
        catch(error){
            res.send("error");
            console.error("Error retrieving data");
        }
    }
    else if(entity === 'state'){
        try{
            var a =  getdata.getUserData2(req,res);
            console.log(a);
            res.send((await a).rows);
        }
        catch(error){
            res.send("error");
            console.error("Error retrieving data");
        }
    }
    else if(entity =='district'){
        try{
            var a =  getdata.getUserData3(req,res);
            console.log(a);
            res.send((await a).rows);
        }
        catch(error){
            res.send("error");
            console.error("Error retrieving data");
        }
    }
    else if(entity === 'accesscontroll'){
        try{
            var a =  getdata.getUserData4(req,res);
            console.log(a);
            res.send((await a).rows);
        }
        catch(error){
            res.send("error");
            console.error("Error retrieving data");
        }
    }
    else{
            res.send(error)
        }
    }
  
);


// Update Data from DB
app.post('/update/:entity(state | bike)', async (req, res) => {
    const entity = req.params.entity;

    try {
        if (entity === 'state') {
            await getdata.updatestate(req, res);
            // No need to await here, as updatestate already handles the response
            console.log('Update completed successfully');
        } else {
            res.status(400).send('Invalid element type');
        }
    } catch (error) {
        console.error('Error in update route:', error);
        res.status(500).send(`Error updating data: ${error.message}`);
    }
});

    // else if (elements === 'credentials') {
    //     insetintocdential();
    // }
    // else if (elements === 'userdetials') {
    //     try {
    //         await getdata(req, res);
    //     } catch (error) {
    //         console.error('Error retrieving user details:', error);
    //         res.status(500).send('Internal Server Error');
    //     }
    // }
    // else {
        //res.status(400).send('Invalid elements value');
     //}
//});


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