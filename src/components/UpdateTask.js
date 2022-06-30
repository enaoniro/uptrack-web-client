import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext.js';

const UpdateTask = ({ task }) => {
  const [updatedTask, setUpdatedTask] = useState(task);
  const { updateTask } = useContext(TaskContext);

  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
  };

  return (
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className ='modal-header'>
          <h5 className ='modal-title' id='exampleModalLabel'>
            Update Task
          </h5>
          <button
            type='button'
            className ='btn-close'
            data-bs-dismiss='modal'
            aria-label='Close'
          ></button>
        </div>
        <div className ='modal-body'>
          <form className='mb-4' onSubmit={handleSubmit}>
            <div>
              <input
                type='text'
                className='form-control'
                placeholder='risale name'
                name='risale'
                value={updatedTask.risale}
                onChange={handleChange}
              />
              <input
                type='text'
                className='form-control'
                placeholder='pirlanta adi'
                name='pirlanta'
                value={updatedTask.pirlanta}
                onChange={handleChange}
              />
              <input
                type='text'
                className='form-control'
                placeholder='namaz'
                name='namaz'
                value={updatedTask.namaz}
                onChange={handleChange}
              />
              <input
                type='number'
                className='form-control'
                placeholder='cevsen'
                name='cevsen'
                value={updatedTask.cevsen}
                onChange={handleChange}
              />
                <input
                type='number'
                className='form-control'
                placeholder='devam'
                name='devamlilik'
                value={updatedTask.devamlilik}
                onChange={handleChange}
              />
            
            </div>

            <button
              type='button'
              className ='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button
              type='submit'
              className ='btn btn-primary'
              data-bs-dismiss='modal'
            >
              update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
