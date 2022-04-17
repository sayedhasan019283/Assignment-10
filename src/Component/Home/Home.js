import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='service-cart-fix'>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Home;