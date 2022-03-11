import React, { useState } from 'react'
import axios from 'axios';
import Post from './Posts';
import { FaSearch } from "react-icons/fa";



const Search = () => {
    const [photo, setPhoto] = useState([]);
    const [clientId] = useState("MYq3E7dLL-MDJIPtc_bS2aDcJYkRTtwP2c-Um_PXDLw")
    const [result, setResult] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + photo + "&client_id=" + clientId;
        axios.get(url)
            .then((response) => {
                setResult(response.data.results);
            })
    }

    return ( <>
        <div className = "container" >
        <h1 className = "text-center text-header " > UNSPLASH API </h1> 
        <h6 className = "text-center text-header" > Create by </h6> 
        <h6 className = "text-center text-header" > Mr. Jakkarin Khumyaito 624259006 </h6> 
        <h6 className = "text-center text-header" > Mr. Sirapob Thongdonphum 624259030 </h6> 
        <form onSubmit = { handleSubmit } >

        <div className = "input-text text-center"> 
        <input  onChange = {(e) => setPhoto(e.target.value)}  className = "form-control" type = "text" placeholder = "message for search" />
        </div> 

        <div className = "input-group-append text-center">
        <button
    type = "submit"
    className = "btn btn-success px-5 m-2">
        Search 
        </button> 
        
        </div> 
        </form > 
        </div> 
        <Post id = { result }
    /> 
    </>)
    }

export default Search;