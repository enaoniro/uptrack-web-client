import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function Admin() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

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
                      Admin
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
                    <h6 className="d-inline-block p-1 text-primary mx-3">
                      {user.name}
                    </h6>

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

          <div id="schweiz">
            <p className="text-primary fw-bold mt-auto">SWITZERLAND</p>
          </div>
          <div className="container-fluid">
            <div className="row align-items py-3" id="innerdiv">
              <div className="col-md-2">
                <div
                  className=" text-primary p-1 border-outline-primary"
                  id="listebox"
                >
                  <h4>cantons</h4>
                  <div>
                    <ListGroup>
                      <ListGroup.Item
                        action
                        variant="light"
                        className="text-white bg-primary mb-1"
                        href="http://localhost:3000/canton"
                      >
                        zürich
                      </ListGroup.Item>
                      <ListGroup.Item
                        action
                        variant="light"
                        className="text-white bg-primary mb-1"
                        href="#link2"
                      >
                        basel
                      </ListGroup.Item>
                      <ListGroup.Item
                        action
                        variant="light"
                        className="text-white bg-primary mb-1"
                        href="#link2"
                      >
                        bern
                      </ListGroup.Item>

                      <ListGroup.Item
                        action
                        variant="light"
                        className="text-white bg-primary mb-1"
                      >
                        st gallen
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <button className="btn btn-outline-success my-2">
                    ADD Canton
                  </button>
                </div>
              </div>
              <div className="col-md-10" id="details-div">
                <div className="h-100 bg-light">
                 
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

export default Admin;
