import React, { useEffect, useState } from 'react';
import City from '../city/City';
import './cities.css'

const Cities = () => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch('./output.JSON')
            .then(res => res.json())
            .then(data => setCities(data));

    }, [])

    return (
        <div className="cities-container">
            <div className="city-detil-container">

            
                <div className="cities">
                {
                    cities.map(country => <City country={country}></City>)
                }
                </div>
                <div className="card-container">
                <h3>Cities Details</h3>
                <h5>Selected City:</h5>

                </div>

            </div>
                      

        </div>
    );
};

export default Cities;