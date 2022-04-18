import { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import { async } from '@firebase/util';
import SocialLogin from '../../SocialLogin/SocialLogin';
import Spiner from '../../Spiner/Spiner';

const Login = () => {
    const [user1,
        loading1,
        error2
    ] = useAuthState(auth);
    const [error1, setError] = useState()
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const hendelSubmit = event => {

        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(password);

        signInWithEmailAndPassword(email, password)
        navigate('./')
    }
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true })
    }
    if (loading || sending) {
        return <Spiner></Spiner>

    }
    let errorElement;
    if (error) {
        errorElement = (
            <div>
                <p>Error: {error?.message}</p>
            </div>
        );
    };
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email')
        }
    }

    const nevigateRegister = event => {
        navigate('/register')
    }
    return (
        <Form onSubmit={hendelSubmit} className='w-50 fix-from mx-auto mt-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <p className='text-danger'>{errorElement}</p>
            <p>New to Fitness GYM? <Link to='/register' className='text-primary text-decoration-none' onClick={nevigateRegister} > Register Now</Link></p>
            <p>Forget Password? <button className='text-primary text-decoration-none btn btn-link' onClick={resetPassword}> Reset Password</button></p>
            <button className='col-md-12 text-center fix-btn'>Login</button>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </Form>

    );
};

export default Login;