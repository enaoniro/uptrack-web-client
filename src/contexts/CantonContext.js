import { createContext, useEffect, useState } from "react";
export const CantonContext = createContext();

const CantonContextProvider = (props) => {
  const [cantonList, setCantonList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newCanton, setNewCanton] = useState();

  useEffect(() => {
    getCantons();
  }, []);

  //pCanton auth0 dan gelen Canton bilgileri
  //bu bilgi buradan backende Cantonroutera gonderiliyor.
  // const checkAuthenticatedCanton=async(pCanton) => {
  //   console.log(pCanton)

  //   const response = await fetch('http://localhost:3001/api/v1/cantons/check', {
  //       method: 'post',
  //       body: JSON.stringify(pCanton),
  //       headers: { "Content-Type": "application/json" }
  //   })

  //   return await response.json();

  // }

  const getCantons = async () => {
    const response = await fetch("https://uptrackrest.onrender.com/api/v1/cantons");
    const cantonList = await response.json();
    setCantonList(cantonList);
  };

  const addCanton = async (pCanton) => {
    // if (pCanton.email !==undefined) {
    const newCanton = {
    
      
      cantonname: pCanton.cantonname,
      email: pCanton.email,
      role: pCanton.role,
    };
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/cantons", {
        method: "POST",
        body: JSON.stringify(pCanton),
        headers: { "Content-Type": "application/json" },
      });

      setCantonList([...cantonList, newCanton]);
    } catch (error) {
      console.log(error);
    }
  };


  const updateCanton = async (pCanton) => {

    console.log(pCanton)
    console.log(pCanton._id)

    try {
      await fetch(`https://uptrackrest.onrender.com/api/v1/cantons/`, {
        method: "PUT",
        body: JSON.stringify(pCanton),
        headers: { "Content-Type": "application/json" },
      });

      setCantonList(
        cantonList.map((canton) => (canton._id === pCanton._id ? pCanton : canton))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCanton = async (pCantonId) => {
    console.log(pCantonId)
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/cantons/" + pCantonId, {
        method: "DELETE",
      
      });
      const updateDCantonList = cantonList.filter((canton) => canton._id !== pCantonId);
      console.log(updateDCantonList)

      setCantonList(updateDCantonList);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("1", cantonList);

  return (
    <CantonContext.Provider
      value={{
        addCanton,
        deleteCanton,
        updateCanton,
        getCantons,
        setCantonList,
        newCanton,
        setNewCanton,
        cantonList,
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </CantonContext.Provider>
  );
};

export default CantonContextProvider;
