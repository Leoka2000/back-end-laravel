import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";


const IndividualPages = () => {
    const { state } = useLocation()
    console.log(state);
    
    const [scholarships, setScholarships] = useState('');

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/scholarships/`).then(
            (response) => {
                setScholarships(response.data);
                console.log(response.data)
            }
        );
    },
        []);

console.log(id)     

console.log(scholarships)
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
