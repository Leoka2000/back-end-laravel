import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Axios from "axios";

import { useState, useEffect } from "react";


const IndividualPages = () => {
    const [indivId, setIndivId] = useState(0)
    const { state } = useLocation()
  
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedFunding, setSelectedFunding] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [scholarships, setScholarships] = useState('');
    
 // outputs the id number


    useEffect(() => {
        setIndivId(state.data["submit-button"])
        Axios.get(`http://localhost:8000/api/scholarships/`).then(
            (response) => {
                setScholarships(response.data);  
            }
        );
    },
        []);
       
        
       useEffect(() => {
        setSelectedCountry(scholarships[`${indivId}`])
        setSelectedFunding(`scholarships[${indivId}].funding`)

       },[])
    
console.log(selectedFunding)
console.log(indivId)
   
    
    return (
        <div>
           
            <ul>
           
                <li>{indivId}</li>
                <li></li>

            </ul>
            <Link to='/'>home</Link>
        </div>
    )
}

export default IndividualPages
