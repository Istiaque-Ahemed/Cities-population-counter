import React from 'react';
import './City.css';

const City = (props) => {
    console.log(props);
    const {img,city,country,population,favoriteFood,mayor} = props.citi;
    return (
        <div>
           <div className="data-div">
            <img className="images" src={img} alt="" />
            <h5>City Name: {city}</h5>
            <p>Country: {country}</p>
            <p>Population: {population}</p>
            <p>Favorite Food: {favoriteFood}</p>
            <p>City Mayor: {mayor}</p>
            <button onClick={() => props.handleAddToCart(props.citi)} type="button" class="btn btn-success">Select</button>
        </div>
        </div>
    );
};

export default City;