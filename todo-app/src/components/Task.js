import React from "react";
import "./Task.css";

const Task = ({ task }) => {
  return (
    <div>
      <div>{task.description}</div>
      <div>{task.status}</div>
    </div>
  );
};

export default Task;
