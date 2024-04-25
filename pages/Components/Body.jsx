import React from 'react';
import { useState } from 'react';
import { toDoContext } from '../Context/context.jsx';
import Input from './Input';
import ToDo from './ToDo';
import Message from './Message';
const Body = () => {

  let [myToDo, setMyToDo] = useState([]);

  let getNewItem = (text, date) => {
    const toDoItem = [
      ...myToDo,
      {name : text , date : date},
    ]
    console.log()
    setMyToDo(toDoItem)
  }

  let deleteItem = (index) => {
    const newToDoItems = [...myToDo]
    newToDoItems.splice(index, 1)
    setMyToDo(newToDoItems)
    alert('Task Deleted Successfully')
  }
  let finishItem = (index) => {
    const newToDoItems = [...myToDo]
    newToDoItems.splice(index, 1)
    setMyToDo(newToDoItems)
    alert('Congratulation , Task Completed')
  }
  
  return (
    <toDoContext.Provider value={{myToDo , deleteItem , finishItem}}>
      <div className='d-flex flex-column p-2'>
        <h1 className='w-100 text-center'>To-Do-App</h1>
        <Input getNewItem={getNewItem} />
        {myToDo.length === 0 ? <Message/> : <ToDo/>}
    </div>
    </toDoContext.Provider>
    
  )
}


export default Body