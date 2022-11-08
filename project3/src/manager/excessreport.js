import axios from 'axios';
import React, {useEffect, useState} from 'react'

const Excessreport = () => {
    const [date1, setdate1] = useState("2022-10-01")
    const [date2, setdate2] = useState("2022-10-02")
    const [columns,setColumns] = useState([])
    const [excessStart, setexcessStart] = useState([])
    const [excessEnd, setexcessEnd] = useState([])
    const [excess, setExcess] = useState([])

    

    useEffect(() => {
        const callApi = async () =>{
            await axios.post("http://localhost:5000/column",{
            }).then((result) => {
                console.log(result.data)
                setColumns(result.data)
            });
        }
        callApi()
      }, [])

      
    const getStart = (column) =>{
        axios.get("http://localhost:5000/supplydate",{
            column: column,
            date: date1,
        }).then((result) => {
            console.log(result.data)
            const new_list = []
            new_list.push(...excessEnd)
            new_list.push(result)
            setexcessStart(result.data)
        });
    }
    
      
    const getEnd = (column) =>{
        axios.get("http://localhost:5000/supplydate",{
            column: column,
            date: date2,
        }).then((result) => {
            console.log(result.data)
            const new_list = []
            new_list.push(...excessStart)
            new_list.push(result)
            setexcessEnd(new_list)
        });
    }
        

    const addExcess = (item) =>{
        const new_list = []
        new_list.push(...excess)
        new_list.push(item)
        setExcess(new_list)
    }

    const getData = () =>{
        for(var i = 0; i < columns.length; ++i){
            getStart(columns[i])
            getEnd(columns[i])
        }
    } 

    const check = () => {
        for(var i = 0; i<excessStart.length;++i){
            var thatNumber = (excessStart[i]-excessEnd[i]/excessStart[i])
            if(thatNumber < 0.1){
                addExcess(columns[i])
            }
        }
    }
    
    const output = () =>{
        if(excess.length==0){
            return <div></div>
        }

        else{
            return(
                <div>
                    {excess.map((item)=>(
                        <tr>{item}</tr>
                    ))}
                </div>

            )
        }
    }
    

    return(
    <div>
        <form>
            <p>Please enter in the date:</p>
            <input type="text" name="Start Date" placeholder="John" value = {this.state.value} onClick={this} required />
            <input type="text" name="last_name" placeholder="Doe" required />
            <button type="submit">Submit</button>  

        </form>
    </div>
    )


}