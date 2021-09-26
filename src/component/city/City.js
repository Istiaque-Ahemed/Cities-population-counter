import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCoffee } from '@fortawesome/free-solid-svg-icons'

    
import './City.css';

const City = (props) => {
    console.log(props);
    const {img,city,country,population,favoriteFood,mayor} = props.citi;
    return (
        <div>
           <div className="data-div">
            <img className="images" src={img} alt="" />
            <h5>City Name: {city}</h5>
            <h6>Country: {country}</h6>
            <h6>Population: {population}</h6>
            <h6>Favorite Food: {favoriteFood}</h6>
            <h6>City Mayor: {mayor}</h6>
            <button onClick={() => props.handleAddToCart(props.citi)} type="button" class="btn btn-success"> <FontAwesomeIcon icon={faCheckCircle} />  Select</button>
        </div>
        </div>
    );
};

export default City;