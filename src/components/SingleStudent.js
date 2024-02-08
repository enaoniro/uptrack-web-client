import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StudentContext } from "../contexts/StudentContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import { GrupContext } from "../contexts/GrupContext";
import { TargetContext } from "../contexts/TargetContext";
import { RecordContext } from "../contexts/RecordContext";
import { TaskContext } from "../contexts/TaskContext";
import UpdateStudent from "./UpdateStudent";
import AddTask from "./AddTask.js";
import Task from "./Task.js";
import AddTarget from "./AddTarget.js";
import UpdateTarget from "./UpdateTarget.js";
import UpdateRecord from "./UpdateRecord.js";
import UpdateTask from "./UpdateTask";
import AddRecord from "./AddRecord";

const SingleStudent = () => {
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [tasksCompleted, setTasksCompleted] = useState([]);
  console.log(tasksCompleted);
  // const [ record, setRecord ] = useState({})
  // console.log("single student rendered");

  const {
    studentList,
    getStudentById,
    setStudent,
    deleteStudent,
    updateStudent,
    isOpen,
    setIsOpen,
  } = useContext(StudentContext);

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  let { id } = useParams();

  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    getStudentById(id);
  }, [id]);

  const { grupList } = useContext(GrupContext);

  const {
    taskList,
    setTaskList,
    getTasks,
    setTaskCompleted,
    setTask,
  } = useContext(TaskContext);


  const student = studentList?.find((student) => student._id == id);


  if (!studentList || !student) {
    return <div>no students found , please add student</div>;
  }

  console.log(student);

  console.log(taskList);


let task = "";

if(taskList && taskList.length){
  task = taskList?.find(
    (task) => task?.student === student?._id && task?.isCompleted === false);
  };



//   console.log(task ?? "no tasks");

//   let target = "";

//   if(targetList && targetList.length) {

//   const target = targetList?.find((target) => target?.task === task?._id);

//   return target;

//   };

//   console.log(target ?? "no targets");

//   let record  = "";

//   if(recordList && recordList.length) {

//   const record = recordList.find((record) => record?.task === task?._id);

//   return record;
//   };

//   console.log(record ?? "no records");

//   const setTaskEnd = (task) => {
//     console.log(task?.isCompleted);
//     task.isCompleted = !task.isCompleted;
//     setTaskCompleted(task);
//     setTaskList();
//   };

  const confirmDelete = () => {
    let isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    // Check the user's choice
    if (isConfirmed) {
      deleteStudent(id);
      // User clicked OK, proceed with deletion
      // Perform the deletion logic here, for example:

      console.log("Deleting item with ID: ");
      // Perform the actual deletion operation, e.g., send a request to the server
    } else {
      // User clicked Cancel, do nothing or provide feedback
      console.log("Deletion canceled by the user");
    }
  };

  // const handleClick = () => {
  //   // getTaskList();

  //   setTasksCompleted(taskList.filter((task) => task.isCompleted === true));
  //   console.log(tasksCompleted);
  //   setShowCompletedTasks(!showCompletedTasks);
  // };
  // console.log(student.Tasks.filter((task) => task.isCompleted === true));

  // if (!student) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <div id="main">
        <div className="container-fluid d-flex flex-column justify-content-center">
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
                <li className="nav-item text-align-center">
                  <a className="nav-link text-primary" href="/">
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
                    {/* <span className="user-info">
                      <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="40"
                    />
                      <h6 className="d-inline-block p-1 me-1">{user.name} </h6>
                    </span>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => logoutWithRedirect()}
                    >
                      Logout
                    </button> */}
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className="container-fluid bg-white" id="innerdiv">
            <div className="row ">
              <div className="col-lg-1 text-primary p-3 mt-2" id="listebox">
                <div className="d-flex flex-column m-0 text-align-center justify-content-center">
                  {/* <div className="w-100 text-align-center"> */}
                  <button
                    type="button"
                    className="btn btn-outline-primary opacity-75 w-20 my-1"
                    data-bs-toggle="modal"
                    data-bs-target={"#updateStudentModal" + student?.id}
                  >
                    Edit student
                  </button>
                  
                  <button
                    // disabled
                    onClick={() => {
                      confirmDelete();
                    }}
                    className="btn btn-outline-danger opacity-75 w-20"
                  >
                    delete student
                    </button>
                  {/* <button
                    onClick={() => handleClick()}
                    className="btn btn-primary opacity-75 w-20"
                  >
                    Completed Tasks
                  </button> */}
                </div>
              </div>
              <div className="col-lg-10 bg-white mt-2" id="details-div">
                <Container fluid className="w-100 mt-5 bg-white">
                  <Table
                    bordered
                    responsive
                    // className="bg-white shadow-lg mt-3 table-responsive"
                  >
                    <thead className="bg-white">
                      <tr>
                        <th>student details</th>
                       
                        <th>task1</th>
                        <th>task2</th>
                        <th>task3</th>
                        <th>task4</th>
                        <th>task5</th>
                        <th>task actions</th>
                        {/* <th className="bg-primary text-light opacity-75">actions</th> */}
                      </tr>
                    </thead>

                    <tbody>
                      <tr key={student.id}>
                        <td className="text-capitalize text-center text-secondary bg-white fw-bolder text-start ">
                          <span className="d-block">
                            <img
                              style={{ width: "100%" }}
                              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/310.jpg"
                              //"https://via.placeholder.com/150"
                            />
                          </span>
                          <p className="d-flex justify-content-around">
                            {/* <span className="text-black align-content-md-between">
                            name :
                          </span> */}
                            <span>
                              {student.first_name} {student.last_name}
                            </span>
                          </p>
                          <br></br>
                          <span className=" text-black">
                            email : {student.email}
                          </span>
                          <br></br>
                          <span className="text-black">
                            group :{student.groupname}
                          </span>
                          <br></br>
                          <span className="text-black">{student.id}</span>
                          {/* <br></br>
                          <span className="text-black">{task?.id}</span>
                          <br></br> */}
                          {/* <span className="text-black">Targetid :{target?.id}</span> */}
                        </td>
                         <Task task={task}/>
                       

                      
                      </tr>
                      
                    </tbody>
                  </Table>

                  <div
                    className="modal fade"
                    id={"updateStudentModal" + student?.id}
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <UpdateStudent student={student} />
                  </div>

                 

                  {showCompletedTasks && (
                    <>
                      <div className="w-100 mt-5 shadow-lg" id="recent">
                        <div className="bg-danger opacity-50 d-flex justify-content-center text-red align-items-center">
                          <p
                            // onClick={handleClick}
                            className="d-flex justify-content-center align-items-center text-white text-center fw-bold "
                            style={{ cursor: "pointer" }}
                          >
                            <span className="text-center ">
                              Completed Tasks
                            </span>
                          </p>
                        </div>
                      </div>
                      <Table
                        bordered
                        className="opacity-75 mb-3 shadow-lg recent-table"
                      >
                        <thead className="bg-white">
                          <tr>
                            {/* <th>student tasks</th> */}
                            <th className="col-1">task no</th>
                            <th>task1</th>
                            <th>task2</th>
                            <th>task3</th>
                            <th>task4</th>
                            <th>task5</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                           
                          </tr>
                          {/* {tasksCompleted
                            .sort(
                              (firstItem, secondItem) =>
                                secondItem.id - firstItem.id
                            )
                            .filter((task) => task.StudentId === student.id)
                            .map((task) => (
                              <tr
                                key={task.id}
                                className="bg-white bg-opacity-25 "
                              >
                                <td className="fw-bolder">{task.id}</td>
                                <td>
                                  {task.task1}
                                  <br></br>
                                  <p>{target?.task1}</p>
                                </td>
                                <td>{task.task2}</td>
                                <td>{task.task3}</td>
                                <td>{task.task4}</td>
                                <td>{task.task5}</td>
                              </tr>
                            ))} */}
                        </tbody>
                      </Table>
                    </>
                  )}
                  
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleStudent;
