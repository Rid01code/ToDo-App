import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Finished = () => {

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

  const [finishedTask, setFinishedTask] = useState([])
  
  useEffect(() => {
    try {
      axios.get('https://to-do-api-seven.vercel.app/app/task/getFinish', { headers })
        .then(result => {
          setFinishedTask(result.data.data.tasks)
          console.log(result.data.data.tasks)
        })
    } catch (error) {
      
    }

  }, []);

  const goBack = () => {
    window.location.href = '/'
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <table className='table table-bordered table-hover container mt-5'>
        <thead>
          <tr>
            <th className='text-center col-3' scope='col1'>#</th>
            <th className='text-center col-3' scope='col1'>Task</th>
            <th className='text-center col-3' scope='col1'>date</th>
          </tr>
        </thead>
        <tbody>{finishedTask.map((finishedTask, index) => (
          <tr key={index}>
            <td className='text-center'>{index + 1}</td>
            <td className='text-center'>{finishedTask.task}</td>
            <td className='text-center'>{new Date(finishedTask.date).toLocaleDateString("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' })}</td>
          </tr>
        ))}
        </tbody >
      </table>
      <button type="button" className="btn btn-secondary" onClick={goBack}>Go Back</button>
    </div>
  )
};

export default Finished