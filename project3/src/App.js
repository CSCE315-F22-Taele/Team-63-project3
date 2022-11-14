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

function App() {

  return (
    <body>
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