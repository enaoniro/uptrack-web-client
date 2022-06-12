import React from "react";
import { useEffect, useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import  * as userService  from "../service/front.user.service";
import { UserContext } from '../contexts/UserContext';


function Home () {

const  [role, setRole] = useState("");

const { addUser, getUserbyEmail } = useContext(UserContext);

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
      const status = await userService.checkAuthenticatedUser(pUser);

      if(!status.permitted){
        logoutWithRedirect();
      }
    }
  
    if(isAuthenticated){
      
      checkUser(user);
      console.log(user)
      // setRole(role);
      // console.log(role)
    }
  }, [isAuthenticated]);

 
  


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

                  {!isAuthenticated && (
                    <>
                    <li className="nav-item">
                      <a className="nav-link" href="http://localhost:3000/home">Home</a>
                    </li>
                   
                  </>
                  )}
                  {isAuthenticated && (
                    <>
                      {/* <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                      </li> */}
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
                      <img
                        src={user.picture}
                        alt="Profile"
                        className="nav-user-profile d-inline-block rounded-circle mr-3"
                        width="40"
                      />
                      
                      <h6 className="d-inline-block p-1">{user.name} </h6>
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
     // {isAuthenticated && (
    //       <div className=" bg-light ">
    //         <div className="container ">
    //           <p className="col-md-12"> welcome {user.name}! </p>
    //         </div>
    //       </div>
    //       )}
    //       {isAuthenticated && (
    //       <div className="p-1 mb-4 bg-primary border rounded-3 h-100">
    //         <div className="container-fluid">
    //           <p className="display text-white fw-bold">GROUPS</p>
             
              
    //           {/* <button className="btn btn-outline-success btn-lg" type="button">Cu</button> */}
    //         </div>
          

    //       <div className="row align-items-md-stretch">
    //         <div className="col-md-2">
    //           <div className="h-100 px-4 text-white bg-primary rounded-3">
    //             <h2>Groups</h2>
    //             <div>
    //               <button className="btn bg-white my-1 px-5">ahmet</button>
    //               <button className="btn bg-white my-1 px-5">mehmet</button>
    //               <button className="btn bg-white my-1 px-5">ali</button>
    //               <button className="btn bg-white my-1 px-5">veli</button>
    //             </div>
              
    //             <button className="btn bg-success text-white btn-outline-success" type="button">ADD GROUP</button>
    //           </div>
    //         </div>
    //         <div className="col-md-10">
    //           <div className="h-100 p-5 bg-light border rounded-3">
    //             <h2>Tasks</h2>
    //             <p>The projects has many tasks and they assigned to our engineers.</p>
    //             <button className="btn btn-outline-success" type="button">DETAILS</button>
    //           </div>
    //         </div>
    //       </div>
           
    //       <footer className="pt-3 mt-4 text-white border-top">
    //         can &copy; 2022
    //       </footer>
    //     </div>
    //      )}
   

    
      )
      }

  

       export default Home