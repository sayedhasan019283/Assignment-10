import React from 'react';
import extrasectionImg from '../../images/pc.jpg'
import './Extra.css'

const Extra = () => {
    return (
        <div className='fixing-extra-part row'>
            <div className='col'>
                <h1>Get In Touch</h1>
                <p>
                    If you have a question or <br />
                    any issues in my gym I <br />
                    would love to help Badly.
                </p>
            </div>
            <div className='extra-img col'>
                <img src={extrasectionImg} alt="" />
            </div>
        </div>
    );
};

export default Extra;