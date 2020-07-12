import { EDIT_TASK, REMOVE_TASK } from "../actions/types"
import { CREATE_TASK } from "../actions/types"

const initialState = [
  // {
  //   id: 1,
  //   title: "VueJS",
  //   description: "Just description",
  //   status: "In Progress"
  // },
  // {
  //   id: 2,
  //   title: "ReactJS",
  //   description: "Just description",
  //   status: "Completed"
  // },
  // {
  //   id: 3,
  //   title: "Redux&VueX",
  //   description: "Just description",
  //   status: "Unstarted"
  // }
]

const tasks = (state = { tasks: initialState }, action) => {
  // if (action.type === EDIT_TASK) {
  //   const { payload } = action
  //   return {
  //     tasks: state.tasks.map(task => {
  //       if (task.id === payload.id) {
  //         return Object.assign({}, task, payload.params)
  //       }
  //       return task
  //     })
  //   }
  // }
  // return state
  const { payload } = action
  switch (action.type) {
    case EDIT_TASK: {
      return {
        tasks: state.tasks.map(task => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params)
          }
          return task
        })
      }
    }
    case CREATE_TASK: {
      return {
        tasks: state.tasks.concat(action.payload)
      }
    }
    case REMOVE_TASK: {
      return {
        tasks: state.tasks.filter(task => task.id !== action.id)
      }
    }

    default:
      return state
  }
}

export default tasks