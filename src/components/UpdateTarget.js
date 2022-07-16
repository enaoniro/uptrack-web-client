import React, { useContext, useState } from "react";
import { TargetContext } from "../contexts/TargetContext";

const UpdateTarget = ({ target }) => {
  const [updatedTarget, setUpdatedTarget] = useState(target);
  const { updateTarget } = useContext(TargetContext);

  const handleChange = (e) => {
    setUpdatedTarget({ ...updatedTarget, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTarget(updatedTarget);
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Update Target
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
                type="text"
                className="form-control bg-info"
                placeholder="risale name"
                name="risale"
                value={updatedTarget.risale}
                onChange={handleChange}
              />
              <h6>pirlanta sayfa adedi</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="pirlanta adi"
                name="pirlanta"
                value={updatedTarget.pirlanta}
                onChange={handleChange}
              />
              <h6>namaz</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="namaz"
                name="namaz"
                value={updatedTarget.namaz}
                onChange={handleChange}
              />
              <h6>cevsen bab sayisi</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="cevsen"
                name="cevsen"
                value={updatedTarget.cevsen}
                onChange={handleChange}
              />
              <h6>devam</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="devam"
                name="devamlilik"
                value={updatedTarget.devamlilik}
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

export default UpdateTarget;
