import React, { useEffect, useState } from 'react';
import './cities.css'

const Cities = () => {
    const [cities,setCities] = useState([]);

    useEffect(() => {

        
    },[])
    return (
        <div className="cities-container">
            <div className="city-detil-container">
                <h3>Cities</h3>
            </div>
            <div className="cart-container ">
                <h3>Cities Details</h3>
                <h5>Selected City:</h5>

            </div>

        </div>
    );
};

export default Cities;