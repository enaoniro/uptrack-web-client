import React, { useState, useContext } from "react";
import { CantonContext } from "../contexts/CantonContext";
import { GroupContext } from "../contexts/GroupContext";
import UpdateCanton from "./UpdateCanton";
import Table from "react-bootstrap/Table";
import Group from "./Group.js";

const Canton = ({ canton }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [cantonGroups, setCantonGroups] = useState([])

  const { cantonList, deleteCanton } = useContext(CantonContext);
  const { groupList } = useContext(GroupContext);

const handleClick = (event) => {
  // setGroupName(event.target.innerText);
  setCantonGroups(groupList.filter(group=>group.CantonId==canton.id))
  setIsOpen(isOpen ? false : true);

}

  return (
    <React.Fragment>
      <tr className="w-100" key={canton.id}>
        <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5" onClick={handleClick}>
         {/* <a className="text-decoration-none" href="http://localhost:3000/canton" >{canton.name}</a>  */}
         {canton.name}
        </td>
        <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5">{canton.email}</td>
   
        <td className="d-flex flex-column m-0">
          
          <button
            type="button"
            className="btn btn-primary fs-6 w-20 border-white"
            data-bs-toggle="modal"
            data-bs-target={"#updateCantonModal" + canton.id}
          >
            Edit Canton
          </button>
          
          <button
            onClick={() => deleteCanton(canton.id)}
            className="btn btn-danger fs-6 w-20"
          >
            Delete Canton
          </button>
        </td>
      </tr>
      <div
        className="modal fade"
        id={"updateCantonModal" + canton.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateCanton canton={canton} />
      </div>
      <div>
      {isOpen &&(cantonGroups.map((group)=><Group group={group}/>))}
      </div>
     
    </React.Fragment>
  );
};

export default Canton;
