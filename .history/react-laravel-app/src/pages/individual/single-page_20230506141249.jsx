import React from 'react'
import { useLocation } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";


const IndividualPages = () => {
    const [indivId, setIndivId] = useState(0)
    const { state } = useLocation()
  
    const [selectedCountry, setSelectedCountry] = useState(0);
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
       
        console.log(indivId)
    

   
    
    return (
        <div>
           
            <ul>
           
                <li></li>
                <li></li>

            </ul>
        </div>
    )
}

export default IndividualPages
