import React from 'react';
import './Service.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, price, description, img } = service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}><Button variant="warning mb-4">Book {name.toLowerCase()}</Button></Link>
        </div>
    );
};

export default Service;