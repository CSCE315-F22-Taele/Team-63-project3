import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Route,Routes,Link} from 'react-router-dom';
import Manager from '../manager';

const Salesreport = () =>{
    var startdate = '2022-10-01'
    var enddate = '2022-10-02'
    // var date11 = (new Date (date1+"T00:00"))
    // var date22 = (new Date (date2+"T00:00"))
    // console.log(date11)
    // console.log(date22)
    console.log(startdate)
    console.log(enddate)
    const [tables, setTable] = useState([])

    // useEffect(() => {
    //     const callApi = async () =>{
    //         await axios.get("http://localhost:5000/certainorder",{
    //             startdate: date1,
    //             enddate: date2,
    //         }).then((result) => {
    //             console.log(result.data)
    //             setTable(result.data)
    //         });
    //     }
    //     callApi(date1,date2)
    //   }, [])

      useEffect(() => {
        const callApi = async () =>{
            await axios.get(`http://localhost:5000/certainorder/${startdate}/${enddate}`).then((result) => {
                console.log("It has succesfully got through the query")
                console.log(result.data)
                setTable(result.data)
            });
        }
        callApi()
      }, [])

      // const getAllvalue = async() =>{
      //   console.log(new Date(tables[0].orderdate))
      //   for(var i = 0; i < tables.length;++i){
      //     var tabledate = new Date(tables[i].orderdate)

      //     // console.log(tabledate);
      //     // console.log(tabledate)
      //     if(tabledate>= date11 && tabledate<=date22){
      //       console.log("This order is on it")
      //       console.log(tables[i])
      //       const new_list = []
      //       new_list.push(...useTable)
      //       new_list.push(tables[i])
      //       setUseTable(new_list)
      //     }
      //   }
      //  }

      const displayTable = () => {
        // getAllvalue()
        if(tables.length === 0){
          return <div>
            <h1>Welcome to Chick-Fil-A</h1>
            <h1>This is the manager tab</h1>
          <img src="/chick.png" />
          <ul>  
            <button><Link to = "/manager">Ordering System</Link></button>
          </ul>
          </div>
        }
    
        else{
          return(
            <><body>
              <h1>Welcome to Chick-Fil-A</h1>
              <h1>This is the manager tab</h1>
              <img src="chick.png" />
              <ul>
                <button><Link to = "salesreport">Server</Link></button>
                <button><Link to = "manager">Ordering System</Link></button>
              </ul>
            </body><table>
                <thread>
                  <tr>
                    <th>Order ID</th>
                    <th>Food ID</th>
                    <th>quantity</th>
                    <th>Order Date</th>
                    <th>amount</th>
                  </tr>
                </thread>
                <tbody>
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
              </table></>
          )
        }
      }

      return(<>

        <div>
            {displayTable()}
        </div>
        </>
      )
  
    
}
export default Salesreport;