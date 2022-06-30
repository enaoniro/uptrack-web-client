import { createContext, useEffect, useState } from 'react';

export const RecordContext = createContext();

const RecordContextProvider = (props) => {
  const [recordList, setRecordList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [record, setRecord] = useState({})
  const [selectedRecord, setSelectedRecord] = useState({})

  // setSelectedRecord(RecordList.find((stu =>stu.id===Record.id)))

  useEffect(() => {
    getRecordList();
  }, []);
  
  const getRecordList = async () => {
    const response = await fetch('http://localhost:3001/api/v1/records');
    const recordList = await response.json();
    setRecordList(recordList);
  };

//   const getUserByEmail = async (pUser) => {
//     const response = await fetch('http://localhost:3001/api/v1/users');
//     const userList= await response.json();
//     const data = userList.filter(user=>user.email==pUser.email);
//     setUserInDatabase(data);
//   };
//  console.log(userInDatabase)

  const addRecord = async (pRecord) => {
      // if (pUser.email !==undefined) {
          const newRecord = {
              id: pRecord.id,
              risale: pRecord.risale,
              pirlanta: pRecord.pirlanta,
              namaz: pRecord.namaz,
              cevsen: pRecord.cevsen,
              devamlilik: pRecord.devamlilik,
            
          };
    try {
      await fetch('http://localhost:3001/api/v1/records', {
        method: 'POST',
        body: JSON.stringify(pRecord),
        headers: { 'Content-Type': 'application/json' },
      });

      setRecordList([...recordList, newRecord]);
    } catch (error) {
      console.log(error);
    }
  
};

const updateRecord = async (pRecord) => {
  try {
    await fetch('http://localhost:3001/api/v1/records/' + pRecord.id, {
      method: 'PUT',
      body: JSON.stringify(pRecord),
      headers: { 'Content-Type': 'application/json' },
    });

    setRecordList(
      recordList.map((record) =>
        record.id === pRecord.id ? pRecord : record
      )
    );
  } catch (error) {
    console.log(error);
  }
};

// const selectRecord = (id) => {
//   setSelectedRecord(RecordList.find(Record=>Record.id==id));
//   return selectedRecord;
// }

  console.log("1", recordList);

  return (
    <RecordContext.Provider value={{ addRecord, updateRecord, getRecordList, recordList, setRecordList, isOpen, setIsOpen}}>
      {props.children}
    </RecordContext.Provider>
  );
  
};

export default RecordContextProvider;
