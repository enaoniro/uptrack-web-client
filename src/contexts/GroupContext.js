import { createContext, useEffect, useState } from 'react';

export const GroupContext = createContext();

const GroupContextProvider = (props) => {
  const [groupList, setGroupList] = useState([]);
  const [group, setGroup] = useState({});
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
              leader:pGroup.leader,
              CantonId:pGroup.CantonId,
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

const updateGroup = async (pGroup) => {
  try {
    await fetch("http://localhost:3001/api/v1/groups/" + pGroup.id, {
      method: "PUT",
      body: JSON.stringify(pGroup),
      headers: { "Content-Type": "application/json" },
    });

    setGroupList(
      groupList.map((group) => (group.id === pGroup.id ? pGroup : group))
    );
  } catch (error) {
    console.log(error);
  }
};

const deleteGroup = async (pGroupId) => {
  try {
    await fetch("http://localhost:3001/api/v1/groups/" + pGroupId, {
      method: "DELETE",
    });
    const updateDGroupList = groupList.filter((group) => group.id !== pGroupId);

    setGroupList(updateDGroupList);
  } catch (error) {
    console.log(error);
  }
};

  console.log("1", groupList);

  return (
    <GroupContext.Provider value={{ addGroup, getGroupList, updateGroup, deleteGroup, group, setGroup, isOpen, setIsOpen ,setGroupList, groupList }}>
      {props.children}
    </GroupContext.Provider>
  );
  
};

export default GroupContextProvider;
