import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    try {
      const response = await fetch("https://uptrackrest.onrender.com/tasks");
      const taskList = await response.json();

      if (taskList) {
        setTaskList(taskList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const getTaskByStudentId = async (id) => {
  //   const response = await fetch(`http://localhost:3001/api/v1/tasks/${id}`);
  //   const studentTasks = await response.json();
  //   setStudentTasks(studentTasks);
  // };

  const addTask = async (pTask, id) => {
    const newTask = {
      taskName: pTask.taskName,
      target: pTask.target,
      record: pTask.record,
      isCompleted: false,
      assignedAt: pTask.assignedAt,
      deadline: pTask.deadline,
      student: id,
    };
    try {
      await fetch("https://uptrackrest.onrender.com/tasks", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: { "Content-Type": "application/json" },
      });

      setTaskList(prevTasks=>[...prevTasks, newTask]);
      getTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (pTask) => {
    console.log(pTask._id);
    console.log(pTask);
    try {
      await fetch("https://uptrackrest.onrender.com/tasks/", {
        method: "PUT",
        body: JSON.stringify(pTask),
        headers: { "Content-Type": "application/json" },
      });

      setTaskList(
        taskList.map((task) => (task._id === pTask._id ? pTask : task))
      );
      // setTaskList(prevTasks => [...prevTasks, pTask]);
      getTasks();
    } catch (error) {
      console.log(error);
    }
    console.log(taskList);
  };

  const setTaskCompleted = async (pTask) => {
    console.log(pTask?._id);
    setTask({ ...pTask, isCompleted: !pTask.isCompleted });
    console.log(pTask);

    try {
      await fetch(`https://uptrackrest.onrender.com/tasks/settask`, {
        method: "PUT",
        body: JSON.stringify(pTask),
        headers: { "Content-Type": "application/json" },
      });

      // const data = await res.json();

      setTaskList(
        taskList.map((task) => (task._id === pTask._id ? pTask : task))
      );
      getTasks();
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
