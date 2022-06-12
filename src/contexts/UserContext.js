import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [userList, setUserList] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    const response = await fetch('http://localhost:3001/api/v1/users');
    const userList = await response.json();
    setUserList(userList);
  };

  const getUserByEmail = async () => {
    const response = await fetch('http://localhost:3001/api/v1/users');
    const userInDatabase = await response.json();
    setUserList(userInDatabase);
  };


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
    <UserContext.Provider value={{ addUser, getUserList ,getUserByEmail }}>
      {props.children}
    </UserContext.Provider>
  );
  
};

export default UserContextProvider;
