import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const dayOfWeek = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const currentDate = new Date();
  console.log("Calling day of week");
  return days[currentDate.getDay()];
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayOfWeek: dayOfWeek(),
      newTask: {
        description: "",
        status: "incomplete"
      },
      tasks: []
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header dayOfWeek={this.state.dayOfWeek} />
        <TaskInput
          onChangeHandler={this.inputChange}
          onAddNewTask={this.addNewTask}
          newTask={this.state.newTask}
        />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }

  inputChange = event => {
    this.setState({
      newTask: { description: event.target.value }
    });
  };

  addNewTask = () => {
    console.log(this.state.newTask);
    if (this.state.newTask.description !== "") {
      this.setState({
        newTask: { description: "", status: false },
        tasks: [...this.state.tasks, this.state.newTask]
      });
    }
  };
}

export default App;
