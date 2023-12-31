import React, { useEffect, useState } from 'react';
import './assets/style/App.css'
import './assets/style/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';




//Management
import Dashboard from './pages/Dashboard.jsx';
import Distributer_Detials from './pages/Distributer_Detials.jsx';
import Products from './pages/Products.jsx';
import Add_Distributer_Detials from './pages/Add_Distributer_Detials';
import Edit_Distributer_Detials from './pages/Edit_Distributer_Detials';
import Edit_site from './pages/Edit_site';
import Add_site from './pages/Add_Products.jsx';
import Invoice from "./components/Invoice.jsx";
import InvoiceGenerator from "./components/InvoiceGenerator.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import TransactionHistory from "./pages/TransactionHistory.jsx";
import Site from './pages/Site.jsx';
import Edit_device from './pages/Edit_device';
// import Add_site from './pages/Add_site.jsx';
import Assert_Management from './pages/Assert_Management.js'
import Alert_Management from './pages/Alert_Management';
import User from './pages/User'
// import Add_user from './pages/Add_user';

//configuration
import Modbus_Slave from './pages/Modbus_Slave'
import Modbus_Master from './pages/Modbus_Master'
import AlertSetting from './Configuration/AlertSetting';


// Main Content Template
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import TopNavbar from './TopNavbar';
import NewPassword from './pages/NewPassword';
import Loading from "./components/Loading";

//upgradation
import Firmware from './Upgradation/Firmware';

//log maintenance
import Events from './Log Maintenance/Events';
import Real_Data from './Log Maintenance/Real_Data';
import Tor from './pages/Tor';
// import edit_site from './pages/Edit_site';
var storedData;

const App = () => {
  const [parsedData, setParsedData] = useState(null);
  // var userSidebarConfig = {
  //   RI001: {
  //     routes: [
  //       { path: '/dashboard', element: <Dashboard /> },
  //       { path: '/Assert_Management', element: <Assert_Management /> },
  //       { path: '/Alert_Management', element: <Alert_Management /> },
  //       // { path: '/Device/:site_id_check', element: <Device /> },
  //       { path: '/Site', element: <Site /> },
  //       { path: '/User', element: <User /> },
  //       { path: '/Alert', element: <AlertSetting /> },
  //       { path: '/Modbus_Slave', element: <Modbus_Slave /> },
  //       { path: '/Modbus_Master', element: <Modbus_Master /> },
  //       { path: '/Event', element: <Events /> },
  //       { path: '/Device_Connection', element: <Modbus_Master /> },
  //       { path: '/Real_Data', element: <Real_Data /> },
  //       { path: '/Firmware', element: <Firmware /> },
  //       { path: '/tor', element: <Tor /> },

  //       { path: '/Device/Add_device', element: <Add_device /> },
  //       { path: '/Site/Add_site', element: <Add_site /> },
  //       { path: '/User/Add_user', element: <Add_user /> },

  //       { path: '/Device/edit_device/:r_no', element: <Edit_device /> },
  //       { path: '/Site/edit_site/:site_id', element: <Edit_site /> },
  //       { path: '/User/Edit_user/:user_id', element: <Edit_user /> },

  //     ],
  //   },
  //   RI002: {
  //     routes: [

  //       { path: '/dashboard', element: <Dashboard />, show: parsedData ? parsedData.dashboard != '0' : true },
  //       { path: '/Assert_Management', element: <Assert_Management /> },
  //       { path: '/Alert_Management', element: <Alert_Management /> },
  //       { path: '/Device/:site_id_check', element: <Device />, show: parsedData ? parsedData.device_management != '0' : true },
  //       { path: '/Site', element: <Site />, show: parsedData ? parsedData.site_management != '0' : true },
  //       { path: '/User', element: <User />, show: parsedData ? parsedData.user_management != '0' : true },

  //       { path: '/Alert', element: <AlertSetting /> },
  //       { path: '/Modbus_Slave', element: <Modbus_Slave /> },
  //       { path: '/Modbus_Master', element: <Modbus_Master /> },
  //       { path: '/Event', element: <Events /> },
  //       { path: '/Device_Connection', element: <Modbus_Master /> },
  //       { path: '/Real_Data', element: <Real_Data /> },
  //       { path: '/Firmware', element: <Firmware /> },

  //       { path: '/Device/Add_device', element: <Add_device />, show: parsedData ? parsedData.device_management != '0' : true },
  //       { path: '/Site/Add_site', element: <Add_site />, show: parsedData ? parsedData.site_management != '0' : true },
  //       { path: '/User/Add_user', element: <Add_user />, show: parsedData ? parsedData.user_management != '0' : true },

  //       { path: '/Device/edit_device/:r_no', element: <Edit_device />, show: parsedData ? parsedData.device_management != '0' : true },
  //       { path: '/Site/edit_site/:site_id', element: <Edit_site />, show: parsedData ? parsedData.site_management != '0' : true },
  //       { path: '/User/Edit_user/:user_id', element: <Edit_user />, show: parsedData ? parsedData.user_management != '0' : true },

  //     ],
  //   },
  //   RI003: {
  //     routes: [
  //       { path: '/dashboard', element: <Dashboard />, show: parsedData ? parsedData.dashboard != '0' : true },
  //       { path: '/Assert_Management', element: <Assert_Management /> },
  //       { path: '/Alert_Management', element: <Alert_Management /> },
  //       { path: '/Device/:site_id_check', element: <Device />, show: parsedData ? parsedData.device_management != '0' : true },
  //       { path: '/User', element: <User />, show: parsedData ? parsedData.user_management != '0' : true },

  //       { path: '/Alert', element: <AlertSetting /> },
  //       { path: '/Modbus_Slave', element: <Modbus_Slave /> },
  //       { path: '/Modbus_Master', element: <Modbus_Master /> },
  //       { path: '/Event', element: <Events /> },
  //       { path: '/Device_Connection', element: <Modbus_Master /> },
  //       { path: '/Real_Data', element: <Real_Data /> },
  //       { path: '/Firmware', element: <Firmware /> },

  //       { path: '/Device/Add_device', element: <Add_device /> },

  //       { path: '/User/Add_user', element: <Add_user />, show: parsedData ? parsedData.user_management != '0' : true },

  //       { path: '/Device/edit_device/:r_no', element: <Edit_device />, show: parsedData ? parsedData.device_management != '0' : true },
  //       { path: '/User/Edit_user/:user_id', element: <Edit_user />, show: parsedData ? parsedData.user_management != '0' : true },

  //     ],
  //   },
  //   RI004: {
  //     routes: [
  //       { path: '/dashboard', element: <Dashboard />, show: parsedData ? parsedData.dashboard != '0' : true },
  //       { path: '/Assert_Management', element: <Assert_Management /> },
  //       { path: '/Alert_Management', element: <Alert_Management /> },
  //       { path: '/Device/:site_id_check', element: <Device />, show: parsedData ? parsedData.device_management !== "0" : true },
  //       { path: '/User', element: <User />, show: parsedData ? parsedData.user_management != '0' : true },

  //       { path: '/Alert', element: <AlertSetting /> },
  //       { path: '/Modbus_Slave', element: <Modbus_Slave /> },
  //       { path: '/Modbus_Master', element: <Modbus_Master /> },
  //       { path: '/Event', element: <Events /> },
  //       { path: '/Device_Connection', element: <Modbus_Master /> },
  //       { path: '/Real_Data', element: <Real_Data /> },
  //       { path: '/Firmware', element: <Firmware /> },


  //       { path: '/Device/Add_device', element: <Add_device />, show: parsedData ? parsedData.device_management != '0' : true },
  //       { path: '/User/Add_user', element: <Add_user />, show: parsedData ? parsedData.user_management != '0' : true },

  //       { path: '/Device/edit_device/:r_no', element: <Edit_device />, show: parsedData ? parsedData.device_management != '0' : true },
  //       { path: '/User/Edit_user/:user_id', element: <Edit_user />, show: parsedData ? parsedData.user_management != '0' : true },

  //     ],
  //   },
  // };

  const local1 = sessionStorage.getItem('site_db');
  const local = JSON.parse(local1);
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [site, setsite] = useState(local);
  const [sitevalue, setsitevalue] = useState(local);

  const handleLogin = (role) => {
    storedData = sessionStorage.getItem('access_control');
    const parsedAccessData = JSON.parse(storedData);
    setParsedData(parsedAccessData)
    setUserType(role);
    sessionStorage.setItem('userType', role);
  };
  const handleLogout = () => {
    setUserType(null);
    setsitevalue(null);
    sessionStorage.removeItem('userType');
    sessionStorage.removeItem('session_dbName');
    sessionStorage.removeItem('access_control');
    sessionStorage.removeItem('state_count');
  };
  const handlemultiplesite = (res) => {
    setsite(res);
    if (typeof res === "string") {
      if (res.includes(",")) {
        const myBooleanValue = true;
        sessionStorage.setItem('boolean', JSON.stringify(myBooleanValue))
      } else {
        const myBooleanValue = false;
        sessionStorage.setItem('boolean', JSON.stringify(myBooleanValue))
      }
    } else {
      const myBooleanValue = true;
      sessionStorage.setItem('boolean', JSON.stringify(myBooleanValue))
    }
  }
  const Apphandlesite = (value) => {
    setsitevalue(value);
  }

  useEffect(() => {
    const storedUserType = sessionStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);

  }, []);

  return (
    <BrowserRouter>
      {window.location.href !== 'http://localhost:3001/' ? (
        <>
          <TopNavbar site={site} apphandlesite={Apphandlesite} />
          <Sidebar handleLogout={handleLogout}>
            <Routes>
              <Route path='/Distributer_Detials' element={<Distributer_Detials />}></Route>
              <Route path='/Add_Distributer_Detials' element={<Add_Distributer_Detials />}></Route>
              <Route path='/Edit_Distributer_Detials' element={<Edit_Distributer_Detials />}></Route>
              <Route path='/Products' element={<Products />}></Route>
              <Route path='/Add_Products' element={<Add_site />}></Route>
              <Route path='/Edit_Products' element={<Add_site />}></Route> 
              {/* Edit_site */}
              <Route path='/Invoice' element={<Invoice />}></Route>
              <Route path='/InvoiceGenerator' element={<InvoiceGenerator />}></Route>
              <Route path='/ProfilePage' element={<ProfilePage />}></Route>
              <Route path='/TransactionHistory' element={<TransactionHistory />}></Route>
              {/* <Route path='/Contact_us' element={<Add_site />}></Route> */}
            </Routes>
          </Sidebar>
        </>
      ) : (
        <>
          <Routes>
            <Route path='/' element={<Login />}></Route>
          </Routes>
        </>
      )}


      {/* {loading ? (
        <h1><Loading /></h1>
      ) : (
        <>
          {userType ? (
            <>
              {sitevalue ? (<>
                <TopNavbar site={site} apphandlesite={Apphandlesite} />
                {window.location.href !== 'http://localhost:3001/tor' ? (
                  <Sidebar give_auth={userType} handleLogout={handleLogout}>
                    <Routes>
                      {userSidebarConfig[userType].routes.map((route, index) => (
                        (route.show === undefined || route.show) && (
                          <Route key={index} path={route.path} element={route.element} />
                        )
                      ))}
                    </Routes>
                  </Sidebar>
                ) : (
                  // window.location.reload();
                  // <div>hi</div>
                  <Routes>
                    <Route path='/Tor' element={<Tor />}></Route>
                  </Routes>
                )}

              </>) : (<>
                <TopNavbar site={site} apphandlesite={Apphandlesite} />
                <Sidebar give_auth={userType} handleLogout={handleLogout}>
                  <Routes>
                    <Route path='/User' element={<User />}></Route>
                    <Route path='/User/Add_user' element={<Add_user />}></Route>
                    <Route path='/User/Edit_user/:user_id' element={<Edit_user />}></Route>
                    <Route path='/Site' element={<Site />}></Route>
                    <Route path='/Site/Add_site' element={<Add_site />}></Route>
                    <Route path='/Site/edit_site/:site_id' element={<Edit_site />}></Route>
                  </Routes>
                </Sidebar>
              </>)}

            </>
          ) : (
            <Login onLogin={handleLogin} onSelectsite={handlemultiplesite} handleLogout={handleLogout} />
          )}
        </>
      )} */}
    </BrowserRouter>
  );

};

export default App;