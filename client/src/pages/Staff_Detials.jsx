import React, { useEffect } from 'react';
import '../assets/style/App.css';
//import icons from fontawesome and react icon kit
import { Icon } from 'react-icons-kit';
import { ic_label_important } from 'react-icons-kit/md/ic_label_important';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config';

const Staff_Detials = () => {
    //states
    const [rotatedIndex, setRotatedIndex] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState('1');
    const [selectedOption, setSelectedOption] = useState('All');


    const [isOpen3, setIsOpen3] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const dropdownRef3 = useRef(null);
    const dropdown3 = () => {
        setIsOpen3(!isOpen3);
        setIsDropdownOpen3(!isDropdownOpen3);
    };


    // //Navigate to Add Device Page
    const navigate = useNavigate();
    const handleclick = () => {
        navigate(`Add_Staff_Detials`);
    }
    const [alldata, setAlldate] = useState([]);
    useEffect(() => {
        const adminid = JSON.parse(sessionStorage.getItem("UserInfo")).userid;
        axios.post(`${API_URL}get/user`, { adminid: adminid, position: 4 })
            .then(response => {
                console.log(response.data.data);
                setAlldate(response.data.data)
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    }, []);
    const userInfo = JSON.parse(sessionStorage.getItem("UserInfo"));
    console.log(userInfo);
    // const handleIconClick = () => {
    //     // userInfo.staff
    //     if (userInfo.staff > 2) {
    //         setRotatedIndex(!rotatedIndex);
    //     } else {
    //         alert("Option Disabled for Staff")
    //     }

    // };
    const handleIconClick = (index) => {
        if (userInfo.staff > 2) {
            setRotatedIndex(!rotatedIndex);
            setRotatedIndex(rotatedIndex === index ? null : index);
        } else {
            alert("Option Disabled for Staff")
        }
    };

    const handleDivClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    //navigate to edit page
    const Staff_Detials_edit_page = async (data) => {
        navigate(`Edit_Staff_Detials/${data}`);
    }

    const updateUserStatus = async (userid, currentstatus, index) => {
        try {
            const response = await axios.put(`${API_URL}update/userremove`, {
                userid: userid, status: currentstatus
            });
            console.log(response.data.resStatus); // Assuming the API sends back a response
            if (response.data.qos === "success") {
                setAlldate((prevData) => {
                    const newData = [...prevData];
                    newData[index].status = response.data.resStatus;
                    return newData;
                });
                console.log("success : ", alldata)
            }
        } catch (error) {
            console.error('Error updating user status:', error);
        }
    }

    return (
        <div className='bar'>
            <div className='status-bar'>
                <div className="device_mangement_main_content">
                    <div className="row_with_count_status">
                        <span className='module_tittle'>Staff Detials</span>
                    </div>

                    <div className='filters display-flex' >
                        <div className="pagination_with_filters">
                            <div class="pagination display-flex" onClick={handleDivClick}>
                                <div className="focus-page">
                                    <input
                                        // ref={inputRef}
                                        type="number"
                                        value={text}
                                        onChange={handleInputChange}
                                        // onBlur={handleInputBlur}
                                        autoFocus
                                        className='editable_input_box'
                                    />

                                </div>
                                <div className="upcomming-pages">
                                    of 20 pages
                                </div>
                            </div>

                            {/* <div className='move_head'>
                                <div className='filters1 display-flex'>
                                    <div class="dropdown-filter"
                                        ref={dropdownRef3}
                                    >
                                        <div class="device_filters" onClick={dropdown3}>
                                            <div className="device_name">
                                                Bussiness Type
                                            </div>
                                            <div className="dropdown_icon">
                                                <FontAwesomeIcon
                                                    icon={isDropdownOpen3 ? faChevronDown : faChevronUp}
                                                    className="dropdown-icon"
                                                />
                                            </div>
                                        </div>
                                        {isOpen3 && (
                                            <div className="dropdown_menu2 dashboard_dropdown-menu dropdown-colors">
                                                <div>
                                                    <div className='device_dropdown'>
                                                        <input
                                                            className='device_sts_checkbox'
                                                            type="checkbox"
                                                            checked={selectedOption === 'All'}
                                                        // onChange={() => handleOptionChange('All')}
                                                        />
                                                        <div className="div_sts">All</div>
                                                    </div>
                                                    <div className='device_dropdown'>
                                                        <input
                                                            className='device_sts_checkbox'
                                                            type="checkbox"
                                                            checked={selectedOption === 'Active'}
                                                        // onChange={() => handleOptionChange('Active')}
                                                        />
                                                        <div className="div_sts">Employed</div>
                                                    </div>
                                                    <div className='device_dropdown'>
                                                        <input
                                                            className='device_sts_checkbox'
                                                            type="checkbox"
                                                            checked={selectedOption === 'Inactive'}
                                                        // onChange={() => handleOptionChange('Inactive')}
                                                        />
                                                        <div className="div_sts">Self Employed</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className='filters2 display-flex' onClick={handleclick}>
                            <button className='btn btn-fill'>Add User</button>
                        </div>
                    </div>


                    <div className='col-headings'>
                        <div className="col-head">Registration ID</div>
                        <div className="col-head">Distributer Name</div>
                        <div className="col-head">Aadhar Number</div>
                        <div className="col-head">PAN Number</div>
                        <div className="col-head">Postal Code </div>
                        <div className="col-head">Email</div>
                        <div className="col-head">Contact Number</div>
                        <div className="col-head">Action</div>
                    </div>
                    <div className="scroll_div">
                        {alldata.map((data, index) => (
                            <div className="datas skeleton-block">
                                <div className="col-head">{data.userid}</div>
                                <div className="col-head">{data.name}</div>
                                <div className="col-head">{data.aadhar}</div>
                                <div className="col-head">{data.pan}</div>
                                <div className="col-head">{data.ppostalcode}</div>
                                <div className="col-head" title="Quantanics@gmail.com">{data.email}</div>
                                <div className="col-head">
                                    {data.phno}
                                </div>
                                <div className="col-head display-flex device_action_dropdown_parent">
                                    <div className="sts_icon"
                                        onClick={() => handleIconClick(index)}
                                    >
                                        <Icon icon={ic_label_important} style={{ transform: rotatedIndex === index ? 'rotate(90deg)' : 'rotate(0)', color: rotatedIndex === index ? '#08c6cd' : 'lightgray', }} className='device_content_arrow' size={25} />
                                    </div>
                                    <div>{(rotatedIndex === index) &&
                                        (<div className='device_action_dropdown'>
                                            <div className='display-flex device_action_dropdown1 dropdown_action'>
                                                <FontAwesomeIcon className='device_content_arrows' icon={faAnglesDown} size='lg' />
                                                <div className='device_content_dropdown display-flex'
                                                    onClick={() => Staff_Detials_edit_page(data.userid)}
                                                >Edit Distributer Detials</div>
                                            </div>
                                            <div className='display-flex device_action_dropdown2 dropdown_action'>
                                                <FontAwesomeIcon icon={faAnglesDown} className='device_content_arrows' size='lg' />
                                                {data.status == 1 ? (
                                                    <div className='device_content_dropdown display-flex'
                                                        onClick={() => updateUserStatus(data.userid, 0, index)}
                                                    >Inactivate Distributer
                                                    </div>
                                                ) : (
                                                    <div className='device_content_dropdown display-flex'
                                                        onClick={() => updateUserStatus(data.userid, 1, index)}
                                                    >Activate Distributer
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staff_Detials;