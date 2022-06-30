import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Table from 'react-bootstrap/Table';
import AddStudent from "./AddStudent.js";
import Student from "./Student.js";
import { useEffect, useState } from "react";
import { StudentContext} from "../contexts/StudentContext.js";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem.js";
import StudentList from "./StudentList.js";



  


function GroupLeader () {

  const [showDetails, setShowDetails] = useState(false)
  
   
      const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
      } = useAuth0();

      const { studentList, isOpen, setIsOpen } = useContext(StudentContext);
    
      const logoutWithRedirect = () =>
      logout({
        returnTo: window.location.origin,
      });

      const handleClick=(student) => {
        

      
         setShowDetails(true)
      
      
        console.log(student);
       
       
        }

        
    
      const groupOneStudent = studentList.find(student=>student.GroupId == 1);
      console.log(groupOneStudent)
      // console.log(task);
      const student = studentList.map((student) =>
      <ListGroupItem  
        action
        variant="light"
        key={student.id}
        className="text-primary shadow-sm bg-light mb-1"
        onClick={()=>handleClick(student)}
        >
        

      {student.first_name} {student.last_name}

      </ListGroupItem>);

return (
  <div id="main">
    <main>
      <div className="container-fluid">
        <header
          className=" m-3 navbar navbar-expand-lg"
          id="header"
        >
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
                  {/* <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="40"
                    />
                    <h6 className="d-inline-block p-1">{user.name} </h6>
                  </span> */}
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

       
        <div className="container-fluid">
          <div className="row align-items py-3" id="innerdiv">
            <div className="col-md-2">
              <div
                className=" text-primary p-1 border-outline-primary"
                id="listebox"
              >
                <div className="w-100 bg-primary d-flex align-content-center justify-content-center"><h5 className="text-white bg-primary">students</h5></div>
                <div>
                  <ListGroup>
                   
                    {student}
                  
                  </ListGroup>
                </div>
                      <button className="btn bg-success text-white btn-outline-success" type="button" onClick={()=> setIsOpen(isOpen ? false :true)}>ADD Student</button>
              </div>
            </div>
            <div className="col-sm-10" id="details-div">
              
              <div id="schweiz" className= "bg-primary d-flex align-content-center justify-content-center">
                <p className="text-white fw-bold"></p>
              </div>
              <div className="h-100 bg-light" id="form-div">
               
                
                 {isOpen && <AddStudent/>}
                 {showDetails && <StudentList/>}
                 
                 
              </div>
              </div>
              
            </div>
          

          <footer className="pt-3 mt-4 text-primary border-top border-gray fixed-bottom">
          <p id="copyright">can &copy; 2022</p>
        </footer>
        </div>
      </div>
    </main>
  </div>
);
 }
    
    


     



export default GroupLeader
                                    