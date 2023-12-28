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
                // Optionally, you can update your component state or show a success message
            } catch (error) {
                console.error('Error sending data:', error);
                // Handle error, show error message, etc.
            }
        }


    };

    const inputFields = [
        { label: "Register ID", name: "MF_Id", value: postData.MF_Id, icon: ic_home_work },
        { label: "Distributor Name", name: "M_User_Name", value: postData.M_User_Name, icon: person },
        { label: "Aadhar Number", name: "M_Aadhar_Number", value: postData.M_Aadhar_Number, icon: pen_3 },
        { label: "Position", name: "M_Position", value: postData.M_Position, icon: ic_wysiwyg },
        // Add more input field objects as needed
        { label: "GST Number", name: "M_GST_Number", value: postData.M_GST_Number, icon: pen_3 },
        { label: "Bussiness Type", name: "M_Business_Type", value: postData.M_Business_Type, icon: pen_3 },
        { label: "Email", name: "M_Email", value: postData.M_Email, icon: pen_3 },
        { label: "Account Number", name: "M_Account_Number", value: postData.M_Account_Number, icon: pen_3 },
        // row 3
        { label: "Contact Number", name: "M_Phone_No", value: postData.M_Phone_No, icon: pen_3 },
        { label: "PAN Number", name: "M_Pan_Number", value: postData.M_Pan_Number, icon: pen_3 },
        { label: "Organization Name", name: "M_Organization_Name", value: postData.M_Organization_Name, icon: pen_3 },
        { label: "UPI ID", name: "M_Upi_Id", value: postData.M_Upi_Id, icon: pen_3 },
    ];

    const [admin_value, setadmin] = useState([]);
    const [loc_name, setlocationName] = useState([]);
    const [roles_value, setroles_value] = useState([]);

    const [user_type, setuser_type] = useState(sessionStorage.getItem('userType'));
    const session_db = sessionStorage.getItem('session_dbName');
    const parse_data = sessionStorage.getItem('site_user_type');
    const site_user_type = JSON.parse(parse_data);
    const [site_id, setSite_id] = useState("")

    // set var
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [siteid, setsiteid] = useState("");
    const [roleid, setroleid] = useState("");
    const [contact, setcontact] = useState("");
    const [Designation, setDesignation] = useState("");
    const [email, setemail] = useState("")


    //  validation states
    const [first_name_error, setfirst_name_error] = useState("");
    const [last_name_error, setlast_name_error] = useState("");
    const [siteid_error, setsiteid_error] = useState("");
    const [roleid_error, setroleid_error] = useState("");
    const [contact_error, setcontact_error] = useState("");
    const [designation_error, setDesignation_error] = useState("");
    const [email_error, setemail_error] = useState("");



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

    function handle_first_name(event) {
        const value = event.target.value;
        setfirst_name(value);
        const isValidcompany_name = /^[a-zA-Z]+$/.test(value);
        if (!isValidcompany_name) {
            setfirst_name_error("*Enter valid First name");
        } else {
            setfirst_name_error("");
        }
    }

    function handle_last_name(event) {
        const value = event.target.value;
        setlast_name(value);
        const isValidsite_name = /^[a-zA-Z]+$/.test(value);
        if (!isValidsite_name) {
            setlast_name_error("*Enter valid Last name");
        } else {
            setlast_name_error("");
        }
    }

    function handle_roleid(event) {
        const value = event.target.value;
        setroleid(value);
        const isValidsite_location = /^[a-zA-Z0-9]+$/.test(value);
        if (!isValidsite_location) {
            setroleid_error("*Enter valid Role ID");
        } else {
            setroleid_error("");
        }
    }

    function handle_contact(event) {
        const value = event.target.value;
        setcontact(value);
        const isValidsite_address = /^[0-9]{10}$/.test(value);
        if (!isValidsite_address) {
            setcontact_error("*Enter valid Contact number");
        } else {
            setcontact_error("");
        }

    }


    function handle_Designation(event) {
        const value = event.target.value;
        setDesignation(value);
        const isValidnew_site_admin_name = /^[a-zA-Z]+$/.test(value);
        if (!isValidnew_site_admin_name) {
            setDesignation_error("*Enter valid Designation");
        } else {
            setDesignation_error("");
        }
    }
    function handle_email(event) {
        const value = event.target.value;
        setemail(value);
        const isValidnew_site_admin_name = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!isValidnew_site_admin_name) {

            setemail_error("*Enter valid email");

        } else {
            setemail_error("");
        }
    }

    //redirect to device content page
    const navigate = useNavigate();
    // validation
    const handle_save = async () => {
        const isValidfirst_name = /^[a-zA-Z]+$/.test(first_name)
        const isValidlast_name = /^[a-zA-Z]+$/.test(last_name)

        const isValidroleid = /^[a-zA-Z0-9]+$/.test(roleid);
        const isValidcontact = /^[0-9]{10}$/.test(contact);
        const isValidDesignation = /^[a-zA-Z]+$/.test(Designation)
        const isValidemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

        if (!isValidfirst_name || !isValidlast_name || !isValidroleid || !isValidcontact || !isValidDesignation || !isValidemail) {
            alert("Please check out that you have entered all feild correctly");
        }
        // else {
        //     try {
        //         const body = { first_name, last_name, site_id, roleid, contact, Designation, email, selectedOption_site, selectedOption_user, selectedOption_device, selectedOption_dashboard }
        //         const response = await fetch(`${API_URL}/add_user`, {
        //             method: "POST",
        //             headers: { "Content-Type": "application/json" },
        //             body: JSON.stringify(body),
        //         });
        //         const data = response.status;
        //         if (data === 200) {
        //             alert("You have received an email to set password")
        //             navigate('/User');
        //             const html = ReactDOMServer.renderToStaticMarkup(<Mailcontent email={email} Designation={Designation} siteid={siteid} first_name={first_name} last_name={last_name} mailstate={true} />);
        //             const subject = "SET PASSWORD";
        //             const body1 = { email, subject, html }
        //             const response1 = await fetch(`${API_URL}/sendemail`, {
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json'
        //                 },
        //                 body: JSON.stringify(body1)
        //             });
        //         }
        //         else {
        //             alert("Email ID already exist")
        //         }
        //     }
        //     catch (error) {
        //         console.log(error)
        //     }

        // }
    }


    const [isOpen1, setIsOpen1] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const dropdownRef1 = useRef(null);
    const handle_site_location = () => {
        setIsOpen1(!isOpen1);
    };

    const [isOpen2, setIsOpen2] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const dropdownRef2 = useRef(null);
    const dropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    const [isOpen3, setIsOpen3] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const dropdownRef3 = useRef(null);
    const dropdown3 = () => {
        setIsOpen3(!isOpen3);
    };
    const [isOpen5, setIsOpen5] = useState(false);
    const dropdown4 = () => {
        if (site_user_type.type === "single" || site_user_type.type === "error") {
            alert(site_user_type.type);
        } else {
            setIsOpen5(!isOpen5)
        }
    }


    const [isOpen4, setIsOpen4] = useState(false);
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
    const dropdownRef4 = useRef(null);
    const site_location_target = useRef(null);
    const site_admin_target = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!site_location_target.current.contains(event.target)) {
                setIsOpen1(false);
            }
            if (!site_admin_target.current.contains(event.target)) {
                setIsOpen4(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // roles fetching from roles table
    var foundMatch = false;


    // useEffect(() => {
    //     setSite_id(session_db);
    //     const fetchData = async () => {
    //         try {
    //             const roles_name = await fetch(`${API_URL}/role_name`);
    //             const rolesName = await roles_name.json();
    //             for (var i = 0; i < rolesName.length; i++) {
    //                 if (foundMatch) {
    //                     foundmac(rolesName[i])
    //                     console.log(roles_value);
    //                 } else {
    //                     if (rolesName[i].role_id === user_type) {
    //                         if (user_type === 'RI004') {
    //                             setAdd_user_value(rolesName[i].role)
    //                             setroleid(rolesName[i].role_id);
    //                         } else {
    //                             setAdd_user_value(rolesName[i + 1].role)
    //                             setroleid(rolesName[i + 1].role_id);
    //                         }
    //                         foundMatch = true;
    //                         setroles_value([]);
    //                     }
    //                 }
    //             }
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     };
    //     const foundmac = (roles) => {
    //         setroles_value((prevRoles) => [
    //             ...prevRoles,
    //             { role: roles.role, role_id: roles.role_id }
    //         ]);
    //     }
    //     fetchData();
    // }, []);

    const [Add_user_value, setAdd_user_value] = useState();
    const set_value = (data) => {
        setAdd_user_value(data.role);
        setroleid(data.role_id);
        setIsOpen3(false);
    }
    const set_site_value = (data) => {
        setSite_id(data.site_id)
        setIsOpen5(false)
    }

    const [selectedOption_site, setSelectedOption_site] = useState('1');
    const [selectedOption_user, setSelectedOption_user] = useState('0');
    const [selectedOption_device, setSelectedOption_device] = useState('2');
    const [selectedOption_dashboard, setSelectedOption_dashboard] = useState('1');

    const handleOptionChange_site = (event) => {
        setSelectedOption_site(event.target.value);
    };
    const handleOptionChange_user = (event) => {
        setSelectedOption_user(event.target.value);
    };
    const handleOptionChange_device = (event) => {
        setSelectedOption_device(event.target.value);
    };
    const handleOptionChange_dashboard = (event) => {
        setSelectedOption_dashboard(event.target.value);
    };

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
            <div className="modal fade boot-modals" id="User_Access_Modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content width_of_model user_access_model">
                        <div className="user_access">
                            <div className="modal-header-confirm">
                                <h5 className="modal-title" id="exampleModalLabel">User Access Control</h5>
                            </div>
                            <div className="access_priority display-flex">
                                <div className="no_access access">No Access</div>
                                <div className="view access">View</div>
                                <div className="edit access">Create/Edit</div>
                                <div className="Full access">Full</div>
                            </div>
                            <div className="all_management">
                                <div className="management">
                                    <div className="management_txt">Management</div>
                                </div>

                                <div className="user_acc_head display-flex">
                                    <div className="u_a_head">
                                        <div className="head">Site</div>
                                        <div className="all_radio_btns">
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="0"
                                                    checked={selectedOption_site === "0"}
                                                    onChange={handleOptionChange_site} />
                                            </div>
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="1"
                                                    checked={selectedOption_site === "1"}
                                                    onChange={handleOptionChange_site} />
                                            </div>
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="2"
                                                    checked={selectedOption_site === "2"}
                                                    onChange={handleOptionChange_site} />
                                            </div>
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="3"
                                                    checked={selectedOption_site === "3"}
                                                    onChange={handleOptionChange_site} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="user_acc_head display-flex">
                                    <div className="u_a_head">
                                        <div className="head">User</div>
                                        <div className="all_radio_btns">
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="0"
                                                    checked={selectedOption_user === "0"}
                                                    onChange={handleOptionChange_user} />
                                            </div>
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="1"
                                                    checked={selectedOption_user === "1"}
                                                    onChange={handleOptionChange_user} />
                                            </div>
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="2"
                                                    checked={selectedOption_user === "2"}
                                                    onChange={handleOptionChange_user} />
                                            </div>
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="3"
                                                    checked={selectedOption_user === "3"}
                                                    onChange={handleOptionChange_user} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="user_acc_head display-flex">
                                    <div className="u_a_head">
                                        <div className="head">Device</div>
                                        <div className="all_radio_btns">
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="0"
                                                    checked={selectedOption_device === "0"}
                                                    onChange={handleOptionChange_device} />
                                            </div>
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="1"
                                                    checked={selectedOption_device === "1"}
                                                    onChange={handleOptionChange_device} />
                                            </div>
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="2"
                                                    checked={selectedOption_device === "2"}
                                                    onChange={handleOptionChange_device} />
                                            </div>
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="3"
                                                    checked={selectedOption_device === "3"}
                                                    onChange={handleOptionChange_device} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="user_acc_head display-flex">
                                    <div className="u_a_head">
                                        <div className="head">Dashboard</div>
                                        <div className="all_radio_btns">
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="0"
                                                    checked={selectedOption_dashboard === "0"}
                                                    onChange={handleOptionChange_dashboard} />
                                            </div>
                                            <div className="input_radio">
                                                <input className="access_radio" type='radio' value="1"
                                                    checked={selectedOption_dashboard === "1"}
                                                    onChange={handleOptionChange_dashboard} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer-confirm">
                                <button type="button" className="btn-loc active-loc" data-bs-dismiss="modal">Save</button>
                                <button type="button" className="btn-loc inactive-loc" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

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

                                {/* <div className="dsa_3rd_input inputbox display-flex input">
                                    <div class="dropdown-filter" ref={dropdownRef3}>
                                        <div className="name_row" >
                                            <label for="input1">Aadhar Number</label>
                                            <div class="inputs-group relative-loc arrow_inside_input_box">
                                                <span class="input-group-loc"><Icon icon={pen_3} size={20} style={{ color: "lightgray" }} /></span>
                                                <input type="text" value={postData.M_Aadhar_Number} className="form-control-loc" id="site_admin_name" onChange={handleInputChange} name="M_Aadhar_Number" />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="dsa_3rd_input inputbox display-flex input">
                                    <div class="dropdown-filter" ref={dropdownRef3}>
                                        <div className="name_row" >
                                            <label for="input1">Position</label>
                                            <div class="inputs-group relative-loc arrow_inside_input_box">
                                                <span class="input-group-loc"><Icon icon={pen_3} size={20} style={{ color: "lightgray" }} /></span>
                                                <input type="text" value={postData.M_Position} className="form-control-loc" id="site_admin_name" onChange={handleInputChange} name="M_Position" />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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


                                {/* <div class="dropdown-filter" ref={dropdownRef3}>
                                    <div className="name_row">
                                        <label for="input1">GST Number</label>
                                        <div class="inputs-group relative-loc arrow_inside_input_box" onClick={dropdown3} >
                                            <span class="input-group-loc"><Icon icon={pen_3} size={20} style={{ color: "lightgray" }} /></span>
                                            <input type="text" class="form-control-loc" id="site_admin_name" value={postData.M_GST_Number} onChange={handleInputChange} name="M_GST_Number" />
                                        </div>
                                    </div>
                                </div>

                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">Bussiness Type</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={location} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={postData.M_Business_Type} onChange={handleInputChange} name="M_Business_Type" id="site_address" />
                                        <div className="error-message"><span className={contact_error ? "error" : ""}>{contact_error}</span></div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">Email</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={postData.M_Email} onChange={handleInputChange} id="site_address" name="M_Email" />
                                        <div className="error-message"><span className={designation_error ? "error" : ""}>{designation_error}</span></div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">Account Number</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={postData.M_Account_Number} onChange={handleInputChange} id="site_address" name="M_Account_Number" />
                                        <div className="error-message"><span className={designation_error ? "error" : ""}>{designation_error}</span></div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="dsa_row_3 display-flex">
                                {inputFields.slice(8, 12).map((field, index) => (
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
                                {/* <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">Contact Number</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={postData.M_Phone_No} onChange={handleInputChange} id="site_address" name="M_Phone_No" />
                                        <div className="error-message"><span className={email_error ? "error" : ""}>{email_error}</span></div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">PAN Number</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={postData.M_Pan_Number} onChange={handleInputChange} id="site_address" name="M_Pan_Number" />
                                        <div className="error-message"><span className={email_error ? "error" : ""}>{email_error}</span></div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">Organization Name</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={postData.M_Organization_Name} onChange={handleInputChange} id="site_address" name="M_Organization_Name" />
                                        <div className="error-message"><span className={email_error ? "error" : ""}>{email_error}</span></div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">UPI ID</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={postData.M_Upi_Id} onChange={handleInputChange} id="site_address" name="M_Upi_Id" />
                                        <div className="error-message"><span className={email_error ? "error" : ""}>{email_error}</span></div>
                                    </div>
                                </div> */}
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