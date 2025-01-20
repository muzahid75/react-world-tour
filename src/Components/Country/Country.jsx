import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries }) => {
    const { name, flags, area, population } = country
    console.log(country);

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited ? 'visited' : ''}`}>
            <h2>{name.common}</h2>
            <img style={{ width: '350px', height: '200px' }} src={flags.png} alt="" />
            <h2>{area}</h2>
            <h2 style={{ color: visited ? 'red' : 'black' }}>{population}</h2>
            <button onClick={() => handleVisitedCountries(country)}>Mark as visited</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? "visited" : "i have to go"}</button>
        </div>
    );
};

export default Country;