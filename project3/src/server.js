import axios from 'axios';
import React, {useEffect, useRef} from 'react'
import {useState} from 'react';
import './App.css';
import Receipt from './receipt';
import {Route,Link} from 'react-router-dom';
//import LogIn from './OAuth/oafront.js'

function Server() {
  return (
    <>
      <body>
          <h1>Welcome to Chick-Fil-A</h1>
            <h1>This is the Server tab</h1>
          <img src={require('./chick.jpg')} />
          <Receipt></Receipt>
      </body>
    </>
  );
}

export default Server;