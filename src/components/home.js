import React from "react";
import { useEffect, useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import  * as userService  from "../service/front.user.service";
import { UserContext } from '../contexts/UserContext';



function Home () {

const [role, setRole] = useState("")

const { addUser, getUserbyEmail, checkAuthenticatedUser, userInDatabase } = useContext(UserContext);

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

  useEffect(() => {
    
    const checkUser = async (pUser) => {
      
      const status = await checkAuthenticatedUser(pUser);
      

      if(!status){
        logoutWithRedirect();
      }
    
  
    if(isAuthenticated){
      checkUser(user);
        
      }
      
    }
  }, [isAuthenticated]);

  console.log(user)

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
                  
                  {!isAuthenticated && (
                    <>
                    <li className="nav-item">
                      <a className="nav-link" href="http://localhost:3000/home">Home</a>
                    </li>
                   
                  </>
                  )}
                  {isAuthenticated && (
                    <>
                      <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3000/home">Home</a>
                      </li>
                      <li className="nav-item">
                       <a className="nav-link" href="http://localhost:3000/admin">admin</a>
                     </li>
                      <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3000/canton">canton manager</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="http://localhost:3000/group">group leader</a>
                      </li>
                    </>
                  )}
              </ul>
              <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                 
                {!isAuthenticated && (
                  <li>
                    <button className="btn btn-outline-success"
                            onClick={() => loginWithRedirect()}>
                      Log in
                    </button>
                  </li>
                )}
                {isAuthenticated && (
                  <li>
                    <span className="user-info">
                      {/* <img
                        src={user.picture}
                        alt="Profile"
                        className="nav-user-profile d-inline-block rounded-circle mr-3"
                        width="40"
                      /> */}
                      
                      <h6 className="d-inline-block p-1">{user.name} </h6>
                      <h6 className="d-inline-block p-1">{role} </h6>
                    </span>

                    <button className="btn btn-outline-success"
                            onClick={() => logoutWithRedirect()}>
                      Logout
                    </button>
                  </li>
                )}
                </ul>
              </div>
            </div>
          </header>
          
</div>
<div><button className="btn btn-outline-primary">to my page</button></div>
    </main>
     </div> 
    
      )
      }

  

       export default Home