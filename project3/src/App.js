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

//function App() {
const App = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement({ pageLanguage: 'en', 
    layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 
    'google_translate_element')
    }

  useEffect(() => {
    var addScript = document.createElement('script');
    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, [])
  return (
    <body>
      <div id="google_translate_element"></div>
      <NavBar/>
      <Routes>
        <Route exact path = "/" element = {<Customer/>}/>
        <Route exact path = "/server" element = {<Server/>}/>
        <Route exact path = "/manager" element = {<Manager/>}/>
        <Route exact path = "/manager/salesreport" element = {<Salesreport/>}/>
        <Route exact path = "/googlemap" element={<MapFront/>}/>
      </Routes>
    </body>
  );
}

export default App;