import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import './Register.css'
import { async } from '@firebase/util';
import { Form } from 'react-bootstrap';
import { useState } from 'react';

const Register = () => {




    const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
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

        navigate('/home')

    }
    return (
        <Form onSubmit={handelRegister} className='w-50 fix-from'>
            <Form.Group className="mb-3">
                <Form.Control name='name' type="name" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <p>Already have an account?  <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin} > Login</Link></p>
            <button className='col-md-12 text-center fix-btn'>Register</button>
        </Form>
    );
};

export default Register;