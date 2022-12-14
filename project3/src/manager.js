import React from 'react'
import './App.css';
import Receipt from './receipt';
import {Link} from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';
import Salesreport from './manager/salesreport';
import ExcessReport from './manager/excessreport';
import FoodUpdate from './manager/foodupdate';
import { useEffect } from 'react'
import { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import {useState} from 'react';



//import LogIn from './OAuth/oafront.js'
/**
 * handles manager page, showing the ordering system, excess report, sales report, and food update
 *
 * @version 1.0.1
 * @author Anna Huang
 * @author John Liu
 * @author Akhil Mathew
 * @author Luis Martinez Morales
 * @author Eric Nunes
 */
function Manager() {
  // Set up Google OAuth code
  const [ profile, setProfile ] = useState([]);
  const clientId = '7130970063-8l4ukqnaa0o24aiklhbbb8vbo8rpos8a.apps.googleusercontent.com';
  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
          clientId: clientId,
          scope: ''
      });
    };
    // gapi.load('client:auth2', initClient);
    // var addScript = document.createElement('script');
    // addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    // document.body.appendChild(addScript);
    // window.googleTranslateElementInit = googleTranslateElementInit;
  }, [])
  // Hide buttons if manager logs out
    const logOut = () => {
        setProfile(null);
        document.getElementById("loginControl").hidden=false;
        document.getElementById("btnManager").hidden=true;
    
        document.getElementById("btnGoogleLogin").hidden=false;
        document.getElementById("btnGoogleLogout").hidden=true;
        
        document.getElementById("btnServer").hidden=true;
        document.getElementById("btnCustomer").hidden=true;
      };
  // Return HTML code for the manager side, including routes for manager tools
  return (
    <>
      <body>
          <nav class="navigation">
            <a href="/"><img src="/cfa-logo.png" width="50" height="50"></img></a>
            <div class="more-header">
              <a href="/App">Home</a>
              <a href="/manager/salesreport">Sales Report</a>
              <a href="/manager/excessreport">Excess Report</a>
              <a href="/manager/foodUpdate">Food Update</a>
              <GoogleLogout clientId={clientId} 
                buttonText="Log out" onLogoutSuccess={logOut}
              />
            </div>
          </nav>
          <Routes>
          <Route exact path = "/manager" element = {<Manager/>}/>
            <Route exact path = "/manager/salesreport" element = {<Salesreport/>}/>
            <Route exact path = "/manager/excessreport" element={<ExcessReport/>}/>
            <Route exact path = "/manager/foodUpdate" element={<FoodUpdate/>}/>
          </Routes>
          <h1 class="intro">Manager</h1>
          <Receipt></Receipt>
      </body>
    </>
  );
}

export default Manager;
