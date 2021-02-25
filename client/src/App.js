import './App.css';
import React, { Fragment } from 'react';

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import DateTime from "./components/DateTime";

function App() {
  return(
    <Fragment>
      <div className="container">
      <DateTime  />
      <InputTodo />
      <ListTodos />
      </div>
    </Fragment>
);
}

export default App;
