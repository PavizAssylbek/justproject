import { EDIT_TASK, CREATE_TASK, REMOVE_TASK } from "./types"
import uuid from "react-uuid"


export const editTask = (id, params = {}) => {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      params,
    }
  }
}

export const createTask = ({ title, decription }) => {
  return {
    type: CREATE_TASK,
    payload: {
      id: uuid(),
      title,
      decription,
      status: "Unstarted"
    }
  }
}

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id
  }
}