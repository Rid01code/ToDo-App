import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios  from 'axios';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/allCss.module.css'


function SignIn() {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  console.log(isLoggedIn)
  
  
  if (isLoggedIn === true) { 
      if (typeof window !== 'undefined') {
        window.location.href = '/'
    }
  }

  let SignInName = useRef(null)
  let signInEmail = useRef(null)
  let signInPhone = useRef(null)
  let signInPassword = useRef(null)
  let signInReEnteredPassword = useRef(null)


  let submitHandler = async (event) => {
    try {
      event.preventDefault()
      const name = SignInName.current.value;
      const email = signInEmail.current.value;
      const phone = signInPhone.current.value;
      const password = signInPassword.current.value;
      const reEnteredPassword = signInReEnteredPassword.current.value;
    
      if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || password.trim() === '') {
        alert('Put proper details')
      } else if (password !== reEnteredPassword) {
        alert('Password does not match')
        signInPassword.current.value = ''
        signInReEnteredPassword.current.value = ''
      }
      else {
        await axios.post('http://localhost:5000/app/signIn', {
          name: name,
          email: email,
          phone: phone,
          password: password
        })
        if (typeof window !== 'undefined') {
          window.location.href = '/LogIn'
        }
        SignInName.current.value = ''
        signInEmail.current.value = ''
        signInPhone.current.value = ''
        signInPassword.current.value = ''
        signInReEnteredPassword.current.value = ''
      }
    } catch (error) {
      alert('error.response.data.message')
    }
  };
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <Form className={`${styles.signInBox} border border-black border-5 rounded-4`} onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h1 className='text-center'>Sign In</h1>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your Name"
            ref={ SignInName} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={ signInEmail}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            ref={ signInPhone}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={ signInPassword}/>
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Label>Re-Enter Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={ signInReEnteredPassword}/>
        </Form.Group>
        <div className='d-flex justify-content-between'>
          <Button variant="primary" type="submit">Submit</Button>
          <Link href='/LogIn'><p>All ready have an account? | Log In </p></Link>
        </div>
      </Form>
    </div>
  );
}

export default SignIn;