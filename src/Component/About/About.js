import React from 'react';
import sayedPic from '../../images/SayedHossainPic.jpg'
import './About.css'
const About = () => {
    return (
        <div>
            <div className='fix-img'>
                <img src={sayedPic} alt="" />
            </div>
            <div className='about-me'>
                <h1>Name: Md.Sayed Hasan</h1>
                <h2>Age: 23</h2>
                <h2>A Junior Web Developer</h2>
                <p>Skills: HTML,  CSS,  bootstrap, tailwind,  Javascript, react, firebase authentication, nodejs. </p>

            </div>
        </div>
    );
};

export default About;