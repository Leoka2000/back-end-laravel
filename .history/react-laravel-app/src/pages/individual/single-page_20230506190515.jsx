import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Axios from "axios";

import { useState, useEffect } from "react";


const IndividualPages = () => {
    const [keyValue, setKeyValue] = useState(0)
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [funding, setFunding] = useState('');
    const [level, setLevel] = useState('');
    const [style, setStyle] = useState('')
    const [description, setDescription] = useState('')
    const [scholarships, setScholarships] = useState('');
    const [link, setLink] = useState('')
    const [image, setImage] = useState('')
    const { state } = useLocation()

    useEffect(() => {
        setKeyValue(state.data["submit-button"]) // capturing the key value for each Content component, this variable will help us access the JSON data according to key values.
        Axios.get(`http://localhost:8000/api/scholarships/`).then(
            (response) => {
                setScholarships(response.data); 
                setCountry(response.data[`${keyValue}`].country)
                setName(response.data[`${keyValue}`].name)
                setFunding(response.data[`${keyValue}`].funding) 
                setLevel(response.data[`${keyValue}`].level) 
                setStyle(response.data[`${keyValue}`].style) 
                setDescription(response.data[`${keyValue}`].description) 
                setLink(response.data[`${keyValue}`].link)
                setImage(response.data[`${keyValue}`].image) 
            }
        );
    },
        [keyValue]);
       
        
       
    

    
    return (
        <div>
           
            <ul>

            </ul>
            <Link to='/'>home</Link>
        </div>
    )
}

export default IndividualPages
