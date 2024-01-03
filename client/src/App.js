import React, { useState } from 'react';
import './assets/style/App.css'
import './assets/style/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import { HashRouter as Router, Route, Routes } from 'react-router-dom';

//Managements
import Distributer_Detials from './pages/Distributer_Detials.jsx';
import Products from './pages/Products.jsx';
import Add_Distributer_Detials from './pages/Add_Distributer_Detials';
import Edit_Distributer_Detials from './pages/Edit_Distributer_Detials';
import CustomerDetails from './pages/CustomerDetails';
import Add_Customer_Detials from './pages/Add_Customer_Detials';
import Add_site from './pages/Add_Products.jsx';
import Invoice from "./components/Invoice.jsx";
import InvoiceGenerator from "./components/InvoiceGenerator.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import TransactionHistory from "./pages/TransactionHistory.jsx";

// Main Content Template
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import TopNavbar from './TopNavbar';
import UpdatePassword from './pages/UpdatePassword.jsx';
import Staff_Detials from './pages/Staff_Detials.jsx';

const App = () => {
  // const handleLogin = (role) => {
  //   storedData = sessionStorage.getItem('access_control');
  //   const parsedAccessData = JSON.parse(storedData);
  //   setParsedData(parsedAccessData)
  //   setUserType(role);
  //   sessionStorage.setItem('userType', role);
  // };
  const handleLogout = () => {
    sessionStorage.removeItem('userType');
    sessionStorage.removeItem('session_dbName');
    sessionStorage.removeItem('access_control');
    sessionStorage.removeItem('state_count');
  };
  // const userInfo1 = {
  //   customer: "0",
  //   distributer: "3",
  //   staff: "2",
  //   email: "admin@gmail.com",
  //   invoice: "3",
  //   isLoggedIn: true,
  //   name: "admin",
  //   phno: "123456789",
  //   position: "manifacture",
  //   product: "3",
  //   userid: "123",
  //   userprofile: "1"
  // };
  const userInfoString = sessionStorage.getItem("UserInfo");
  const userInfo = JSON.parse(userInfoString);
  // console.log(userInfo.distributer);

  return (
    <BrowserRouter>
      {window.location.href !== 'http://localhost:3001/' ? (
        <>
          {userInfo.isLoggedIn && (
            <div>
              <TopNavbar />
              <Sidebar handleLogout={handleLogout}>
                {/* userInfo.staff */}
                {2 > 0 && (
                  <div>
                    <Routes>
                      {/* Staff module */}
                      <Route path='/Staff_Detials' element={<Staff_Detials />}></Route>
                      {/* <Route path='/Add_Staff_Detials' element={<Add_Staff_Detials />}></Route>
                      <Route path='/Edit_Staff_Detials' element={<Edit_Staff_Detials />}></Route> */}
                    </Routes>
                  </div>
                )}
                {userInfo.distributer > 0 && (
                  <div>
                    <Routes>
                      {/* Distributer module */}
                      <Route path='/Distributer_Detials' element={<Distributer_Detials />}></Route>
                      <Route path='/Add_Distributer_Detials' element={<Add_Distributer_Detials />}></Route>
                      <Route path='/Edit_Distributer_Detials' element={<Edit_Distributer_Detials />}></Route>
                    </Routes>
                    {/* {userdata[0].distributer > 2 && (
                  <div>Create/Delete</div>
                )}
                {userdata[0].distributer > 1 && (
                  <div>Edit</div>
                )} */}
                  </div>
                )}
                {userInfo.customer > 0 && (
                  <div>
                    <Routes>
                      {/* Customer module */}
                      <Route path='/Customer_Detials' element={<CustomerDetails />}></Route>
                      <Route path='/Add_Customer_Detials' element={<Add_Customer_Detials />}></Route>
                      <Route path='/Edit_Distributer_Detials' element={<Edit_Distributer_Detials />}></Route>
                    </Routes>
                    {/* {userdata[0].distributer > 2 && (
                  <div>Create/Delete</div>
                )}
                {userdata[0].distributer > 1 && (
                  <div>Edit</div>
                )} */}
                  </div>
                )}
                {userInfo.product > 0 && (
                  <div>
                    <Routes>
                      {/* Products Module */}
                      <Route path='/Products' element={<Products />}></Route>
                      <Route path='/Add_Products' element={<Add_site />}></Route>
                      <Route path='/Edit_Products' element={<Add_site />}></Route>
                    </Routes>
                    {/* {userdata[0].product > 2 && (
                  <div>Create/Delete</div>
                )}
                {userdata[0].product > 1 && (
                  <div>Edit</div>
                )} */}
                  </div>
                )}
                {userInfo.product > 0 && (
                  <div>
                    <Routes>
                      {/* Invoice Module */}
                      <Route path='/Invoice' element={<Invoice />}></Route>
                      <Route path='/InvoiceGenerator' element={<InvoiceGenerator />}></Route>
                      <Route path='/ProfilePage' element={<ProfilePage />}></Route>
                      <Route path='/TransactionHistory' element={<TransactionHistory />}></Route>
                    </Routes>
                    {/* {userdata[0].product > 2 && (
                  <div>Create/Delete</div>
                )}
                {userdata[0].product > 1 && (
                  <div>Edit</div>
                )} */}
                  </div>
                )}
              </Sidebar>
            </div>
          )}
        </>
      ) : (
        <>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/UpdatePassword' element={<UpdatePassword />}></Route>
          </Routes>
        </>
      )}

    </BrowserRouter>
  );

};


export default App;