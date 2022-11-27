import axios from 'axios';
import React, {useEffect, useRef} from 'react'
import {useState} from 'react';
import './App.css';
import Receipt from './receipt';
import {Route,Routes} from 'react-router-dom';
import MapFront from './googlemap/mapfrontend'

//import LogIn from './OAuth/oafront.js'

function Customer() {
  return (
    <>
      <nav class="navigation">
        <a href="/"><img src="/cfa-logo.png" width="50" height="50"></img></a>
        <div class="more-header">
          <a href="/App">Home</a>
          <a href="/googlemap" >Locations</a>
        </div>
      </nav>
      <Routes>
        <Route exact path = "/customer" element = {<Customer/>}/>
        <Route exact path = "/googlemap" element={<MapFront/>}/>
      </Routes>
      <div class="customer-body">
          <h1>Welcome to Chick-Fil-A</h1>
            <h1>This is the customer tab</h1>
          <Receipt></Receipt>
      </div>
    </>
  );
}

export default Customer;