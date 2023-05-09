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
        setIndivId(state.data["submit-button"])
        Axios.get(`http://localhost:8000/api/scholarships/`).then(
            (response) => {
                setScholarships(response.data); 
                setSelectedCountry(response.data[`${indivId}`].name) 
                setSelectedLevel(response.data[`${indivId}`].level) 
                setSelectedScho(response.data[`${indivId}`].level) 
                setSelectedLevel(response.data[`${indivId}`].level) 
            
                console.log(response.data[`${indivId}`].name)
            }
        );
    },
        [indivId]);
       
        
       
    
console.log(selectedCountry)
console.log(indivId)
   
    
    return (
        <div>
           
            <ul>
           
                <li>{indivId}</li>
                <li>{selectedCountry}</li>
                <li>{selectedLevel}</li>

            </ul>
            <Link to='/'>home</Link>
        </div>
    )
}

export default IndividualPages
