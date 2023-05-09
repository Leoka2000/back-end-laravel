import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import { BeatLoader } from 'react-spinners';
import './single.css';
import { AiOutlineHome } from 'react-icons/ai';

const IndividualPages = () => {
  const [keyValue, setKeyValue] = useState(0);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [funding, setFunding] = useState('');
  const [level, setLevel] = useState('');
  const [style, setStyle] = useState('');
  const [description, setDescription] = useState('');
  const [scholarships, setScholarships] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(true); // added state for loading

  const { state } = useLocation();

  useEffect(() => {
    setKeyValue(state.data['submit-button']);

    Axios.get('http://localhost:8000/api/scholarships/').then((response) => {
      setScholarships(response.data);
      setCountry(response.data[`${keyValue}`].country);
      setName(response.data[`${keyValue}`].name);
      setFunding(response.data[`${keyValue}`].funding);
      setLevel(response.data[`${keyValue}`].level);
      setStyle(response.data[`${keyValue}`].style);
      setDescription(response.data[`${keyValue}`].description);
      setLink(response.data[`${keyValue}`].link);
      setImage(response.data[`${keyValue}`].image);
      setIsLoading(false); // set loading to false after data is loaded
    });
  }, [keyValue]);

  if (isLoading) { // if loading, display BeatLoader component
    return (
      <div className="loader-container">
        <BeatLoader size={15} color={'#123abc'} loading={isLoading} />
      </div>
    );
  }

  return (
    <section className="single-page-section">
      <header className="header-page-row">
        <div className="header-page-thumbnail">
          <img alt="scholarship-image" src={`${image}`} />
        </div>
        <div className="header-page-text-wrapper">
          <h1>{name}</h1>
          <h2>{description}</h2>
          <p>{country}</p>
        </div>
      </header>
      <main className="single-main">
        <div className="single-row">
          <h1>Level of education to be studied during period abroad.</h1>
          <p>{level}</p>
        </div>
        <div className="single-row">
          <h1>Style of scholarship - short vs long term programs:</h1>
          <p>{style}</p>
        </div>
        <div className="single-row">
          <h1>Funding quantity:</h1>
          <p>{funding}</p>
        </div>

        <div className="single-btn-wrapper">
          <a style={{ textDecoration: 'none' }} href={`${link}`}>
            See scholarship page
          </a>
          <Link style={{ textDecoration: 'none' }} to="/">
            <AiOutlineHome />
            <p>Home</p>
          </Link>
        </div>
      </main>
    </section>
  );
};

export default IndividualPages;
