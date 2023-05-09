import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Axios from "axios";

import { useState, useEffect } from "react";


const IndividualPages = () => {
    const [keyValue, setKeyValue] = useState(0)
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [funding, setFunding] = useState('');
    const [level, setLevel] = useState('');
    const [style, setStyle] = useState('')
    const [description, setDescription] = useState('')
    const [scholarships, setScholarships] = useState('');
    const [link, setLink] = useState('')
    const [image, setImage] = useState('')
    const { state } = useLocation()

    useEffect(() => {
        setKeyValue(state.data["submit-button"]) // capturing the key value for each Content component, this variable will help us access the JSON data according to key values.
        Axios.get(`http://localhost:8000/api/scholarships/`).then(
            (response) => {
                setScholarships(response.data);
                setCountry(response.data[`${keyValue}`].country)
                setName(response.data[`${keyValue}`].name)
                setFunding(response.data[`${keyValue}`].funding)
                setLevel(response.data[`${keyValue}`].level)
                setStyle(response.data[`${keyValue}`].style)
                setDescription(response.data[`${keyValue}`].description)
                setLink(response.data[`${keyValue}`].link)
                setImage(response.data[`${keyValue}`].image)
            }
        );
    },
        [keyValue]);






    return (
        <section className='single-page-section'>
            <div className='single-page-row'>
                <div className='single-page-thumbnail'></div>
                <div>
                    <h1>ELAP Emerging Leasers bitch</h1>
                    <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</h2>
                    <p></p>
                </div>
            </div>

            <Link to='/'>home</Link>
        </section>
    )
}

export default IndividualPages
