import React, { useState, useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
import { TaskContext } from "../contexts/TaskContext";
import { TargetContext } from "../contexts/TargetContext";
import { RecordContext } from "../contexts/RecordContext";
import UpdateStudent from "./UpdateStudent";
import AddStudent from "./AddStudent";
import UpdateTask from "./UpdateTask.js";
import UpdateTarget from "./UpdateTarget.js";
import UpdateRecord from "./UpdateRecord.js";
import Task from "./Task.js";
import Target from "./Target.js";
import Record from "./Record.js";
import Table from "react-bootstrap/Table";

const Student = ({ student }) => {
  console.log(student)
  const { deleteStudent } = useContext(StudentContext);
  const { updateStudent } = useContext(StudentContext);
  const { taskList } = useContext(TaskContext);
  const { targetList } = useContext(TargetContext);
  const { recordList } = useContext(RecordContext);

  const task = taskList.find((task) => task.StudentId == student.id);
  console.log(task)
  const target = targetList.find((target) => target.TaskId == task.id);
  console.log(target)
  const record = recordList.find(record => record.TaskId == task.id);
  console.log(record)

  return (
    <React.Fragment>
      <tr className="w-100" key={student.id}>
        <td className="text-capitalize text-primary bg-body fw-bolder text-start p-5">
          <span className="text-black">name :</span>  {student.first_name} {student.last_name}<br></br>
          <span className="text-black">email :</span> {student.email}<br></br>
          <span className="text-black">group :</span>{student.GroupId}
          
        </td>

        <td>
          <p className="text-primary">{task.risale}</p>
          <p className="bg-warning text-white d-flex justify-content-between px-1">
            hedef:
            <mark><span className=" w-30 bg-light m-0 text-danger fw-bold mx-2">
              {target.risale}
            </span></mark>
          </p>

          <p className="bg-info text-white d-flex justify-content-between px-1">
          gerceklesen:
            <mark><span className=" w-30 m-0 text-danger fw-bold mx-2">
              {record.risale}
            </span></mark>
            {/* <input placeholder="gerceklesen" /> */}
          </p>
        </td>
        <td>
          <p className="text-primary">{task.pirlanta}</p>
          <p className="bg-warning text-white d-flex justify-content-between px-1">
            hedef:
            <mark><span className=" w-30 m-0 text-danger fw-bold mx-2">
              {target.pirlanta}
            </span></mark>
          </p>

          <p className="bg-info text-white d-flex justify-content-between px-1">
          gerceklesen:
            <mark><span className=" w-30 m-0 text-danger fw-bold mx-2">
              {record.pirlanta}
            </span></mark>
            {/* <input placeholder="gerceklesen" /> */}
          </p>
        </td>

        <td>
          {/* <p>namaz</p> */}
          <p className="text-primary">{task.namaz}</p>
          <p className="bg-warning text-white d-flex justify-content-between px-1">
            hedef:
            <mark><span className=" w-30 m-0 text-danger fw-bold mx-2">
              {target.namaz}
            </span></mark>
          </p>

          <p className="bg-info text-white d-flex justify-content-between px-1">
          gerceklesen:
            <mark><span className=" w-30 m-0 text-danger fw-bold mx-2">
              {record.namaz}
            </span></mark>
            {/* <input placeholder="gerceklesen" /> */}
          </p>
        </td>

        <td>
          {/* <p>cevsen</p> */}
          <p className="text-primary">{task.cevsen}</p>
          <p className="bg-warning text-white d-flex justify-content-between px-1">
            hedef:
            <mark><span className=" w-30 m-0 text-danger fw-bold mx-2">
              {target.cevsen}
            </span></mark>
          </p>

          <p className="bg-info text-white d-flex justify-content-between px-1">
          gerceklesen:
            <mark><span className=" w-30 m-0 text-danger fw-bold mx-2">
              {record.cevsen}
            </span></mark>
            {/* <input placeholder="gerceklesen" /> */}
          </p>
        </td>

        <td>
          {/* <p>devam</p> */}
          <p className="text-primary">{task.devamlilik}</p>
          <p className="bg-warning text-white d-flex justify-content-between px-1 ">
            <span>hedef:</span>
            <mark><span className=" w-30 m-0 text-danger fw-bold mx-3 ">
              {target.devamlilik}
            </span>
            </mark>
          </p>

          <p className="bg-info text-white d-flex justify-content-between px-1">
          gerceklesen:
            <mark><span className=" w-30 m-0 text-danger fw-bold mx-3">
              {record.devamlilik}
            </span></mark>
            {/* <input placeholder="gerceklesen" /> */}
          </p>
        </td>

        <td className="d-flex flex-column m-0">
          
          <button
            type="button"
            className="btn btn-primary fs-6 w-20 border-white"
            data-bs-toggle="modal"
            data-bs-target={"#updateStudentModal" + student.id}
          >
            Edit student
          </button>
          <button
            type="button"
            className="btn btn-primary fs-6 w-20 border-white"
            data-bs-toggle="modal"
            data-bs-target={"#updateTaskModal" + task.id}
          >
            update task
          </button>
          <button
            type="button"
            className="btn btn-primary fs-6 w-20 border-white"
            data-bs-toggle="modal"
            data-bs-target={"#updateTargetModal" + target.id}
          >
            update target
          </button>
          <button
            type="button"
            className="btn btn-primary fs-6 w-20 border-white "
            data-bs-toggle="modal"
            data-bs-target={"#updateRecordModal" + record.id}
          >
            update record
          </button>
          <button
            onClick={() => deleteStudent(student.id)}
            className="btn btn-danger fs-6 w-20"
          >
            Delete student
          </button>
        </td>
      </tr>
      <div
        className="modal fade"
        id={"updateStudentModal" + student.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateStudent student={student} />
      </div>
     
      <div
        className="modal fade"
        id={"updateTaskModal" + task.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateTask task={task} />
      </div>
      <div
        className="modal fade"
        id={"updateTargetModal" + target.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateTarget target={target} />
      </div>
      <div
        className="modal fade"
        id={"updateRecordModal" + record.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateRecord record={record} />
      </div>
    </React.Fragment>
  );
};

export default Student;
