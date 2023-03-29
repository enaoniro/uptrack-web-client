import React, { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
import { GroupContext } from "../contexts/GroupContext";
import Student from "./Student";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";

const StudentList = ({ group }) => {
  console.log(group);

  const {
    studentsInGroup,
    setStudentsInGroup,
    getStudentsInGroup,
    studentList,
  } = useContext(StudentContext);
  const { groupList } = useContext(GroupContext);
  console.log(studentList);

  const student = group[0].Students; //?.find((student) => student.GroupId == group.id);
  if (student) {
    console.log(student);
  } else {
    console.log("no student exists!");
  }
  // let id  = student.id ;
  const navigate = useNavigate();

  return (
    <div className="w-100 p-5 ">
      <Table className="w-100" responsive="md" bordered hover>
        <thead>
          <tr className=" opacity-75 border-3">
            <th className="text-black">student details</th>
            <th className="text-black" rowSpan={2}>
              risale
            </th>
            <th className="text-black" rowSpan={2}>
              pirlanta
            </th>
            <th className="text-black" rowSpan={2}>
              namaz
            </th>
            <th className="text-black" rowSpan={2}>
              cevsen
            </th>
            <th className="text-black" rowSpan={2}>
              devam
            </th>
            <th className="text-black" rowSpan={2}></th>
          </tr>
        </thead>
        <tbody className="w-100">
          {student?.map((student, key) => (
            <tr
              key={key}
              onClick={() => {
                navigate(`/students/student/${student.id}`);
              }}
            >
              <td>{student.first_name}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>number of students: {group[0].Students.length}</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default StudentList;
