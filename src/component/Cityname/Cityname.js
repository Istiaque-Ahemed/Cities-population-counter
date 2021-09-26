import React from 'react';
import'./Cityname.css';

const Cityname = (props) => {
    console.log(props.city);
    return (
       <div>
           <small>City Name:{props.city}</small>
       </div>
    );
};

export default Cityname;