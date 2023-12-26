
const ProfilePage = () => {
    return (
       <>
       <div className="row_with_count_status">
                <span className='module_tittle'>Profile Information</span>
            </div>
         <div className="container">
            <div className="main-body">
                <nav aria-label="breadcrumb" className="main-breadcrumb">
                    {/* <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
                        <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                    </ol> */}
                </nav>
                <br />
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card card_left_body">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                    <div className="mt-3">
                                        <h4>Distributer Name</h4>
                                        <p className="mb-1" style={{color:'white'}}>Register ID</p>
                                        <p className="font-size-sm" style={{color:'white'}}>Kalavasl , Madurai 619025</p>
                                        {/* <button className="btn btn-primary">Follow</button>
                                        <button className="btn btn-outline-primary">Message</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="card mt-3">
                            <ul className="list-group list-group-flush">
                                <li className="profile_blw_list">Linkedin</li>
                                <li className="profile_blw_list">2</li>
                                <li className="profile_blw_list">3</li>
                                <li className="profile_blw_list">4</li>
                            </ul>
                        </div> */}
                    </div>
                    <div className="col-md-8">
    <div className="card mb-3">
        <div className="card-body">
            {/* User details and Edit button */}
            <ul className="Profile_right_Up list-unstyled">
                <li className="List_in_Profile_rigth row">
                    <label className="col-md-4">Full name:</label>
                    <div className="col-md-8">
                        <input type="text" className="form-control" />
                    </div>
                </li>
                <li className="List_in_Profile_rigth row">
                    <label className="col-md-4">Register ID:</label>
                    <div className="col-md-8">
                        <input type="text" className="form-control" />
                    </div>
                </li>
                <li className="List_in_Profile_rigth row">
                    <label className="col-md-4">Email:</label>
                    <div className="col-md-8">
                        <input type="email" className="form-control" />
                    </div>
                </li>
                <li className="List_in_Profile_rigth row">
                    <label className="col-md-4">Phone:</label>
                    <div className="col-md-8">
                        <input type="tel" className="form-control" />
                    </div>
                </li>
                <li className="List_in_Profile_rigth row">
                    <label className="col-md-4">Mobile:</label>
                    <div className="col-md-8">
                        <input type="tel" className="form-control" />
                    </div>
                </li>
                {/* <li className="List_in_Profile_rigth">Adress</li> */}
                <li className="List_in_Profile_rigth row">
                    <label className="col-md-4">Pin Code:</label>
                    <div className="col-md-8">
                        <input type="text" className="form-control" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div className="row gutters-sm">
        <div className="col-sm-12 mb-3">
            <div className="card h-100">
                <div className="card-body">
                    {/* Project Status for the first column */}
                    <ul className="Profile_right_Up list-unstyled">
                        <li className="List_in_Profile_rigth row">
                            <label className="col-md-4">UPI Payment Mobile Number:</label>
                            <div className="col-md-8">
                                <input type="tel" className="form-control" />
                            </div>
                        </li>
                        <li className="List_in_Profile_rigth row">
                            <label className="col-md-4">UPI - Bank Account Name:</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" />
                            </div>
                        </li>
                        <li className="List_in_Profile_rigth row">
                            <label className="col-md-4">UPI - Bank Account Number:</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" />
                            </div>
                        </li>
                        <li className="List_in_Profile_rigth row">
                            <label className="col-md-4">State:</label>
                            <div className="col-md-8">
                                <input type="text" className="form-control" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

                </div>
            </div>
        </div>
       </>
    );
};

export default ProfilePage;
