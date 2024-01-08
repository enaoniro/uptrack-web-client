import React, { useState, useContext, useEffect } from "react";
import { GrupContext } from "../contexts/GrupContext";
import { StudentContext } from "../contexts/StudentContext";
import UpdateGrup from "./UpdateGrup";
import Table from "react-bootstrap/Table";
import StudentList from "./StudentList";
import Student from "./Student.js";
import { useNavigate } from "react-router-dom";

const Grup = ({ grup }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [grupStudents, setGrupStudents] = useState([]);
  const [grupName, setGrupName] = useState("");
  console.log(grup);

  const { grupList, deleteGrup } = useContext(GrupContext);
  const { studentList, setStudentList } = useContext(StudentContext);

  // console.log(grupStudents);

  const navigate = useNavigate();

  const handleClick = () => {
    setGrupStudents(studentList?.find((student) => student?.group === grup?._id));

    navigate(`/grup/${grup?._id}`);
  };

  return (
    <>
      <tr className="w-100 d-flex bg-white"  key={grup.id}>
        <td
          onClick={handleClick}
          style={{ cursor: "pointer" }}
          className="w-100 text-capitalize text-center d-flex justify-content-center align-items-center"
          // colSpan={2}
        >
          {/* <a className="text-decoration-none" href="http://localhost:3000/grup" >{grup.name}</a>  */}
          {grup._id}
        </td>
        <td
          onClick={handleClick}
          style={{ cursor: "pointer" }}
          className="w-100 text-capitalize text-center d-flex justify-content-center align-items-center"
          // colSpan={2}
        >
          {/* <a className="text-decoration-none" href="http://localhost:3000/grup" >{grup.name}</a>  */}
          {grup.email}
        </td>

        <td className="w-100 text-capitalize text-center d-flex justify-content-center align-items-center fw-bolder opacity-75">
          <button
            type="button"
            className="w-100 btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={"#updateGrupModal" + grup?._id}
          >
            Update Group
          </button>
          {/* </td>
              <td> */}
          <button
            onClick={() => deleteGrup(grup?._id)}
            className="w-100 btn btn-danger opacity-75 "
          >
            Delete Group
          </button>
        </td>
        <td
          className="modal fade"
          id={"updateGrupModal" + grup?._id}
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <UpdateGrup grup={grup} />
        </td>
      </tr>
    </>
  );
};

export default Grup;
