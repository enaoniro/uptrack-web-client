import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../contexts/TaskContext.js";
import { useParams } from "react-router-dom";

const AddTask = (student) => {
  const [task, setTask] = useState({});
  const [taskList, setTaskList] = useState([]);

let { id } = useParams();

  const { updateTask, addTask, getTasks } = useContext(TaskContext);

  useEffect(() => {
    getTasks();
  }, []);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task, id);
    setTaskList();
    // getTasks();
    setTask("")
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            add Task
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
            <h6>task name</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="task name"
                name="taskName"
                value={task?.taskName || ""}
                onChange={handleChange}
              />
              <h6>target</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="target"
                name="target"
                value={task?.target || ""}
                onChange={handleChange}
              />
              <h6>record</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="record"
                name="record"
                value={task?.record || ""}
                onChange={handleChange}
              />
               <h6>assignment date</h6>
              <input
                type="date"
                className="form-control bg-info"
                placeholder="task4"
                name="assignedAt"
                value={task?.assignedAt || ""}
                onChange={handleChange}
              />
              <h6>deadline</h6>
              <input
                type="date"
                className="form-control bg-info"
                placeholder="task5"
                name="deadline"
                value={task?.deadline || ""}
                onChange={handleChange}
              /> 
               {/* <h6>student</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="studentid"
                name="student"
                defaultvalue={student._id}
                onChange={handleChange}
              /> */}
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
              add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
