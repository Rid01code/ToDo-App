import React, { useContext } from 'react'
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
        <ToDoList key={index} index={index} name={toDo.name} date={toDo.date}/>
        ))}
      </tbody >
    </table>

  )
}

export default ToDo