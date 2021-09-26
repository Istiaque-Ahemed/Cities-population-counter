import React from 'react';
import './City.css';

const City = (props) => {
    console.log(props.country);
    return (
        <div className="data-div">
            <img className="images" src={props.country?.img} alt="" />
            <h3>City Name:{props.beautiCity?.cityName}</h3>
            <p>Country:{props.country?.country}</p>
            <p>Population:{props.country?.population}</p>
            <p>Favorite Food:{props.country?.favoriteFood}</p>
            <p>City Mayor:{props.country?.mayor}</p>
            <button type="button" class="btn btn-success">Success</button>
        </div>
    );
};

export default City;