import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { img, name, price, point1, point2, point3, point4, point5 } = service
    return (

        <div className='cart-fix'>
            <img className='fix-img' src={img} alt="" />
            <div className='fix-text'>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <p>{point1}</p>
                <p>{point2}</p>
                <p>{point3}</p>
                <p>{point4}</p>
                <p>{point5}</p>
            </div>
            <button>Subscribe Now</button>

        </div>
    );
};

export default Service;