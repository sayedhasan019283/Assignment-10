import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './Register.css'
import { async } from '@firebase/util';
import { Form } from 'react-bootstrap';
import SocialLogin from '../../SocialLogin/SocialLogin';
import { useState } from 'react';

const Register = () => {

    const [user] = useAuthState(auth);
    const [error1, setError] = useState()



    const [
        createUserWithEmailAndPassword,

        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate()

    const navigateLogin = event => {
        navigate('/login')
    }



    const handelRegister = async event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password)

        if (user) {
            navigate('/home')
        }
        else {
            setError('wrong password');
        }

    }
    return (
        <Form onSubmit={handelRegister} className='w-50 fix-from'>
            <Form.Group className="mb-3">
                <Form.Control name='name' type="name" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <p>{error1}</p>
            <p>Already have an account?  <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin} > Login</Link></p>
            <button className='col-md-12 text-center fix-btn'>Register</button>
            <SocialLogin></SocialLogin>
        </Form>
    );
};

export default Register;