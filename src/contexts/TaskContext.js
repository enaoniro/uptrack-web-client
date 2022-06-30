import { createContext, useEffect, useState } from 'react';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState({})
  const [selectedTask, setSelectedTask] = useState({})

  // setSelectedTask(TaskList.find((stu =>stu.id===Task.id)))

  useEffect(() => {
    getTaskList();
  }, []);
  
  const getTaskList = async () => {
    const response = await fetch('http://localhost:3001/api/v1/tasks');
    const taskList = await response.json();
    setTaskList(taskList);
  };

//   const getUserByEmail = async (pUser) => {
//     const response = await fetch('http://localhost:3001/api/v1/users');
//     const userList= await response.json();
//     const data = userList.filter(user=>user.email==pUser.email);
//     setUserInDatabase(data);
//   };
//  console.log(userInDatabase)

  const addTask = async (pTask) => {
      // if (pUser.email !==undefined) {
          const newTask = {
              id: pTask.id,
              risale: pTask.risale,
              pirlanta: pTask.pirlanta,
              namaz: pTask.namaz,
              cevsen: pTask.cevsen,
              devamlilik: pTask.devamlilik,
            
          };
    try {
      await fetch('http://localhost:3001/api/v1/tasks', {
        method: 'POST',
        body: JSON.stringify(pTask),
        headers: { 'Content-Type': 'application/json' },
      });

      setTaskList([...taskList, newTask]);
    } catch (error) {
      console.log(error);
    }
  
};

const updateTask = async (pTask) => {
  try {
    await fetch('http://localhost:3001/api/v1/tasks/' + pTask.id, {
      method: 'PUT',
      body: JSON.stringify(pTask),
      headers: { 'Content-Type': 'application/json' },
    });

    setTaskList(
      taskList.map((task) =>
        task.id === pTask.id ? pTask : task
      )
    );
  } catch (error) {
    console.log(error);
  }
};

// const selectTask = (id) => {
//   setSelectedTask(taskList.find(Task=>Task.id==id));
//   return selectedTask;
// }

  console.log("1", taskList);

  return (
    <TaskContext.Provider value={{ addTask, updateTask, getTaskList, taskList, setTaskList, isOpen, setIsOpen}}>
      {props.children}
    </TaskContext.Provider>
  );
  
};

export default TaskContextProvider;
