import React, { useContext, useEffect, useState } from 'react';
import { StudentContext } from '../contexts/StudentContext.js';
import { GroupContext } from '../contexts/GroupContext.js';
import Form from "react-bootstrap/Form";

const AddStudent = () => {
  const [student, setStudent] = useState({});
  
  

  const { addStudent, getStudentList ,isOpen, setIsOpen} = useContext(StudentContext);
  
 

  const [studentList, setStudentList] = useState([]);
  
  
    useEffect(() => {
      getStudentList();
    }, []);
  
    
  

  const handleOnChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    // setIsOpen(false);
  };

  const hideForm = ()=> {
    setIsOpen(false)
  }

  return (

    
    <div id='form-container'>

      <p color='blue'>ogrenci bilgilerini giriniz</p>

      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control'
          name='first_name'
          value={student.first_name}
          placeholder="first name"
          onChange={handleOnChange}
        />
         <input
          type='text'
          className='form-control'
          name='last_name'
          value={student.last_name}
          placeholder="last name"
          onChange={handleOnChange}
        />
         <input
          type='text'
          className='form-control'
          name='email'
          value={student.email}
          placeholder="email"
          onChange={handleOnChange}
        />
            <input
          type='number'
          className='form-control'
          name='taskId'
          value={student.TaskId}
          placeholder="task no giriniz"
          onChange={handleOnChange}
        />
        
        <button type='submit' className='btn bg-success text-white btn-outline-success'>
          save
        </button>
        <button type='button' className='btn btn-danger' onClick={hideForm}>
          close
        </button>
      </Form>
    </div>
  );
};

export default AddStudent;
