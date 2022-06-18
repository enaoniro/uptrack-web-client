import React, { useContext } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import Student from './Student';

const StudentList = () => {
  const { studentList } = useContext(StudentContext);

  const student = studentList.map((student) => <Student student={student} />);

  return (
    <div>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
            <td>{student.first_name}</td>
            <td>{student.last_name}</td>
            <td>{student.email}</td>
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
