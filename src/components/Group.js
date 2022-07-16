import React, { useState, useContext, useEffect } from "react";
import { GroupContext } from "../contexts/GroupContext";
import { StudentContext } from "../contexts/StudentContext";
import UpdateGroup from "./UpdateGroup";
import Table from "react-bootstrap/Table";
import StudentList from "./StudentList";
import Student from "./Student.js";

const Group = ({group}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [groupStudents, setGroupStudents] = useState([])
  console.log(group)
  
  const [groupName, setGroupName] = useState("");

  const { groupList, deleteGroup } = useContext(GroupContext);
  const { studentList, setStudentList } = useContext(StudentContext);

  // const groupStudents= studentList.filter(student=>student.GroupId==group.id)
  // console.log(groupStudents)


  // const group = groups.map(group=>group)

  const handleClick = (event) => {
    setGroupName(event.target.innerText);
    setGroupStudents(studentList.filter(student=>student.GroupId==group.id))
    
    setIsOpen(isOpen ? false : true);

  }

  console.log(groupName)
  // console.log(studentList.map(student => student.Group.name))

  return (
    <React.Fragment key={group.id}>
      <tr className="w-100" key={group.id}>
      {/* <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5" key={group.id}> </td> */}
        <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5" onClick={handleClick}>
         {/* <a className="text-decoration-none" href="http://localhost:3000/group" >{group.name}</a>  */}
         {group.name}
        </td>
        {/* <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5">{group.leader}</td> */}
        {/* <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5">{group.Canton.name}</td> */}
   
        <td className="d-flex flex-column m-0">
          
          <button
            type="button"
            className="btn btn-primary fs-6 w-20 border-white"
            data-bs-toggle="modal"
            data-bs-target={"#updateGroupModal" + group.id}
          >
            update Group
          </button>
          
          <button
            onClick={() => deleteGroup(group.id)}
            className="btn btn-danger fs-6 w-20"
          >
            Delete Group
          </button>
        </td>
      </tr>
      <div
        className="modal fade"
        id={"updateGroupModal" + group.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateGroup group={group} />
      </div>
      <div>
      {isOpen &&(groupStudents.map((student)=><Student student={student}/>))}
      </div>
           
    </React.Fragment>
  );
};

export default Group;
