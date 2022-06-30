import React, { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Table from "react-bootstrap/Table";
import AddCanton from "./AddCanton.js";
import { useEffect, useState } from "react";
import { CantonContext } from "../contexts/CantonContext.js";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/esm/ListGroupItem.js";

function Admin() {
 
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const { cantonList, isOpen, setIsOpen } = useContext(CantonContext);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  const canton = cantonList.map((canton) => (
    <ListGroupItem
      action
      variant="light"
      className="text-primary shadow-sm bg-light mb-1"
      href="http://localhost:3000/canton"
    >
      {canton.name}
    </ListGroupItem>
  ));

  return (
    <div id="main">
      <div className="container-fluid" id="header-div">
        <header className="mb-1 navbar navbar-expand-lg" id="header">
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
              {/* <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                    </li> */}
              <li className="nav-item">
                <a
                  className="nav-link text-primary"
                  href="http://localhost:3000/canton"
                >
                  Admin Page
                </a>
              </li>
              {/* <li className="nav-item">
                      <a className="nav-link" href="#">tasks</a>
                    </li> */}
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                <li>
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
      </div>

      <div className="container-fluid bg-light" id="innerdiv">
        <div className="row">
          <div
            className="col-md-2 text-primary p-1 border-outline-primary"
            id="listebox"
          >
            <div className="w-100 bg-primary text-align-center p-1">
              <h5 className="text-white bg-primary">CANTONS</h5>
            </div>
            <div>
              <ListGroup>{canton}</ListGroup>
            </div>
            <button
              className="btn bg-success text-white btn-outline-success"
              type="button"
              onClick={() => setIsOpen(isOpen ? false : true)}
            >
              ADD canton
            </button>
          </div>
          <div className="col-md-10" id="details-div">
            <div
              id="schweiz"
              className="bg-primary d-flex align-content-center justify-content-center"
            >
              <p className="text-white fw-bold">Switzerland</p>
            </div>
            <div className="h-100" id="form-div">
              {isOpen && <AddCanton />}
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-primary border-top border-gray fixed-bottom">
          <p id="copyright">can &copy; 2022</p>
        </footer>
      </div>
    </div>
  );
}
export default Admin;
