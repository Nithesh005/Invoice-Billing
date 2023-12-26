import sketch1 from '../assets/logo/sketch1.jpeg';
import sketch2 from '../assets/logo/sketch2.jpeg';
import Logo from '../assets/logo/tempiot.jpg';
import invoiceLogo from '../assets/logo/invoiceLogo.png';
import Qr_code from '../assets/logo/Qr.png';
import { useState } from 'react';
import { API_URL } from '../config'
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin, onSelectsite, handleLogout }) => {
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
    const validate_login = async() => {
        await navigate('/Distributer_Detials');
        window.location.reload();
    }

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
                                <input type="text" placeholder='Email' className='login_inputs_individual' value={username} onChange={handleUserName} />
                                <div className="login_error-message">{username_empty && "Enter Valid Email*"}</div>
                            </div>
                            <div className='login_input_div'>
                                <input type="password" placeholder='Password' className='login_inputs_individual' value={password} onChange={handlepassword} />
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