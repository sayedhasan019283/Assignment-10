import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [error, setError] = useState()
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,

    ] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    const hendelSubmit = event => {

        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)
        if (user) {
            navigate('/home')
        }
        else {
            setError('wrong password');
        }
    }

    const nevigateRegister = event => {
        navigate('/register')
    }
    return (
        <Form onSubmit={hendelSubmit} className='w-50 fix-from'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <p>New to Fitness GYM? <Link to='/register' className='text-primary text-decoration-none' onClick={nevigateRegister} > Register Now</Link></p>
            <button className='col-md-12 text-center fix-btn'>Login</button>
            <p> {error}</p>
            <SocialLogin></SocialLogin>
        </Form>

    );
};

export default Login;