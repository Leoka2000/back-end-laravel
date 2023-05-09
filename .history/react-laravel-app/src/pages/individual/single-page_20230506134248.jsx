import React from 'react'
import { useLocation } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";


const IndividualPages = () => {
    const [indivId, setIndivId] = useState(0)
    const { state } = useLocation()
    console.log(state);
    const [selectedCountry, setSelectedCountry] = useState(0);
    const [selectedFunding, setSelectedFunding] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [scholarships, setScholarships] = useState('');
    
console.log(state.data["submit-button"]) // outputs the id number
const scholarshipId = state.data["submit-button"]
console.log(scholarshipId)

    useEffect(() => {
        
        
        Axios.get(`http://localhost:8000/api/scholarships/`).then(
            (response) => {
                setScholarships(response.data);  
            }
        );
    },
        []);
       console.log(scholarships.scholarshipId)
       
    

   
    
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
