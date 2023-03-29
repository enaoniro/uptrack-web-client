import React, { useState, useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
import { GroupContext } from "../contexts/GroupContext";
import { TaskContext } from "../contexts/TaskContext";
import { TargetContext } from "../contexts/TargetContext";
import { RecordContext } from "../contexts/RecordContext";
import UpdateStudent from "./UpdateStudent";
import AddStudent from "./AddStudent";
import UpdateTask from "./AddTask.js";
import UpdateTarget from "./UpdateTarget.js";
import UpdateRecord from "./UpdateRecord.js";
import Task from "./Task.js";
import Target from "./Target.js";
import Record from "./Record.js";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Link, Route, useNavigate } from "react-router-dom";
import SingleStudent from "./SingleStudent";
import { useParams } from "react-router-dom";

const Student = ({ student }) => {
  console.log(student);
  let { id } = useParams();

  const {
    studentList,
    getStudentById,
    setStudent,
    deleteStudent,
    updateStudent,
    isOpen,
    setIsOpen,
  } = useContext(StudentContext);

  // const student = students.map((student) => student);
  const { groupList } = useContext(GroupContext);

  const { taskList } = useContext(TaskContext);
  console.log(taskList);
  const { targetList } = useContext(TargetContext);
  const { recordList } = useContext(RecordContext);

  // const task = taskList.find((task) => task?.StudentId == student.id);
  // console.log(task);
  // console.log(student.Tasks.map((task) => task.id));
  // const target = targetList.find((target) => target?.TaskId === task.id);
  // console.log(target);
  // const record = recordList.find((record) => record?.TargetId === target.id);
  // console.log(record);

  const navigate = useNavigate();

  const handleClick = (student) => {
    return () => navigate(`/students/student/${student.id}`);
  };

  return (
    <>
      <Table bordered className="bg-light">
        <thead className="bg-white">
          <tr>
            <th>student details</th>
            <th>task1</th>
            <th>task2</th>
            <th>task3</th>
            <th>task4</th>
            <th>task5</th>
            <th>actions</th>
          </tr>
        </thead>

        <tbody>
          <tr
            key={student.id}
            onClick={() => navigate(`/students/student/${student.id}`)}
          >
            <td className="text-capitalize text-secondary bg-body fw-bolder text-start px-3">
              <span className="text-black">name :</span> {student.first_name}{" "}
              {student.last_name}
              <br></br>
              <span className="text-black">email :</span> {student.email}
              <br></br>
              <span className="text-black">group :</span>
              {groupList
                .filter((group) => group.id == student.GroupId)
                .map((group) => group.name)}
              <br></br>
            </td>
            {/* <td className="">
        <p className=" bg-secondary text-dark bg-opacity-25">
          {task.task1}
        </p>
        <p className=" border border-info d-flex justify-content-between px-1 py-1">
          hedef:
          <mark className="border">
            <span className=" w-30 bg-light m-0 mx-2 text-danger fw-bold">
              {target.task1}
            </span>
          </mark>
        </p>
        <p className=" border border-warning d-flex justify-content-between px-1 py-1">
          gerceklesen:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-2">
              {record.task1}
            </span>
          </mark>
        </p>
      </td>
      <td>
        <p className="bg-secondary text-dark bg-opacity-25">
          {task.task2}
        </p>
        <p className="border border-info d-flex justify-content-between px-1 py-1">
          hedef:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-2">
              {target.task2}
            </span>
          </mark>
        </p>

        <p className="border border-warning d-flex justify-content-between px-1 py-1">
          gerceklesen:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-2">
              {record.task2}
            </span>
          </mark>
        </p>
      </td>

      <td>
        <p className="bg-secondary text-dark bg-opacity-25">{task.task3}</p>
        <p className="border border-info d-flex justify-content-between px-1 py-1">
          hedef:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-2">
              {target.task3}
            </span>
          </mark>
        </p>

        <p className="border border-warning d-flex justify-content-between px-1 py-1">
          gerceklesen:
          <mark className="border">
            <span className="w-30 m-0 text-danger fw-bold mx-2">
              {record.task3}
            </span>
          </mark>
        </p>
      </td>

      <td>
        <p className="bg-secondary text-dark bg-opacity-25">{task.task4}</p>
        <p className="border border-info d-flex justify-content-between px-1 py-1">
          hedef:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-2">
              {target.task4}
            </span>
          </mark>
        </p>

        <p className="border border-warning d-flex justify-content-between px-1 py-1">
          gerceklesen:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-2">
              {record.task4}
            </span>
          </mark>
        </p>
      </td>

      <td>
        <p className="bg-secondary text-dark bg-opacity-25">
          {task.task5}
        </p>
        <p className="border border-info d-flex justify-content-between px-1 py-1 ">
          <span>hedef:</span>
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-3 ">
              {target.task5}
            </span>
          </mark>
        </p>

        <p className="border border-warning d-flex justify-content-between px-1 py-1">
          gerceklesen:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-3">
              {record.task5}
            </span>
          </mark>
        </p>
      </td> */}

            <td className="d-flex flex-column m-0">
              <button
                type="button"
                className="btn btn-outline-primary opacity-75 w-20"
                data-bs-toggle="modal"
                data-bs-target={"#updateStudentModal" + student.id}
              >
                Edit student
              </button>
              {/* <button
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
        </button> */}
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

            {/* <td
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
      </td> */}
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Student;
