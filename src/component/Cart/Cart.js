import React from 'react';
import'./Cart.css';

const Cart = (props) => {
    const {cart}=props;
    let totalPopul = 0;
    for (const citi of cart) {
        totalPopul = totalPopul + citi.population;
    }
    return (
        <div>
             <h3>Cities Ditails</h3>
                <h5>Seleted city:{props.cart.length}</h5>
                <p>Total Population ={totalPopul    }</p>
        </div>
    );
};

export default Cart;