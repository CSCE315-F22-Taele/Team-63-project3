import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';

function ExcessReport(){
const [startdate, setStartDate] = useState('2022-10-02')
const [enddate, setEndDate] = useState('2022-10-03')
const[columns, setColumns] = useState([])
const[starts, setStarts] = useState([])
const[ends, setEnds] = useState([])
const[excess,setExcess] = useState([])

useEffect(() => {
    const getColumns = async()=>{
        await axios.get('http://localhost:5000/column').then((result)=>{
            // console.log("It gets all of the columns")
            setColumns(result.data)
        })
    }
    getColumns()
  },[]);
//   console.log("This is all of the columns in the system: ", columns)
  const change1 = event =>{
    setStartDate(event.target.value)
    console.log(startdate)
  }

  const change2 = event =>{
    setEndDate(event.target.value)
    console.log(enddate)
  }
  const callApiStart = async (column,startdate) =>{
    //Object.values(temp1[0])[0]
    await axios.get(`http://localhost:5000/supplydatestart/${column}/${startdate}`).then((result) => {
        const new_list = []
        new_list.push(...starts)
        var number
        if(Object.values(result.data[0])[0] == null){
          number = 1
        }
        else{
          number = Object.values(result.data[0])[0]
        }
        new_list.push(number)
        setStarts(new_list)
    });

}

const callApiEnd = async (column,enddate) =>{ 
    await axios.get(`http://localhost:5000/supplydateend/${column}/${enddate}`).then((result) => {
        console.log(Object.values(result.data[0])[0])
        const new_list = []
        new_list.push(...ends)
        var number
        if(Object.values(result.data[0])[0] == null){
          number = 1
        }
        else{
          number = Object.values(result.data[0])[0]
        }
        console.log("This is what you add into the number list ",number)
        new_list.push(number)
        setEnds(new_list)
    });

}

const isExcess = ()=>{
    for(var i =1; i < columns.length;++i){
        let math = (starts[i-1]-enddate[i-1])/starts[i-1]
        if(math < .1){
            const new_list = []
            new_list.push(...excess)
            new_list.push(math)
            setExcess(new_list)
        }
    }
}

const displayTable = () => {
  
      return(
        <><table>
            <thread>
              <tr>
                <th>Food ID</th>
              </tr>
            </thread>
            <tbody>
              {excess.map((item) => (
                <tr>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table></>
      )
    
  }

  const getBegin = (columns,startdate)=>{
    for(var i = 1; i<columns.length;++i){
        // console.log("This is the column right now for the start columns: ",columns[i].column_name)
        callApiStart(columns[i].column_name,startdate)
        console.log("This is the start vector: ",starts)
    }
  }
  const getEnd = (columns,enddate)=>{
    for(var i = 1; i < columns.length;++i){
        // console.log("This is the columns right now for the end columns: ",columns[i].column_name)
        callApiEnd(columns[i].column_name,enddate)
        console.log("This is the end vector value: ",ends)
    }

  }
  function finalResult(){
    console.log("This is the start date: ",startdate);
    console.log("This is the enddate: ",enddate);
    getBegin(columns,startdate);
    getEnd(columns,enddate);
    isExcess();
    console.log("This is the array for start: ",starts);
    console.log("This is the array for the end: ", ends);
    displayTable();
  }
  

return(
    <><body>
        
        {/* <ul>
            <button><Link to="/manager">Ordering System</Link></button>
            <button><Link to="/manager/salesreport">Sales Report</Link></button>
        </ul> */}
    </body><h1>This excess report</h1>
    <input onChange={change1} value = {startdate}/>
    <input onChange={change2} value = {enddate}/>
    <button onClick = {()=> finalResult()}>Submit</button>
    {displayTable()}
    
    </>

)


}

export default ExcessReport