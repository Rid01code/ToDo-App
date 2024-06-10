import React, { useEffect } from 'react';
import { useState } from 'react';
import { toDoContext } from '../Context/context';
import Input from './Components/Input';
import ToDo from './Components/ToDo';
import Message from './Components/Message';
import axios from 'axios';
import { useSelector , useStore } from 'react-redux';
import { authActions } from '@/Store/Auth';
import Sidebar from './Components/Sidebar';

const Body = () => {

  const store = useStore()

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('id') && localStorage.getItem('token')) {
      store.dispatch(authActions.logIn())
    } else if (!isLoggedIn) {
      if (typeof window !== 'undefined') {
        window.location.href = '/SignIn'
      }
    }
  }, []);


  let [myToDo, setMyToDo] = useState([{ task: '', date: '' }]);
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
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/app/task/get", { headers }
        )
        setMyToDo(response.data.data.tasks)
      } catch (error) {
        alert('Internal Server Error')
      }
    }
    fetch()
  }, [myToDo]);


  let deleteItem = async (id) => {
    try {
      event.preventDefault()
      const response = await axios.delete(`http://localhost:5000/app/task/delete/${id}`, { headers })
      alert(response.data.message)
    } catch (error) {
      alert(error.response.data.message)
    }
  };


  let finishItem = async (id) => {
    try {
      event.preventDefault()
      const response = await axios.put(`http://localhost:5000/app/task/finish/${id}`, {}, { headers })
      alert(response.data.message)
    } catch (error) {
      alert(error.response.data.message)
    }
  };

  return (
    <toDoContext.Provider value={{ myToDo, setMyToDo, deleteItem, finishItem }}>
      <div className='d-flex flex-column p-2'>
        <h1 className='text-center'>Task Management App</h1>
        <div className='d-flex  w-100'><Sidebar /><Input /></div>
        {myToDo.length === 0 ? <Message /> : <ToDo />}
      </div>
    </toDoContext.Provider>
    
  )
};


export default Body