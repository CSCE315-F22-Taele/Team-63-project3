import axios from 'axios';
import React, {useEffect, useRef} from 'react'
import {useState} from 'react';
import './App.css';
import Receipt from './receipt';
import {Route,Routes,Link} from 'react-router-dom';
import Salesreport from './manager/salesreport'

//import LogIn from './OAuth/oafront.js'

function Manager() {
  return (
    <>
      <body>
          <h1>Welcome to Chick-Fil-A</h1>
            <h1>This is the manager tab</h1>
          <img src={require('./chick.jpg')} />
          <ul>
            <button><Link to = "salesreport">Server</Link></button>
            <button><Link to = "manager">Ordering System</Link></button>
          </ul>
          <Routes>
            <Route exact path = "/salesreport" element = {<Salesreport/>}/>
            <Route exact path = "/manager" element = {<Manager/>}/>
        </Routes>
          <Receipt></Receipt>
      </body>
    </>
  );
}

export default Manager;