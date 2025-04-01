import React from 'react'

const ListTask = () => {
    return (
        <>
          <div className="container mt-4">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {state.map((task, index) => (
                  <tr key={task.id}>
                    <th>{index + 1}</th>
                    <td>{task.tName}</td>
                    <td>{task.tDiscri}</td>
                    <td>
                      <button className="btn btn-success btn-sm" onClick={() => dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })}>
                        Complete
                      </button>
                      <button className="btn btn-dark btn-sm" onClick={() => dispatch({ type: "EDIT_TASK", payload: task.id })}>
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      );
}

export default ListTask