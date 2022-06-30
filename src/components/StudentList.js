import React, { useContext } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import Student from './Student';
import Table from "react-bootstrap/Table";

const StudentList = () => {
  const { studentList } = useContext(StudentContext);

  const student = studentList.map((student) => <Student student={student} />);

  return (
    <div>
      <Table responsive="sm" bordered hover>
        <thead>
         <tr>
            <th>student name</th>
            
            <th rowSpan={2}>risale</th>
          
            <th rowSpan={2}>pirlanta</th>
            
            <th rowSpan={2}>namaz</th>
         
            <th rowSpan={2}>cevsen</th>
            
            <th rowSpan={2}>devam</th>
           
            
          </tr>
        </thead>
        <tbody>
        
          {student}
        
        </tbody>
      </Table>
    </div>
  );
};

export default StudentList;
