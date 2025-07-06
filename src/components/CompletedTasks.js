import React, { useState, useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { TargetContext } from "../contexts/TargetContext";
import { RecordContext } from "../contexts/RecordContext";
import Table from "react-bootstrap/Table";
import Task from "./Task";

const CompletedTasks = ({student, tasksCompleted }) => {

  const { taskList, setTaskList, getTasks, setTaskCompleted, setTask } =
    useContext(TaskContext);

  
  const studentTasks = taskList?.filter((task) => task.student == student._id && task.isCompleted == false).sort((a,b)=>new Date(a.deadline).toLocaleDateString("en-CA")-new Date(b.deadline).toLocaleDateString("en-CA"));
  console.log(studentTasks);

  const studentCompletedTasks = taskList?.filter((task) => task.student == student._id && task.isCompleted == true).sort((a,b)=>new Date(a.deadline).toLocaleDateString("en-CA")-new Date(b.deadline).toLocaleDateString("en-CA"));
   
   const sutTasks = studentTasks.map(task => new Date(task.deadline).toLocaleDateString("en-CA"))//.sort((a, b) => a.deadline - b.deadline);

  console.log(student);
  console.log(sutTasks);

  
  console.log(taskList);



  return (
    <>
      {!studentCompletedTasks || studentCompletedTasks.length == 0 ? (
        <h1 className="mt-5 text-danger">
          no current task to display, please add new task!
        </h1>
      ) : (
         <>
         <h5 className="text-white mt-5 text-bg-danger p-2">Completed Tasks of the Student</h5>
        <Table bordered hover responsive bgcolor="" className="">
          <thead className="">
            <tr className=""> 
              <th className=" text-primary" >No</th>
              <th className=" text-primary">Task</th>
              <th className=" text-primary">Target</th>
              <th className=" text-primary">Record</th>
              <th className=" text-bold bg-primary text-light ">
                assignment date
              </th>
              <th className=" bg-danger text-light">
                deadline
              </th>
              {/* <th className=""></th> */}
            

              <th className=" bg-primary text-light">
                actions
              </th>
              {/* <th className="bg-primary"></th> */}
              <th className=" bg-danger text-light"><span className="">status</span></th>
            </tr>
          </thead>
          <tbody className="my-3">
            {studentCompletedTasks.map((task, key, index) => (
              <Task student={student} task={task} key={key} index={key} />
            ))}
          </tbody>
        </Table>
        </>
      )}
    </>
  );
};

export default CompletedTasks;
