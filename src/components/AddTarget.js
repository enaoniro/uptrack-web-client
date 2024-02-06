import React, { useContext, useState, useEffect } from "react";
import { TargetContext } from "../contexts/TargetContext";
import { StudentContext } from "../contexts/StudentContext";

const AddTarget = ({task}) => {
  const [target, setTarget] = useState({});
  const [targetList, setTargetList ] = useState([])


  const { addTarget, getTargets } = useContext(TargetContext);
  const { setStudentList } = useContext(StudentContext);

  const id = task?._id;


  useEffect(() => {
    getTargets();
  }, []);

  const handleChange = (e) => {
    setTarget({ ...target, [e.target.name]: e.target.value });
  };

  console.log(target)

  

  const handleSubmit = (e) => {
    e.preventDefault();
    addTarget(target, id);
    setTargetList();
    // getTargetList();
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
            <h6>target-1</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="target value"
                name="target1"
                value={target?.target1 || ""}
                onChange={handleChange}
              />
              <h6>target-2</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="target value"
                name="target2"
                value={target?.target2 || ""}
                onChange={handleChange}
              />
              <h6>target-3</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="target value"
                name="target3"
                value={target?.target3 || ""}
                onChange={handleChange}
              />
              <h6>target-4</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="target value"
                name="target4"
                value={target?.target4 || ""}
                onChange={handleChange}
              />
              <h6>target-5</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="target value"
                name="target5"
                value={target?.target5 || ""}
                onChange={handleChange}
              /> 
             {/* <h6>TaskId</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="taskid"
                name="TaskId"
                value={target?.TaskId || ""}
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

export default AddTarget;
