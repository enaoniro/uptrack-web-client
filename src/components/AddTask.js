import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../contexts/TaskContext.js";

const AddTask = ({ task }) => {
  const [addedTask, setAddedTask] = useState(task);
  const [taskList, setTaskList] = useState([]);
  const { updateTask, addTask, getTaskList } = useContext(TaskContext);

  useEffect(() => {
    getTaskList();
  }, []);

  const handleChange = (e) => {
    setAddedTask({ ...addedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newtasklist = addTask(addedTask);
    setTaskList(newtasklist);
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add Task
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
            <h6>risale adi</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="risale name"
                name="task1"
                value={addedTask?.task1 || ""}
                onChange={handleChange}
              />
              <h6>pirlanta adi</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="pirlanta adi"
                name="task2"
                value={addedTask?.task2 || ""}
                onChange={handleChange}
              />
              <h6>namaz</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="namaz"
                name="task3"
                value={addedTask?.task3 || ""}
                onChange={handleChange}
              />
              <h6>cevsen</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="cevsen"
                name="task4"
                value={addedTask?.task4 || ""}
                onChange={handleChange}
              />
              <h6>devam</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="devam"
                name="task5"
                value={addedTask?.task5 || ""}
                onChange={handleChange}
              />
               <h6>studentid</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="studentid"
                name="StudentId"
                value={addedTask?.StudentId || ""}
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
              add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
