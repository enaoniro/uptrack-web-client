import { createContext, useEffect, useState } from "react";

export const RecordContext = createContext();

const RecordContextProvider = (props) => {
  const [recordList, setRecordList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [record, setRecord] = useState({});
  const [selectedRecord, setSelectedRecord] = useState({});

  // setSelectedRecord(RecordList.find((stu =>stu.id===Record.id)))

  useEffect(() => {
    getRecords();
  }, []);

  const getRecords = async () => {
    const response = await fetch("https://uptrackrest.onrender.com/api/v1/records");
    const recordList = await response.json();
    setRecordList(recordList);
  };

  //   const getUserByEmail = async (pUser) => {
  //     const response = await fetch('https://uptrackrest.onrender.com/users');
  //     const userList= await response.json();
  //     const data = userList.filter(user=>user.email==pUser.email);
  //     setUserInDatabase(data);
  //   };
  //  console.log(userInDatabase)

  const addRecord = async (pRecord, id) => {
    // if (pUser.email !==undefined) {
    const newRecord = {
      record1: pRecord.record1,
      record2: pRecord.record2,
      record3: pRecord.record3,
      record4: pRecord.record4,
      record5: pRecord.record5,
      task: id
    };
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/records", {
        method: "POST",
        body: JSON.stringify(newRecord),
        headers: { "Content-Type": "application/json" },
      });

      setRecordList(
        recordList.map((record) => (record.task === id ? record : newRecord))
      );
      getRecords();
    } catch (error) {
      console.log(error);
    }
  };

  const updateRecord = async (pRecord) => {
    console.log(pRecord._id);
    console.log(pRecord)
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/records/", {
        method: "PUT",
        body: JSON.stringify(pRecord),
        headers: { "Content-Type": "application/json" },
      });

      setRecordList(
        recordList.map((record) => (record._id === pRecord._id ? pRecord : record))
      );
    } catch (error) {
      console.log(error);
    }
    console.log(recordList)
  };


  const deleteRecord = async (pid) => {
    // const pid = req.params.id

    try { 
      await fetch("https://uptrackrest.onrender.com/api/v1/records/" +pid, {
        method:"DELETE",
      })

      const updateDRecordList = recordList.filter(
        (record) => record._id !== pid
      );

      setRecordList(updateDRecordList);
      getRecords();
      alert("the record is deleted!");
      
    } catch (error) {
      console.log(error);
    }

  
  }
  // const selectRecord = (id) => {
  //   setSelectedRecord(RecordList.find(Record=>Record.id==id));
  //   return selectedRecord;
  // }

  console.log(recordList);


  return (
    <RecordContext.Provider
      value={{
        addRecord,
        updateRecord,
        getRecords,
        deleteRecord,
        recordList,
        setRecordList,
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </RecordContext.Provider>
  );
};

export default RecordContextProvider;
