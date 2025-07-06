import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StudentContext } from "../contexts/StudentContext";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useAuth0, User } from "@auth0/auth0-react";
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
import StudentList from "./StudentList.js";

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
      <div id="main bg-secondary-subtle">
        <div className="container-fluid d-flex flex-column bg-secondary-subtle justify-content-center">
          <header
            className="navbar navbar-expand-lg bg-white m-2 mt-3"
            id="header"
          >
            <div className="navbar-collapse offcanvas-collapse">
              <ul className="d-flex align-items-center navbar-nav me-auto mb-5 mb-lg-0">
                <li className="nav-item text-align-center mx-4">
                  <a className="nav-link text-primary" href="/">
                    Group Page : {student.email}
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
            <div className="row single p-0 d-flex justify-content-around">
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
                className="col-lg-10 d-flex align-items-center justify-content-center bg-white my-3 "
                id="details-div"
              >
                <Container
                  fluid
                  className="w-100 flex-column my-3 bg-white d-flex "
                >
                  <div className="d-flex flex-lg-row flex-sm-column  ">
                    <div className="col-lg-2 d-md-table-row mt-2">
                      <Table bordered responsive>
                        <thead className="bg-white">
                          <tr></tr>
                        </thead>

                        <tbody>
                          <tr key={student.id}>
                            <td className="text-capitalize text-secondary bg-white fw-bolder h-auto ">
                              <span className="">
                                <img
                                  style={{ width: "100%", height: "100%" }}
                                  src=
                                  "/photo.jpg"
                                  //"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/310.jpg"
                                  //"https://via.placeholder.com/15"
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

                    <div className="col-lg-10 border col-sm-12 align-self-md-stretch m-2">
                      <div className="tasks-header bg-body-secondary m-1  d-flex flex-column border justify-content-between ">
                        <div className="d-flex justify-content-center align-items-center m-auto">
                          <h5 className="text-primary "> Actual Tasks of the Student</h5>
                        </div>
                      </div>
                      <div className=" h-auto">
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

                  {/* <div className="my-5 col-lg-10 col-sm-12 me-0 align-self-end">
                    {showCompletedTasks && (
                     <CompletedTasks studenttCompletedTasks={studentCompletedTasks}
                     student={student}/>
                    )}
                  </div> */}
                </Container>
              </div>
            </div>
          </div>
        </div>
        <div className="m-5 col-lg-11 col-sm-11 me-0 align-self-center m-lg-auto">
                    {showCompletedTasks && (
                     <CompletedTasks studenttCompletedTasks={studentCompletedTasks}
                     student={student}/>
                    )}
        </div>
      </div>
    </>
  );
};

export default SingleStudent;
