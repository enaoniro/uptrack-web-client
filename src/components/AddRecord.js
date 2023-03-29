import React, { useContext, useState, useEffect } from "react";
import { RecordContext } from "../contexts/RecordContext";

const AddRecord = ({ target }) => {
  const [addedRecord, setAddedRecord] = useState(target);
  const [recordList, setRecordList] = useState([]);
  const { addRecord, getRecordList } = useContext(RecordContext);
  

  useEffect(() => {
    getRecordList();
  }, []);

  const handleChange = (e) => {
    setAddedRecord({ ...addedRecord, [e.target.name]: e.target.value });
  };

  console.log(addedRecord)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newrecordlist = addRecord(addedRecord);
    setRecordList(newrecordlist);
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
                value={addedRecord?.task1 || ""}
                onChange={handleChange}
              />
              <h6>pirlanta sayfa adedi</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="pirlanta adi"
                name="task2"
                value={addedRecord?.task2 || ""}
                onChange={handleChange}
              />
              <h6>namaz</h6>
              <input
                type="text"
                className="form-control bg-info"
                placeholder="namaz"
                name="task3"
                value={addedRecord?.task3 || ""}
                onChange={handleChange}
              />
              <h6>cevsen bab sayisi</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="cevsen"
                name="task4"
                value={addedRecord?.task4 || ""}
                onChange={handleChange}
              />
              <h6>devam</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="devam"
                name="task5"
                value={addedRecord?.task5 || ""}
                onChange={handleChange}
              /> 
             <h6>TargetId</h6>
              <input
                type="number"
                className="form-control bg-info"
                placeholder="taskid"
                name="TargetId"
                value={addedRecord?.TargetId || ""}
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

export default AddRecord;
