import React, { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { TargetContext } from "../contexts/TargetContext";
import { RecordContext } from "../contexts/RecordContext";
import Table from "react-bootstrap/Table";
import AddTask from "./AddTask.js";
import AddTarget from "./AddTarget.js";
import UpdateTarget from "./UpdateTarget.js";
import UpdateRecord from "./UpdateRecord.js";
import UpdateTask from "./UpdateTask";
import AddRecord from "./AddRecord";

const Task = ({ task, student }) => {
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [disabledTarget, setDisabledTarget] = useState(false);
  const [disabledRecord, setDisabledRecord] = useState(false);
  const [tasksCompleted, setTasksCompleted] = useState([]);

  const {
    taskList,
    setTaskList,
    getTasks,
    setTaskCompleted,
    setTask,
  } = useContext(TaskContext);

  const { targetList, getTargets, setTarget } = useContext(TargetContext);
  console.log(targetList || "");

  const { recordList, getRecords, setRecord } = useContext(RecordContext);
  console.log(recordList);

  const setTaskEnd = (task) => {
    console.log(task?.isCompleted);
    task.isCompleted = !task.isCompleted;
    setTaskCompleted(task);
    setDisabled(!disabled);
    setDisabledTarget(!disabledTarget);
    setDisabledRecord(!disabledRecord);
    setTaskList();
  };

  let target = "";
  if (targetList && targetList.length) {
    target = targetList?.find((target) => target?.task === task?._id); //  targetList ??  (targetList?.find((target) => target?.task === task?._id));
  }

  console.log(target ?? "no targets");

  let record = "";

  if (recordList && recordList.length) {
    record = recordList?.find((record) => record?.task === task?._id);
  }
  console.log(record ?? "no records");

  const setDisableTask = () => {
    setDisabled(!disabled);
  }

  const setDisableTarget = () => {
    setDisabledTarget(!disabledTarget);
  }

  const setDisableRecord = () => {
    setDisabledRecord(!disabledRecord);
  }


  const handleClick = () => {
    // getTaskList();
    if(taskList && taskList.length) {
    setTasksCompleted(taskList?.filter((task) => task.isCompleted === true))};
    console.log(tasksCompleted);
    setShowCompletedTasks(!showCompletedTasks);
  };
  // console.log(student.Tasks.filter((task) => task.isCompleted === true));

  return (
    <React.Fragment>
      
      <td className="">
        <p
          className={
            target?.target1 <= record?.record1
              ? " bg-secondary text-dark bg-opacity-25 "
              : "bg-danger text-light "
          }
        >
          {task?.task1}
        </p>
        <p className="border d-flex justify-content-between px-1 py-1">
          target:
          <mark className="border">
            <span
              className={
                target?.target1 <= record?.record1
                  ? " text-success fw-bold mx-3 w-30 m-0  "
                  : "text-danger fw-bold mx-3 w-30 m-0 "
              }
            >
              {target?.target1}
            </span>
          </mark>
        </p>
        <p className=" border d-flex justify-content-between px-1 py-1">
          record:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-3">
              {record?.record1}
            </span>
          </mark>
        </p>
      </td>
      <td>
        <p
          className={
            target?.target2 <= record?.record2
              ? " bg-secondary text-dark bg-opacity-25 "
              : "bg-danger text-light "
          }
        >
          {task?.task2}
        </p>
        <p className="border d-flex justify-content-between px-1 py-1">
          target:
          <mark className="border">
            <span
              className={
                target?.target2 <= record?.record2
                  ? " text-success fw-bold mx-3 w-30 m-0  "
                  : "text-danger fw-bold mx-3 w-30 m-0 "
              }
            >
              {target?.target2}
            </span>
          </mark>
        </p>

        <p className="border d-flex justify-content-between px-1 py-1">
          record:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-3">
              {record?.record2}
            </span>
          </mark>
        </p>
      </td>

      <td>
        <p
          className={
            target?.target3 <= record?.record3
              ? " bg-secondary text-dark bg-opacity-25 "
              : "bg-danger text-light "
          }
        >
          {task?.task3}
        </p>
        <p className="border d-flex justify-content-between px-1 py-1">
          target:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-3">
              {target?.target3}
            </span>
          </mark>
        </p>

        <p className="border d-flex justify-content-between px-1 py-1">
          record:
          <mark className="border">
            <span className="w-30 m-0 text-danger fw-bold mx-3">
              {record?.record3}
            </span>
          </mark>
        </p>
      </td>

      <td>
        <p
          className={
            target?.target4 <= record?.record4
              ? " bg-secondary text-dark bg-opacity-25 "
              : "bg-danger text-light "
          }
        >
          {task?.task4}
        </p>
        <p className="border d-flex justify-content-between px-1 py-1">
          target:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-3">
              {target?.target4}
            </span>
          </mark>
        </p>

        <p className="border d-flex justify-content-between px-1 py-1">
          record:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-3">
              {record?.record4}
            </span>
          </mark>
        </p>
      </td>

      <td>
        <p
          className={
            target?.target5 <= record?.record5
              ? "bg-secondary text-dark bg-opacity-25"
              : "bg-danger text-light "
          }
        >
          {task?.task5}
        </p>
        <p className="border d-flex justify-content-between px-1 py-1 ">
          <span>target:</span>
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-3 ">
              {target?.target5}
            </span>
          </mark>
        </p>

        <p className="border d-flex justify-content-between px-1 py-1">
          record:
          <mark className="border">
            <span className=" w-30 m-0 text-danger fw-bold mx-3">
              {record?.record5}
            </span>
          </mark>
        </p>
      </td>
      <td className="d-flex flex-column ">
        <button
          type="button"
          disabled={disabled}
          onClick={setDisableTask}
          className="btn btn-outline-primary opacity-75 w-20 my-1 "
          data-bs-toggle="modal"
          data-bs-target={"#addTaskModal" + task?.id}
        >
          add task
        </button>
        <button
          type="button"
          className="btn btn-outline-primary opacity-75 w-20 my-1  "
          data-bs-toggle="modal"
          data-bs-target={"#updateTaskModal" + task?.id}
        >
          update task
        </button>
        <button
          type="button"
          disabled={disabledTarget}
          onClick={setDisableTarget}
          className="btn btn-outline-primary opacity-75 w-20 my-1 "
          data-bs-toggle="modal"
          data-bs-target={"#addTargetModal" + target?.id}
        >
          add target
        </button>
        <button
          type="button"
          className="btn btn-outline-primary opacity-75 w-20 my-1"
          data-bs-toggle="modal"
          data-bs-target={"#updateTargetModal" + target?.id}
        >
          update target
        </button>
        <button
          type="button"
          disabled={disabledRecord}
          onClick={setDisableRecord}
          className="btn btn-outline-primary opacity-75 w-20 my-1 "
          data-bs-toggle="modal"
          data-bs-target={"#addRecordModal" + record?.id}
        >
          add record
        </button>
        <button
          type="button"
          className="btn btn-outline-primary opacity-75 w-20 my-1"
          data-bs-toggle="modal"
          data-bs-target={"#updateRecordModal" + record?.id}
        >
          update record
        </button>
        {task ? (
          <button
            onClick={() => setTaskEnd(task)}
            className="btn btn-primary opacity-75 w-20 my-1"
          >
            mark task as completed
          </button>
        ) : (
          <button className="disabled btn btn-danger opacity-75 w-20 my-1">no current task to display</button>
          
        )}
        
          <button
                    onClick={() => handleClick()}
                    className="btn btn-primary opacity-75 w-70 disabled"
                  >
                    Completed Tasks
                  </button> 
      </td>
      <tr>
        <td>
      
        </td>
      </tr>
      
      {showCompletedTasks && (
                    <>
                    <tr>
                      <div className="w-100 mt-5 shadow-lg" id="recent">
                        <div className="bg-danger opacity-50 d-flex justify-content-center text-red align-items-center">
                          <p
                            // onClick={handleClick}
                            className="d-flex justify-content-center align-items-center text-white text-center fw-bold "
                            style={{ cursor: "pointer" }}
                          >
                            <span className="text-center ">
                              Completed Tasks
                            </span>
                          </p>
                        </div>
                      </div>
                      <Table
                        bordered
                        className="opacity-75 mb-3 shadow-lg recent-table"
                      >
                        <thead className="bg-white">
                          <tr>
                            {/* <th>student tasks</th> */}
                            <th className="col-1">task no</th>
                            <th>task1</th>
                            <th>task2</th>
                            <th>task3</th>
                            <th>task4</th>
                            <th>task5</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tasksCompleted.map((task)=>(
                          <tr>
                            <td></td>
                            <td>{task.task1}</td>
                            <td>{task.task2}</td>
                            <td>{task.task3}</td>
                            <td>{task.task4}</td>
                            <td>{task.task5}</td>
                          </tr>)
)}
                        </tbody>
                      </Table>
                      </tr>
                    </>
                  )}
   

      <div
        className="modal fade"
        id={"addTaskModal" + task?.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <AddTask task={task} />
      </div>
      <div
        className="modal fade"
        id={"updateTaskModal" + task?.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateTask task={task} />
      </div>
      <div
        className="modal fade"
        id={"addTargetModal" + target?.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <AddTarget target={target} task={task} />
      </div>
      <div
        className="modal fade"
        id={"updateTargetModal" + target?.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateTarget target={target} />
      </div>
      <div
        className="modal fade"
        id={"addRecordModal" + record?.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <AddRecord record={record} task={task} />
      </div>
      <div
        className="modal fade"
        id={"updateRecordModal" + record?.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <UpdateRecord record={record} />
      </div>
    </React.Fragment>
  );
};

export default Task;
