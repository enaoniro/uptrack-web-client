import React, { useState, useContext } from 'react';
import { StudentContext } from '../contexts/StudentContext';
import { TaskContext } from '../contexts/TaskContext';
import { TargetContext } from '../contexts/TargetContext';
import { RecordContext } from '../contexts/RecordContext';
import UpdateStudent from './UpdateStudent';
import UpdateTask from './UpdateTask.js';
import UpdateTarget from './UpdateTarget.js';
import UpdateRecord from './UpdateRecord.js';
import Task from './Task.js';
import Target from './Target.js';
import Record from './Record.js';
import Table from "react-bootstrap/Table";

const Student = ({student}) => {
 // const { deleteStudent } = useContext(StudentContext);
const { updateStudent } = useContext(StudentContext);
const { taskList } = useContext(TaskContext);
const task = taskList.find(task=>task.id==student.TaskId);
const { targetList } = useContext(TargetContext);
const target = targetList.find(target=>target.id==student.TargetId);
// const { recordList } = useContext(RecordContext);
// const record = recordList.find(record => record.id==student.RecordId);

  return (
       <React.Fragment>
          <tr key={student.id}>
         
            <td className='text-capitalize text-primary bg-body fw-bolder text-center p-5'>{student.first_name} {student.last_name}</td>
            
            <td><p>Kitap Adi: {student.Task.risale}</p><p className='bg-warning '>hedef:<span className=' w-30 m-0 text-danger fw-bold mx-2'>{student.Target.risale}</span></p>

            <p><input placeholder="gerceklesen"/></p></td>
            <td><p>Kitap Adi: {student.Task.pirlanta}</p><p className='bg-warning '>hedef:<span className=' w-30 m-0 text-danger fw-bold mx-2'>{student.Target.pirlanta}</span></p>

<p><input placeholder="gerceklesen"/></p></td>
            
            
            <td><p>namaz</p><p>{student.Task.namaz}</p><p className='bg-warning '>hedef:<span className=' w-30 m-0 text-danger fw-bold mx-2'>{student.Target.namaz}</span></p>

<p><input placeholder="gerceklesen"/></p></td>
           
            <td><p>cevsen</p><p>{student.Task.cevsen}</p><p className='bg-warning '>hedef:<span className=' w-30 m-0 text-danger fw-bold mx-2'>{student.Target.cevsen}</span></p>

<p><input placeholder="gerceklesen"/></p></td>
           
            <td><p>devam</p><p>{student.Task.devamlilik}</p><p className='bg-warning '>hedef:<span className=' w-30 m-0 text-danger fw-bold mx-2'>{student.Target.devamlilik}</span></p>

<p><input placeholder="gerceklesen"/></p></td>
           
            
            <td>
            <button
            // onClick={() => deleteStudent(student.id)}
            className='btn btn-outline-danger w-75'
            >
              Delete student
            </button>
            <br></br>
            <button
            type='button'
            className='btn btn-outline-primary w-75 '
            data-bs-toggle='modal'
            data-bs-target={'#updateStudentModal' + student.id}
            >
            Edit student
            </button>
            <button
            type='button'
            className='btn btn-outline-primary w-75 '
            data-bs-toggle='modal'
            data-bs-target={'#updateTaskModal' + student.TaskId}
            >
            update task
            </button>
            <button
            type='button'
            className='btn btn-outline-primary w-75 '
            data-bs-toggle='modal'
            data-bs-target={'#updateTargetModal' + student.TargetId}
            >
            update target
            </button>
            </td>
         </tr>
      <div
        className='modal fade'
        id={'updateStudentModal' + student.id}
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
         <UpdateStudent student={student} /> 
      </div>
      <div
        className='modal fade'
        id={'updateTaskModal' + task.id}
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
         <UpdateTask task={task}/> 
      </div>
      <div
        className='modal fade'
        id={'updateTargetModal' + target.id}
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
         <UpdateTarget target={target}/> 
      </div>

         </React.Fragment>
    );
    
};

export default Student;
