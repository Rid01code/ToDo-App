import React, { useContext, useEffect, useState } from 'react'
import ToDoList from './toDoListRender'
import { toDoContext } from '../../Context/context'

const ToDo = () => {
  const { myToDo=[] } = useContext(toDoContext);

  
  
  return (
    <table className='table table-bordered table-hover container mt-5'>
      <thead>
        <tr>
          <th className='text-center col-3' scope='col1'>#</th>
          <th className='text-center col-3' scope='col1'>Task</th>
          <th className='text-center col-3' scope='col1'>date</th>
          <th className='text-center col-3' scope='col1'>Action</th>
        </tr>
      </thead>
      <tbody>{myToDo.map((toDo, index) => (
        <ToDoList key={index} id={toDo._id} index={index} name={toDo.task} date={new Date(toDo.date).toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' })} toDo={ toDo} />
      ))}
      </tbody >
    </table>

  )
}

export default ToDo