import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import TodosContextProvider from "./contexts/TodosContext";

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <TodosContextProvider>
          <TodoForm />
          <TodoList />
        </TodosContextProvider>
      </Container>
    </div>
  );
}

export default App;
