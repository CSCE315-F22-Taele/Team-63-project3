import axios from 'axios';
import React, {useRef} from 'react'
import {useState} from 'react';
import './App.css';

function App() {
    var foodData = [];
    var orderData = [];
    var supplyData = [];
    const getData = async () => {
      axios.get("http://localhost:5000/supply").then((result) => {
        foodData = result;
        console.log(foodData);
      });

      axios.get("http://localhost:5000/food").then((result) =>{
        orderData = result;
        console.log(orderData);
      });

      axios.get("http://localhost:5000/order").then((result)=>{
        supplyData = result;
        console.log(supplyData);
      });
    }

    const [message, setMessage] = useState('');
      
      const handleChange = event => {
        setMessage(event.target.value);
      };

      const chickButtonClicked = event => {
        //event.preventDefault();id.name
        setMessage(message + '\n' + event.target.id + " 1 " + "$4.29");
      };

      const deluxeButtonClicked = event => {
        //event.preventDefault();
        
        setMessage(message + '\n' + event.target.id + " 1 " + "$4.99");
      };
    //function updatefood{
      // pushFood(asdfasdfasfsadfasf);
      // foodData.push({foodId:51,sdfasdf:322})
    // }
    
  // const postData = async() => {
  //   axios.post('http://localhost:5000/food')
  // }
  /*
  const pushFood = () =>{
    axios.post("http://localhost:5000/insertfood",{
      foodId: 69,
      foodItem: 'Tokyo Revenger',
      price: 69.69,
      supply: 'chicken',
    }).then(() =>{
      console.log("Success");
    });
  }

  const updateFood = () =>{
    axios.post("http://localhost:5000/updatefood",{
      foodId:69,
      foodItem: "JuJutsu Kaisen",
      price: 96.50,

    }).then(()=>{
      console.log("Success");
    });
  }

  const pushSupply = () =>{
    axios.post("http://localhost:5000/insertsupply",{
      supplyItem: "deeznuts",
    }).then(()=>{
      console.log("Success");
    })
  }
  
  const pushNewSupply = () =>{
    axios.post("http://localhost:5000/newsupply",{
      supplyItem: "deeznuts",
      quantity: 690,
      orderdate:"2022-10-12",
    }).then(()=>{
      console.log("Success");
    })
  }
*/

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

  // var buildOrderStr = ""
  // buildOrderStr += 
  /*
  const getItem = () => {
    customOrderList.push("chicken 1 4.99");
    console.log(customOrderList)
  }
  const orderRecipt = (ordernum,foodid,quantity,date,price) =>{
    pushOrder(ordernum,foodid,quantity,date,price);
    getItem();
  }
  {customOrderList.map(txt => <p>{txt}</p>)}
  var customOrderList = [];*/
//<input type="textarea" class="textarea" rows={5} cols={5} readOnly={true} id="message" name="message" onChange={handleChange} value={message}/>
  return (
    <>

      
                  
      <button onClick={getData}>Click me</button>
      
      <button id="Chicken Sandwich" onClick={(e) => {pushOrder(0, 1, 1, "2022-11-01", 4.29); chickButtonClicked(e)}}>Chicken Sandwich</button>
      <button id="Chic-Fil-A Deluxe" onClick={(e) => {pushOrder(0, 1, 1, "2022-11-01", 4.99); deluxeButtonClicked(e)}}>Chic-Fil-A Deluxe</button>
      <button>Spicy Chicken Sandwich</button>
      <button>Spicy Deluxe</button>
      <button>Grilled Chicken Sandwich</button>
      <button>Nuggets 8 pc</button>
      <button>Nuggets 12 pc</button>
      <button>Grilled Nuggets 8 pc</button>
      <button>Grilled Nuggets 12 pc</button>
      <button>Grilled Chicken Club</button>
      <button>Grilled Chicken Cool Wrap</button>
      <button>Cobb Salad</button>
      <button>Market Salad</button>
      <button>Spicy Southwest Salad</button>
      <button>Lemonade</button>
      <button>Iced Tea</button>
      <button>Cookie</button>
      <button>Chocolate Chip Brownie</button>
      <button>Milkshake</button>
      <button>Frosted Coffee</button>
      <button>Fries</button>

      
      <div class="receipt">
        <p class="receipt-header">Receipt</p>
        <p> 
          <textarea class="textarea" readOnly={true} onChange={handleChange} value={message}></textarea>
        </p>
      </div>
    </>    
  );
}

export default App;