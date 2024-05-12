import { useEffect, useState } from "react";
import Country from "../Countrie/Country";
import '../Countrie/couontry.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }



    return (
        <div>
            <div className="text-align">
                <h2>Visited Countries {visitedCountries.length}</h2>
                <div>
                    {
                        visitedCountries.map(country => <p key={country.name.common}>{country.name.common}</p>)
                    }
                </div>
            </div>
            <div>
                <h2 className="text-align">Countries: {countries.length}</h2>

                <div className="country-container">
                    {
                        countries.map(country => <Country key={country.name.common} country={country} handleVisitedCountries={handleVisitedCountries} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;