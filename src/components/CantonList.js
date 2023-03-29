import React, { useContext } from 'react';
import { CantonContext } from '../contexts/CantonContext';
import Canton from './Canton';
import Table from "react-bootstrap/Table";

const CantonList = () => {
  const { cantonList } = useContext(CantonContext);

  const canton = cantonList.map((canton, key) => <Canton canton={canton} key={canton.id}/>);

  return (
    <div className='w-100' key={canton.id}>
      <Table className='w-100 m-3' bordered hover>
        <thead className='p-3'>
         <tr>
          <th className='w-50 h-100 opacity-75'>Canton name</th>  
          <th className='w-25 h-100  opacity-75'>Canton Manager</th>
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
