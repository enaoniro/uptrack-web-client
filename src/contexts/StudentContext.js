import { createContext, useEffect, useState } from 'react';

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [student, setStudent] = useState({})
  const [selectedStudent, setSelectedStudent] = useState({})
  const [studentsInGroup, setStudentsInGroup] = useState([])

  // setSelectedStudent(studentList.find((stu =>stu.id===student.id)))

  useEffect(() => {
    getStudentList();
  }, []);
  
  const getStudentList = async () => {
    const response = await fetch('http://localhost:3001/api/v1/students');
    const studentList = await response.json();
    setStudentList(studentList);
  };

  const getStudentsInGroup = async (pId) => {
    const response = await fetch('http://localhost:3001/api/v1/students'+pId);
    const studentList = await response.json();
    const group = studentList.filter(student=>student.GroupId==pId);
    setStudentsInGroup(group);
  };


  const addStudent = async (pStudent) => {
      // if (pUser.email !==undefined) {
          const newStudent = {
              id: pStudent.id,
              first_name:pStudent.first_name,
              last_name:pStudent.last_name,
              email:pStudent.email,
              GroupId:pStudent.GroupId,
              TaskId:pStudent.TaskId,
              TargetId:pStudent.TargetId,
              RecordId:pStudent.RecordId,
            
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

const deleteStudent = async (pStudentId) => {
  try {
    await fetch('http://localhost:3001/api/v1/students/' + pStudentId, {
      method: 'DELETE'
    });
    const updateDStudentList = studentList.filter(
      (student) => student.id !== pStudentId
    );

    setStudentList(updateDStudentList);
    
  } catch (error) {
    console.log(error);
  }
};

// const selectStudent = (id) => {
//   setSelectedStudent(studentList.find(student=>student.id==id));
//   return selectedStudent;
// }

  // console.log("1", studentList);

  return (
    <StudentContext.Provider value={{ addStudent, updateStudent, setStudentsInGroup, studentsInGroup, getStudentList, getStudentsInGroup, deleteStudent, studentList, setStudentList, isOpen, setIsOpen}}>
      {props.children}
    </StudentContext.Provider>
  );
  
};

export default StudentContextProvider;
