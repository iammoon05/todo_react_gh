import React, {useState} from "react";
import './App.css';
import TaskCountHeader from "./taskCountHeader";
import SingleTask from "./singleTask";


const App = () => {
  const [input, setInput] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [taskList, setTaskList] = useState([]);

  const handleAddClick = () => {
    const id = taskList.length + 1;
    setTaskList((previous) => [
      ...previous,
      {
        id: id,
        taskDetails: input,
        completed: false
      }
    ]);
    setInput("");
  };

  const handleCompleteClick = (id) => {
    let taskList_With_Updated_Completed_Details = taskList.map((task) => {
      let item = {}
      if (task.id === id) {
        if (!task.completed) {
          setCompletedTaskCount(completedTaskCount + 1);
        } else {
          setCompletedTaskCount(completedTaskCount - 1);
        }
        item = {...task, completed: !task.completed} 
      } else {
        item = {...task}
      }
      return item;
    })
    setTaskList(taskList_With_Updated_Completed_Details);
  }

  return (
    <div style = {{
      marginLeft: "200px",
      marginTop: "100px"
    }}>
      <TaskCountHeader pendingTaskCount={taskList.length - completedTaskCount} completedTaskCount={completedTaskCount}/>

      <br></br>
      <input value = { input } onInput = {(e) => setInput(e.target.value)} />
      <button onClick = {() => handleAddClick()}> Add </button>
      {
        taskList.map((task) => {
          return (
            <div>
              <li 
                id={task.id}
                completed={task.completed}
                taskDetails={task.taskDetails}
                onClick={() => handleCompleteClick(task.id)}
                style = {{
                  listStyle: "none",
                  textDecoration: task.completed && "line-through",
                }}
              >
                {task.taskDetails} 
              </li>
            {/* <SingleTask taskDetails={task.taskDetails}/> */}
            </div>
          )
        })
      }
    </div>
  )
}
// class App extends PureComponent{
//   constructor(props) {

//     super(props);
//     this.state = {todo: [{
//       id: 1,
//       text: 'blah'
//     }]}

//     this.addTodo = this.addTodo.bind(this);
//     this.deleteTodo = this.deleteTodo.bind(this);

//   }

//   addTodo(todo) {
//     this.setState((prevState) => {
//       return {
//         tasks: prevState.todo.concat(todo)
//       };
//     })
//   }

  
//   deleteTodo(id) {
//     const todo = this.state.todo.filter(el => (el.id !== id));
//     this.setState({todo: todo});
//   }

//   render() {
//     return(
//       <div className="App">
//         <header className="App-header">
//           <h1>Todo List</h1>
//           {/* <ToDoList></ToDoList> */}
//           <ToDoForm addTodo={this.addTodo}></ToDoForm>
//           <ToDoList todos={this.state.todo} deleteTodo={this.deleteTodo}></ToDoList>
//         </header>
        

//       </div>
//     )
//   };
// }

export default App;