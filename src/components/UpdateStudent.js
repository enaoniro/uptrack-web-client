import React, { useContext, useState } from 'react';
import { StudentContext } from '../contexts/StudentContext';

const UpdateStudent = ({ student }) => {
  const [updatedStudent, setUpdatedStudent] = useState(student);
  const { updateStudent } = useContext(StudentContext);

  const handleChange = (e) => {
    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(updatedStudent);
  };

  return (
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className ='modal-header'>
          <h5 className ='modal-title' id='exampleModalLabel'>
            Update Student
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
                placeholder='Student Name'
                name='first_name'
                value={updatedStudent.first_name}
                onChange={handleChange}
              />
              <input
                type='text'
                className='form-control'
                placeholder='last_name'
                name='lastname'
                value={updatedStudent.last_name}
                onChange={handleChange}
              />
              <input
                type='text'
                className='form-control'
                placeholder='email'
                name='email'
                value={updatedStudent.email}
                onChange={handleChange}
              />
              <input
                type='number'
                className='form-control'
                placeholder='task no'
                name='TaskId'
                value={student.id}
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
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudent;
