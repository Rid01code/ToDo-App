import React, { useContext } from 'react';
import { toDoContext } from '../../Context/context';

const ToDoList = ({ name, date ,index , id , done}) => {
  const { deleteItem } = useContext(toDoContext);
  const { finishItem } = useContext(toDoContext);
  return (
    <tr>
      <th className='text-center' scope={index}>{ index+1}</th>
      <td className='text-center'>{name}</td>
      <td className='text-center'>{date}</td>
      <td className='text-center'>
        <button className="btn btn-danger btn-sm me-2 my-2" onClick={() => { deleteItem(id) }}	>Delete</button>

        {done ?
          <button type="button" className="btn btn-light">Task Finished</button>
          :
          <button className="btn btn-success btn-sm" onClick={() => { finishItem(id) }}>Finish</button>}
      </td>
    </tr>  
  )
}

export default ToDoList