import sketch1 from '../assets/logo/sketch1.jpeg';
import sketch2 from '../assets/logo/sketch2.jpeg';
import invoiceLogo from '../assets/logo/invoiceLogo.png';
import Qr_code from '../assets/logo/Qr.png';
import { useState } from 'react';
import { API_URL } from '../config'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalid_state, setinvalidstate] = useState(false);
    const [inactive_user, setinactive_user] = useState(false);
    const [inactive_site, setinactive_site] = useState(false);
    const [username_empty, setusername_empty] = useState(false);
    const [password_empty, setpassword_empty] = useState(false);


    const handleUserName = (event) => {
        const Username = event.target.value;
        setUsername(Username);
        setusername_empty(false)
    };
    const handlepassword = (event) => {
        const password = event.target.value;
        setPassword(password)
        setpassword_empty(false)
    }

    const navigate = useNavigate();
    const LoginUsername = () => {
        if (username === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
            setinactive_user(false);
            setinvalidstate(false);
            setinactive_site(false)
            setusername_empty(true)
        }
    }
    const LoginPassword = () => {
        if (password == "") {
            setinactive_user(false);
            setinvalidstate(false);
            setinactive_site(false)
            setpassword_empty(true)
        }
    }
    const [responseMessage, setResponseMessage] = useState('');
    const validate_login = async () => {
        const body = { username, password };
        body.username = body.username.trim();
        body.password = body.password.trim();

        // const navigate = useNavigate();

        try {
            const response = await axios.post(
                'http://localhost:4000/verify/credentials',
                {
                    username: username,
                    password: password,
                }
            );

            setResponseMessage(response.data.message);

            if (response.data.success) {
                sessionStorage.setItem("UserInfo",JSON.stringify({...response.data.data,"isLoggedIn": true}));
                console.log(response.data);
                if (response.data.data.position === "manifacture") { 
                    navigate("/Distributer_Detials");
                } else if (response.data.data.position === "distributor") {
                    navigate('/Customer_Detials');
                    
                }
                else{
                    navigate('/profilePage');
                }
                window.location.reload();
            } else {
                // console.log(response.data)
                await setResponseMessage(response.data);
                alert(response.data.message);
            }
        } catch (error) {
            // Handle error, e.g., show an error message
            console.error('Login failed:', error.message);
            setResponseMessage('Login failed. Please try again.');
        }
    };

    return (
        <>
            <div className='content'>
                <div className='digital_scan'>
                    <div className="TempoIot">TERION</div>
                    <div className="ds">digital Simplified</div>
                    <img src={Qr_code} style={{ height: '100px', width: '100px' }} alt="Qr" />
                    <div className="para">It's beginning of machines taking over the world</div>
                    <div className="powered_by">
                        Powered by <span className="Quantanics">Quantanics</span>
                    </div>
                </div>
                <div className='login_inputs'>
                    <div className="all_inputs">
                        <div className="logo">
                            <img src={invoiceLogo} alt="Logo" />
                        </div>
                        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                            <div className='login_input_div'>
                                <input type="text" placeholder='Email' className='login_inputs_individual' value={username} onChange={handleUserName} onBlur={LoginUsername} />
                                <div className="login_error-message">{username_empty && "Enter Valid Email*"}</div>
                            </div>
                            <div className='login_input_div'>
                                <input type="password" placeholder='Password' className='login_inputs_individual' value={password} onChange={handlepassword} onBlur={LoginPassword} />
                                <div className="login_error-message">{password_empty && "Enter Valid Password*"}</div>
                            </div>
                        </div>
                        <div className='error_forgot display-flex'>
                            <div className=' error_msg_login'>
                                {invalid_state && (
                                    <span className='display-flex' style={{ justifyContent: "start" }}>*Invalid Credentials</span>
                                )}
                                {inactive_user && (
                                    <span className='display-flex' style={{ justifyContent: "start" }}>*Inactive User</span>
                                )}
                                {inactive_site && (
                                    <span className='display-flex' style={{ justifyContent: "start" }}>*Inactive Site</span>
                                )}
                            </div>
                            <div className="forget">
                                <span className='display-flex' style={{ justifyContent: "end" }}>Forgot Password</span>
                            </div>
                        </div>
                        <div className="login_btn_div" onClick={validate_login}>
                            <input type="submit" className='login_btn' value={"Login"} />
                        </div>
                    </div>

                </div>
            </div>
            <div className='sketch_images'>
                <img src={sketch1} alt="sketch1" className='sketch1' />
                <img src={sketch2} alt="sketch2" className='sketch2' />
            </div>
        </>
    )
}
export default Login;