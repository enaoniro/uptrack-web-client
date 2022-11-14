import React, { useState, useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
import { GroupContext } from "../contexts/GroupContext";
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
  console.log(student);
  const { deleteStudent, updateStudent } = useContext(StudentContext);
  const { taskList } = useContext(TaskContext);
  const { targetList } = useContext(TargetContext);
  const { recordList } = useContext(RecordContext);
  const { groupList } = useContext(GroupContext);

  const task = taskList.find((task) => task.id === student.TaskId);
  console.log(task);
  console.log(task.id);
  const target = targetList.find((target) => target.TaskId === task.id);
  console.log(target);
  const record = recordList.find((record) => record.TaskId === task.id);
  console.log(record);

  return (
    <tr key={student.id}>
      <td className="text-capitalize text-primary bg-body fw-bolder text-start px-3 mb-3 py-5">
        <span className="text-black">name :</span> {student.first_name}{" "}
        {student.last_name}
        <br></br>
        <span className="text-black">email :</span> {student.email}
        <br></br>
        <span className="text-black">group :</span>
        {groupList
          .filter((group) => group.id == student.GroupId)
          .map((group) => group.name)}
      </td>
      <td className="">
        <p className=" bg-secondary text-primary bg-opacity-25">
          {task.risale}
        </p>
        <p className=" border border-info d-flex justify-content-between px-1 py-1">
          hedef:
          <mark className="border">
            <span className=" w-30 bg-light m-0 mx-2 text-danger fw-bold">
              {target.risale}
            </span>
          </mark>
        </p>
        <p className=" border border-warning d-flex justify-content-between px-1 py-1">
          gerceklesen:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-2">
              {record.risale}
            </span>
          </mark>
        </p>
      </td>
      <td>
        <p className="bg-secondary text-primary bg-opacity-25">
          {task.pirlanta}
        </p>
        <p className="border border-info d-flex justify-content-between px-1 py-1">
          hedef:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-2">
              {target.pirlanta}
            </span>
          </mark>
        </p>

        <p className="border border-warning d-flex justify-content-between px-1 py-1">
          gerceklesen:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-2">
              {record.pirlanta}
            </span>
          </mark>
        </p>
      </td>

      <td>
        <p className="bg-secondary text-primary bg-opacity-25">{task.namaz}</p>
        <p className="border border-info d-flex justify-content-between px-1 py-1">
          hedef:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-2">
              {target.namaz}
            </span>
          </mark>
        </p>

        <p className="border border-warning d-flex justify-content-between px-1 py-1">
          gerceklesen:
          <mark className="border">
            <span className="w-30 m-0 text-danger fw-bold mx-2">
              {record.namaz}
            </span>
          </mark>
        </p>
      </td>

      <td>
        <p className="bg-secondary text-primary bg-opacity-25">{task.cevsen}</p>
        <p className="border border-info d-flex justify-content-between px-1 py-1">
          hedef:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-2">
              {target.cevsen}
            </span>
          </mark>
        </p>

        <p className="border border-warning d-flex justify-content-between px-1 py-1">
          gerceklesen:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-2">
              {record.cevsen}
            </span>
          </mark>
        </p>
      </td>

      <td>
        <p className="bg-secondary text-primary bg-opacity-25">
          {task.devamlilik}
        </p>
        <p className="border border-info d-flex justify-content-between px-1 py-1 ">
          <span>hedef:</span>
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-3 ">
              {target.devamlilik}
            </span>
          </mark>
        </p>

        <p className="border border-warning d-flex justify-content-between px-1 py-1">
          gerceklesen:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-3">
              {record.devamlilik}
            </span>
          </mark>
        </p>
      </td>

      <td className="d-flex flex-column m-0">
        <button
          type="button"
          className="btn btn-outline-primary opacity-75 w-20"
          data-bs-toggle="modal"
          data-bs-target={"#updateStudentModal" + student.id}
        >
          Edit student
        </button>
        <button
          type="button"
          className="btn btn-outline-primary opacity-75 w-20 "
          data-bs-toggle="modal"
          data-bs-target={"#updateTaskModal" + task.id}
        >
          update task
        </button>
        <button
          type="button"
          className="btn btn-outline-primary opacity-75 w-20"
          data-bs-toggle="modal"
          data-bs-target={"#updateTargetModal" + target.id}
        >
          update target
        </button>
        <button
          type="button"
          className="btn btn-outline-primary opacity-75 w-20"
          data-bs-toggle="modal"
          data-bs-target={"#updateRecordModal" + record.id}
        >
          update record
        </button>
        <button
          onClick={() => deleteStudent(student.id)}
          className="btn btn-outline-danger opacity-75 w-20"
        >
          Delete student
        </button>
      </td>

      <td
        className="modal fade"
        id={"updateStudentModal" + student.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateStudent student={student} />
      </td>

      <td
        className="modal fade"
        id={"updateTaskModal" + task.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateTask task={task} />
      </td>
      <td
        className="modal fade"
        id={"updateTargetModal" + target.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateTarget target={target} />
      </td>
      <td
        className="modal fade"
        id={"updateRecordModal" + record.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateRecord record={record} />
      </td>
    </tr>
  );
};

export default Student;
