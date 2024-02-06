import React, { useContext, useState } from "react";
import { StudentContext } from "../contexts/StudentContext";
import { GrupContext } from "../contexts/GrupContext";
import Student from "./Student";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { useNavigate, useParams } from "react-router-dom";

const StudentList = ({ showDetails, setShowDetails, grup }) => {
  console.log(grup);

  console.log("student list is rendered");

  const navigate = useNavigate();

  const {
    studentsInGrup,
    setStudentsInGrup,
    getStudentsInGrup,
    studentList,
  } = useContext(StudentContext);


  const { grupList } = useContext(GrupContext);
  console.log(studentList);

  if (!studentList || !studentList.length) {
    return <div>no students found , please add student</div>;
  } else {
  
  const students = studentList?.filter(
    (student) => student?.group === grup?._id
  )

  console.log(students);


  


  // if (!grupStudents.isArray) {
  //   alert("no grupStudents exists!");
  // }
  // let id  = grupStudents.id ;
 


  return (

   
    <div className="container-fluid bg-white shadow-lg">
      <Container fluid className="mt-10 p-3 bg-white shadow-lg">
        <Table responsive bordered hover>
          <thead>
            <tr className="opacity-75 border-3">
              <th className="text-black">Number</th>
              <th className="text-black">Student Name</th>
              <th className="text-black">Last Name</th>
              <th className="text-black">Email</th>
              <th className="text-black">Grup</th>
              <th className="text-black">ID</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student, index) => (
              <tr
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/students/byId/${student._id}`);
                }}
              >
                <td>{index + 1}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>
                <td>{student.groupname}</td>
                <td>{student._id}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6">Number of students: {students.length}</td>
            </tr>
          </tfoot>
        </Table>
      </Container>
    </div>

  
  );
}};

export default StudentList;
