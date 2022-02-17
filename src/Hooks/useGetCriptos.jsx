import { useState, useEffect } from 'react'
import axios from "axios";


const useGetCriptos = () => {
    const [ criptos, setCriptos ] = useState([]);
    const API = window.location.origin + "/currency"
    console.log(API)

    const myCriptos = (data) =>{
        let collection = [data[0], data[1], data[20], data[4], data[10], data[13], data[3], data[6], data[24], data[50]]
        console.log(data)
        setCriptos(collection)
    }

    useEffect(() =>{
        axios(API)
        .then(response => myCriptos(response.data.data) )
        .catch(e => console.log(e))        
        // .then(response)
    }, [])

    return criptos;
    
}

export default useGetCriptos;