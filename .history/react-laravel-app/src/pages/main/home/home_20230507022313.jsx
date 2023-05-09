import { useState, useEffect, Suspense } from 'react'
import './home.css'
import CountryFilter from '../../../hooks/filter/countryFilter'
import Content from '../../../hooks/content/content'
import Axios from 'axios'
import FundingFilter from '../../../hooks/filter/fundingFilter'
import StudyLevelFilter from '../../../hooks/filter/studyLevelFilter'
import { BeatLoader } from 'react-spinners'

const Home = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [scholarships, setScholarships] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedFunding, setSelectedFunding] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [filteredScholarships, setFilteredScholarships] = useState([]);

    

    useEffect(() => {
        getList();
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value); // We will access the value provided by the input, we will assign this function to the INPUT BOX
      };
    
      const filteredList = scholarships.filter(scholarships =>
        scholarships.name.toLowerCase().includes(search.toLowerCase())
      );

    const getList = () => {
        setLoading(true);
        setTimeout(() => {
            Axios.get('http://localhost:8000/api/scholarships')
                .then((response) => {
                    setScholarships(response.data);
                    setLoading(false);
                    setFilteredScholarships(response.data)
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        }, 1000);
    };

    

    return (
        <section className='home-section'>
            <div className='search-bar-wrapper'>
                <h1>ScholarSearch</h1>
                <input
                 type='text'
                onChange={handleChange}
                placeholder='Type here to search by name or type'>

                </input>
            </div>
            <main className='home-main'>
                <div className='left'>
                    <CountryFilter onCountrySelect={setSelectedCountry} />
                    <FundingFilter onFundingSelect={setSelectedFunding} />
                    <StudyLevelFilter onLevelSelect={setSelectedLevel} />
                </div>
                <div className='right'>

                    <Suspense fallback={<BeatLoader />}>
                        {loading ? (
                            <BeatLoader className='loader' size={25} color='purple' />
                        ) : (<div className='conditional-div'>
                            {filteredList
                                .filter(scholarship => !selectedCountry || scholarship.country === selectedCountry)
                                .filter(scholarship => !selectedFunding || scholarship.funding === selectedFunding)
                                .filter(scholarship => !selectedLevel || scholarship.level === selectedLevel)
                                .map((val, key) => {
                                    return (
                                        <Content
                                            keyNumber={key}
                                            id={val.id}
                                            image={val.image}
                                            name={val.name}
                                            country={val.country}
                                            funding={val.funding}
                                            level={val.level}
                                            style={val.style}
                                            description={val.description}
                                            link={val.link}
                                        />
                                    );
                                })}
                        </div>)}</Suspense>
                </div>
            </main>
        </section>
    )
}

export default Home
