import React from 'react';
import extrasectionImg from '../../images/pc.jpg'
import './Extra.css'

const Extra = () => {
    return (
        <div className='fixing-extra-part row'>
            <div className='col fix-cart '>
                <h1 className='fix-cart-text'>Get In Touch</h1>
                <p >
                    If you have a question or <br />
                    any issues in my gym I <br />
                    would love to help Badly.
                </p>
            </div>
            <div className='extra-img col fix-cart'>
                <img src={extrasectionImg} alt="" />
            </div>
        </div>
    );
};

export default Extra;