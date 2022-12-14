import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import Manager from '../manager';
import './saleReport.css';

/**
 * This is the JavaScript file responsible for the sales report from the manager. 
 * This is the same functionality that we implemented in project 2.
 * 
 * @author John Liu
 * @author Luis Martinez Morales
 * @author Akhil Mathew
 * @author Anna Huang
 */
const Salesreport = () =>{
    // Variables in constant use throughout program
    const [startdate,setStartDate] = useState('2022-10-03');
    const [enddate, setEndDate] = useState('2022-10-04');
    console.log(startdate)
    console.log(enddate)
    const [tables, setTable] = useState([])

    // Call API to get table from database
    const callApi = async (startdate,enddate) =>{
        await axios.get(`http://localhost:6969/certainorder/${startdate}/${enddate}`).then((result) => {
            console.log("It has succesfully got through the query")
            console.log(result.data)
            setTable(result.data)
        });
    }
      
    // Change start date
      const change1 = event =>{
        setStartDate(event.target.value)
        console.log(startdate)
      }

      // Change end date
      const change2 = event =>{
        setEndDate(event.target.value)
        console.log(enddate)
               
      }

      // Return HTML code for the sales report TABLE
      const displayTable = () => {
        // getAllvalue()
        // callApi()
        // if(tables.length === 0){
        //   return <div>
        //     <h1>Welcome to Chick-Fil-A</h1>
        //     <h1>This is the manager tab</h1>
        //   <img src="/chick.png" />
        //   <ul>  
        //     <button><Link to = "/manager">Ordering System</Link></button>
        //   </ul>
        //   </div>
        // }
    
        
          return(
            <>
           
              <table>
                  
                    <tr class="salesLabel">
                      <th>Order ID</th>
                      <th>Food ID</th>
                      <th>Quantity</th>
                      <th>Order Date</th>
                      <th>Amount</th>
                    </tr>
                  
                  <tbody class = "pabloemilioescobargaviria">
                    {tables.map((item) => (
                      <tr>
                        <td>{item.orderid}</td>
                        <td>{item.foodid}</td>
                        <td>{item.quantity}</td>
                        <td>{item.orderdate}</td>
                        <td>{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
          )
        
      }

      // Function that is used to call all functions when sales report wants to be generated
      function finalResult(){
        console.log("This is the start date: ",startdate)
        console.log("This is the enddate: ",enddate)
        if (startdate.localeCompare(enddate) > 0) {
          alert("End date should be after start date");
          return;
        }
        
        callApi(startdate,enddate)
        alert("Submitted!")
      }

      // Return HTML code for sales report webpage
      return(<>

        <div>
            <body>
            
            <h1 class="intro">Sales Report</h1>
            
            {/* <ul>
              <button><Link to = "/manager">Ordering System</Link></button>
              <button><Link to ="/manager/excessreport">Excess Report</Link></button>
            </ul> */}
            </body>
            <div class="dateHeader">
              <h3 class="start">Start</h3>
              <h3 class="end">End</h3>
            </div>
            <div>
            <input type="date" onChange={change1} value = {startdate} min="2022-10-02" max="2022-12-31" class="startDate"/>
            <input type="date" onChange={change2} value = {enddate} min="2022-10-02" max="2022-12-31" class="endDate"/>
            <button onClick = {()=>finalResult()} class="reddy">Submit</button>
            

            </div>
            {displayTable()}
        </div>
        </>
      )
  
    
}
export default Salesreport;
