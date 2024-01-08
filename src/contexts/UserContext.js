import { createContext, useEffect, useState } from "react";

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
  const checkAuthenticatedUser = async (pUser) => {
    console.log(pUser);

    const response = await fetch("https://uptrackrest.onrender.com/api/v1/users/check", {
      method: "post",
      body: JSON.stringify(pUser),
      headers: { "Content-Type": "application/json" },
    });

    return await response.json();
  };

  const getUserList = async () => {
    const response = await fetch("https://uptrackrest.onrender.com/api/v1/users");
    const userList = await response.json();
    setUserList(userList);
  };

console.log(userList)

  const getUserByEmail = async (pUser) => {
    const response = await fetch("https://uptrackrest.onrender.com/api/v1/users");
    const userList = await response.json();
    const data = userList.filter((user) => user.email == pUser.email);
    setUserInDatabase(data);
  };
  // console.log(userInDatabase);

  const addUser = async (pUser) => {
    // if (pUser.email !==undefined) {
    const newUser = {
    
      
      username: pUser.username,
      email: pUser.email,
      role: pUser.role,
    };
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/users", {
        method: "POST",
        body: JSON.stringify(pUser),
        headers: { "Content-Type": "application/json" },
      });

      setUserList([...userList, newUser]);
    } catch (error) {
      console.log(error);
    }
  };


  const updateUser = async (pUser) => {

    console.log(pUser)
    console.log(pUser._id)

    try {
      await fetch(`https://uptrackrest.onrender.com/api/v1/users/`, {
        method: "PUT",
        body: JSON.stringify(pUser),
        headers: { "Content-Type": "application/json" },
      });

      setUserList(
        userList.map((user) => (user._id === pUser._id ? pUser : user))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (pUserId) => {
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/users/" +pUserId, {
        method: "DELETE",
      });
      const updateDUserList = userList.filter((user) => user._id !== pUserId);

      setUserList(updateDUserList);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("1", userList);

  return (
    <UserContext.Provider
      value={{
        addUser,
        updateUser,
        deleteUser,
        getUserList,
        getUserByEmail,
        userList,
        checkAuthenticatedUser,
        userInDatabase,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
