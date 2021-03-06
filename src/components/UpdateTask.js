import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext.js";

const UpdateTask = ({ task }) => {
  const [updatedTask, setUpdatedTask] = useState(task);
  const { updateTask } = useContext(TaskContext);

  const handleChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(updatedTask);
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
            <h6>risale adi</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="risale name"
                name="risale"
                value={updatedTask.risale}
                onChange={handleChange}
              />
              <h6>pirlanta adi</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="pirlanta adi"
                name="pirlanta"
                value={updatedTask.pirlanta}
                onChange={handleChange}
              />
              <h6>namaz</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="namaz"
                name="namaz"
                value={updatedTask.namaz}
                onChange={handleChange}
              />
              <h6>cevsen</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="cevsen"
                name="cevsen"
                value={updatedTask.cevsen}
                onChange={handleChange}
              />
              <h6>devam</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="devam"
                name="devamlilik"
                value={updatedTask.devamlilik}
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
              update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
