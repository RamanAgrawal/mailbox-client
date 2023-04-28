import { useRef, useState } from 'react';
import { Alert, Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import auth from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import {createUser}

function SignUp() {
    const [variant,setVariant]=useState('')
    const passwordRef = useRef(null)
    const confirmPasswordRef = useRef(null)
    const emailRef = useRef('')
    const submitHandaler = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const confirmPassword = confirmPasswordRef.current.value
        
        try {
            if (password === confirmPassword) {

                await createUserWithEmailAndPassword(auth, email, password)
                setVariant('primary')
            }
        } catch (error) {
            console.log(error);
            setVariant('danger')
        }
       e.target.reset()
    }
    
    return (
        < >
        {variant&&<Alert key={variant} variant={variant}>
          successFull
        </Alert>}
        <h3 className='text-center'>Signup</h3>
            <Form onSubmit={submitHandaler} className='w-25 m-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" ref={emailRef} />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Password" ref={passwordRef} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirm-password">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control required type="password" placeholder="Confirm Password" ref={confirmPasswordRef} />
                </Form.Group>
              
                <Button variant="primary" type="submit">
                    Submit
                </Button>
              
            </Form>
        </>
    );
}

export default SignUp;