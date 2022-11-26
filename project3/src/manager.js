import React from 'react'
import './App.css';
import Receipt from './receipt';
import {Link} from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';
import Salesreport from './manager/salesreport';
import ExcessReport from './manager/excessreport';
import FoodUpdate from './manager/foodupdate';



//import LogIn from './OAuth/oafront.js'

function Manager() {
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
            </div>
          </nav>
          <Routes>
          <Route exact path = "/manager" element = {<Manager/>}/>
            <Route exact path = "/manager/salesreport" element = {<Salesreport/>}/>
            <Route exact path = "/manager/excessreport" element={<ExcessReport/>}/>
            <Route exact path = "/manager/foodUpdate" element={<FoodUpdate/>}/>
          </Routes>
          <h1>Welcome to Chick-Fil-A</h1>
          <h1>This is the manager tab</h1>
          <Receipt></Receipt>
      </body>
    </>
  );
}

export default Manager;