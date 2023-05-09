import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Axios from "axios";
import './single.css'
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
            <header className='header-page-row'>
                <div className='header-page-thumbnail'>
                    <img alt='scholarship-image' src='https://ima.cdn.dreamapply.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJkcmVhbS1hcHBseSIsImF1ZCI6ImRyZWFtLWltYWdlIiwicGxkIjp7InBhdGgiOiJkcmVhbS1hcHBseTpzaGFyZDYzNC9pbnN0YW5jZV9sb2dvcy9lMmNlNDMwNy1hODlmLTQ2NjUtOTYyOC0yOGVkYzJmMzE0YTUiLCJ0cmFuc2Zvcm1hdGlvbnMiOlt7Im5hbWUiOiJmaXQiLCJwYXJhbXMiOnsid2lkdGgiOiI0MjAiLCJoZWlnaHQiOiIyMDAiLCJxdWFsaXR5IjoiOTUiLCJleHRlbmQiOiIyNTUsMjU1LDI1NSJ9fV0sImNhY2hlIjoibWF4LWFnZT0zMTUzNjAwMCwgcHVibGljIiwib3V0cHV0X2Zvcm1hdCI6InNhbWUiLCJzZGtfdmVyc2lvbiI6IjEuMCJ9fQ.YGyunPG3qoC2hwFtao9JYzl7dTE8_uoNi00YPSqyysRXeoD0FgT18Acbfg9ji-QAuznmYQ9FgUP1RdytElb-yalW62XidCLF0CUX6M3XyCkY4_wKPGLcw4nu5XyHjgLr7NcT7lCncdX0xVdOFLiWdKaNczHgtKdjvHVg0ZEEw-oEoww67dMDJACl0w4MKg3qRqGnahjzY5_WtKKHRF19j7EMr77gtnFWfB53eMFjdojXF8XyJ5IY70CRZSscJlcP7ea2TNYvZfmjxTTReg9OX1x2jOmQcS04wC9p9wiEHhU0UMlBXQSf4UUg_ASnl1s4QB1gIVJyjtMPx9F4mpF1uQ' />
                </div>
                <div className='header-page-text-wrapper'>
                    <h1>ELAP Emerging Leasers bitch</h1>
                    <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</h2>
                    <p>Canada</p>
                </div>
            </header>
            <main className='single-main'>
                <div className='single-row'>
                    <h1>Level of education to be studied during period abroad.</h1>
                    <p>Undergraduate</p>
                </div>
                <div className='single-row'>
                    <h1>Style of scholarship - short vs long term programs:</h1>
                    <p>Internship</p>
                </div>
                <div className='single-row'>
                    <h1>Funding quantity:</h1>
                    <p>Full funding</p>
                </div>
                <div className='single-row'>
                    <h1>Style of sch</h1>
                    <p>Internship</p>
                </div>
                <div className='single-btn-wrapper'>
                    <a>See scholarship page</a>
                </div>
            </main>
            <Link to='/'>home</Link>
        </section>
    )
}

export default IndividualPages
