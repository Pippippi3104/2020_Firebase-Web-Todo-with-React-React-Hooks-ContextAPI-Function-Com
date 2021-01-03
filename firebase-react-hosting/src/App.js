import React, { useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = text => {
    const newTodos = [...todos, {text, complete: false}]
    setTodos(newTodos)
    console.log(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
    console.log(newTodos)
  }

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <TodoForm addTodo={addTodo} />
      </Container>
      <Container>
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      </Container>
    </div>
  );
}

export default App;
