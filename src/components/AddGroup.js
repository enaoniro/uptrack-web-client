import React, { useContext, useEffect, useState } from 'react';
import { GroupContext } from '../contexts/GroupContext.js';

const AddGroup = () => {

  const [group, setGroup] = useState({
    id:"",
    name: ""
  
    })
  const [groupList, setGroupList] = useState([]);
  
  const { addGroup, getGroupList, isOpen, setIsOpen } = useContext(GroupContext);
  
  useEffect(() => {
      getGroupList();

    }, []);
  
    
  const handleOnChange = (e) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGroup(group);
    
  };

  const hideForm = ()=> {
    setIsOpen(false)
  }

  return (
    
    <div id='form-container'>
      <p color='blue'>grup bilgilerini giriniz</p>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control'
          name='name'
          value={group.name}
          placeholder="group name"
          onChange={handleOnChange}
        />
        <button type='submit' className='btn btn-primary mt-1'>
          save
        </button>
        <button type='button' className='btn btn-danger mt-1' onClick={hideForm}>
          close
        </button>
      </form>
    </div>
  );
};


// return (
//   <div className='modal-dialog'>
//     <div className='modal-content'>
//       <div className ='modal-header'>
//         <h5 className ='modal-title' id='exampleModalLabel'>
//           Add Group
//         </h5>
//         <button
//           type='button'
//           className ='btn-close'
//           data-bs-dismiss='modal'
//           aria-label='Close'
//         ></button>
//       </div>
//       <div className ='modal-body'>
//         <form className='mb-4' onSubmit={handleSubmit}>
//           <div>
//             <input
//               type='text'
//               className='form-control'
//               placeholder='Group Name'
//               name='name'
//               value={group.name}
//               onChange={handleOnChange}
//             />
//           </div>

//           <button
//             type='button'
//             className ='btn btn-secondary'
//             data-bs-dismiss='modal'
//           >
//             Close
//           </button>
//           <button
//             type='submit'
//             className ='btn btn-primary'
//             data-bs-dismiss='modal'
//           >
//             Add
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// );
// };

export default AddGroup;
