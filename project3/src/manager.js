import React from 'react'
import './App.css';
import Receipt from './receipt';
import {Link} from 'react-router-dom';
//import LogIn from './OAuth/oafront.js'

function Manager() {
  return (
    <>
      <body>
          <h1>Welcome to Chick-Fil-A</h1>
            <h1>This is the manager tab</h1>
            <img src='chick.jpg' alt = "chick fila logo" />
          <ul>
            <button><Link to = "/manager/salesreport">Sales Report</Link></button>
            <button><Link to = "/manager/excessreport">Excess Report</Link></button>
            <button><Link to = "/manager/updatetable">Food Update</Link></button>
          </ul>
          <Receipt></Receipt>
      </body>
    </>
  );
}

export default Manager;