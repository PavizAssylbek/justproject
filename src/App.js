import React from 'react';
import TaskPage from "./components/TaskPage"
import { connect } from 'react-redux';
import { editTask, createTask, removeTask } from "./actions"


import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App(props) {

  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }))
  }

  const onCreateTask = ({ title, decription }) => {
    props.dispatch(createTask({ title, decription }))
  }

  const onRemoveTask = id => {
    props.dispatch(removeTask(id))
  }

  return (
    <div className="container">
      <TaskPage
        tasks={props.tasks}
        onStatusChange={onStatusChange}
        onCreateTask={onCreateTask}
        onRemoveTask={onRemoveTask}
      />
      <h2>Hello Guys!</h2>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);
