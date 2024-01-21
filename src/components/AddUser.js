import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext.js";
import { GrupContext } from "../contexts/GrupContext.js";
import Form from "react-bootstrap/Form";

const AddUser = () => {
  const [user, setUser] = useState({});

  const { addUser, getUserList, isOpen, setIsOpen } = useContext(UserContext);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getUserList();
  }, []);

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    // setIsOpen(false);
  };

  const hideForm = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add User
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

              {/* <Form onSubmit={handleSubmit}> */}
              <input
                type="text"
                className="form-control"
                name="username"
                value={user.username || ""}
                placeholder="username"
                onChange={handleOnChange}
              />
              {/* <input
                type="text"
                className="form-control"
                name="last_name"
                value={user.last_name || ""}
                placeholder="last name"
                onChange={handleOnChange}
              /> */}
              <input
                type="text"
                className="form-control"
                name="email"
                value={user.email || ""}
                placeholder="email"
                onChange={handleOnChange}
              />
              <input
                type="text"
                className="form-control"
                name="role"
                value={user.role || ""}
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
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
