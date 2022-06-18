import React, { useContext } from 'react';
import { StudentContext } from '../contexts/StudentContext';
// import UpdateStudent from './UpdateStudent';

const Student = ({ student }) => {
//   const { deleteCompany } = useContext(StudentContext);

  return (
    <React.Fragment>
      <tr key={student.id}>
        <td>{student.first_name}</td>
        <td>{student.last_name}</td>
     </tr>
        {/* <td>
          <button
            onClick={() => deleteCompany(company.id)}
            className='btn btn-danger'
          >
            Delete
          </button>
          <button
            type='button'
            class='btn btn-warning'
            data-bs-toggle='modal'
            data-bs-target={'#updateCompanyModal' + company.id}
          >
            Update
          </button>
        </td>
      </tr>

      <div
        class='modal fade'
        id={'updateCompanyModal' + company.id}
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <UpdateCompany company={company} /> */}
      
    </React.Fragment>
  );
};

export default Company;
