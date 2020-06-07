//import logo from './logo.svg';
//import './App.css';

import React, { useState } from "react";
import Header from "./ui/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";
import Typography from "@material-ui/core/Typography";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import DeleteForm from "./DeleteForm";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Typography variant="h5" color="secondary">
        My List
        <TodoForm
          saveTodo={(todoText) => {
            const trimmedText = todoText.trim();
            if (trimmedText.length > 0) {
              setTodos([...todos, trimmedText]);
            }
          }}
        />
        <TodoList
          todos={todos}
          deleteTodo={(todoIndex) => {
            const newTodos = todos.filter((_, index) => index !== todoIndex);
            setTodos(newTodos);
          }}
        />
        <DeleteForm
          todos={todos}
          deleteAll={(todos) => {
            setTodos([]);
          }}
        />
      </Typography>
    </ThemeProvider>
  );
}

export default App;
