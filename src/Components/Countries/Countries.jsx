import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);


    const handleVisitedCountries=(country)=>{
        const newVisitedCountry = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountry);
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div>
                <h3>Countries length:{visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country =><li style={{listStyleType:'none'}} key={country.flag}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="countries">
                {
                    countries.map(country => <Country key={country.flag} country={country} handleVisitedCountries={handleVisitedCountries} />)
                }
            </div>

        </div>
    );
};

export default Countries;