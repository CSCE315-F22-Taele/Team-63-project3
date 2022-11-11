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
          <img src="/chick.png" alt = "chick fila logo"/>
          <ul>
            <button><Link to = "/manager/salesreport">Sales Report</Link></button>
          </ul>
          <Receipt></Receipt>
      </body>
    </>
  );
}

export default Manager;