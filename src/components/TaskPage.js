import React, { useState } from 'react'
import TaskList from "./TaskList"

const TaskPage = (props) => {

  const TASKS_STATUSES = ["Unstarted", "In Progress", "Completed"]

  const [cardShow, setCardShow] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [decription, setDecription] = useState("")

  const formToggle = () => {
    setCardShow(!cardShow)
  }

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const changeDescription = (e) => {
    setDecription(e.target.value)
  }

  const reset = () => {
    setTitle('');
    setDecription('')
    setCardShow(false)
  }

  const onCreateTask = e => {
    e.preventDefault();
    props.onCreateTask({
      title,
      decription
    })
    reset()
  }

  const renderTaskList = () => {
    const { tasks } = props
    return TASKS_STATUSES.map((status, id) => {
      const statusTasks = tasks.filter(task => task.status === status)
      return (
        <div key={id} className="col-md-3 card m-2 p-0">
          <TaskList
            key={status}
            status={status}
            tasks={statusTasks}
            onStatusChange={props.onStatusChange}
            onRemoveTask={props.onRemoveTask}
          />
        </div>
      )
    })
  }

  return (
    <div className="continer my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-success m-3" onClick={formToggle}>+</button>
          </div>
          <div className="col-md-10">
            <h2 className="display-4 text-center text-uppercase">
              Task Managers
            </h2>
          </div>
        </div>
        {cardShow &&
          <form onSubmit={onCreateTask}>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Task Title" onChange={changeTitle} />
            </div>
            <div className="form-group">
              <textarea type="text" className="form-control" placeholder="Task Description" onChange={changeDescription}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        }
      </div>
      <div className="row d-flex justify-content-center position-relative" style={{ background: "#e9ecef" }}>
        {renderTaskList()}
      </div>
    </div>
  )
}

export default TaskPage
