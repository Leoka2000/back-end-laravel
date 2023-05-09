import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";


const IndividualPages = () => {
    let { id } = useParams();
    const [scholarship, setScholarship] = useState('');
  
    useEffect(() => {
      const state = window.history.state;
      if (state && state.keyNumber !== undefined) {
        setScholarship(state);
      } else {
        Axios.get(`http://localhost:8000/api/scholarships/${id}`).then(
          (response) => {
            setScholarship(response.data);
            console.log(response.data)
          });
      }
    }, [id]);
  
    console.log(scholarship);
  
    return (
      <div>
        <ul>
          <li>{scholarship.name}</li>
          <li>{scholarship.country}</li>
          <li>{scholarship.funding}</li>
          <li>{scholarship.level}</li>
          <li>{scholarship.style}</li>
          <li>{scholarship.description}</li>
          <li>{scholarship.link}</li>
        </ul>
      </div>
    )
  }
export default IndividualPages  