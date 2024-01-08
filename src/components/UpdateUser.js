import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext.js";
import { GrupContext } from "../contexts/GrupContext.js";
import Form from "react-bootstrap/Form";

const UpdateUser = ({ user }) => {
  const [updatedUser, setUpdatedUser] = useState(user);
  const [userList, setUserList] = useState([]);

  console.log(user)

  const { addUser, updateUser, getUserList, isOpen, setIsOpen } = useContext(
    UserContext
  );

  const handleOnChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(updatedUser);
    console.log(updatedUser)
  };

  const hideForm = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            update user
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <form className="mb-4" onSubmit={handleSubmit}>
            <div>
              <h6 color="blue">user bilgilerini giriniz</h6>
              <input
                type="text"
                className="form-control"
                name="username"
                value={updatedUser?.username}
                placeholder="username"
                onChange={handleOnChange}
              />
              <input
                type="text"
                className="form-control"
                name="email"
                value={updatedUser?.email}
                placeholder="email"
                onChange={handleOnChange}
              />
              <input
                type="text"
                className="form-control"
                name="role"
                value={updatedUser?.role}
                placeholder="rolu giriniz"
                onChange={handleOnChange}
              />

              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
