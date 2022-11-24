import axios from 'axios';
import React, {useEffect, useRef} from 'react'
import {useState} from 'react';
import './App.css';
import Receipt from './receipt';
import {Route,Routes} from 'react-router-dom';
//import LogIn from './OAuth/oafront.js'
import Manager from './manager';
import Customer from './customer';
import Server from './server';
import NavBar from "./navbar";
import Salesreport from './manager/salesreport';
import MapFront from './googlemap/mapfrontend'
import ExcessReport from './manager/excessreport';
import FoodUpdate from './manager/foodupdate';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {gapi} from 'gapi-script';

const APPtranslator = () => {
  //const [ profile, setProfile ] = useState([]);
  //const clientid = "7130970063-8l4ukqnaa0o24aiklhbbb8vbo8rpos8a.apps.googleusercontent.com";
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en', 
    layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 
    'google_translate_element')
    }

  useEffect(() => {
    // google oauth
    // const initClient = () => {
    //   gapi.client.init({
    //       clientId: clientid,
    //       scope: ''
    //   });
    // };
    // gapi.load('client:auth2', initClient);

    // google traslate
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, [])

  // const onSuccess = (res) => {
  //   setProfile(res.profileObj);
  //   if (res.profileObj.name === 'Anna Huang') 
  //     alert('Name check\n' + res.profileObj.name + ' (' + res.profileObj.email + ') has signed in\nGo to '
  //         + res.profileObj.name + "'s page AppReact");
  //   else if (res.profileObj.email === 'annahuang5668@gmail.com ')
  //   alert('Mail check\n' + res.profileObj.name + ' (' + res.profileObj.email + ') has signed in\nGo to '
  //   + res.profileObj.name + "'s page AppReact");
  //   else
  //     alert(' name=' + res.profileObj.name + ' email=' + res.profileObj.email +  ' GoogleID=' + res.profileObj.googleId );
  
  //     //return <redirect to='/AppReact' />
  
  // };

  // const logOut = () => {
  //   alert(profile.name + ' has signed out' );
  //   setProfile(null);
  // };

  // const onFailure = (err) => {
  //   console.log('Login in failed', err);
  // };

  return (
    <body>
      <div id="google_translate_element"></div>
      {/*<GoogleLogin
          clientId={clientid}
          buttonText="Sign in"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
      />
      
  <GoogleLogout clientId={clientid} buttonText="Log out" onLogoutSuccess={logOut} />*/}
      <NavBar/>
      <Routes>
        <Route exact path = "/customer" element = {<Customer/>}/>
        <Route exact path = "/" element = {<Customer/>}/>
        <Route exact path = "/server" element = {<Server/>}/>
        <Route exact path = "/manager" element = {<Manager/>}/>
        <Route exact path = "/manager/salesreport" element = {<Salesreport/>}/>
        <Route exact path = "/googlemap" element={<MapFront/>}/>
        <Route exact path = "/manager/excessreport" element = {<ExcessReport/>}/>
        <Route exact path = "/manager/updatetable" element = {<FoodUpdate/>}/>
      </Routes>
    </body>
  );
}

export default APPtranslator;