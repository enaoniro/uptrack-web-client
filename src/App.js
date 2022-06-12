// import Loading from "./components/Loading";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import Admin from "./views/Admin";
// import CantonManager from "./views/CantonManager";
// import GroupLeader from "./views/GroupLeader";
// import { useAuth0 } from "@auth0/auth0-react";
// import history from "./utils/history";import React from 'react';
// import { Container } from "reactstrap";
import { Router, Routes, Route, Switch, Link, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './components/loginbutton';
import LogoutButton from './components/logoutButton';
import './App.css';
import Profile from './components/Profile';
import { useAuth0 } from "@auth0/auth0-react";
// import  * as userService  from "./service/user.service";
import { useEffect } from "react";
import Home from "./components/home";
import Admin from "./components/admin";
import CantonManager from "./components/cantonmanager";
import GroupLeader from "./components/groupleader";
import Layout from "./components/layout";





function App () {
  // const {
  //   user,
  //   isAuthenticated,
  //   loginWithRedirect,
  //   logout,
  // } = useAuth0();

  // const logoutWithRedirect = () =>
  // logout({
  //   returnTo: window.location.origin,
  // });

  // useEffect(() => {
  //   const checkUser = async (pUser) => {
  //     const status = await userService.checkAuthenticatedUser(pUser);

  //     if(!status.permitted){
  //       logoutWithRedirect();
  //     }
  //   }
  
  //   if(isAuthenticated){
  //     checkUser(user);
  //   }
  // }, [isAuthenticated]);


  // return (
  //   <div className="App">
  //     <main>
  //       <div className="container py-4">
  //         <header className="pb-3 mb-4 border-bottom navbar navbar-expand-lg">
  //           <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
  //             <img width="40" src="https://cdn3.iconfinder.com/data/icons/virus-10/64/Support-Call_Center-Information-Help-Customer_Service-256.png" />
  //             <span className="fs-4">uptrack</span>
  //           </a>
  //           <div className="navbar-collapse offcanvas-collapse">
  //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //                 <li className="nav-item">
  //                   <a className="nav-link" href="#"> | </a>
  //                 </li>

  //                 {!isAuthenticated && (
  //                   <>
  //                   <li className="nav-item">
  //                     <a className="nav-link" href="#">Home</a>
  //                   </li>
  //                   <li className="nav-item">
  //                     <a className="nav-link" href="#">About</a>
  //                   </li>
  //                 </>
  //                 )}
  //                 {isAuthenticated && (
  //                   <>
  //                     <li className="nav-item">
  //                       <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
  //                     </li>
  //                     <li className="nav-item">
  //                       <a className="nav-link" href="#">Cantons</a>
  //                     </li>
  //                     <li className="nav-item">
  //                       <a className="nav-link" href="#">Tasks</a>
  //                     </li>
  //                   </>
  //                 )}
  //             </ul>
  //             <div className="d-flex">
  //               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                 
  //               {!isAuthenticated && (
  //                 <li>
  //                   <button className="btn btn-outline-success"
  //                           onClick={() => loginWithRedirect()}>
  //                     Log in
  //                   </button>
  //                 </li>
  //               )}
  //               {isAuthenticated && (
  //                 <li>
  //                   <span className="user-info">
  //                     <img
  //                       src={user.picture}
  //                       alt="Profile"
  //                       className="nav-user-profile d-inline-block rounded-circle mr-3"
  //                       width="40"
  //                     />
  //                     <h6 className="d-inline-block p-1">{user.name} </h6>
  //                   </span>

  //                   <button className="btn btn-outline-success"
  //                           onClick={() => logoutWithRedirect()}>
  //                     Logout
  //                   </button>
  //                 </li>
  //               )}
  //               </ul>
  //             </div>
  //           </div>
  //         </header>

  //         {isAuthenticated && (
  //         <div className=" bg-light ">
  //           <div className="container ">
  //             <p className="col-md-12"> welcome {user.name}! </p>
  //           </div>
  //         </div>
  //         )}
  //         {isAuthenticated && (
  //         <div className="p-1 mb-4 bg-primary border rounded-3 h-100">
  //           <div className="container-fluid">
  //             <p className="display text-white fw-bold">Cantons</p>
             
              
  //             {/* <button className="btn btn-outline-success btn-lg" type="button">Cu</button> */}
  //           </div>
          

  //         <div className="row align-items-md-stretch">
  //           <div className="col-md-2">
  //             <div className="h-100 px-4 text-white bg-primary rounded-3">
  //               <h2>Cantons</h2>
  //               <div>
  //                 <button className="btn bg-white my-1 px-5">zurich</button>
  //                 <button className="btn bg-white my-1 px-5">zurich</button>
  //                 <button className="btn bg-white my-1 px-5">zurich</button>
  //                 <button className="btn bg-white my-1 px-5">zurich</button>
  //               </div>
              
  //               <button className="btn bg-success text-white btn-outline-success" type="button">ADD CANTON</button>
  //             </div>
  //           </div>
  //           <div className="col-md-10">
  //             <div className="h-100 p-5 bg-light border rounded-3">
  //               <h2>Tasks</h2>
  //               <p>The projects has many tasks and they assigned to our engineers.</p>
  //               <button className="btn btn-outline-success" type="button">Tasks</button>
  //             </div>
  //           </div>
  //         </div>
           
  //         <footer className="pt-3 mt-4 text-white border-top">
  //           can &copy; 2022
  //         </footer>
  //       </div>
  //        )}
         

  
    return (
            <Routes>
                      
                <Route path="/" element={<Layout/>}>

                    <Route path="/" element={<Home/>}/>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="canton" element={<CantonManager/>}/>
                    <Route path="group" element={<GroupLeader/>}/>

                </Route>
             

           </Routes>
           
    )
            
            
  
         
  //       </div>
          
  //     </main>

  //   </div>
  // );
}

export default App