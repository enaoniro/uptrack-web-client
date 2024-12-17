import React, { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { TargetContext } from "../contexts/TargetContext";
import { RecordContext } from "../contexts/RecordContext";
import Table from "react-bootstrap/Table";
import Task from "./Task";

const TaskList = ({ student }) => {

  const { taskList, setTaskList, getTasks, setTaskCompleted, setTask } =
    useContext(TaskContext);

  
    const studentTasks = taskList?.filter((task) => task.student == student._id && task.isCompleted == false);
  console.log(studentTasks);
   
  // const sutTasks =[...studentTasks, studentTasks["deadline"] = studentTasks.map(task => studentTasks.map(task => task.deadline.split("",10).filter((item) => item >= 0).reduce((a,b) => (a+b))).sort((a, b) => a - b))];

  console.log(student);
  // console.log(sutTasks);

  
  console.log(taskList);



  return (
    <>
      {!studentTasks || studentTasks.length == 0 ? (
        <h1 className="mt-5 text-danger">
          no current task to display, please add new task!
        </h1>
      ) : (
        <Table bordered hover responsive className=" m-0 bg-white">
          <thead className="bg-white">
            <tr className=""> 
              <th className="border-1 border-dark text-primary" >No</th>
              <th className="border-1 border-dark text-primary">Task</th>
              <th className="border-1 border-dark text-primary">Target</th>
              <th className="border-1 border-dark text-primary">Record</th>
              <th className="border-1 border-dark text-bold bg-primary text-light ">
                assignment date
              </th>
              <th className="border-1 border-dark bg-danger text-light">
                deadline
              </th>
              {/* <th className=""></th> */}
            

              <th className="border-1 border-dark bg-primary text-light">
                actions
              </th>
              {/* <th className="bg-primary"></th> */}
              <th className="border-1 border-dark bg-danger text-light"><span className="">status</span></th>
            </tr>
          </thead>
          <tbody>
            {studentTasks.map((task, key, index) => (
              <Task student={student} task={task} key={key} index={key} />
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default TaskList;
