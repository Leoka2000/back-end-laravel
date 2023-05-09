import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Axios from "axios";

import { useState, useEffect } from "react";


const IndividualPages = () => {
    const [indivId, setIndivId] = useState(0)
    const { state } = useLocation()
    const [country, setCountry] = useState('');
    const [funding, setFunding] = useState('');
    const [level, setLevel] = useState('');
    const [style, setStyle] = useState('')
    const [description, setDescription] = useState('')
    const [scholarships, setScholarships] = useState('');
    const [link, setLink] = useState('')
    const [image, setImage] = useState('')


    useEffect(() => {
        setIndivId(state.data["submit-button"]) // capturing the key value for each Content component, this variable will help us access the JSON data according to key values.
        Axios.get(`http://localhost:8000/api/scholarships/`).then(
            (response) => {
                setScholarships(response.data); 
                setCountry(response.data[`${indivId}`].name)
                setFunding(response.data[`${indivId}`].funding) 
                setLevel(response.data[`${indivId}`].level) 
                setStyle(response.data[`${indivId}`].style) 
                setDescription(response.data[`${indivId}`].description) 
                setLink(response.data[`${indivId}`].link)
                setImage(response.data[`${indivId}`].image) 
            
                console.log(response.data[`${indivId}`].name)
            }
        );
    },
        [indivId]);
       
        
       
    
console.log(indivId)
   
    
    return (
        <div>
           
            <ul>
           
                <li>{indivId}</li>
                <li>{indivId}</li>
                <li>{country}</li>
                <li>{description}</li>
                <li>{description}</li>

            </ul>
            <Link to='/'>home</Link>
        </div>
    )
}

export default IndividualPages
