import React, { useContext, useEffect, useState } from 'react';
import { StudentContext } from '../contexts/StudentContext.js';

const AddStudent = () => {
  const [student, setStudent] = useState({});

  const { addStudent, getStudentList } = useContext(StudentContext);

  const [studentList, setStudentList] = useState([]);
  //   const [role, setRole] = useState("");
  //   const [userInDatabase, setUserInDatabase] = useState({});
  
    // useEffect(() => {
    //   getStudentList();
    // }, []);
  
    
  //puser auth0 dan gelen user bilgileri
  //bu bilgi buradan backende userroutera gonderiliyor.
  // const checkAuthenticatedUser=async(pUser) => {
  //   console.log(pUser)
    
  //   const response = await fetch('http://localhost:3001/api/v1/users/check', {
  //       method: 'post',
  //       body: JSON.stringify(pUser),
  //       headers: { "Content-Type": "application/json" }
  //   })
    
  //   return await response.json();
     
  // }
  
  
    // const getStudentList = async () => {
    //   const response = await fetch('http://localhost:3001/api/v1/students');
    //   const studentList = await response.json();
    //   setStudentList(studentList);
    // };
  
  //   const getUserByEmail = async (pUser) => {
  //     const response = await fetch('http://localhost:3001/api/v1/users');
  //     const userList= await response.json();
  //     const data = userList.filter(user=>user.email==pUser.email);
  //     setUserInDatabase(data);
  //   };
  //  console.log(userInDatabase)
  
  //   const addStudent = async (pStudent) => {
  //       // if (pUser.email !==undefined) {
  //           const newStudent = {
  //               id: pStudent.id,
  //               first_name:pStudent.first_name,
  //               last_name:pStudent.last_name,
  //               email:pStudent.email,
              
  //           };
  //     try {
  //       await fetch('http://localhost:3001/api/v1/students', {
  //         method: 'POST',
  //         body: JSON.stringify(pStudent),
  //         headers: { 'Content-Type': 'application/json' },
  //       });
  
  //       setStudentList([...studentList, newStudent]);
  //     } catch (error) {
  //       console.log(error);
  //     }
    
  // };
  

  const handleOnChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
  };

  return (

    
    <div id='form-container'>

      <p>ogrenci bilgilerini giriniz</p>

      <form onSubmit={handleSubmit}>
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
        <button type='submit' className='btn btn-primary mt-1'>
          save
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
