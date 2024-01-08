import React, { useContext, useState } from "react";
import { StudentContext } from "../contexts/StudentContext";

const UpdateStudent = ({ student }) => {
  const [updatedStudent, setUpdatedStudent] = useState(student);
  const { updateStudent } = useContext(StudentContext);

  const handleChange = (e) => {
    setUpdatedStudent({ ...updatedStudent, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(updatedStudent);
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Update Student
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
              <h6>first name</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="Student Name"
                name="first_name"
                value={updatedStudent.first_name}
                onChange={handleChange}
              />
              <h6>last name</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="lastname"
                name="last_name"
                value={updatedStudent.last_name}
                onChange={handleChange}
              />
              <h5>email</h5>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="email"
                name="email"
                value={updatedStudent.email}
                onChange={handleChange}
              />
              <h6>grup</h6>
              <input
                type="text"
                className="form-control bg-info"
                name="group"
                value={updatedStudent.group}
                onChange={handleChange}
              />
               <h6>img</h6>
              <input
                type="text"
                className="form-control bg-info"
                name="img"
                value={updatedStudent.img}
                onChange={handleChange}
              />
           
            </div>

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
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStudent;
