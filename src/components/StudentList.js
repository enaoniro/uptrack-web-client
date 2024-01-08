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

  const {
    studentsInGrup,
    setStudentsInGrup,
    getStudentsInGrup,
    studentList,
  } = useContext(StudentContext);
  const { grupList } = useContext(GrupContext);
  console.log(studentList);

  const grupStudents = studentList?.filter(
    (student) => student?.group === grup?._id
  );
  console.log(grupStudents);
  if (!grupStudents) {
    alert("no grupStudents exists!");
  }
  // let id  = grupStudents.id ;
  const navigate = useNavigate();

  return (
    // <div className="container-fluid bg-white shadow-lg ">
    //   {/* <Container fluid className="mt-10 p-3 bg-white shadow-lg"> */}
    //   <Table className="mt-3 bg-white table-responsive-xl" bordered hover>
    //     <thead>
    //       <tr className=" opacity-75 border-3 " style={{ hover: "red" }}>
    //         <th className="text-black">number</th>
    //         <th className="text-black">Student name</th>
    //         <th className="text-black" rowSpan={2}>
    //           last name
    //         </th>
    //         <th className="text-black" rowSpan={2}>
    //           email
    //         </th>
    //         <th className="text-black" rowSpan={2}>
    //           grup
    //         </th>
    //         <th className="text-black" rowSpan={2}>
    //           id
    //         </th>
    //         {/* <th className="text-black" rowSpan={2}>
    //           class
    //         </th> */}
    //         {/* <th className="text-black" rowSpan={2}></th> */}
    //       </tr>
    //     </thead>
    //     <tbody className="">
    //       {grupStudents?.map((student, index) => (
    //         <tr
    //           style={{ cursor: "pointer" }}
    //           key={index}
    //           onClick={() => {
    //             navigate(`/students/${student.id}`);
    //           }}
    //         >
    //           <td>{index + 1}</td>
    //           <td>{student.first_name}</td>
    //           <td>{student.last_name}</td>
    //           <td>{student.email}</td>
    //           <td>{student.GrupId}</td>
    //           <td>{student.id}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //     <tfoot>
    //       <tr>
    //         <td>number of students: {grupStudents.length}</td>
    //       </tr>
    //     </tfoot>
    //   </Table>
    //   {/* </Container> */}
    // </div>
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
            {grupStudents?.map((student, index) => (
              <tr
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/students/${student._id}`);
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
              <td colSpan="6">Number of students: {grupStudents.length}</td>
            </tr>
          </tfoot>
        </Table>
      </Container>
    </div>
  );
};

export default StudentList;
