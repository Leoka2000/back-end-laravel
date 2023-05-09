import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";


const IndividualPages = () => {
    let { id } = useParams();
    const [scholarships, setScholarships] = useState('');

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/scholarships/${id}`).then(
            (response) => {
                setScholarships(response.data);
                console.log(response.data)
            });
    },[]);
console.log(scholarships)
    return (
        <div>
            <ul>
            
                <li>{scholarships.name}</li>
                <li></li>

            </ul>
        </div>
    )
}

export default IndividualPages
