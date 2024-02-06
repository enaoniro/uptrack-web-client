import { createContext, useEffect, useState, useContext } from "react";
import { StudentContext } from "../contexts/StudentContext";
export const TargetContext = createContext();

const TargetContextProvider = (props) => {
  const [targetList, setTargetList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState({});
  const [selectedTarget, setSelectedTarget] = useState({});
  const { studentList, setStudentList } = useContext(StudentContext);

  // setSelectedTarget(TargetList.find((stu =>stu.id===Target.id)))

  useEffect(() => {
    getTargets();
  }, []);

  const getTargets = async () => {
    const response = await fetch("https://uptrackrest.onrender.com/api/v1/targets");
    const targetList = await response.json();
    if(targetList) {
      setTargetList(targetList);
    }
    return targetList;
  };

  //   const getUserByEmail = async (pUser) => {
  //     const response = await fetch('https://uptrackrest.onrender.com/users');
  //     const userList= await response.json();
  //     const data = userList.filter(user=>user.email==pUser.email);
  //     setUserInDatabase(data);
  //   };
  //  console.log(userInDatabase)

  const addTarget = async (pTarget, id) => {
    // if (pUser.email !==undefined) {
    const newTarget = {
      target1: pTarget.target1,
      target2: pTarget.target2,
      target3: pTarget.target3,
      target4: pTarget.target4,
      target5: pTarget.target5,
      task: id
    };
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/targets", {
        method: "POST",
        body: JSON.stringify(newTarget),
        headers: { "Content-Type": "application/json" },
      });

      setTargetList(previousState => [...targetList, newTarget]);
      getTargets();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTarget = async (pTarget) => {
    console.log(pTarget._id);
    console.log(pTarget)
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/targets/", {
        method: "PUT",
        body: JSON.stringify(pTarget),
        headers: { "Content-Type": "application/json" },
      });

      setTargetList(
        targetList.map((target) => (target._id === pTarget._id ? pTarget : target))
      );
    } catch (error) {
      console.log(error);
    }
    console.log(targetList)
  };

  // const selectTarget = (id) => {
  //   setSelectedTarget(TargetList.find(Target=>Target.id==id));
  //   return selectedTarget;
  // }

  console.log(targetList);

  return (
    <TargetContext.Provider
      value={{
        addTarget,
        updateTarget,
        getTargets,
        targetList,
        setTargetList,
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </TargetContext.Provider>
  );
};

export default TargetContextProvider;
