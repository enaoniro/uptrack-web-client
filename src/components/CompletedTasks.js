import React from 'react'

function CompletedTasks( {studentCompletedTasks} ) {

console.log(studentCompletedTasks);


  return (
    <>
    <div className="w-100">
      <div className="bg-primary opacity-50 d-flex justify-content-center text-red align-items-center">
        <p
          // onClick={handleClick}
          className="d-flex justify-content-center align-items-center text-white text-center fw-bold "
          style={{ cursor: "pointer" }}
        >
          <span className="text-center ">
            Completed Tasks
          </span>
        </p>
      </div>
    </div>
    <table className="mb-3 col-lg-12 col-sm-12 table table-striped-columns">
      <thead>
        <tr>
          <th className="col-1">task no</th>
          <th>task</th>
          <th>target</th>
          <th>record</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody className="">
        {studentCompletedTasks.map((task, key) => (
          <tr>
            <td>{key + 1}</td>
            <td>{task?.taskName}</td>
            <td>{task?.target}</td>
            <td>{task?.record}</td>
            <td
              className={
                task?.record > task?.target
                  ? "bg-success text-light opacity-50"
                  : "bg-danger text-light opacity-50"
              }
            >
              {task?.record > task?.target
                ? "success"
                : "failure"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
  )
}

export default CompletedTasks