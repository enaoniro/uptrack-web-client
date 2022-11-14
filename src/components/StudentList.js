import React, { useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
import { GroupContext } from "../contexts/GroupContext";
import Student from "./Student";
import Table from "react-bootstrap/Table";

const StudentList = ({group}) => {
  console.log(group)
  
  const { studentsInGroup, setStudentsInGroup, getStudentsInGroup, studentList } = useContext(StudentContext);
  const { groupList } = useContext(GroupContext);

  const student = group[0].Students.map((student, key) => <Student student={student} key={key} />);
  console.log(student)
    

  return (
    <div className='w-100 p-5cd '>
          <Table className='w-100' responsive="md" bordered hover   >
        <thead >
          <tr className=" opacity-75 border-3">
            <th className="text-black">student details</th>
            <th className="text-black" rowSpan={2}>risale</th>
            <th className="text-black" rowSpan={2}>pirlanta</th>
            <th className="text-black" rowSpan={2}>namaz</th>
            <th className="text-black" rowSpan={2}>cevsen</th>
            <th className="text-black" rowSpan={2}>devam</th>
            <th className="text-black" rowSpan={2}></th>
          </tr>
        </thead>
        <tbody className="w-100">{student}</tbody>
        <tfoot>
          <tr>
            <td>number of students: {}</td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default StudentList;
