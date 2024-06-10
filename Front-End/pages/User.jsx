import React, { useEffect, useState } from 'react'
import axios from 'axios'

const User = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('')

  let id = null;
  let token = null;

  if (typeof window !== 'undefined') {
    id = localStorage.getItem('id');
    token = localStorage.getItem('token');
  }

  const headers = {
    id,
    authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    try {
      axios.get('http://localhost:5000/app/getUserInfo', { headers })
        .then(result => {
          setName(result.data.userInfo.name)
          setEmail(result.data.userInfo.email)
          setPhone(result.data.userInfo.phone)
        })
    } catch (error) {
      alert(error.response.data.message)
    }

  }, [id, token])

  const goBack = () => {
    window.location.href = '/'
  }
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
      <div className='d-flex flex-column border border-3 border-black rounded-4 p-5 align-items-center my-5'>
        <h2>User Info</h2>
        <div>
          <span className='fw-bold px-2'>Name :</span>
          <span>{name}</span>
        </div>
        <div>
          <span className='fw-bold px-2'>Email :</span>
          <span>{email}</span>
        </div>
        <div>
          <span className='fw-bold px-2'>Phone :</span>
          <span>{phone}</span>
        </div>
      </div>
      <button type="button" className="btn btn-secondary" onClick={goBack}>Go Back</button>
    </div>
  )
}

export default User