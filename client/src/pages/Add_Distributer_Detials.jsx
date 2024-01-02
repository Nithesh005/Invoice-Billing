import React from 'react';
import axios from 'axios';
import '../assets/style/App.css';
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

//import icons from fontawesome and react icon kit
import { Icon } from 'react-icons-kit';
import { person } from 'react-icons-kit/iconic/person';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { phone } from 'react-icons-kit/icomoon/phone'
import { location2 } from 'react-icons-kit/icomoon/location2'
import { ic_wysiwyg } from 'react-icons-kit/md/ic_wysiwyg'
import { location } from 'react-icons-kit/entypo/location'
import { ic_room } from 'react-icons-kit/md/ic_room';
import { map } from 'react-icons-kit/fa/map';
import { ic_mail } from 'react-icons-kit/md/ic_mail';
import { ic_home_work } from 'react-icons-kit/md/ic_home_work';
import { ic_domain } from 'react-icons-kit/md/ic_domain';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { following } from 'react-icons-kit/ikons/following';
import { followers } from 'react-icons-kit/ikons/followers';
import { pen_3 } from 'react-icons-kit/ikons/pen_3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




const Add_Distributer_Detials = () => {
    // for invoice
    const [postData, setPostData] = useState({
        userid: '',
        OrganizationName: '',
        gstNumber: '',
        panNumber: '',
        aadharNo: '',
        fName: '',
        lName: '',
        Position: '',
        email: '',
        mobileNo: '',
        upiPaymentNo: '',
        accName: '',
        accNo: '',
        passbookImg: '',

        pAddress: '',
        streetAddress: '',
        City: '',
        State: '',

        pCode: '',
        CommunicationAddress: '',
        StreetAddress2: '',
        City2: '',
        State2: '',
        PostalCode2: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // alert(`hai ${value}`);
        // setfirst_name(value);
        setPostData({
            ...postData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        const isValidMF_Id = /^[a-zA-Z]+$/.test(postData.MF_Id)
        const isValidUserName = /^[a-zA-Z]+$/.test(postData.M_User_Name)
        const isValidAadhar = /^[a-zA-Z]+$/.test(postData.M_Aadhar_Number)
        const isValidPosition = /^[a-zA-Z]+$/i.test(postData.M_Position)
        const isValidGST = /^[a-zA-Z]+$/.test(postData.M_GST_Number)
        const isValidBussinessType = /^[a-zA-Z]+$/.test(postData.M_Business_Type)
        const isValidEmail = /^[a-zA-Z]+$/.test(postData.M_Email)
        const isValidAcc_No = /^[a-zA-Z]+$/.test(postData.M_Account_Number)
        const isValidPhoneNo = /^[a-zA-Z]+$/.test(postData.M_Phone_No)
        const isValidPANno = /^[a-zA-Z]+$/.test(postData.M_Pan_Number)
        const isValidOrganisationNo = /^[a-zA-Z]+$/.test(postData.M_Organization_Name)
        const isValidUpiId = /^[a-zA-Z]+$/.test(postData.M_Upi_Id)
        console.log(isValidEmail);
        if (!isValidMF_Id || !isValidUserName || !isValidAadhar
            || !isValidPosition || !isValidGST || !isValidBussinessType || !isValidEmail || !isValidAcc_No || !isValidPhoneNo || !isValidPANno || !isValidOrganisationNo || !isValidUpiId
        ) {
            alert("Enter the valid data");
        } else {
            try {
                const response = await axios.post('http://localhost:4000/admin/insert', postData);
                console.log('Data sent successfully:', response.data);
                window.alert("Details Added Successfully");
            } catch (error) {
                console.error('Error sending data:', error);
            }
        }


    };

    const inputFields = [
        { label: "User ID", name: "userid", value: postData.userid, icon: ic_home_work },
        { label: "Organization Name", name: "OrganizationName", value: postData.OrganizationName, icon: person },
        { label: "GST Number", name: "gstNumber", value: postData.gstNumber, icon: pen_3 },
        { label: "PAN Number", name: "panNumber", value: postData.panNumber, icon: ic_wysiwyg },
        // Add more input field objects as needed
        { label: "Aadhar Number", name: "aadharNo", value: postData.aadharNo, icon: pen_3 },
        { label: "First Name", name: "fName", value: postData.fName, icon: pen_3 },
        { label: "Last Name", name: "lName", value: postData.lName, icon: pen_3 },
        { label: "Position", name: "Position", value: postData.Position, icon: pen_3 },
        // row 3
        { label: "Email", name: "email", value: postData.email, icon: pen_3 },
        { label: "Mobile Number", name: "mobileNo", value: postData.mobileNo, icon: pen_3 },
// 2. UPI Payment Details:
        { label: "UPI Payment Mobile No", name: "upiPaymentNo", value: postData.upiPaymentNo, icon: pen_3 },
        { label: "UPI - Bank Account Name", name: "accName", value: postData.accName, icon: pen_3 },
        { label: "UPI - Bank Account Number", name: "accNo", value: postData.accNo, icon: pen_3 },
        { label: "Pass Book image", name: "passbookImg", value: postData.passbookImg, icon: pen_3 },
// 3. Address Details:
        { label: "Permanent Address", name: "pAddress", value: postData.pAddress, icon: pen_3 },
        { label: "Street Address", name: "streetAddress", value: postData.streetAddress, icon: pen_3 },
        { label: "City", name: "City", value: postData.City, icon: pen_3 },
        { label: "State", name: "State", value: postData.State, icon: pen_3 },

        { label: "Postal Code", name: "pCode", value: postData.pCode, icon: pen_3 },
        { label: "Communication Address", name: "CommunicationAddress", value: postData.CommunicationAddress, icon: pen_3 },
        { label: "Street Address", name: "StreetAddress2", value: postData.StreetAddress2, icon: pen_3 },
        { label: "City", name: "City2", value: postData.City, icon: pen_3 },
        { label: "State", name: "State2", value: postData.State2, icon: pen_3 },
        { label: "Postal Code", name: "PostalCode2", value: postData.PostalCode2, icon: pen_3 },
    ];

    // set var
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [siteid, setsiteid] = useState("");
    const [roleid, setroleid] = useState("");
    const [contact, setcontact] = useState("");
    const [Designation, setDesignation] = useState("");
    const [email, setemail] = useState("")



    // cancel script
    function handleCancel() {
        setfirst_name("");
        setlast_name("");
        setsiteid("");
        setroleid("");
        setcontact("");
        setDesignation("");
        setemail("");
        navigate('/Distributer_Detials');
    }



    //redirect to device content page
    const navigate = useNavigate();
    const cancel_btn = {
        "color": "gray",
        "border": "1px solid gray",
    }



    return (
        <div className='Add_device1 '>
            {/* Exit Conformation */}
            <div className="modal fade boot-modals" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content width_of_model height_of_modal_content">
                        <div className="modal-header-confirm">
                            <h5 className="modal-title" id="exampleModalLabel">CONFIRMATION</h5>
                        </div>
                        <div className="modal-main-confirm">
                            <h5 className="modal-title ">Are you sure you want Exit ?
                            </h5>
                        </div>
                        <div className="modal-footer-confirm">
                            <button type="button" className="btn-loc active-loc" data-bs-dismiss="modal" onClick={handleCancel} >YES</button>
                            <button type="button" className="btn-loc inactive-loc" data-bs-dismiss="modal">NO</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* User access model */}

            <div className="row_with_count_status">
                <span className='module_tittle'>Distributer Detials</span>
            </div>
            <div className="add_device_container1">
                <div className="new_device_content scroll_div">
                    <div className="row_one display-flex">
                        <div className="adding_new_device uppercase bold">Add Distributer Detials </div>
                    </div>

                    <div className="row_two display-flex padding-loc">
                        <div className="device_info uppercase light-grey mb-loc-5">
                            Distributor info
                        </div>
                        <div className="input-boxes">
                            <div className="cmpny_and_site_name display-flex">
                                {inputFields.slice(0, 4).map((field, index) => (
                                    <div key={index} className="inputbox display-flex input">
                                        <div className="dsa_1st_input">
                                            <label htmlFor={`input${index + 1}`}>{field.label}<span>*</span></label>
                                            <div className="inputs-group display-flex">
                                                <span className="input-group-loc"><Icon icon={field.icon} size={20} style={{ color: "lightgray" }} /></span>
                                                <input
                                                    type="text"
                                                    className="form-control-loc"
                                                    value={field.value}
                                                    onChange={handleInputChange}
                                                    name={field.name}
                                                    id={`input${index + 1}`}
                                                />
                                                {/* Add error handling if needed */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <div className="dsa_row_3 display-flex">

                                {inputFields.slice(4, 8).map((field, index) => (
                                    <div key={index} className="inputbox display-flex input">
                                        <div className="dsa_1st_input">
                                            <label htmlFor={`input${index + 1}`}>{field.label}<span>*</span></label>
                                            <div className="inputs-group display-flex">
                                                <span className="input-group-loc"><Icon icon={field.icon} size={20} style={{ color: "lightgray" }} /></span>
                                                <input
                                                    type="text"
                                                    className="form-control-loc"
                                                    value={field.value}
                                                    onChange={(e) => handleInputChange(e, field.name)}
                                                    name={field.name}
                                                    id={`input${index + 1}`}
                                                />
                                                {/* Add error handling if needed */}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="dsa_row_3 display-flex">
                                {inputFields.slice(8, 10).map((field, index) => (
                                    <div key={index} className="inputbox display-flex input">
                                        <div className="dsa_1st_input">
                                            <label htmlFor={`input${index + 1}`}>{field.label}<span>*</span></label>
                                            <div className="inputs-group display-flex">
                                                <span className="input-group-loc"><Icon icon={field.icon} size={20} style={{ color: "lightgray" }} /></span>
                                                <input
                                                    type="text"
                                                    className="form-control-loc"
                                                    value={field.value}
                                                    onChange={(e) => handleInputChange(e, field.name)}
                                                    name={field.name}
                                                    id={`input${index + 1}`}
                                                />
                                                {/* Add error handling if needed */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="device_info uppercase light-grey mb-loc-5">
                            UPI Payment Details
                        </div>
                        <div className="dsa_row_3 display-flex">
                            {inputFields.slice(10, 14).map((field, index) => (
                                <div key={index} className="inputbox display-flex input">
                                    <div className="dsa_1st_input">
                                        <label htmlFor={`input${index + 1}`}>{field.label}<span>*</span></label>
                                        <div className="inputs-group display-flex">
                                            <span className="input-group-loc"><Icon icon={field.icon} size={20} style={{ color: "lightgray" }} /></span>
                                            <input
                                                type="text"
                                                className="form-control-loc"
                                                value={field.value}
                                                onChange={(e) => handleInputChange(e, field.name)}
                                                name={field.name}
                                                id={`input${index + 1}`}
                                            />
                                            {/* Add error handling if needed */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="device_info uppercase light-grey mb-loc-5">
                            Address Details
                        </div>
                        <div className="dsa_row_3 display-flex">
                            {inputFields.slice(14, 18).map((field, index) => (
                                <div key={index} className="inputbox display-flex input">
                                    <div className="dsa_1st_input">
                                        <label htmlFor={`input${index + 1}`}>{field.label}<span>*</span></label>
                                        <div className="inputs-group display-flex">
                                            <span className="input-group-loc"><Icon icon={field.icon} size={20} style={{ color: "lightgray" }} /></span>
                                            <input
                                                type="text"
                                                className="form-control-loc"
                                                value={field.value}
                                                onChange={(e) => handleInputChange(e, field.name)}
                                                name={field.name}
                                                id={`input${index + 1}`}
                                            />
                                            {/* Add error handling if needed */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="operating_buttons display-flex padding-loc">
                        <div className="save_cancel_btn display-flex site_button">
                            <button className="btn-loc active-loc btn btn-outline-success" onClick={(e) => handleSubmit(e)}>Save</button>
                            {/* <button type="button" class="btn-loc inactive-loc btn btn-outline-danger" data-bs-dismiss="modal">Close</button> */}

                            <button className="btn-loc inactive-loc btn " style={cancel_btn} data-bs-toggle="modal" data-bs-target="#exampleModal">cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};
export default Add_Distributer_Detials;