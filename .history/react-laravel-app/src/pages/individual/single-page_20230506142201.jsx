import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Axios from "axios";

import { useState, useEffect } from "react";


const IndividualPages = () => {
    const [indivId, setIndivId] = useState(0)
    const { id } = useParams()
  
    const [selectedCountry, setSelectedCountry] = useState(0);
    const [selectedFunding, setSelectedFunding] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [scholarships, setScholarships] = useState('');
    
 // outputs the id number


    useEffect(() => {
        setIndivId(id.data["submit-button"])
       
        
        Axios.get(`http://localhost:8000/api/scholarships/`).then(
            (response) => {
                setScholarships(response.data);  
            }
        );
    },
        []);
       
        
       useEffect(() => {
        setSelectedCountry(scholarships[`${indivId}`])

       })
    
console.log(selectedCountry)
   
    
    return (
        <div>
           
            <ul>
           
                <li>{selectedCountry.country}</li>
                <li></li>

            </ul>
            <Link to='/'>home</Link>
        </div>
    )
}

export default IndividualPages