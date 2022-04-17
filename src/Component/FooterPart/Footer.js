import React from 'react';
import './Footer.css'

const Footer = () => {
    // const today = new Date();
    // const year = today.getFullYear();

    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-container'>
            <footer className='text-center mt-5 fix-footer'>
                <p><small>copyright @ {year} </small></p>
            </footer>
        </div>

    );
};

export default Footer;