import React from 'react';
import '../assets/style/App.css';
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import { API_URL } from '../config'

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
import axios from 'axios';




const Add_Products = () => {
    // set var
    const [company_name, setcompanyname] = useState("");
    const [role_in_input, setrole_in_input] = useState("");
    const [site_name, setsitename] = useState("");
    const [email, setemail] = useState("");
    const [location_name, setlocationName] = useState("");
    const [site_address, setsiteaddress] = useState("");
    const [Desigination, setDesigination] = useState("");
    const [first_name, setfirstName] = useState("")
    const [last_name, setlastName] = useState("")
    const [contact, setcontact] = useState();
    const [mailstate, setmailstate] = useState(true);
    const [location_drop, setlocationNamedrop] = useState([]);

    const [admin_value, setadmin] = useState([]);
    const [roles_value, setroles_value] = useState([]);


    //  validation states
    const [company_nameerror, setcompanynameerror] = useState("");

    const [site_nameerror, setsitenameerror] = useState("");
    const [emailerror, setemailerror] = useState("");
    const [locationNameerror, setlocationNameerror] = useState("");
    const [site_addresserror, setsiteaddresserror] = useState("");
    const [Desiginationerror, setDesiginationerror] = useState("");
    const [firstNameerror, setfirstNameerror] = useState("");
    const [lastNameerror, setlastNameerror] = useState("");
    const [contacterror, setcontacterror] = useState("");
    const [checkemail, setcheckemail] = useState(false);

    // cancel script
    function handleCancel() {
        setcompanyname("");
        setsitename("");
        setemail("");
        setlocationName("");
        setsiteaddress("");
        setDesigination("");
        setfirstName("");
        setlastName("");
        setcontact("");
        navigate('/Products');
    }
    //redirect to device content page
    const navigate = useNavigate();
    const [postData, setPostData] = useState({
        hsncode: '',
        quantity: '',
        priceperitem: '',
        productname:'',
    });
    console.log(postData);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        setPostData({
            ...postData,
            [name]: value,
        });
    };
    const userInfoString = sessionStorage.getItem("UserInfo");
    const userInfo = JSON.parse(userInfoString);
    const handleClear = () => {
        // alert("alerting")
        setPostData({
            hsncode: '',
            quantity: '',
            priceperitem: '',
            productname:'',
            Addto:''
        })
    }
    // validation
    const handleClick = async () => {

        const isValidhsncode = /^[0-9]+$/.test(postData.hsncode);

        // console.log(isValidhsncode, userInfo.userid);
        if (isValidhsncode) {
            try {
                const response = await axios.post(`${API_URL}add/products`, { productdetial: postData, updator: userInfo.userid });
                if (response.data.status) {
                    handleClear()
                    alert(response.data.message);
                }else{
                    alert("Product Dosn't inserted properly")
                }
            } catch (error) {
                console.error('Error sending data:', error);
            }
        }
        else {
            if (isValidhsncode == false) {
                alert("Enter a valid HSN Code")
            }
        }
    }


    const inputFields = [
        { label: "HSN Code", name: "hsncode",value: postData.hsncode, icon: ic_home_work },
        { label: "Product Name", name: "productname",value: postData.productname, icon: person },
        { label: "Quantity", name: "quantity",value: postData.quantity, icon: person },
        { label: "Price Per Item", name: "priceperitem",value: postData.priceperitem, icon: person },
        // { label: "Add To", name: "Addto",value: postData.Addto, icon: person },
    ]


    return (
        <div className='Add_device1 '>
            <div className="modal fade boot-modals" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable custom-modal-dialog">
                    <div className="modal-content width_of_model height_of_modal_content">
                        <div className="modal-header-confirm">
                            <h5 className="modal-title" id="exampleModalLabel">CONFIRMATION</h5>
                        </div>
                        <div className="modal-main-confirm">
                            <h5 className="modal-title ">Are you sure you want Exit?</h5>
                        </div>
                        <div className="modal-footer-confirm">
                            <button type="button" className="btn-loc active-loc" data-bs-dismiss="modal" onClick={handleCancel}>YES</button>
                            <button type="button" className="btn-loc inactive-loc" data-bs-dismiss="modal">NO</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="device_management display-flex page_top_box box-shadow">
                <span className='module_tittle '>Product Detials</span>
            </div>
            <div className="add_device_container1">
                <div className="new_device_content scroll_div">
                    <div className="row_one display-flex">
                        <div className="adding_new_device uppercase bold">Add Product Detials </div>
                    </div>

                    <div className="row_two display-flex padding-loc">
                        <div className="device_info uppercase light-grey mb-loc-5">
                            Product info
                        </div>
                        <div className="input-boxes">
                            <div className="cmpny_and_site_name display-flex">
                                {inputFields.slice(0, 4).map((field, index) => (
                                    <div key={index} className="inputbox display-flex input">
                                        <div className="dsa_1st_input">
                                            <label htmlFor={`input${index + 1}`}>{field.label}<span className='required'>*</span></label>
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
                            <div className="cmpny_and_site_name display-flex">
                                {inputFields.slice(4, 8).map((field, index) => (
                                    <div key={index} className="inputbox display-flex input">
                                        <div className="dsa_1st_input">
                                            <label htmlFor={`input${index + 1}`}>{field.label}<span className='required'>*</span></label>
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
                        </div>
                    </div>

                    <div className="operating_buttons display-flex padding-loc">
                        <div className="save_cancel_btn display-flex site_button">
                            <button className="btn-loc active-loc btn btn-outline-success" onClick={() => handleClick()}>Save</button>
                            <button className="btn-loc inactive-loc btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};
export default Add_Products;