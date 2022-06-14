import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



function Admin () {

    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
      } = useAuth0();
    
      const logoutWithRedirect = () =>
      logout({
        returnTo: window.location.origin,
      });
    
    return (
        
    <div>
      <main>
        <div className="container py-4">
          <header className="pb-3 mb-4 border-bottom navbar navbar-expand-lg">
            <a href="/" className="d-flex align-items-center text-primary text-decoration-none">
            <span className="fs-4">uptrack</span>
            </a>
            <div className="navbar-collapse offcanvas-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#"> | </a>
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
                        <a className="nav-link" href="http://localhost:3000/canton">Admin Page</a>
                      </li>
                      {/* <li className="nav-item">
                        <a className="nav-link" href="#">tasks</a>
                      </li> */}
                    </>
                  
              </ul>
              <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
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
                    <h6 className="d-inline-block p-1">{user.name} </h6>
                 
                    <button className="btn btn-outline-success"
                            onClick={() => logoutWithRedirect()}>
                      Logout
                    </button>
                  </li>
                
                </ul>
              </div>
            </div>
          </header>

          
          <div className=" bg-light ">
            <div className="container ">
              <p className="col-md-12 text-primary fw-bold"> cantons </p>
            </div>
          </div>
          
           
          <div className="p-1 mb-4 bg-primary border rounded-3 h-100">
            <div className="container-fluid">
              <p className="display text-white fw-bold">zürich</p>
             
              
              {/* <button className="btn btn-outline-success btn-lg" type="button">Cu</button> */}
            </div>
          

          <div className="row align-items-md-stretch">
            <div className="col-md-2">
              <div className="h-100 px-4 text-white bg-primary rounded-3">
                <h4>cantons</h4>
                <div>
                  <button className="btn bg-white my-1 px-5">
                  <li className="list-unstyled">
                        <a className="nav-link" href="http://localhost:3000/canton"> zurich</a>
                  </li>
                   
                  </button>
                  <button className="btn bg-white my-1 px-5">bern</button>
                  <button className="btn bg-white my-1 px-5">st. galen</button>
                  <button className="btn bg-white my-1 px-5">basel</button>
                  {/* <ListGroup defaultActiveKey="http://localhost:3000/canton">
                  <ListGroup.Item action href="http://localhost:3000/canton">
                  
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2" disabled>
                    
                  </ListGroup.Item>
                  <ListGroup.Item action >
                    This one is a button
                  </ListGroup.Item>
                </ListGroup> */}
                </div>
              
                <button className="btn bg-success text-white btn-outline-success" type="button">ADD Canton</button>
              </div>
            </div>
            <div className="col-md-10">
              <div className="h-100 p-5 bg-light border rounded-3">
                {/* <h2>Tasks</h2>
                <p>The projects has many tasks and they assigned to our engineers.</p>
                <button className="btn btn-outline-success" type="button">DETAILS</button> */}
              </div>
            </div>
          </div>
           
          <footer className="pt-3 mt-4 text-white border-top">
            can &copy; 2022
          </footer>
        </div>
         
         </div>
        

         
      </main>
      </div>   
      )
      }

  

       

export default Admin