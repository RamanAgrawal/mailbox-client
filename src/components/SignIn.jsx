import { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import auth from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/AuthSlice';

function Signin() {
    const {login}=authActions
    const dispatch=useDispatch()
    const [variant,setVariant]=useState('')
    const passwordRef = useRef(null)
   
    const emailRef = useRef('')
    const submitHandaler = async (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        
        
        try {
           
               const res= await signInWithEmailAndPassword(auth, email, password)
                dispatch(login(res._tokenResponse.idToken))
                setVariant('primary')
            
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
        <h3 className='text-center'>Signin</h3>
            <Form onSubmit={submitHandaler} className='w-25 m-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" ref={emailRef} />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Password" ref={passwordRef} />
                </Form.Group>
               
              
                <Button variant="primary" type="submit">
                    Submit
                </Button>
              
            </Form>
        </>
    );
}

export default Signin;