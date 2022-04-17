import React from 'react';
import googleIcon from '../images/google.png'
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/home";

    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p>Error: {error?.message}</p>
            </div>
        );
    };

    if (user) {
        navigate(from, { replace: true })
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <p className='text-danger'>{errorElement}</p>
            <div className='fix-button'>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2 '>
                    <img src={googleIcon} alt="" />
                    <span className='px-3'>Google sing in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;