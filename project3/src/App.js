import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import translate from './translate';
import { useLocation } from "react-router";
import Manager from './manager';
import Customer from './customer';
import Server from './server';

function App (){
  
  const [ profile, setProfile ] = useState([]);
  const clientId = '7130970063-8l4ukqnaa0o24aiklhbbb8vbo8rpos8a.apps.googleusercontent.com';
  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
          clientId: clientId,
          scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
    
    setProfile(res.profileObj);
    
    if (res.profileObj.name === 'Anna Huang') {
          document.getElementById("btnManager").hidden=false;
          document.getElementById("btnServer").hidden=true;
          document.getElementById("btnCustomer").hidden=true;
        } else if (res.profileObj.email === 'annahuang5668@gmail.com') {
          document.getElementById("btnManager").hidden=true;
          document.getElementById("btnServer").hidden=false;
          document.getElementById("btnCustomer").hidden=true;
        } else {
          document.getElementById("btnManager").hidden=true;
          document.getElementById("btnServer").hidden=true;
          document.getElementById("btnCustomer").hidden=false;
    }
    
    document.getElementById("loginControl").hidden=true;
    document.getElementById("btnGoogleLogin").hidden=true;
    document.getElementById("btnGoogleLogout").hidden=false;
  };


  const onFailure = (err) => {
    console.log('Login in failed', err);
  };

  const logOut = () => {
    setProfile(null);
    document.getElementById("loginControl").hidden=false;

    document.getElementById("btnGoogleLogin").hidden=false;
    document.getElementById("btnGoogleLogout").hidden=true;
    document.getElementById("btnManager").hidden=true;
    document.getElementById("btnServer").hidden=true;
    document.getElementById("btnCustomer").hidden=true;
  };

  return (
    
    <div class="login">
      <div id="loginControl">
            <br/>
            <p><h1>Chick-Fil-A Login</h1><br/>
            </p>

        <div id="btnGoogleLogin">
          <GoogleLogin       
              clientId={clientId}
              buttonText="Sign in"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
          />
        </div>
      </div>

      <div id="btnGoogleLogout" hidden="true">
        <GoogleLogout clientId={clientId} 
        buttonText="Log out" onLogoutSuccess={logOut} 
        />
      </div>

      <div id="btnManager" hidden="true">
        <Manager/>
      </div>

      <div id="btnServer" hidden="true">
        <Server/>
      </div>

      <div id="btnCustomer" hidden="true">
        <Customer/>
      </div>
    </div>
  );
}
export default App;