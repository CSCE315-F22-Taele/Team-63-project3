import axios from 'axios';
import React, {useEffect, useState} from 'react'

const AddUp = () =>{
    const [food, setFood] = useState([])
    
    useEffect(() => {
        const callApi = async () =>{
            await axios.get("http://localhost:5000/food",{
            }).then((result) => {
                console.log(result.data)
                setFood(result.data)
            });
        }
        callApi()
      }, [])

      


}