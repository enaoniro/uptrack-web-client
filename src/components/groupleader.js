import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Table from "react-bootstrap/Table";
import AddStudent from "./AddStudent.js";
import Student from "./Student.js";
import { useEffect, useState } from "react";
import { StudentContext } from "../contexts/StudentContext.js";
import { GroupContext } from "../contexts/GroupContext.js";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem.js";
import StudentList from "./StudentList.js";

function GroupLeader() {
  
  const [showDetails, setShowDetails] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  console.log(user)
  
  

  const { studentList, student, isOpen, setIsOpen, setStudentsInGroup, studentsInGroup, getStudentsInGroup } =
    useContext(StudentContext);

  const { groupList} = useContext(GroupContext);

  console.log(groupList)  

  const group = groupList.filter(group=>group.name == user.email)
  console.log(group)
  

  
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  //  const students = groupList.map(group=>group.Students).map(student=>student.GroupId)
  //  console.log(students)



  const handleClick = () => {
  //   const id = group.id 
  //   const students = getStudentsInGroup(id)
  // return setStudentsInGroup(students)
  
    setShowDetails(true);
  };

  

  // const group = studentList.filter((student) => student.GroupId);
  // console.log(groupOneStudent);

  

  return (
    <div id="main">
      <main>
        <div className="container-fluid">
          <header className=" m-3 navbar navbar-expand-lg" id="header">
            <a
              href="/"
              className="d-flex align-items-center text-primary text-decoration-none"
            >
              <span className="fs-5">uptrack</span>
            </a>
            <div className="navbar-collapse offcanvas-collapse">
              <ul className="d-flex align-items-center navbar-nav me-auto mb-5 mb-lg-0">
                <li className="nav-item">
                  <span className="fs-5 p-1 text-primary"> | </span>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>

                <>
                  {/* <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                    </li> */}
                  <li className="nav-item">
                    <a
                      className="nav-link text-primary"
                      href="http://localhost:3000/canton"
                    >
                      Group Page
                    </a>
                  </li>
                  {/* <li className="nav-item">
                      <a className="nav-link" href="#">tasks</a>
                    </li> */}
                </>
              </ul>
              <div className="d-flex">
                <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                  <li>
                    <span className="user-info">
                    {/* <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="40"
                    /> */}
                    {/* <h6 className="d-inline-block p-1">{user.name} </h6> */}
                  </span>
                    {/* <h6 className="d-inline-block p-1 text-primary mx-3">
                    {user.name}
                  </h6> */}

                    <button
                      className="btn bg-success btn-outline-light"
                      onClick={() => logoutWithRedirect()}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          
            <div className="container-fluid bg-light mr-5 p-1" id="innerdiv">
            <div className="row">
              <div className="col-lg-2 text-primary p-3" id="listebox">
            <div className="w-100 text-align-center">
                {/* <div
                  className=" text-primary p-1 border-outline-primary"
                  id="listebox"
                >
                  <div className="w-100 bg-primary d-flex align-content-center justify-content-center">
                    <h5 className="text-white bg-primary">students</h5>
                  </div>
                  <div>
                    <ListGroup>{student}</ListGroup>
                  </div> */}
                {/* <button
                  className="w-100 m-1 btn btn-primary text-white"
                  type="button"
                  onClick={() => handleClick()}
                >
                  Students
                </button>
                <br></br> */}
                {/* <button
                    className="w-100 m-1 btn bg-success text-white btn-outline-success"
                    type="button"
                    onClick={() => setIsOpen(isOpen ? false : true)}
                  >
                    ADD Student
                  </button> */}
                <button
                  type="button"
                  className="btn btn-success fs-6 w-100 m-1"
                  data-bs-toggle="modal"
                  data-bs-target={"#addStudentModal"}
                >
                  Add student
                </button>
                {/* </div> */}
              </div>
              </div>
              <div className="col-md-10" id="details-div">
                <div
                  id="schweiz"
                  className="bg-primary d-flex align-content-center justify-content-center"
                >
                  <p className="text-white fw-bold"></p>
                </div>
                <div className="h-100 bg-light" id="form-div">
                  {/* {isOpen && <AddStudent />} */}
                  <StudentList group={group} />
                </div>
                <div
                  className="modal fade"
                  id={"addStudentModal"}
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <AddStudent student={student} />
                </div>
              </div>
            </div>

            <footer className="pt-3 mt-4 text-primary border-top border-gray">
              <p id="copyright">can &copy; 2022</p>
            </footer>
          </div>
          </div>
      </main>
    </div>
  );
}

export default GroupLeader;
