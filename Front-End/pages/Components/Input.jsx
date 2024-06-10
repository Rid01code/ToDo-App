import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { toDoContext } from '../../Context/context'; 

const Input = () => {
  
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

  const { setMyToDo } = useContext(toDoContext);
  const { myToDo=[] } = useContext(toDoContext);
  const [todoTextValue, setTodoTextValue] = useState('');
  const [todoDateValue, setTodoDateValue] = useState('');




  let submitHandler = async (event) => {
    try {
      event.preventDefault();
      const textValue = todoTextValue;
      const dateValue = todoDateValue;
      if (textValue.trim() === '' || dateValue.trim() === '') {
        alert('Put proper Task and Date')
      } else {
        const today = new Date()
        today.setHours(0, 0, 0, 0);
        const checkDate = new Date(dateValue)
        today.setHours(0, 0, 0, 0)
        if (checkDate < today) {
          alert('You set Previous Date')
          setTodoTextValue("");
          setTodoDateValue("");
        } else {
          // getNewItem(textValue.toUpperCase(), dateValue);
          await axios.post('localhost://5000/app/task/add', { task: textValue.toUpperCase(), date: dateValue }, { headers })
            .then(response => {
              setMyToDo([...myToDo, response.data]);
            })
      
        }
      }
      setTodoTextValue("");
      setTodoDateValue("");
    } catch (error) {
      console.log(error)
    }

  };




  return (
    <form className="d-sm-flex flex-column align-items-center w-100 px-5" onSubmit={submitHandler}>
      <div className='col-sm-5  mb-3 d-flex flex-column'>
        <label>Add Your Task</label>
        <input
          className="form-control"
          placeholder='Task'
          onChange={(event) => setTodoTextValue(event.target.value)}
          value={todoTextValue}
          type="text"/>
      </div>

      <div className='col-sm-5 mb-3 d-flex flex-column'>
        <label>Add Date</label>
        <input
          className="form-control"
          onChange={(event) => setTodoDateValue(event.target.value)}
          value={todoDateValue}
          type="date"/>
      </div>
      
        <input className='btn btn-primary'  type="submit"/>
        
    </form>
  )
}

export default Input