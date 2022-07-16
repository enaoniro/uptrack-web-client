import React, { useContext, useState } from "react";
import { RecordContext } from "../contexts/RecordContext.js";

const UpdateRecord = ({ record }) => {
  const [updatedRecord, setUpdatedRecord] = useState(record);
  const { updateRecord } = useContext(RecordContext);

  const handleChange = (e) => {
    setUpdatedRecord({ ...updatedRecord, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecord(updatedRecord);
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Update Record
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
                value={updatedRecord.risale}
                onChange={handleChange}
              />
              <h6>pirlanta sayfa adedi</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="pirlanta adi"
                name="pirlanta"
                value={updatedRecord.pirlanta}
                onChange={handleChange}
              />
              <h6>namaz</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="namaz"
                name="namaz"
                value={updatedRecord.namaz}
                onChange={handleChange}
              />
              <h6>cevsen bab sayisi</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="cevsen"
                name="cevsen"
                value={updatedRecord.cevsen}
                onChange={handleChange}
              />
              <h6>devam</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="devam"
                name="devamlilik"
                value={updatedRecord.devamlilik}
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

export default UpdateRecord;
