import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
  const [taskList, setTaskList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [studentTasks, setStudentTasks] = useState([]);
  const [task, setTask] = useState({});

  let { id } = useParams();

  useEffect(() => {
    getTasks();
    // getTaskByStudentId();
  }, []);

  const getTasks = async () => {
    const response = await fetch("https://uptrackrest.onrender.com/api/v1/tasks");
    const taskList = await response.json();
    setTaskList(taskList);
  };

  // const getTaskByStudentId = async (id) => {
  //   const response = await fetch(`https://uptrackrest.onrender.com/api/v1/tasks/${id}`);
  //   const suttasks = await response.json();
  //   setStudentTasks(suttasks);
  // };

  const addTask = async (pTask, id) => {
    const newTask = {
      task1: pTask.task1,
      task2: pTask.task2,
      task3: pTask.task3,
      task4: pTask.task4,
      task5: pTask.task5,
      isCompleted: false,
      student: id,
    };
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/tasks", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: { "Content-Type": "application/json" },
      });

      setTaskList((previousTaskList) => [...taskList, newTask]);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  

  const updateTask = async (pTask) => {
    console.log(pTask._id);
    console.log(pTask)
    try {
      await fetch("https://uptrackrest.onrender.com/api/v1/tasks/", {
        method: "PUT",
        body: JSON.stringify(pTask),
        headers: { "Content-Type": "application/json" },
      });

      setTaskList(
        taskList.map((task) => (task._id === pTask._id ? pTask : task))
      );
    } catch (error) {
      console.log(error);
    }
    console.log(taskList)
  };

  const setTaskCompleted = async (pTask) => {
    console.log(pTask?._id);
    const newTask = { ...pTask, isCompleted: !pTask.isCompleted };

    try {
      const res = await fetch("https://uptrackrest.onrender.com/api/v1/tasks/settask", {
        method: "PUT",
        body: JSON.stringify(newTask),
        headers: { "Content-Type": "application/json" },
      });

      // const data = await res.json();


      setTaskList(
         taskList.map((task) => (task.id === newTask.id ? newTask : task))
      );
      getTasks();

      console.log(newTask);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        addTask,
        updateTask,
        getTasks,
        taskList,
        setTaskList,
        isOpen,
        setIsOpen,
        setTaskCompleted,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
