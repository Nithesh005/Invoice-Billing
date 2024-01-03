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
    const [postData, setPostData,] = useState({
        MF_Id: '',
        M_Email: '',
        M_Phone_No: '',
        M_Pan_Number: '',
        M_Aadhar_Number: '',
        M_Name: '',
        M_Position: '',
        M_Alternate_Phone_No: '',
        M_User_Name: '',
        M_Password: '',
        M_Business_Type: '',
        M_GST_Number: '',
        M_Organization_Name: '',
        M_Account_Name: '',
        M_Account_Number: '',
        M_Linked_Phone_no: '',
        M_Pass_Img: '',
        M_Upi_Id: '',
        M_PR_Street_Address: '',
        M_PR_City: '',
        M_PR_State: '',
        M_PR_PostalCode: '',
        M_CD_Street_Address: '',
        M_CD_City: '',
        M_CD_State: '',
        M_CD_PostalCode: '',
    });
    const [inputErrors, setInputErrors] = useState({
        MF_Id: '',
        M_Email: '',
        M_Phone_No: '',
        M_Pan_Number: '',
        M_Aadhar_Number: '',
        M_Name: '',
        M_Position: '',
        M_Alternate_Phone_No: '',
        M_User_Name: '',
        M_Password: '',
        M_Business_Type: '',
        M_GST_Number: '',
        M_Organization_Name: '',
        M_Account_Name: '',
        M_Account_Number: '',
        M_Linked_Phone_no: '',
        M_Pass_Img: '',
        M_Upi_Id: '',
        M_PR_Street_Address: '',
        M_PR_City: '',
        M_PR_State: '',
        M_PR_PostalCode: '',
        M_CD_Street_Address: '',
        M_CD_City: '',
        M_CD_State: '',
        M_CD_PostalCode: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // alert(`hai ${value}`);
        // setfirst_name(value);
        setPostData({
            ...postData,
            [name]: value,
        });
        validateInput(name,value);
    };
    const validateInput = (name, value) => {
        switch (name) { 
            case 'M_Organization_Name':
             setInputErrors((prevErrors) => ({
                ...prevErrors,
                [name]: /^[a-zA-Z]+$/.test(value) ? '' : 'Invalid Organization name',
            }));
            break;
            case 'M_Email':
                setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address',
                }));
                break;
            case 'M_Mobile_Number':
                setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: /^[0-9]+$/.test(value) ? '' : 'Invalid Mobile number',
                }));
                break;
            case 'M_Aadhar_Number':
                
                setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: /^[0-9]{12}$/.test(value) ? '' : 'Invalid Aadhar number',
                }));
                break;
            
            case 'M_Pan_Number':
                setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    [name]: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) ? '' : 'Invalid PAN number',
                }));
                break;
                case 'M_first_name':
                    setInputErrors((prevErrors) => ({
                        ...prevErrors,
                        [name]: /^[a-zA-Z]+$/.test(value) ? '' : 'Invalid first name',
                    }));
                    break;
                    case 'M_last_namer':
                        setInputErrors((prevErrors) => ({
                            ...prevErrors,
                            [name]:/^[a-zA-Z]+$/.test(value) ? '' : 'Invalid  last name',
                        }));
                        break;
                    case 'M_Position':
                        setInputErrors((prevErrors) => ({
                            ...prevErrors,
                            [name]:/^[a-zA-Z]+$/.test(value) ? '' : 'Invalid  position',
                        }));
                        break;
                        case 'M_UPI_Payment_Mobile_Number':
                            setInputErrors((prevErrors) => ({
                                ...prevErrors,
                                [name]: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) ? '' : 'Invalid  UPI Payment Mobile Number',
                            }));
                            break;
                            case 'M_UPI_bank_account_number':
                                setInputErrors((prevErrors) => ({
                                    ...prevErrors,
                                    [name]: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) ? '' : 'Invalid  UPI Payment Mobile Number',
                                }));
                                break;
                                case 'M_Permanent_address':
                                    setInputErrors((prevErrors) => ({
                                        ...prevErrors,
                                        [name]:/^[a-zA-Z]+$/.test(value) ? '' : 'Invalid permanent address',
                                    }));
                                    break;
                    

            default:
                break;
        }
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
        { label: "Organization Name", name: "M_organization_Name", value: postData.M_Organization_Name, icon: pen_3,type:"text" },
        { label: "Business Type", name: "M_Business_Type", value: postData.M_Business_Type, icon: pen_3,type:"text" },
        { label: "GST Number", name: "M_GST_Number", value: postData.M_GST_Number, icon: pen_3,type:"" },
        { label: "PAN Number", name: "M_Pan_Number", value: postData.M_Pan_Number, icon: pen_3,type:"tel" },
        { label: "Aadhar Number", name: "M_Aadhar_Number", value: postData.M_Aadhar_Number, icon: pen_3,type:"text" },
        { label: "First Name", name: "M_First_Name", value: postData.M_First_Name, icon: pen_3,type:"text" },
        { label: "Last Name", name: "M_Last_Name", value: postData.M_Last_Name, icon: pen_3,type:"text" },

        { label: "Position", name: "M_Position", value: postData.M_Position, icon: ic_wysiwyg,type:"text" },
        { label: "Email", name: "M_Email", value: postData.M_Email, icon: pen_3,type:"email" },
        { label: "MobileNumber", name: "M_Mobile_Number", value: postData.M_Mobile_Number, icon: pen_3,type:"tel" },
        { label: "UPI payment mobile number(linked to UPI)", name: "M_UPI_Payment_Mobile_Number", value: postData.M_M_UPI_Payment_Mobile_Number, icon: pen_3,type:"tel" },
        { label: "UPI bank account name", name: "M_UPI_bank_account_name", value: postData.M_M_UPI_bank_account_name, icon: pen_3,type:"text"},
        { label: "UPI bank account number", name: "M_UPI_bank_account_number", value: postData.M_M_UPI_bank_account_Number, icon: pen_3, type:""},
        { label: "1st page of passbook image in JPEG photo:", name: "M_1st page of passbook image in JPEG photo", value: postData.M_M_UPI_Payment_Mobile_Number, icon: pen_3,type:"file" },
       

        { label: "Permanent Address", name: "M_Permanent_address", value: postData.M_permanent_Address, icon: pen_3, type:"text"},
        { label: "Street Address", name: "M_street_address", value: postData.M_PR_Street_Address, icon: pen_3, type:"text" },
        { label: "city", name: "M_city", value: postData.M_city, icon: pen_3, type:"text" },
        { label: "state", name: "M_state", value: postData.M_state, icon: pen_3, type:"text"},
        { label: "postal code", name: "M_postal_code", value: postData.M_PR_PostalCode, icon: pen_3, type:"text"},
        { label: "communication address(if different from permanent)", name: "M_communication_Address", value: postData.M_communication_address, icon: pen_3,type:"text" },
       
    ];
    const handleBlur = (name, value) => {
        validateInput(name, value);
    };
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
                <span className='module_title'>Distributer Details</span>
            </div>
            <div className="add_device_container1">
                <div className="new_device_content scroll_div">
                    <div className="row_one display-flex">
                        <div className="adding_new_device uppercase bold">Add Distributer Details </div>
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
                                                    type={field.type}
                                                    className="form-control-loc"
                                                    value={field.value}
                                                    onChange={handleInputChange}
                                                    onBlur={() => handleBlur(field.name, field.value)}
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

                            <div className="dsa_row_3 display-flex">

                                {inputFields.slice(4, 8).map((field, index) => (
                                    <div key={index} className="inputbox display-flex input">
                                        <div className="dsa_1st_input">
                                            <label htmlFor={`input${index + 1}`}>{field.label}<span>*</span></label>
                                            <div className="inputs-group display-flex">
                                                <span className="input-group-loc"><Icon icon={field.icon} size={20} style={{ color: "lightgray" }} /></span>
                                                <input
                                                    type={field.type}
                                                    className="form-control-loc"
                                                    value={field.value}
                                                    onChange={(e) => handleInputChange(e, field.name)}
                                                    onBlur={() => handleBlur(field.name, field.value)}
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
                                                    type={field.type}
                                                    className="form-control-loc"
                                                    value={field.value}
                                                    onChange={(e) => handleInputChange(e, field.name)}
                                                    onBlur={() => handleBlur(field.name, field.value)}
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
                            UPI Payment details
    
                        </div>
                       
                        <div className="input-boxes">
                            <div className="cmpny_and_site_name display-flex">
                                {inputFields.slice(10,14).map((field, index) => (
                                    <div key={index} className="inputbox display-flex input">
                                        <div className="dsa_1st_input">
                                            <label htmlFor={`input${index + 1}`}>{field.label}<span>*</span></label>
                                            <div className="inputs-group display-flex">
                                                <span className="input-group-loc"><Icon icon={field.icon} size={20} style={{ color: "lightgray" }} /></span>
                                                <input
                                                    type={field.type}
                                                    className="form-control-loc"
                                                    value={field.value}
                                                    onChange={handleInputChange}
                                                    onBlur={() => handleBlur(field.name, field.value)}
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
                       
                        <div className="input-boxes">
                            <div className="cmpny_and_site_name display-flex">
                                {inputFields.slice(15,18).map((field, index) => (
                                    <div key={index} className="inputbox display-flex input">
                                        <div className="dsa_1st_input">
                                            <label htmlFor={`input${index + 1}`}>{field.label}<span>*</span></label>
                                            <div className="inputs-group display-flex">
                                                <span className="input-group-loc"><Icon icon={field.icon} size={20} style={{ color: "lightgray" }} /></span>
                                                <input
                                                    type={field.type}
                                                    className="form-control-loc"
                                                    value={field.value}
                                                    onChange={handleInputChange}
                                                    onBlur={() => handleBlur(field.name, field.value)}
                                                    name={field.name}
                                                    id={`input${index + 1}`}
                                                />
                                                {/* Add error handling if needed */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                 {inputFields.slice(19,21).map((field, index) => (
                                    <div key={index} className="inputbox display-flex input">
                                        <div className="dsa_1st_input">
                                            <label htmlFor={`input${index + 1}`}>{field.label}<span>*</span></label>
                                            <div className="inputs-group display-flex">
                                                <span className="input-group-loc"><Icon icon={field.icon} size={20} style={{ color: "lightgray" }} /></span>
                                                <input
                                                    type={field.type}
                                                    className="form-control-loc"
                                                    value={field.value}
                                                    onChange={handleInputChange}
                                                    onBlur={() => handleBlur(field.name, field.value)}
                                                    name={field.name}
                                                    id={`input${index + 1}`}
                                                />
                                                 {inputErrors[field.name] && (
                                        <div className="invalid-feedback">
                                            {inputErrors[field.name]}
                                            Invalid data for the field
                                        </div>
                                    )}
                                                {/* Add error handling if needed */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                            </div> 
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