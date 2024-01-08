import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import UpdateUser from "./UpdateUser";


const User = ({ user }) => {
  const { deleteUser } = useContext(UserContext);
  const { updateUser } = useContext(UserContext);

  console.log(user)
 
  return (
    <React.Fragment>
      <tr className="w-100" key={user.id}>
        <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5">
          {user.username}
        </td>
        <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5">
          {user.email} 
        </td>
        <td className="text-capitalize text-primary bg-body fw-bolder text-center p-5">
          {user.role}
        </td>

     
        <td className="d-flex flex-column m-0">
          
          <button
            type="button"
            className="btn btn-primary fs-6 w-20 border-white"
            data-bs-toggle="modal"
            data-bs-target={"#updateUserModal" + user._id}
          >
            Edit User
          </button>
          <button
            onClick={() => deleteUser(user._id)}
            className="btn btn-danger fs-6 w-20"
          >
            Delete User
          </button>
        </td>
      </tr>
      <div
        className="modal fade"
        id={"updateUserModal" + user._id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateUser user={user} />
      </div>
     
    </React.Fragment>
  );
};

export default User;
