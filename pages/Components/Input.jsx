
import React from 'react'
import { useRef } from 'react';

const Input = ({ getNewItem }) => {
  
  // let [textValue, setTextValue] = useState('');
  // let [dateValue, setDateValue] = useState('');

  let todoTextValue = useRef();
  let todoDateValue = useRef();


  let submitHandler = () => {
    event.preventDefault();
    const textValue = todoTextValue.current.value;
    const dateValue = todoDateValue.current.value;
    if (textValue.trim() === '' || dateValue.trim() === '') {
      alert('Put proper Task and Date')
    } else {
      const today = new Date()
      today.setHours(0, 0, 0, 0);
      const checkDate = new Date(dateValue)
      today.setHours(0,0,0,0)
      if (checkDate < today) {
        alert('You set Previous Date')
        todoTextValue.current.value = "";
    } else {
      getNewItem(textValue.toUpperCase(), dateValue);
    }
    }
    todoTextValue.current.value = "";
    todoDateValue.current.value = "";
  }



  return (
    <form className="d-sm-flex flex-column align-items-center" onSubmit={submitHandler}>
      <div className='col-sm-5  mb-3 d-flex flex-column'>
        <label>Add Your Task</label>
        <input
          className="form-control"
          ref={todoTextValue}
          placeholder='Task'
          type="text"/>
      </div>

      <div className='col-sm-5 mb-3 d-flex flex-column'>
        <label>Add Date</label>
        <input
          className="form-control"
          ref={todoDateValue}
          type="date"/>
      </div>
      
        <input className='btn btn-primary'  type="submit"/>
        
    </form>
  )
}

export default Input