import { createContext, useEffect, useState } from 'react';

export const CantonContext = createContext();

const CantonContextProvider = (props) => {
  const [cantonList, setCantonList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getCantonList();
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


  const getCantonList = async () => {
    const response = await fetch('http://localhost:3001/api/v1/cantons');
    const cantonList = await response.json();
    setCantonList(cantonList);
  };

  
  const addCanton = async (pCanton) => {
      // if (pCanton.email !==undefined) {
          const newCanton = {
              id: pCanton.id,
              name:pCanton.name,
             
            
          };
    try {
      await fetch('http://localhost:3001/api/v1/cantons', {
        method: 'POST',
        body: JSON.stringify(pCanton),
        headers: { 'Content-Type': 'application/json' },
      });

      setCantonList([...cantonList, newCanton]);
    } catch (error) {
      console.log(error);
    }
  
};

  console.log("1", cantonList);

  return (
    <CantonContext.Provider value={{ addCanton, getCantonList , setCantonList, cantonList, isOpen, setIsOpen }}>
      {props.children}
    </CantonContext.Provider>
  );
  
};

export default CantonContextProvider;
