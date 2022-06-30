import { createContext, useEffect, useState } from 'react';

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [student, setStudent] = useState({})
  const [selectedStudent, setSelectedStudent] = useState({})

  // setSelectedStudent(studentList.find((stu =>stu.id===student.id)))

  useEffect(() => {
    getStudentList();
  }, []);
  
  const getStudentList = async () => {
    const response = await fetch('http://localhost:3001/api/v1/students');
    const studentList = await response.json();
    setStudentList(studentList);
  };

//   const getUserByEmail = async (pUser) => {
//     const response = await fetch('http://localhost:3001/api/v1/users');
//     const userList= await response.json();
//     const data = userList.filter(user=>user.email==pUser.email);
//     setUserInDatabase(data);
//   };
//  console.log(userInDatabase)

  const addStudent = async (pStudent) => {
      // if (pUser.email !==undefined) {
          const newStudent = {
              id: pStudent.id,
              first_name:pStudent.first_name,
              last_name:pStudent.last_name,
              email:pStudent.email,
            
          };
    try {
      await fetch('http://localhost:3001/api/v1/students', {
        method: 'POST',
        body: JSON.stringify(pStudent),
        headers: { 'Content-Type': 'application/json' },
      });

      setStudentList([...studentList, newStudent]);
    } catch (error) {
      console.log(error);
    }
  
};

const updateStudent = async (pStudent) => {
  try {
    await fetch('http://localhost:3001/api/v1/students/' + pStudent.id, {
      method: 'PUT',
      body: JSON.stringify(pStudent),
      headers: { 'Content-Type': 'application/json' },
    });

    setStudentList(
      studentList.map((student) =>
        student.id === pStudent.id ? pStudent : student
      )
    );
  } catch (error) {
    console.log(error);
  }
};

// const selectStudent = (id) => {
//   setSelectedStudent(studentList.find(student=>student.id==id));
//   return selectedStudent;
// }

  console.log("1", studentList);

  return (
    <StudentContext.Provider value={{ addStudent, updateStudent, getStudentList, studentList, setStudentList, isOpen, setIsOpen}}>
      {props.children}
    </StudentContext.Provider>
  );
  
};

export default StudentContextProvider;
