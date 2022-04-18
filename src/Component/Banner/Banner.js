import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/slider1.jpg'
import img2 from '../../images/slider2.jpg'
import img3 from '../../images/slider3.jpg'


const Banner = () => {
    return (

        <div id='home-banner' className='container-fluid'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                        height='650px'
                    />
                    <Carousel.Caption>
                        <h3>Fitness is Pride</h3>
                        <p>Make physical activity part of your daily routine.</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                        height='650px'
                    />

                    <Carousel.Caption>
                        <h3>Health is Wealth</h3>
                        <p>Join forces with friends, neighbors or others <br /> in Fitness GYM</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        height='650px'
                    />

                    <Carousel.Caption>
                        <h3>You are Invited to our Fitness GYM</h3>
                        <p>Keep Fit. <br /> Stay Strong</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>

    );
};

export default Banner;