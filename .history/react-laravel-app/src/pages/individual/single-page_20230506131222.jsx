import React from 'react'
import { useLocation } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";


const IndividualPages = () => {
    const [indivId, setIndivId] = useState(0)
    const { state } = useLocation()
    console.log(state);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedFunding, setSelectedFunding] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [scholarships, setScholarships] = useState('');
    

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/scholarships/`).then(
            (response) => {
                setScholarships(response.data);
                console.log(response.data)
                setSelectedCountry(state.data['submit-button']['country'])
                setSelectedFunding(state.data['submit-button']['funding'])
            }
        );
    },
        []);

   
    
console.log(selectedCountry, selectedFunding)

    return (
        <div>
            <ul>
           
                <li>{selectedFunding}</li>
                <li>{selectedCountry}</li>

            </ul>
        </div>
    )
}

export default IndividualPages
