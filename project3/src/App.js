import axios from 'axios';
import React, {useEffect, useRef} from 'react'
import {useState} from 'react';
import './App.css';
import Receipt from './receipt';

function App() {
   
    
      // const handleChange = event => {
      //   setMessage(message.push(event.target.value));
      // };

      // const chickButtonClicked = event => {
      //   //event.preventDefault();id.name
      //   setMessage(message + '\n' + event.target.id + " 1 " + "$4.29");
      // };

      // const deluxeButtonClicked = event => {
      //   //event.preventDefault();
        
      //   setMessage(message + '\n' + event.target.id + " 1 " + "$4.99");
      // };
    //function updatefood{
      // pushFood(asdfasdfasfsadfasf);
      // foodData.push({foodId:51,sdfasdf:322})
    // }
    
  

  // const pushOrder = (orderId, foodId, quantity, orderdate, amount) =>{
  //   axios.post("http://localhost:5000/insertorder",{
  //     orderId: orderId,
  //     foodId: foodId,
  //     quantity: quantity,
  //     orderdate: orderdate,
  //     amount: amount,
  //   }).then(()=>{
  //     console.log("Success");
  //   })
  // }

 
  // const getItem = () => {
  //   customOrderList.push("chicken 1 4.99");
  //   console.log(customOrderList)
  // }
  // const orderRecipt = (ordernum,foodid,quantity,date,price) =>{
  //   pushOrder(ordernum,foodid,quantity,date,price);
  //   getItem();
  // }
  // {customOrderList.map(txt => <p>{txt}</p>)}
  // var customOrderList = [];
//<input type="textarea" class="textarea" rows={5} cols={5} readOnly={true} id="message" name="message" onChange={handleChange} value={message}/>

  //This is returning the front end of everything 
  return (
    <>
      <body>
          <h1>Welcome to Chick-Fil-A</h1>
          <img src={require('./chick.jpg')} />
          <Receipt></Receipt>
      </body>
    </>
  );
}

export default App;