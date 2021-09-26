import React, { useEffect, useState } from 'react';
import City from '../city/City';
import Cart from '../Cart/Cart';
import './cities.css'

const Cities = () => {

    const [cities, setCities] = useState([]);
    const [cart,setCart]= useState([]);

    useEffect(() => {
        fetch('./output.JSON')
            .then(res => res.json())
            .then(data => setCities(data));


    }, [])
    const handleAddToCart =(citi) => {
        const newCard  =[...cart,citi];
        setCart(newCard);
    }

    return (
        <div className="cities-container">
            <div className="city-container">
            
                <div className="ditails">
                {
                    cities.map(citi => <City 
                        key={citi.key}
                        
                        citi={citi}
                        handleAddToCart={handleAddToCart}
                        
                        ></City>)
                }
                </div>

            </div>
            <div className="seletor-container">
               
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Cities;