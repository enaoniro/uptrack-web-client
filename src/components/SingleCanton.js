import React, { useState, useContext, useEffect } from "react";
import { CantonContext } from "../contexts/CantonContext";
import { GrupContext } from "../contexts/GrupContext";
import UpdateCanton from "./UpdateCanton";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Grup from "./Grup.js";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function SingleCanton() {
  const [isOpen, setIsOpen] = useState(false);
  const [cantonGrups, setCantonGrups] = useState([]);
  const { cantonList, deleteCanton, getCantons } = useContext(CantonContext);

  useEffect(() => {
    getCantons();
  }, []);

  console.log(cantonList)

  let { id } = useParams();

  console.log(id)
  const canton = cantonList.find((canton) => canton?._id === id);
  console.log(canton);

  const { grupList } = useContext(GrupContext);
  //   const grups = grupList.find((grup)=> grup.CantonId == id)
  //   console.log(grups)

  const navigate = useNavigate();

  const handleClick = () => {
    // setGrupName(event.target.innerText);
    setCantonGrups(grupList.filter((grup) => grup.canton == canton?._id));
    setIsOpen(!isOpen);
  };

  const grups = cantonGrups.map((grup) => <Grup grup={grup} key={grup._id} />);

  return (
    <React.Fragment key={canton.id}>
      {!isOpen ? (
        <div id="main" key={canton.id}>
          <Container fluid className="w-75 mt-5 p-3 bg-white shadow-lg">
            <div className="container-fluid m-0 p-0">
              <Table className="w-100 p-3 bg-white" bordered hover>
                <thead className="p-3">
                  <tr>
                    <th className="w-50 h-100 opacity-75">Canton name</th>
                    <th className="w-25 h-100  opacity-75">Canton Manager</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="w-100" onClick={handleClick}>
                    <td
                      style={{ cursor: "pointer" }}
                      className="opacity-75 text-capitalize py-5 text-primary fw-bolder "
                    >
                      <span>{canton?.cantonname}</span>
                    </td>
                    <td className="text-capitalize fw-bolder text-center py-5 ">
                      <span>{canton?.email}</span>
                    </td>
                    {/* <td>
                      <button
                        type="button"
                        className="py-3 opacity-75 w-100 btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target={"#updateCantonModal" + canton.id}
                      >
                        Edit Canton
                      </button>
                      <button
                        onClick={() => deleteCanton(canton.id)}
                        className="py-3 btn w-100 btn-danger opacity-75 "
                      >
                        Delete Canton
                      </button>
                    </td> */}
                  </tr>
                  <tr
                    className="modal fade"
                    id={"updateCantonModal" + canton?._id}
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <UpdateCanton canton={canton} />
                  </tr>
                </tbody>
              </Table>
            </div>
          </Container>
        </div>
      ) : (
        <div className="w-75 container-fluid p-3 bg-white">
          <Table bordered hover className="w-100 p-3 bg-white shadow-lg">
            <thead>
              <tr>
                <th>{canton?.cantonname} grups</th>
                {/* <th>grup name</th>
              <th>actions</th> */}
              </tr>
            </thead>
            <tbody>
              {grups}

              {/* {cantonGrups.map((grup) => (
            <Grup grup={grup} key={grup.id} />
          ))} */}
            </tbody>
          </Table>
        </div>
      )}
    </React.Fragment>
  );
}

export default SingleCanton;
