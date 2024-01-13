import React, { useState } from 'react';
import './assets/style/App.css'
import './assets/style/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import { HashRouter as Router, Route, Routes } from 'react-router-dom';

//Managements
import Distributer_Detials from './pages/Distributer_Detials.jsx';
import Products from './pages/Products.jsx';
import Add_User_Detials from './pages/Add_User_Detials';
import Edit_Distributer_Detials from './pages/Edit_Distributer_Detials';
import CustomerDetails from './pages/CustomerDetails';
import Add_Customer_Detials from './pages/Add_Customer_Detials';
import Add_site from './pages/Add_Products.jsx';
import Invoice from "./components/Invoice.jsx";
import InvoiceGenerator from "./pages/InvoiceGenerator.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import TransactionHistory from "./pages/TransactionHistory.jsx";

// Main Content Template
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import TopNavbar from './TopNavbar';
import UpdatePassword from './pages/UpdatePassword.jsx';
import Staff_Detials from './pages/Staff_Detials.jsx';
import Add_Products from './pages/Add_Products.jsx';
import EditProduct from './pages/EditProduct.jsx';

const App  = () => {
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
    // http://localhost:3001/
    // https://terion.quantanics.in/
    <BrowserRouter>
      {window.location.href !== 'http://localhost:3001/' ? (
        <>
          {userInfo.isLoggedIn && (
            <div>
              <TopNavbar />
              <Sidebar handleLogout={handleLogout}>
                {/* userInfo.staff */}
                {userInfo.staff  > 0 && (
                  <div style={{ marginLeft: "60px" }}>
                    <Routes>
                      {/* Staff module */}
                      <Route path='Staff_Detials' element={<Staff_Detials position={4}/>}></Route>
                      <Route path='Staff_Detials/Edit_Staff_Detials/:userid' element={<Edit_Distributer_Detials />}></Route>
                      <Route path='Staff_Detials/Add_User_Detials' element={<Add_User_Detials />}></Route>
                    </Routes>
                  </div>
                )}
                {userInfo.distributer > 0 && (
                  <div>
                    <Routes>
                      {/* Distributer module */}
                      <Route path='Distributer_Detials' element={<Distributer_Detials position={2} />}></Route>
                      <Route path='Distributer_Detials/Edit_Distributer_Detials/:userid' element={<Edit_Distributer_Detials />}></Route>
                      <Route path='Distributer_Detials/Add_User_Detials' element={<Add_User_Detials />}></Route>
                    </Routes>
                  </div>
                )}
                {userInfo.customer > 0 && (
                  <div>
                    <Routes>
                      {/* Customer module */}
                      <Route path='Customer_Detials' element={<Distributer_Detials />}></Route>
                      <Route path='Add_Customer_Detials' element={<Add_User_Detials />}></Route>
                      <Route path='Edit_Distributer_Detials/:userid' element={<Edit_Distributer_Detials />}></Route>
                    </Routes>
                  </div>
                )}
                {userInfo.product > 0 && (
                  <div>
                    <Routes>
                      {/* Products Module */}
                      <Route path='Products' element={<Products />}></Route>
                      <Route path='Products/Add_Products' element={<Add_Products />}></Route>
                      <Route path='Products/Edit_Product_Detials/:productid' element={<EditProduct />}></Route>
                    </Routes>
                  </div>
                )}
                {userInfo.invoice > 0 && (
                  <div>
                    <Routes>
                      {/* Invoice Module */}
                      <Route path='Invoice' element={<Invoice />}></Route>
                      <Route path='InvoiceGenerator' element={<InvoiceGenerator />}></Route>
                      <Route path='ProfilePage' element={<ProfilePage />}></Route>
                      <Route path='TransactionHistory' element={<TransactionHistory />}></Route>
                    </Routes>
                  </div>
                )}
              </Sidebar>
            </div>
          )}
        </>
      ) : (
        <>
          <Routes>
            <Route path='/' element={<Login age={3} />}></Route>
            <Route path='UpdatePassword' element={<UpdatePassword age={3} />}></Route>
          </Routes>
        </>
      )}

    </BrowserRouter>
  );

};


export default App;