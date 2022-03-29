import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from '../Card/Card';

const CardGroups = () => {
    const products = [
        { id: 1, name: "mobile", price: 10000 },
        { id: 2, name: "laptop", price: 80000 },
        { id: 3, name: "computure", price: 120000 }
    ]
    return (
        <div>
            <h1>This is my card</h1>



            <Card></Card>



        </div>
    );
};

export default CardGroups;