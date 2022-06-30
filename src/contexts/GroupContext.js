import { createContext, useEffect, useState } from 'react';

export const GroupContext = createContext();

const GroupContextProvider = (props) => {
  const [groupList, setGroupList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getGroupList();
  }, []);



  const getGroupList = async () => {
    const response = await fetch('http://localhost:3001/api/v1/groups');
    const groupList = await response.json();
    setGroupList(groupList);
  };



  const addGroup = async (pGroup) => {
      // if (pGroup.name !==undefined) {
          const newGroup = {
              id: pGroup.id,
              name:pGroup.name,
            };
    try {
      await fetch('http://localhost:3001/api/v1/groups', {
        method: 'POST',
        body: JSON.stringify(pGroup),
        headers: { 'Content-Type': 'application/json' },
      });

      setGroupList([...groupList, newGroup]);
    } catch (error) {
      console.log(error);
    }
  
};

  console.log("1", groupList);

  return (
    <GroupContext.Provider value={{ addGroup, getGroupList, isOpen, setIsOpen ,setGroupList, groupList }}>
      {props.children}
    </GroupContext.Provider>
  );
  
};

export default GroupContextProvider;
