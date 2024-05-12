import { useState } from 'react';
import './couontry.css'

const Country = ({country, handleVisitedCountries}) => {

    const{name, flags} = country;

    const [visited, setVisited] = useState(false);

    const handleVisit = () =>{
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>

            <img className='image' src={flags.png} alt="" />
            <p><b>Country Name: </b>{name.common}</p>

            <button onClick={handleVisit}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited ? 'I have visited' : 'I want to visit'
            }
            <button onClick={() => handleVisitedCountries(country )}>Mark as visited</button>
            
        </div>
    );
};

export default Country;