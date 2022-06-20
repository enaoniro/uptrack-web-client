import React, { useContext, useEffect, useState } from 'react';
import { CantonContext } from '../contexts/CantonContext.js';

const AddCanton = () => {
  const [canton, setCanton] = useState({});

  const { addCanton, getCantonList } = useContext(CantonContext);

  const [cantonList, setCantonList] = useState([]);
  //   const [role, setRole] = useState("");
  //   const [userInDatabase, setUserInDatabase] = useState({});
  
    // useEffect(() => {
    //   getCantonList();
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
  
  
    // const getCantonList = async () => {
    //   const response = await fetch('http://localhost:3001/api/v1/Cantons');
    //   const CantonList = await response.json();
    //   setCantonList(CantonList);
    // };
  
  //   const getUserByEmail = async (pUser) => {
  //     const response = await fetch('http://localhost:3001/api/v1/users');
  //     const userList= await response.json();
  //     const data = userList.filter(user=>user.email==pUser.email);
  //     setUserInDatabase(data);
  //   };
  //  console.log(userInDatabase)
  
  //   const addCanton = async (pCanton) => {
  //       // if (pUser.email !==undefined) {
  //           const newCanton = {
  //               id: pCanton.id,
  //               first_name:pCanton.first_name,
  //               last_name:pCanton.last_name,
  //               email:pCanton.email,
              
  //           };
  //     try {
  //       await fetch('http://localhost:3001/api/v1/Cantons', {
  //         method: 'POST',
  //         body: JSON.stringify(pCanton),
  //         headers: { 'Content-Type': 'application/json' },
  //       });
  
  //       setCantonList([...CantonList, newCanton]);
  //     } catch (error) {
  //       console.log(error);
  //     }
    
  // };
  

  const handleOnChange = (e) => {
    setCanton({ ...canton, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCanton(canton);
    // setIsOpen(false);
  };

  return (

    
    <div id='form-container'>

      <p color='blue'>ogrenci bilgilerini giriniz</p>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control'
          name='first_name'
          value={canton.name}
          placeholder="name"
          onChange={handleOnChange}
        />
         {/* <input
          type='text'
          className='form-control'
          name='last_name'
          value={Canton.last_name}
          placeholder="last name"
          onChange={handleOnChange}
        />
         <input
          type='text'
          className='form-control'
          name='email'
          value={Canton.email}
          placeholder="email"
          onChange={handleOnChange}
        /> */}
        <button type='submit' className='btn btn-primary mt-1'>
          save
        </button>
      </form>
    </div>
  );
};

export default AddCanton;
