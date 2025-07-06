import React, { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { TargetContext } from "../contexts/TargetContext";
import { RecordContext } from "../contexts/RecordContext";
import Table from "react-bootstrap/Table";
import AddTask from "./AddTask.js";
import AddTarget from "./AddTarget.js";
import UpdateTarget from "./UpdateTask.js";
import UpdateRecord from "./UpdateRecord.js";
import UpdateTask from "./UpdateTask";
import AddRecord from "./AddRecord";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, student, index }) => {
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [disabledTarget, setDisabledTarget] = useState(false);
  const [disabledRecord, setDisabledRecord] = useState(false);
  const [tasksCompleted, setTasksCompleted] = useState([]);
  const [newRecord, setNewRecord] = useState(task.record);

  console.log(task);
  console.log(task._id);

  const { taskList, setTaskList, getTasks, setTaskCompleted, setTask } =
    useContext(TaskContext);

  const setTaskEnd = (task) => {
    console.log(task?.isCompleted);
    task.isCompleted = !task.isCompleted;
    setTaskCompleted(task);
    console.log(task?.isCompleted);

    setTaskList(tasksCompleted);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    console.log(task);

    setNewRecord(e.target.value);
  };

  // const handleChange = (e) => {
  //   setUpdatedCanton({ ...updatedCanton, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   updateCanton(updatedCanton);
  // };

  const assigned = new Date(task.assignedAt).toLocaleDateString("en-CA");
  const Deadline = new Date(task.deadline).toLocaleDateString("en-CA");
  const today = new Date().toLocaleDateString("en-CA");

  console.log(Deadline, today);

  return (
    <React.Fragment>
      <>
        <tr   
                  // type="button"
                  // className="btn btn-outline-warning bg-opacity-25 text-primary border-2 w-100 m-0 p-2 cursor pointer"
                  // data-bs-toggle="modal"
                  // data-bs-target={"#updateTaskModal" + task?._id}

                  
                
          className={
            Deadline <= today
              ? //  task?.record < task?.target || !task?.record
                //   ? "bg-secondary text-muted bg-opacity-25 p-1 m-0"
                //   : Deadline <= today && task?.record >= task?.target
                //   ? "bg-secondary text-muted bg-opacity-25 p-1 m-0"
                //   : "bg-warning fw-bold bg-opacity-25 p-1 m-0"
                "bg-secondary bg-opacity-25 p-2 m-0"
              : ""
          }
        >
          <td
          // className={
          //       Deadline <= today
          //         ?
          //         task?.record < task?.target || !task?.record
          //           ? "bg-secondary text-muted bg-opacity-25 p-1 m-0"
          //           : Deadline <= today && task?.record >= task?.target
          //           ? "bg-secondary text-muted bg-opacity-25 p-1 m-0"
          //           : "bg-warning fw-bold bg-opacity-25 p-1 m-0"
          //           : "bg-warning  bg-opacity-25 fw-bold p-1 m-0"
          //     }
          >
            <p
              className={
                Deadline <= today
                  ? task?.record < task?.target || !task?.record
                    ? "bg-danger text-muted bg-opacity-25 p-2 m-0"
                    : Deadline <= today && task?.record >= task?.target
                    ? "bg-success text-muted bg-opacity-25 p-2 m-0"
                    : "bg-warning fw-bold bg-opacity-25 p-2 m-0"
                  : "border-warning border-2 border  bg-opacity-25 text-primary p-2 m-0"
              }
            >
              {index + 1}
            </p>
          </td>
          <td className="">
            <p
              className={
                Deadline <= today
                  ? // task?.record < task?.target || !task?.record
                    // ? "bg-secondary text-muted bg-opacity-25 p-2 m-0"
                    // : Deadline <= today && task?.record >= task?.target
                    // ? "bg-success text-muted bg-opacity-25 p-1 m-0"
                    // : "bg-warning fw-bold bg-opacity-25 p-1 m-0"
                    "bg-secondary text-muted bg-opacity-25 p-2 m-0"
                  : "bg-opacity-25 p-2 m-0"
              }
            >
              {task?.taskName}
            </p>
          </td>
          <td className={""}>
            <p
              className={
                Deadline <= today
                  ? task?.record < task?.target || !task?.record
                    ? "bg-secondary text-muted bg-opacity-25 p-2 m-0"
                    : Deadline <= today && task?.record >= task?.target
                    ? "bg-secondary text-muted bg-opacity-25 p-2 m-0"
                    : "bg-warning fw-bold bg-opacity-25 p-2 m-0"
                  : "p-2 m-0"
              }
            >
              {task?.target}
            </p>
          </td>
          <td
          // className={
          //   Deadline > today ? "border-danger border-2": ""}
          >
            <p
              // type="number"
              // name="record"
              // value={task?.record || ""}
              // onChange={handleChange}
              className={
                Deadline <= today
                  ? task?.record < task?.target || !task?.record
                    ? "text-danger border border-0 bg-danger text-center fw-bold bg-opacity-25 p-2 m-0"
                    : Deadline <= today && task?.record >= task?.target
                    ? "text-success border border-0 text-center fw-bold bg-success bg-opacity-25 p-2 m-0"
                    : ""
                    : "text-primary border border-2 border-warning text-center fw-bold bg-opacity-25 p-2 m-0"
              }
              
              
            >
              {/* {task?.record
                ? task.record
                : !task?.record && Deadline > today
                ? "please enter record"
                : !task?.record ?? Deadline < today
                ? "no entries"
                : null} */}

              {/* {task?.record
                ? task.record
                : Deadline > today
                ? "Please enter record"
                : Deadline < today
                ? "No entries recorded"
                : null} */}
                  {task?.record 
                  ? task.record
                  : !task?.record && Deadline > today
                  ? "please enter record"
                  : !task?.record ?? Deadline < today
                  ? "no entries"
                  : null
              }
            </p>
          </td>
          <td className="">
            <p
              className={
                Deadline <= today
                  ? // task?.record < task?.target || !task?.record
                    // ? "bg-danger text-muted bg-opacity-25 p-1 m-0"
                    // : Deadline <= today && task?.record >= task?.target
                    // ? "bg-success text-muted bg-opacity-25 p-1 m-0"
                    // : "text-danger bg-opacity-25 p-1 m-0"
                    "bg-secondary text-muted bg-opacity-25 p-2 m-0"
                  : "bg-opacity-25 p-2 m-0"
              }
            >
              {assigned}
            </p>
          </td>
          <td
          // className={
          // Deadline > today ? "border-danger border-2": ""}
          >
            <p
              className={
                Deadline <= today
                  ? task?.record < task?.target || !task?.record
                    ? "bg-secondary text-muted fw-bolder bg-opacity-25 p-2 m-0"
                    : Deadline <= today && task?.record >= task?.target
                    ? "bg-secondary text-muted fw-bolder bg-opacity-25 p-2 m-0"
                    : "text-danger bg-opacity-25 p-2 m-0"
                  : "fw-bold text-danger p-2 m-0"
              }
            >
              {Deadline}
            </p>
          </td>
          {/* <td className=""></td> */}

          {Deadline <= today ? (
            !task.record || task?.target > task?.record ? (
              <>
                <td className="">
                  <p
                    onClick={() => setTaskEnd(task)}
                    className="btn btn-outline-danger w-100 z-3 m-0 p-2"
                  >
                    close task
                  </p>
                </td>
                {/* <td className=""></td> */}
                <td className="">
                  <p className="fw-bolder text-white bg-danger m-0 p-2">
                    Failed
                    {/* <FontAwesomeIcon icon={faXmark} size="2xl" /> */}
                  </p>
                </td>
              </>
            ) : (
              <>
                <td className="">
                  <p
                    onClick={() => setTaskEnd(task)}
                    className="p-2 m-0 btn btn-outline-success w-100"
                  >
                    close task
                  </p>
                </td>
                {/* <td className=""></td> */}
                <td className="">
                  <p className="text-white bg-success fw-bolder m-0 p-2">
                    success
                    {/* <FontAwesomeIcon icon={faCheck} size="2xl" /> */}
                  </p>
                </td>
              </>
            )
          ) : (
            <>
              <td className=" rounded-3">
                <p
                  type="button"
                  className="btn btn-outline-warning bg-opacity-25 text-primary border-2 w-100 m-0 p-2"
                  data-bs-toggle="modal"
                  data-bs-target={"#updateTaskModal" + task?._id}
                >
                  edit task
                </p>
              </td>
              {/* <td className=""></td> */}
              <td className="">
                <p className="bg-warning bg-opacity-25 m-0 p-2 text-primary">
                  open
                </p>
              </td>
            </>
          )}

          {!task && (
            <>
              <td className="">
                <button className="btn btn-danger opacity-75 w-50">
                  no current task to display
                </button>
                )
              </td>
            </> //)
          )}
        </tr>
        {!task && (
          <td className="">
            <button className="btn btn-danger opacity-75 w-50">
              no current task to display
            </button>
            )
          </td>
        )}
      </>

      {showCompletedTasks && (
        <>
          <div className="w-100 mt-5" id="recent">
            <div className="bg-danger opacity-50 d-flex justify-content-center text-red align-items-center">
              <p
                className="d-flex justify-content-center align-items-center text-white text-center fw-bold "
                style={{ cursor: "pointer" }}
              >
                <span className="text-center ">Completed Tasks</span>
              </p>
            </div>
          </div>
          <Table
            bordered
            striped
            className="opacity-75 mb-3 table table-striped-columns"
          >
            <thead className="bg-white">
              <tr>
                <th className="col-1">task no</th>
                <th>task</th>
                <th>target</th>
                <th>record</th>
                <th>assignment date</th>
                <th>deadline</th>
              </tr>
            </thead>
            <tbody>
              {tasksCompleted.map((task) => (
                <tr className="bg-success">
                  <td>uu</td>
                  <td className="m-auto">{task?.record}</td>
                  <td>{task?.target}</td>
                  <td>{task?.record}</td>
                  <td className="m.auto">{task?.createdAt}</td>
                  <td>{task?.deadline}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
      <td
        className="modal fade"
        id={"updateTaskModal" + task?._id}
        data-bs-backdrop="false"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateTask task={task} />
      </td>
    </React.Fragment>
  );
};

export default Task;
