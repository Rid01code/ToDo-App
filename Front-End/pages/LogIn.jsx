import React, { useState } from 'react';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { authActions } from '@/Store/Auth';
import axios from 'axios';
import { useStore, useSelector } from 'react-redux';
import styles from '../styles/allCss.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LogIn = () => {

  let logInEmail = useRef(null);
  let logInPassWord = useRef(null);
  const store = useStore();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  
  if (isLoggedIn === true) {
    if (typeof window !== 'undefined') {
      window.location.href = '/'
    }
  }

  let submitHandler = async (event) => {
    try {
      event.preventDefault()
      const email = logInEmail.current.value
      const password = logInPassWord.current.value

      if (email.trim() === '' || password.trim === '') {
        alert('Put proper details')
      } else {
        const response = await axios.post(`${window.location.origin}/app/logIn`, {
          email: email,
          password: password
        })
        localStorage.setItem('id', response.data.id)
        localStorage.setItem('token', response.data.token)
        store.dispatch(authActions.logIn());
        if (typeof window !== 'undefined') {
          window.location.href = '/Body'
        }
        logInEmail.current.value = ''
        logInPassword.current.value = ''

      }
    } catch (error) {
      alert(error.response.data.message)
    }
  };

  const [showPassword, setShowPassWord] = useState()
  
  const handleShowPassword = () => {
    setShowPassWord(!showPassword)
  }

  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <Form className={`${styles.logInBox} border border-black border-5 rounded-4`} onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={logInEmail} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            ref={logInPassWord}
          />
          <span onClick={handleShowPassword}>
            {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
          </span>
        </Form.Group>
        <div className='d-flex justify-content-between'>
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Link href='./SignIn'>
            <p>Not have account || Sign In</p>
          </Link>
          
        </div>
        
        
      </Form>
    </div>
  )
};

export default LogIn