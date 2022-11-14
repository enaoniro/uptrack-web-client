import React, { useState, useContext, useEffect } from "react";
import { GroupContext } from "../contexts/GroupContext";
import { StudentContext } from "../contexts/StudentContext";
import UpdateGroup from "./UpdateGroup";
import Table from "react-bootstrap/Table";
import StudentList from "./StudentList";
import Student from "./Student.js";

const Group = ({ group }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [groupStudents, setGroupStudents] = useState([]);
  const [groupName, setGroupName] = useState("");
  console.log(group);

  const { groupList, deleteGroup } = useContext(GroupContext);
  const { studentList, setStudentList } = useContext(StudentContext);

  const handleClick = (event) => {
  
    setGroupName(event.target.innerText);
    
    setGroupStudents(studentList.filter(
    (student) => student.GroupId === group.id)
    
    );
   
    setIsOpen(!isOpen);
  };
  console.log(groupStudents)
  console.log(groupName);

  return (
    <React.Fragment key={group.id}>
      <tr className="w-100 d-flex justify-content-between" key={group.id}>
        {/* <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5" key={group.id}> </td> */}
        <td
          className="w-100 text-capitalize text-center d-flex justify-content-center align-items-center fw-bolder"
          // colSpan={2}
          onClick={handleClick}
        >
          {/* <a className="text-decoration-none" href="http://localhost:3000/group" >{group.name}</a>  */}
          {group.id}
        </td>
        {/* <td colSpan={2} className="text-capitalize text-primary bg-body fw-bolder text-center">{group.leader}</td> */}
        {/* <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5">{group.Canton.name}</td> */}
        
        <td>
          <button
            type="button"
            className="w-100 btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={"#updateGroupModal" + group.id}
          >
            update Group
          </button>
          </td>
          <td>
          <button
            onClick={() => deleteGroup(group.id)}
            className="w-100 btn btn-danger opacity-75 "
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
      <tr className="w-100">
        {isOpen &&
          groupStudents.map((student) => <Student student={student} />)}
      </tr>
    </React.Fragment>
  );
};

export default Group;
