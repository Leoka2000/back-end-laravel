import React from 'react'
import { useLocation } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";


const IndividualPages = () => {
    const [indivId, setIndivId] = useState(0)
    const { state } = useLocation()
    console.log(state);

    const [scholarships, setScholarships] = useState('');
    

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/scholarships/`).then(
            (response) => {
                setScholarships(response.data);
                console.log(response.data)
                setIndivId(state.data['submit-button'])
            }
        );
    },
        []);

        const SelectedScholarship = scholarships[indivId].name

    


    return (
        <div>
            <ul>
           
                <li>{SelectedScholarship}</li>
                <li></li>

            </ul>
        </div>
    )
}

export default IndividualPages
