import React, { useEffect, useState } from 'react';
import './assets/style/App.css'
import './assets/style/main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

// import { HashRouter as Router, Route, Routes } from 'react-router-dom';




//Management
import Distributer_Detials from './pages/Distributer_Detials.jsx';
import Products from './pages/Products.jsx';
import Add_Distributer_Detials from './pages/Add_Distributer_Detials';
import Edit_Distributer_Detials from './pages/Edit_Distributer_Detials';
import Add_site from './pages/Add_Products.jsx';
import Invoice from "./components/Invoice.jsx";
import InvoiceGenerator from "./components/InvoiceGenerator.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import TransactionHistory from "./pages/TransactionHistory.jsx";



// Main Content Template
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import TopNavbar from './TopNavbar';
var storedData;

const App = () => {
  const [parsedData, setParsedData] = useState(null);

  const local1 = sessionStorage.getItem('site_db');
  const local = JSON.parse(local1);
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [site, setsite] = useState(local);
  const [sitevalue, setsitevalue] = useState(local);

  // const handleLogin = (role) => {
  //   storedData = sessionStorage.getItem('access_control');
  //   const parsedAccessData = JSON.parse(storedData);
  //   setParsedData(parsedAccessData)
  //   setUserType(role);
  //   sessionStorage.setItem('userType', role);
  // };
  const handleLogout = () => {
    setUserType(null);
    setsitevalue(null);
    sessionStorage.removeItem('userType');
    sessionStorage.removeItem('session_dbName');
    sessionStorage.removeItem('access_control');
    sessionStorage.removeItem('state_count');
  };
  // const handlemultiplesite = (res) => {
  //   setsite(res);
  //   if (typeof res === "string") {
  //     if (res.includes(",")) {
  //       const myBooleanValue = true;
  //       sessionStorage.setItem('boolean', JSON.stringify(myBooleanValue))
  //     } else {
  //       const myBooleanValue = false;
  //       sessionStorage.setItem('boolean', JSON.stringify(myBooleanValue))
  //     }
  //   } else {
  //     const myBooleanValue = true;
  //     sessionStorage.setItem('boolean', JSON.stringify(myBooleanValue))
  //   }
  // }
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
            {/* Distributer module */}
              <Route path='/Distributer_Detials' element={<Distributer_Detials />}></Route>
              <Route path='/Add_Distributer_Detials' element={<Add_Distributer_Detials />}></Route>
              <Route path='/Edit_Distributer_Detials' element={<Edit_Distributer_Detials />}></Route>

              {/* Products Module */}
              <Route path='/Products' element={<Products />}></Route>
              <Route path='/Add_Products' element={<Add_site />}></Route>
              <Route path='/Edit_Products' element={<Add_site />}></Route>

              {/* Invoice Module */}
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

    </BrowserRouter>
  );

};

export default App;