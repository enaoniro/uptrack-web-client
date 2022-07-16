import React, { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
import { GroupContext } from "../contexts/GroupContext";
import Student from "./Student";
import Table from "react-bootstrap/Table";

const StudentList = ({group}) => {
  console.log(group)
  
  const { getStudentsInGroup, studentList } = useContext(StudentContext);
  const { groupList } = useContext(GroupContext);

  const student = group[0].Students.map((student) => <Student student={student} />);
  console.log(student)
    

  return (
    <div className='w-100'>
          <Table className='w-100' responsive="md" bordered hover>
        <thead>
          <tr>
            <th>student details</th>
            <th rowSpan={2}>risale</th>
            <th rowSpan={2}>pirlanta</th>
            <th rowSpan={2}>namaz</th>
            <th rowSpan={2}>cevsen</th>
            <th rowSpan={2}>devam</th>
          </tr>
        </thead>
        <tbody className="w-100">{student}</tbody>
      </Table>
    </div>
  );
};

export default StudentList;
