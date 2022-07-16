import React, { useContext } from 'react';
import { CantonContext } from '../contexts/CantonContext';
import Canton from './Canton';
import Table from "react-bootstrap/Table";

const CantonList = () => {
  const { cantonList } = useContext(CantonContext);

  const canton = cantonList.map((canton) => <Canton canton={canton} />);

  return (
    <div className='w-100'>
      <Table className='w-100' responsive="sm" bordered hover>
        <thead>
         <tr>
         <th>Canton name</th>  
         <th>Canton Manager</th>
         </tr>
        </thead>
        <tbody className='w-100'>
        
          {canton}
        
        </tbody>
      </Table>
    </div>
  );
};

export default CantonList;
