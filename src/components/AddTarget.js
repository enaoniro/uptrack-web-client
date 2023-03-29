import React, { useContext, useState, useEffect } from "react";
import { TargetContext } from "../contexts/TargetContext";

const AddTarget = ({ target }) => {
  const [addedTarget, setAddedTarget] = useState(target);
  const { addTarget, getTargetList } = useContext(TargetContext);
  const [targetList, setTargetList ] = useState([])


  useEffect(() => {
    getTargetList();
  }, []);

  const handleChange = (e) => {
    setAddedTarget({ ...addedTarget, [e.target.name]: e.target.value });
  };

  console.log(addedTarget)

  const handleSubmit = (e) => {
    e.preventDefault();
    addTarget(addedTarget);
    setTargetList();

  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            add target
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
            <h6>risale sayfa adedi</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="risale name"
                name="task1"
                value={addedTarget?.task1 || ""}
                onChange={handleChange}
              />
              <h6>pirlanta sayfa adedi</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="pirlanta adi"
                name="task2"
                value={addedTarget?.task2 || ""}
                onChange={handleChange}
              />
              <h6>namaz</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="namaz"
                name="task3"
                value={addedTarget?.task3 || ""}
                onChange={handleChange}
              />
              <h6>cevsen bab sayisi</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="cevsen"
                name="task4"
                value={addedTarget?.task4 || ""}
                onChange={handleChange}
              />
              <h6>devam</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="devam"
                name="task5"
                value={addedTarget?.task5 || ""}
                onChange={handleChange}
              /> 
             <h6>TaskId</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="taskid"
                name="TaskId"
                value={addedTarget?.TaskId || ""}
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
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTarget;
