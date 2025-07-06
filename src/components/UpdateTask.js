import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

const UpdateTask = ({ task }) => {
  const [updatedTask, setUpdatedTask] = useState(task);
  const { updateTask, taskList, setTaskList, getTasks } = useContext(TaskContext);

  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
    // setTaskList(prevTasks => [...prevTasks, updatedTask]);
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Update Task
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
                value={updatedTask?.taskName || "" }
                onChange={handleChange}
              />
              <h6>target</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="target"
                name="target"
                value={updatedTask?.target || ""}
                onChange={handleChange}
              />
              <h6>record</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="record"
                name="record"
                value={updatedTask?.record || ""}
                onChange={handleChange}
              />
              <h6>assignment date</h6>
              <input
                type="date"
                className="form-control bg-info"
                placeholder="assignmetn date"
                name="assignedAt"
                value={updatedTask?.assignedAt || ""}
                onChange={handleChange}
              />
              <h6>deadline</h6>
              <input
                type="date"
                className="form-control bg-info"
                placeholder="deadline"
                name="deadline"
                value={updatedTask?.deadline}
                onChange={handleChange}
              />
               {/* <h6>is comlpleted</h6>
              <input
                type=""
                className="form-control bg-info"
                placeholder="deadline"
                name="deadline"
                value={updatedTask?.deadline || ""}
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
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
