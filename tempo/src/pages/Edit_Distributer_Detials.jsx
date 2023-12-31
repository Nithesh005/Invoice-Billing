import React from 'react';
import '../assets/style/App.css';
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import {API_URL} from '../config'

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
import { following } from 'react-icons-kit/ikons/following'
import { followers } from 'react-icons-kit/ikons/followers'
import { pen_3 } from 'react-icons-kit/ikons/pen_3'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useParams } from 'react-router-dom';




const Edit_Distributer_Detials = () => {
    const { user_id } = useParams();
    console.log(user_id);
    const [admin_value, setadmin] = useState([]);
    const [loc_name, setlocationName] = useState([]);
    const [editable_data, setEditable_data] = useState([]);
    const [selectedOption_site, setSelectedOption_site] = useState('0');
    const [selectedOption_user, setSelectedOption_user] = useState('0');
    const [selectedOption_device, setSelectedOption_device] = useState('0');
    const [selectedOption_dashboard, setSelectedOption_dashboard] = useState('0');

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

    useEffect(() => {
        const device_user_data = async () => {
            try {
                const response = await fetch(`${API_URL}/edit_user/${user_id}`);
                const data = await response.json();
                all_data_fun(data)
            } catch (error) {
                console.error(error);
            }
        };
        device_user_data();
    }, [user_id]);

    const all_data_fun = (data) => {
        if (data && data.length > 0) {
            const item = data[0];
            setfirst_name(item.first_name);
            setlast_name(item.last_name);
            setsiteid(item.site_id);
            setroleid(item.role_id);
            setcontact(item.contact);
            setDesignation(item.designation);
            setemail(item.email);
            setSelectedOption_site(item.site_management);
            setSelectedOption_user(item.user_management);
            setSelectedOption_device(item.device_management);
            setSelectedOption_dashboard(item.dashboard);

        }
    };

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

    function handle_siteid(event) {
        const value = event.target.value;
        setsiteid(value);
        const isValidsite_admin_email = /^[a-zA-Z0-9]+$/.test(value);
        if (!isValidsite_admin_email) {
            setsiteid_error("*Not a valid Site ID");
        } else {
            setsiteid_error("");
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
            setcontact_error("*Enter Proper Bussiness Type");
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
        const isValidsiteid = /^[a-zA-Z0-9]+$/.test(siteid)
        const isValidroleid = /^[a-zA-Z0-9]+$/.test(roleid)
        const isValidcontact = /^[0-9]{10}$/.test(contact)
        const isValidDesignation = /^[a-zA-Z]+$/.test(Designation)
        const isValidemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        if ((!isValidfirst_name || !isValidlast_name || !isValidsiteid || !isValidroleid || !isValidcontact || !isValidDesignation || !isValidemail)) {
            alert("Please out that you have enter all feild correctly")
        }
        else {
            const body = { first_name, last_name, siteid, roleid, contact, Designation,email,user_id, selectedOption_site, selectedOption_user, selectedOption_device, selectedOption_dashboard }
            fetch(`${API_URL}/update_user`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            navigate('/User');
        }
    }


    const [isOpen1, setIsOpen1] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const dropdownRef1 = useRef(null);
    const handle_site_location = () => {
        setIsOpen1(!isOpen1);
        // setIsDropdownOpen2(!isDropdownOpen4)
    };

    const [isOpen2, setIsOpen2] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const dropdownRef2 = useRef(null);
    const dropdown2 = () => {
        setIsOpen2(!isOpen2);
        // setIsDropdownOpen2(!isDropdownOpen4)
    };

    const [isOpen3, setIsOpen3] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const dropdownRef3 = useRef(null);
    const dropdown3 = () => {
        setIsOpen3(!isOpen3);
        // setIsDropdownOpen3(!isDropdownOpen3)
    };


    const [isOpen4, setIsOpen4] = useState(false);
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
    const dropdownRef4 = useRef(null);
    const handle_site_admin = () => {
        setIsOpen4(!isOpen4);
        // setIsDropdownOpen4(!isDropdownOpen4)
    };
    const site_admin_target = useRef(null);
    const empty_site_admin_target = (event) => {
        if (!site_admin_target.current.contains(event.target)) {
            setIsOpen4(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', empty_site_admin_target);
        return () => document.removeEventListener("click", empty_site_admin_target);
    })
    const site_location_target = useRef(null);
    const empty_site_location_target = (event) => {
        if (!site_location_target.current.contains(event.target)) {
            setIsOpen1(false);
        }
    }
    useEffect(() => {
        const session_db = localStorage.getItem('session_dbName');
        setSite_id(session_db);
        const fetch_site_roles = async () => {
            try {
                const roles_name = await fetch(`${API_URL}/role_name`);
                const rolesName = await roles_name.json();
                // console.log(rolesName)
                setrolesName(rolesName);
            } catch (error) {
                console.log(error)
            }
        };
        fetch_site_roles();
        document.addEventListener('click', empty_site_location_target);
        return () => document.removeEventListener("click", empty_site_location_target);

    }, []);

    const [site_id, setSite_id] = useState("")
    const [roles_value, setrolesName] = useState([]);
    const [selected_value, setSelected_value] = useState("Site User");
    const set_value = (value) => {
        setSelected_value(value);
    }

    return (
        <div className='Add_device1 '>
            {/*user access control model */}
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
            <div className="row_with_count_status">
                <span className='module_tittle'>Distributer Detials</span>
            </div>
            <div className="add_device_container1">
                <div className="new_device_content scroll_div">
                    <div className="row_one display-flex">
                        <div className="adding_new_device uppercase bold">Edit Distributer Detials </div>
                    </div>

                    <div className="row_two display-flex padding-loc">
                        <div className="device_info uppercase light-grey mb-loc-5">
                        Distributor info
                        </div>
                        <div className="input-boxes">
                            <div className="cmpny_and_site_name display-flex">
                                <div class="dsa_row_1 inputbox display-flex input">
                                    <div class="dsa_1st_input">
                                        <label for="input1">Register ID</label>
                                        <div class="inputs-group display-flex">
                                            <span class="input-group-loc"><Icon icon={ic_home_work} size={20} style={{ color: "lightgray" }} /></span>
                                            <input type="text" class="form-control-loc" value={first_name} onChange={handle_first_name} id="company_name" />
                                            <div className="error-message"><span className={first_name_error ? "error" : ""}>{first_name_error}</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dsa_2nd_input inputbox display-flex input">

                                    <label for="input1">Distributer Name</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={ic_domain} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={last_name} onChange={handle_last_name} id="site_name" />
                                        <div className="error-message"><span className={last_name_error ? "error" : ""}>{last_name_error}</span></div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <div class="dropdown-filter" ref={dropdownRef3}>
                                        <div className="name_row">
                                            <label for="input1">Aadhar Number</label>
                                            <div class="inputs-group relative-loc arrow_inside_input_box">
                                                <span class="input-group-loc"><Icon icon={pen_3} size={20} style={{ color: "lightgray" }} /></span>
                                                <input type="text" className="form-control-loc" id="site_admin_name" onChange={handle_siteid} />
                                                {/* <FontAwesomeIcon
                                                    icon={faChevronDown}
                                                    class="dropdown-icon down_arrow arrow_inside_input"
                                                /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <div class="dropdown-filter" ref={dropdownRef3}>
                                        <div className="name_row" >
                                            <label for="input1">Position</label>
                                            <div class="inputs-group relative-loc arrow_inside_input_box">
                                                <span class="input-group-loc"><Icon icon={pen_3} size={20} style={{ color: "lightgray" }} /></span>
                                                <input type="text"  className="form-control-loc" id="site_admin_name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="dsa_row_3 display-flex">

                                <div class="dropdown-filter" ref={dropdownRef3}>
                                    <div className="name_row">
                                        <label for="input1">GST Number</label>
                                        <div class="inputs-group relative-loc arrow_inside_input_box" onClick={dropdown3} >
                                            <span class="input-group-loc"><Icon icon={pen_3} size={20} style={{ color: "lightgray" }} /></span>
                                            <input type="text" class="form-control-loc" id="site_admin_name"/>
                                        </div>
                                    </div>

                                    {isOpen3 && (
                                        <div class="dropdown_menu2 dashboard_dropdown-menu heights dropdown-colors" style={{ cursor: "pointer", width: "230px" }}>
                                            <div className='device_scroll'>
                                                {roles_value.map((data, index) => (
                                                    <div className='device_scroll' key={index}>
                                                        {/* <div><div className='device_dropdown' onClick={() => handlesiteadminname(data)}><div className="div_sts"> {data.role}</div></div> */}
                                                        <div>
                                                            <div className='device_dropdown' key={index} onClick={() => set_value(data.role)}>
                                                                <div className="div_sts"> {data.role}</div>
                                                            </div>
                                                            {index !== data.length - 1 && <hr className='hrs'></hr>}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    )
                                    }
                                    
                                </div>
                                

                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">Bussiness Type</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={location} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={contact} onChange={handle_contact} id="site_address" />
                                        <div className="error-message"><span className={contact_error ? "error" : ""}>{contact_error}</span></div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">Email</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={Designation} onChange={handle_Designation} id="site_address" />
                                        <div className="error-message"><span className={designation_error ? "error" : ""}>{designation_error}</span></div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">Account Number</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={Designation} onChange={handle_Designation} id="site_address" />
                                        <div className="error-message"><span className={designation_error ? "error" : ""}>{designation_error}</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="dsa_row_3 display-flex">
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">Contact Number</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={email} onChange={handle_email} id="site_address" />
                                        <div className="error-message"><span className={email_error ? "error" : ""}>{email_error}</span></div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">PAN Number</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={email} onChange={handle_email} id="site_address" />
                                        <div className="error-message"><span className={email_error ? "error" : ""}>{email_error}</span></div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">Organization Name</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={email} onChange={handle_email} id="site_address" />
                                        <div className="error-message"><span className={email_error ? "error" : ""}>{email_error}</span></div>
                                    </div>
                                </div>
                                <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">UPI ID</label>
                                    <div className="inputs-group display-flex">
                                        <span class="input-group-loc"><Icon icon={map} size={20} style={{ color: "lightgray" }} /></span>
                                        <input type="text" class="form-control-loc" value={email} onChange={handle_email} id="site_address" />
                                        <div className="error-message"><span className={email_error ? "error" : ""}>{email_error}</span></div>
                                    </div>
                                </div>
                                {/* <div className="dsa_3rd_input inputbox display-flex input">
                                    <label for="input1">User Access</label>
                                    <div className="inputs-group display-flex">
                                        <input type="button" value="Access Credentials" data-bs-toggle="modal" data-bs-target="#User_Access_Modal" />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="operating_buttons display-flex padding-loc">
                        <div className="save_cancel_btn display-flex site_button">
                            <button className="btn-loc active-loc btn btn-outline-success" onClick={() => handle_save()}>Save</button>
                            <button className="btn-loc inactive-loc btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};
export default Edit_Distributer_Detials;