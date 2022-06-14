import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userList, setUserList] = useState([]);
  const [role, setRole] = useState("");
  const [userInDatabase, setUserInDatabase] = useState({});

  useEffect(() => {
    getUserList();
  }, []);

  
//puser auth0 dan gelen user bilgileri
//bu bilgi buradan backende userroutera gonderiliyor.
const checkAuthenticatedUser=async(pUser) => {
  console.log(pUser)
  
  const response = await fetch('http://localhost:3001/api/v1/users/check', {
      method: 'post',
      body: JSON.stringify(pUser),
      headers: { "Content-Type": "application/json" }
  })
  
  return  response;
   
}


  const getUserList = async () => {
    const response = await fetch('http://localhost:3001/api/v1/users');
    const userList = await response.json();
    setUserList(userList);
  };

  const getUserByEmail = async (pUser) => {
    const response = await fetch('http://localhost:3001/api/v1/users');
    const userList= await response.json();
    const data = userList.filter(user=>user.email==pUser.email);
    setUserInDatabase(data);
  };
 console.log(userInDatabase)

  const addUser = async (pUser) => {
      // if (pUser.email !==undefined) {
          const newUser = {
              id: pUser.sub,
              name:pUser.name,
              email:pUser.email,
            
          };
    try {
      await fetch('http://localhost:3001/api/v1/users', {
        method: 'POST',
        body: JSON.stringify(pUser),
        headers: { 'Content-Type': 'application/json' },
      });

      setUserList([...userList, newUser]);
    } catch (error) {
      console.log(error);
    }
  
};

  console.log("1", userList);

  return (
    <UserContext.Provider value={{ addUser, getUserList ,getUserByEmail, userList, checkAuthenticatedUser, userInDatabase }}>
      {props.children}
    </UserContext.Provider>
  );
  
};

export default UserContextProvider;
