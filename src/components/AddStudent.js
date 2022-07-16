import React, { useContext, useEffect, useState } from "react";
import { StudentContext } from "../contexts/StudentContext.js";
import { GroupContext } from "../contexts/GroupContext.js";
import Form from "react-bootstrap/Form";

const AddStudent = () => {
  const [student, setStudent] = useState({});

  const { addStudent, getStudentList, isOpen, setIsOpen } =
    useContext(StudentContext);

  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    getStudentList();
  }, []);

  const handleOnChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    
  };

  const hideForm = () => {
    setIsOpen(false);
  };

  return (
    // <div id="form-container">
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
      <h6 color="blue">ogrenci bilgilerini giriniz</h6>

      {/* <Form onSubmit={handleSubmit}> */}
        <input
          type="text"
          className="form-control"
          name="first_name"
          value={student.first_name}
          placeholder="first name"
          onChange={handleOnChange}
        />
        <input
          type="text"
          className="form-control"
          name="last_name"
          value={student.last_name}
          placeholder="last name"
          onChange={handleOnChange}
        />
        <input
          type="text"
          className="form-control"
          name="email"
          value={student.email}
          placeholder="email"
          onChange={handleOnChange}
        />
           <input
          type="number"
          className="form-control"
          name="GroupId"
          value={student.GroupId}
          placeholder="group no giriniz"
          onChange={handleOnChange}
        />
        <input
          type="number"
          className="form-control"
          name="TaskId"
          value={student.TaskId}
          placeholder="task no giriniz"
          onChange={handleOnChange}
        />
          <input
          type="number"
          className="form-control"
          name="TargetId"
          value={student.TargetId}
          placeholder="target no giriniz"
          onChange={handleOnChange}
        />
          <input
          type="number"
          className="form-control"
          name="RecordId"
          value={student.RecordId}
          placeholder="record no giriniz"
          onChange={handleOnChange}
        />
        {/* <button
          type="submit"
          className="btn bg-success text-white btn-outline-success"
          data-bs-dismiss="modal"
        >
          save
        </button>
        <button type="button" className="btn btn-danger"  data-bs-dismiss="modal" onClick={hideForm}>
          close
        </button> */}
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

export default AddStudent;
