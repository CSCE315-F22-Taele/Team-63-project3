import axios from 'axios';
import React, {useEffect, useState} from 'react'
import './receipt.css';

const Receipt = () =>{
  const [message, setMessage] = useState([]);
  const [listOfBts, setListOfBits] = useState([])
  const [price, setPrice] = useState(0)
  const [orderId, setOrderId] = useState(420);
  var today = new Date();
  var day = String(today.getDate()).padStart(2, '0');
  var month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var year = today.getFullYear();

  var orderdt = year + '-' + month + '-' + day;
  console.log(orderdt)
  
  useEffect(() => {
    const callApi = async () =>{
      await axios.get("http://localhost:5000/food").then((result) => {
        console.log(result.data)
        setListOfBits(result.data)
      });
    }
    callApi()
  }, [])

  
  console.log("Is this even working and that is the question?")
  console.log(listOfBts);
 

  const addItem = (item) => {
    const new_list = []
    new_list.push(...message)
    new_list.push(item)
    setMessage(new_list)
    setPrice(price + item.price)
  }
  const displayButtons = () => {
    if(listOfBts.length === 0){
      return <div></div>
    }

    return listOfBts.map((button) => {
      return(
        <button class="btn" onClick={() => addItem(button)}>{button.fooditem}</button>
      )
    })
  }

  const displayItems = message.map(item => {
      return <li key = {item.fooditem}>{item.fooditem}: {item.price}</li>
  })

  const pushOrder = (orderId, foodId, quantity, orderdate, amount) =>{
    axios.post("http://localhost:5000/insertorder",{
      orderId: orderId,
      foodId: foodId,
      quantity: quantity,
      orderdate: orderdate,
      amount: amount,
    }).then(()=>{
      console.log("Success");
      
    })
  }

  const ordering = () =>{
    for(var i = 0; i < message.length; ++i){
      console.log(orderId,message[i].foodid,1,orderId,1);
      pushOrder(orderId,message[i].foodid,1,orderdt,1);
    }
    setOrderId(orderId + 1);
    setMessage([])
    setPrice(0)
    return 
  }


  return(
    <>
      <div class="switch-view">
          <ul class="navbar-list">
            <li>
              <button class="navbar-btn">Customer</button>
            </li>
            <li>
              <button class="navbar-btn">Server</button>
            </li>
            <li>
              <button class="navbar-btn">Manager</button>
            </li>
          </ul>
      </div>
      <div class="customer">
        <div class="menuButtons">
          {displayButtons()}
        </div>
        <div class="receipt">
          <h3>Your total Price is: {price.toFixed(2)}</h3>
          {displayItems}
          <button onClick = {ordering} class="submit-order">Submit Order</button>
        </div>
      </div>
    </>
  )
}
export default Receipt;