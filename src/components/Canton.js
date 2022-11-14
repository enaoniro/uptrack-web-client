import React, { useState, useContext } from "react";
import { CantonContext } from "../contexts/CantonContext";
import { GroupContext } from "../contexts/GroupContext";
import UpdateCanton from "./UpdateCanton";
import Table from "react-bootstrap/Table";
import Group from "./Group.js";

const Canton = ({ canton }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cantonGroups, setCantonGroups] = useState([]);

  const { cantonList, deleteCanton } = useContext(CantonContext);
  const { groupList } = useContext(GroupContext);

  const handleClick = (event) => {
    // setGroupName(event.target.innerText);
    setCantonGroups(groupList.filter((group) => group.CantonId == canton.id));
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment key={canton.id}>

      <tr className="w-100" >
        <td
          className="opacity-75 text-capitalize py-5 text-primary fw-bolder "
          onClick={handleClick}
        >
          <span>{canton.name}</span>
        </td>
        <td className="text-capitalize fw-bolder text-center py-5 ">
          <span>{canton.email}</span>
        </td>
        <td>
          <button
            type="button"
            className="py-3 opacity-75 w-100 btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={"#updateCantonModal" + canton.id}
          >
            Edit Canton
          </button>
          <button
            onClick={() => deleteCanton(canton.id)}
            className="py-3 btn w-100 btn-danger opacity-75 "
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
      {/* <div className="h-100" id="form-div">
      <tr className="w-100">
        {isOpen && cantonGroups.map((group) => <Group group={group} />)}
      </tr>
      </div> */}

    
      {isOpen && 
                (
                  <tr className="w-100">
     {cantonGroups.map((group) => <Group group={group} />)}
      </tr>
      
      
      )
}
  </React.Fragment>
)
};

export default Canton;
