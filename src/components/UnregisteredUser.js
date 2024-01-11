import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Table from "react-bootstrap/Table";
import AddStudent from "./AddStudent.js";
import Student from "./Student.js";
import { useEffect, useState } from "react";
import { StudentContext } from "../contexts/StudentContext.js";
import { GrupContext } from "../contexts/GrupContext.js";
// import ListGrup from "react-bootstrap/ListGrup";
import Button from "react-bootstrap/Button";
// import ListGrupItem from "react-bootstrap/esm/ListGrupItem.js";
import StudentList from "./StudentList.js";

function UnregisteredUser({ user }) {
  const [showDetails, setShowDetails] = useState(false);
  const [grupStudents, setGrupStudents] = useState([]);
  //   const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  console.log("grup leader is rendered");

  //   console.log(user);

  const {
    studentList,
    student,
    isOpen,
    setIsOpen,
    setStudentsInGrup,
    studentsInGrup,
    getStudentsInGrup,
  } = useContext(StudentContext);

  const { grupList } = useContext(GrupContext);

  console.log(grupList);

  const grup = grupList?.find((grup) => grup?.email === user.email);
   console.log(grup);

  //   const logoutWithRedirect = () =>
  //     logout({
  //       returnTo: window.location.origin,
  //     });

  //  const students = grupList.map(grup=>grup.Students).map(student=>student.GrupId)
  //  console.log(students)

  const handleClick = () => {
    // setGrupStudents(grup.Students)
    setShowDetails(!showDetails);
  };

  if (!grup) {
    return <div>Loading...</div>;
  }

  // const grup = studentList.filter((student) => student.GrupId);
  // console.log(grupOneStudent);

  return (
    <div id="main">
      <div className="container-fluid m-0 p-0">
        <header
          className="w-100 navbar navbar-expand-lg shadow-sm bg-white mb-3 p-3"
          id="header"
        >
          {/* <a
            href="/"
            className="d-flex align-items-center text-primary text-decoration-none"
          >
            <span className="fs-5">uptrack</span>
          </a> */}
          <div className="navbar-collapse offcanvas-collapse">
            <ul className="d-flex align-items-center navbar-nav me-auto mb-5 mb-lg-0">
              {/* <li className="nav-item">
                <span className="fs-5 p-1 text-primary"> | </span>
              </li> */}

              {/* <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li> */}

              {/* <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                    </li> */}
              <li className="nav-item">
                <a
                  className="nav-link text-primary"
                  href="https://uptrack.onrender.com/"
                >
                  Group Page
                </a>
              </li>
              {/* <li className="nav-item">
                      <a className="nav-link" href="#">tasks</a>
                    </li> */}
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto m-1 mb-lg-0">
                <li>
                  <span className="user-info">
                    {/* <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="40"
                    /> */}
                    <h6 className="d-inline-block text-danger p-1 me-1">
                      {user.username}{" "}
                    </h6>
                  </span>
                  {/* <button
                    className="btn btn-outline-danger"
                    // onClick={() => logoutWithRedirect()}
                  >
                    Logout
                  </button> */}
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div className="container-fluid bg-white" id="innerdiv">
          <div className="row">
            <div className="col-md-1 text-primary m-1 mt-3" id="listebox">
              <button
                onClick={handleClick}
                // type="button"
                className="btn btn-outline-success fs-6 w-100 mb-2"
                // data-bs-toggle="modal"
                // data-bs-target={"#addStudentModal"}
              >
                add student
              </button>
              <button
                onClick={handleClick}
                // type="button"
                className="btn btn-success fs-6 w-100 disabled"
                // data-bs-toggle="modal"
                // data-bs-target={"#addStudentModal"}
              >
                group students
              </button>
            </div>
            <div className="col-md-10 p-1 my-3" id="details-div">
              <div
                id="schweiz"
                className="d-flex shadow-sm align-items-center justify-content-center mb-1"
              >
                <p className="fw-bolder fs-5">Group Name :</p>
                <p className="text-secondary fs-5 fw-bolder">{grup?.groupname}</p>
              </div>
              <div className="w-90 h-100 m-5" id="form-div">
                {showDetails ? (
                  <AddStudent
                    showDetails={showDetails}
                    setShowDetails={setShowDetails}
                    grup={grup}
                  />
                ) : (
                  <StudentList grup={grup} />
                )}
              </div>
              {/* <div
                  className="modal fade"
                  id={"addStudentModal"}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <AddStudent />
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnregisteredUser;
