import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = props => {
  return props.tasks.map((task, idx) => {
    return <Task key={idx} task={task} />;
  });
};

export default TaskList;
