import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const StudentContext = createContext();

const StudentContextProvider = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [student, setStudent] = useState({});
  const [selectedStudent, setSelectedStudent] = useState({});
  const [studentsInGrup, setStudentsInGrup] = useState([]);

  const navigate = useNavigate();

  // setSelectedStudent(studentList.find((stu =>stu.id===student.id)))

  useEffect(() => {
    getStudentList();
  }, []);

  const getStudentList = async () => {
    try {
      const response = await fetch("https://uptrackrest.onrender.com/api/v1/students");
      const studentList = await response.json();
      setStudentList(studentList);
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  const getStudentsInGrup = async (pId) => {
    const response = await fetch("https://uptrackrest.onrender.com/api/v1/students" + pId);
    const studentList = await response.json();
    const grup = studentList?.filter((student) => student.GrupId == pId);
    setStudentsInGrup(grup);
  };

  const getStudentById = async (id) => {
    const response = await fetch(
      "https://uptrackrest.onrender.com/api/v1/students/byId" + id );
    const student = await response.json();

    console.log(student)
    // const student = studentList.find((student) => student.id == pId);
    setStudent(student);
  };

  const addStudent = async (pStudent, id) => {
    const newStudent = {
      first_name: pStudent.first_name,
      last_name: pStudent.last_name,
      email: pStudent.email,
      group: id,
      img: pStudent.img,
    };
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/students", {
        method: "POST",
        body: JSON.stringify(newStudent),
        headers: { "Content-Type": "application/json" },
      });

      // const data = await res.json();

      // setStudentList([...studentList, data]);
      setStudentList([...studentList, newStudent]);
      console.log(studentList);
      //  getStudentList();
      // navigate("/")
      console.log("student context add student is rendered");
    } catch (error) {
      console.log(error);
    }
  };

  const updateStudent = async (pStudent) => {
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/students" , {
        method: "PUT",
        body: JSON.stringify(pStudent),
        headers: { "Content-Type": "application/json" },
      });

      setStudentList(
        studentList.map((student) =>
          student._id === pStudent._id ? pStudent : student
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (pStudentId) => {
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/students/" + pStudentId, {
        method: "DELETE",
      });
      const updateDStudentList = studentList.filter(
        (student) => student.id !== pStudentId
      );

      setStudentList(updateDStudentList);
      getStudentList();
      alert("the student is deleted!");
      navigate("/");
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
    <StudentContext.Provider
      value={{
        getStudentById,
        student,
        setStudent,
        addStudent,
        updateStudent,
        setStudentsInGrup,
        studentsInGrup,
        getStudentList,
        getStudentsInGrup,
        deleteStudent,
        studentList,
        setStudentList,
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
