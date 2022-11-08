import axios from 'axios';
import React, {useEffect, useState} from 'react'

const Salesreport = () =>{
    const date1 = '2022-10-01'
    const date2 = '2022-10-02'
    const [tables, setTable] = useState([])

    useEffect(() => {
        const callApi = async () =>{
            await axios.post("http://localhost:5000/certainorder",{
                startdate: date1,
                enddate: date2,
            }).then((result) => {
                console.log(result.data)
                setTable(result.data)
            });
        }
        callApi()
      }, [])

      const displayTable = () => {
        if(tables.length === 0){
          return <div></div>
        }
    
        return tables.map((table) => {
          return(
            <table>
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
                    {tables.map((item)=>(
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
          )
        })
      }

      return(
        <div>
            {displayTable()}
        </div>
      )
    

    
}