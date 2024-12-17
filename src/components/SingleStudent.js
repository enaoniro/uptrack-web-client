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
import CompletedTasks from "./CompletedTasks.js";
import UpdateStudent from "./UpdateStudent";
import AddTask from "./AddTask.js";
import Task from "./Task.js";
import AddTarget from "./AddTarget.js";
import UpdateTarget from "./UpdateTask.js";
import UpdateRecord from "./UpdateRecord.js";
import UpdateTask from "./UpdateTask";
import AddRecord from "./AddRecord";
import TaskList from "./TaskList.js";

const SingleStudent = () => {
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [tasksCompleted, setTasksCompleted] = useState([]);

  // const [ record, setRecord ] = useState({})
  // console.log("single student rendered");

  let { id } = useParams();

  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    getStudentById(id);
  }, [id]);

  const { taskList, setTaskList, getTasks, setTaskCompleted, setTask } =
    useContext(TaskContext);

  console.log(taskList);

  const {
    studentList,
    getStudentById,
    setStudent,
    deleteStudent,
    updateStudent,
    isOpen,
    setIsOpen,
  } = useContext(StudentContext);

  console.log(studentList);
  console.log(taskList);

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  const { grupList } = useContext(GrupContext);

  let task;

  const student = studentList?.find((student) => student._id == id);

  if (!studentList || !student) {
    return <div>no students found , please add student</div>;
  }

  console.log(student);

  const confirmDelete = () => {
    let isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (isConfirmed) {
      deleteStudent(id);
      console.log("Deleting item with ID: ");
    } else {
      console.log("Deletion canceled by the user");
    }
  };

  const studentCompletedTasks = taskList?.filter((task) => task.student == student._id && task.isCompleted == true)
    .reverse();
  console.log(studentCompletedTasks);

  const handleClick = () => {
    setShowCompletedTasks(!showCompletedTasks);
  };

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="main">
        <div className="container-fluid d-flex flex-column justify-content-center">
          <header
            className="w-100 navbar border-bottom border-3  navbar-expand-lg bg-white my-3 p-3"
            id="header"
          >
            <div className="navbar-collapse offcanvas-collapse">
              <ul className="d-flex align-items-center navbar-nav me-auto mb-5 mb-lg-0">
                <li className="nav-item text-align-center">
                  <a className="nav-link text-primary" href="/">
                    Group Page
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <ul className="navbar-nav me-auto m-1 mb-lg-0">
                  <li></li>
                </ul>
              </div>
            </div>
          </header>
          <div className="container-fluid bg-white" id="innerdiv">
            <div className="row single">
              <div className="col-sm-12 col-lg-1 text-primary bg-white z-0 p-3 my-3 border border-0 listebox">
                <div className="d-flex h-100 flex-column m-0 text-align-center justify-content-between">
                  <div className="">
                    <button
                      type="button"
                      className="btn btn-primary text-light mt-2 opacity-75 w-100"
                      data-bs-toggle="modal"
                      data-bs-target={"#addTaskModal" + student.id}
                    >
                      add task
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary opacity-75 w-100 mt-2"
                      data-bs-toggle="modal"
                      data-bs-target={"#updateStudentModal" + student?.id}
                    >
                      Edit student
                    </button>

                    <button
                      onClick={() => handleClick()}
                      className="btn btn-outline-success mt-2 opacity-75 w-100"
                    >
                      Completed Tasks
                    </button>
                  </div>
                  <div className="mb-3">
                    <button
                      // disabled
                      onClick={() => {
                        confirmDelete();
                      }}
                      className="btn btn-danger me-0 text-light mt-2 opacity-75 w-100"
                    >
                      delete student
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-10 d-flex align-items-center justify-content-center bg-white m-3 "
                id="details-div"
              >
                <Container
                  fluid
                  className="w-100 flex-column m-3 bg-white d-flex "
                >
                  <div className="d-flex flex-lg-row flex-sm-column  ">
                    <div className="col-lg-2 d-md-table-row">
                      <Table bordered responsive>
                        <thead className="bg-white">
                          <tr></tr>
                        </thead>

                        <tbody>
                          <tr key={student.id}>
                            <td className="text-capitalize text-secondary bg-white fw-bolder ">
                              <span className="">
                                <img
                                  style={{ width: "100%", height: "100%" }}
                                  src="/my_photo.jpg"
                                  //"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/310.jpg"
                                  //"https://via.placeholder.com/150"
                                />
                              </span>
                              <span className="">
                                <span>
                                  {student.first_name} {student.last_name}
                                </span>
                              </span>
                              <br></br>
                              {/* email :{" "} */}
                              <span className=" text-black">
                                {student.email}
                              </span>
                              <br></br>
                              {/* group :
                              <span className="text-black">
                                {student.GrupId}
                              </span> */}
                              {/* <br></br>
                              student id:
                              <span className="text-black">{student.id}</span> */}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    <div className="col-lg-10 col-sm-12 align-self-md-stretch bg-body-secondary ">
                      <div className="tasks-header  d-flex flex-column border justify-content-between ">
                        <div className="d-flex justify-content-center align-items-center m-auto">
                          <h5 className="text-primary">Tasks of the Student</h5>
                        </div>
                      </div>
                      <div>
                        <TaskList
                          student={student}
                          setTaskCompleted={setTasksCompleted}
                          tasksCompleted={tasksCompleted}
                          // task={task}
                        />
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id={"updateStudentModal" + student?.id}
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <UpdateStudent student={student} />
                    </div>
                    <div
                      className="modal fade"
                      id={"addTaskModal" + student.id}
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <AddTask task={task} student={student} />
                    </div>
                  </div>

                  <div className="my-5 col-lg-10 col-sm-12 me-0 align-self-end">
                    {showCompletedTasks && (
                     <CompletedTasks studentCompletedTasks={studentCompletedTasks}/>
                    )}
                  </div>
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
