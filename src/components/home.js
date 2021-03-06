import React from "react";
import { useEffect, useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import  * as userService  from "../service/front.user.service";
import { UserContext } from "../contexts/UserContext";
import Admin from "../components/admin";
import CantonManager from "../components/cantonmanager";
import GroupLeader from "../components/groupleader";
import Layout from "../components/layout";

function Home() {
  const [role, setRole] = useState("");

  const { addUser, getUserbyEmail, checkAuthenticatedUser, userInDatabase } =
    useContext(UserContext);

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  useEffect(() => {
    const checkUser = async (pUser) => {
      const user = await checkAuthenticatedUser(pUser);
      console.log(user);

      if (!user) {
        logoutWithRedirect();
      }

      // Rolü elde ettikten sonra state'i güncelliyoruz.
      // Gelen user bilgisi aynı postman'de gördüğümüz şekilde olacak
      setRole(user.Role.name);
      console.log(user);
    };
  
    // user değerinin dolu olduğundan emin olalım
    // bunu yapmazsak useEffect ilk yüklenirken çalıştığında hata verir
    if (user) {
      // Eğer doluysa fonksiyonu çağıralım
      checkUser(user);
      console.log(user)

      // setRole(user.Role.name);
    }
  }, [isAuthenticated]);

  // console.log(user);

  return (
    <div>
      {!isAuthenticated && (
        <div className="container py-4">
          <header className="pb-3 mb-4 border-bottom navbar navbar-expand-lg">
            <a
              href="/"
              className="d-flex align-items-center text-primary text-decoration-none"
            >
              <span className="fs-4">uptrack</span>
            </a>
            <div className="navbar-collapse offcanvas-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"></a>
                </li>
              </ul>
              <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => loginWithRedirect()}
                    >
                      Login
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </header>
        </div>
      )}

      {role === "admin" && <Admin />}
      {role === "canton manager" && <CantonManager />}
      {role === "group leader" && <GroupLeader />}
    </div>
  );
};

export default Home;
