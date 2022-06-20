import React, { useContext, useEffect, useState } from "react";
import { GroupContext } from "../contexts/GroupContext.js";

const AddGroup = () => {
  const [group, setGroup] = useState({});
  const [groupList, setGroupList] = useState([]);

  const { addGroup, getGroupList } = useContext(GroupContext);

 

  const handleOnChange = (e) => {
    setGroup({ ...group, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGroup(group);
    // setIsOpen(false);
  };

  return (
    <div id="form-container">
      <p color="blue">grup bilgilerini giriniz</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="name"
          value={group.name}
          placeholder="group name"
          onChange={handleOnChange}
        />

        <button type="submit" className="btn btn-primary mt-1">
          save
        </button>
      </form>
    </div>
  );
};

export default AddGroup;
