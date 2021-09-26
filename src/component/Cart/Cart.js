import React from 'react';
import'./Cart.css';

const Cart = (props) => {
    const {cart}=props;
    let totalPopul = 0;
    let name=[];
    for (const citi of cart) {
        totalPopul = totalPopul + citi.population;
        name = (name +' '+ citi.city + ',');
    }
    return (
        <div className="cart">
             <h3>Cities Ditails</h3>
                <h5>Total Population ={totalPopul}</h5>
                <p>Selected:{name} </p>
                
        </div>
    );
};

export default Cart;