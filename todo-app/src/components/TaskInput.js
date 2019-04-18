import React from "react";
import "./TaskInput.css";

const TaskInput = props => {
  return (
    <div>
      <input
        placeholder="✍️ Add item..."
        onChange={props.onChangeHandler}
        value={props.newTask.description}
      />
      <button onClick={() => props.onAddNewTask("Input Value")}>+</button>
    </div>
  );
};

export default TaskInput;
