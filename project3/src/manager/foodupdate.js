import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

const FoodUpdate = () =>{
    // Variables that will be used for the code
    const [foods,setFoods] = useState([])                   // list of foods
    const [theFoodId , setTheFoodId] = useState(-1)         // id of a food
    const [theFoodItem, setTheFoodItem] = useState("")      // Name of a food
    const [thePrice, setThePrice] = useState(-1.00)         // Price of a food item
    const [theSupplies, setSupplies] = useState("")         // Supplies associated with a food
    const [theimage, setTheImage] = useState("/foodimg/cfa-logo.png")   // Directory to food image. By defauly, use CFA logo
    const [counter, setCounter] = useState(0)               // Count food

    
    // const getFood = async()=>{
    //     await axios.get('http://localhost:6969/food').then((result)=>{
    //         console.log("It gets all of the columns")
    //         console.log("This is the result: ", result)
    //         setFoods(result.data)
    //         console.log("The size of the food is; ",result.data.length)
    //         setCounter(result.data.length)
    //     })
    // }
    // Use Axios to get food database
    useEffect(() => {
        const getFood = async()=>{
            await axios.get('http://localhost:6969/food').then((result)=>{
                console.log("It gets all of the columns")
                console.log("This is the result: ", result)
                setFoods(result.data)
                console.log("The size of the food is; ",result.data.length)
                setCounter(result.data.length)
            })
        }
        getFood()
      }, [foods])
   

      // use Axios to update the food table
    const update=async(theFoodId,theFoodItem,thePrice,theSupplies,theimage)=>{
        console.log("This is the data that is in my function: ",theFoodId,theFoodItem,thePrice,theSupplies,theimage)
        await axios.post('http://localhost:6969/updatefood',{
            foodId: theFoodId,
            foodItem: theFoodItem,
            price: thePrice,
            supplies: theSupplies,
            image: theimage
        
        }).then(()=>{
            console.log("Success")
            setTheFoodId(-1)
            setSupplies("")
            setTheFoodItem("")
            setThePrice(-1.00)
            setTheImage("")
        })
    }
    // Add food to table
    const addLeFood=async(counter,theFoodItem,thePrice,theSupplies,theimage)=>{
        console.log("This is data that is getting passed in: ",counter,theFoodItem,thePrice,theSupplies,theimage)
        await axios.post('http://localhost:6969/insertfood',{
            foodId: counter,
            foodItem: theFoodItem,
            price:thePrice,
            supplies:theSupplies,
            foodimg:theimage
        }).then(()=>{
            console.log("Success")
            setTheFoodId(-1)
            setSupplies("")
            setTheFoodItem("")
            setThePrice(-1.00)
            setTheImage("")
        })
    }
    // Change the food id
    const change1 =event=>{
    setTheFoodId(event.target.value)
    }

    // change the food item (name)
    const change2=event=>{
        setTheFoodItem(event.target.value)
    }

    // change the price
    const change3=event=>{
        setThePrice(event.target.value)
    }
    
    // change the supplies category
    const change4=event=>{
        setSupplies(event.target.value)
    }

    // change the directory of image used
    const change5=event=>{
        setTheImage(event.target.value)
    }

    // Return HTML code for food table
    const displayTable = ()=>{
       
        //getFood();
        return(
            
            <><table>
                {/* <thread> */}
                  <tr>
                    <th>Food ID</th>
                    <th>Food Item</th>
                    <th>Price</th>
                    <th>Supplies</th>
                    <th>Food Image</th>
                  </tr>
                {/* </thread> */}
                <tbody>
                  {foods.map((item) => (
                    <tr>
                      <td>{item.foodid}</td>
                      <td>{item.fooditem}</td>
                      <td>{item.price}</td>
                      <td>{item.supplies}</td>
                      <td>{item.foodimg}</td>
                    </tr>
                  ))}
                </tbody>
              </table></>
        )
    }
    // Update food table
    function now(){
        update(theFoodId,theFoodItem,thePrice,theSupplies,theimage);
        displayTable();
    }
    // Add new food item
    function plusFood(){
        addLeFood(counter,theFoodItem,thePrice,theSupplies,theimage);
        displayTable();
    }
    // Return HTML code of food update webpage
    return(
        <><body>
           
            <h1 class="intro">Update Menu</h1>
            {/* <ul>
                <button><Link to="/manager">Ordering System</Link></button>
                <button><Link to="/manager/salesreport">Sales Report</Link></button>
            </ul> */}

            {displayTable()}
            <label>Food ID:</label>
            <input onChange={change1} value={theFoodId}></input>
            <label>Food Item:</label>
            <input onChange={change2} value={theFoodItem}></input>
            <label>Price:</label>
            <input onChange={change3} value={thePrice}></input>
            <label>Supply:</label>
            <input onChange={change4} value={theSupplies}></input>
            <label>image:</label>
            <input onChange={change5} value={theimage}></input>
            <button onClick={()=>now()}>Submit Change</button>
            <button onClick={()=>plusFood()}>Add Food!</button>
        </body><h1>Howdy guys</h1></>
    )
}

export default FoodUpdate