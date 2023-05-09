import React from 'react'
import { useLocation } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";


const IndividualPages = () => {
    const [indivId, setIndivId] = useState('')
    const { state } = useLocation()
    console.log(state);
    const [selectedCountry, setSelectedCountry] = useState(0);
    const [selectedFunding, setSelectedFunding] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [scholarships, setScholarships] = useState('');
    

    useEffect(() => {
        setIndivId(state.data["submit-button"])
        console.log(indivId)
        
        Axios.get(`http://localhost:8000/api/scholarships/`).then(
            (response) => {
                setScholarships(response.data);
                
                
               
                
               
               
            }
        );
    },
        []);
       
    

   
    
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
