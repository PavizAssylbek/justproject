import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TASKS_STATUSES = ["Unstarted", "In Progress", "Completed"]

const Task = (props) => {

  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value)
  }

  function onRemoveTask(id) {
    console.log("onRemoveTask -> id", id)
    props.onRemoveTask(id)
  }

  return (
    <div>
      <form onChange={onStatusChange}>
        <select defaultValue={props.task.status}>
          {TASKS_STATUSES.map(status => (
            <option value={status} key={status}>{status}</option>
          ))}
        </select>
      </form>
      <h2 className="card-title mt-3 text-uppercase px-2">{props.task.title}</h2>
      <p className="card-text mb-3 text-muted font-weight-bold px-2">{props.task.decription}</p>
      <FontAwesomeIcon
        onClick={() => onRemoveTask(props.task.id)}
        icon={faTrash}
        className="float-right m-5"
        style={{ color: "tomato", cursor: "pointer" }}
      />
    </div>
  )
}

export default Task
