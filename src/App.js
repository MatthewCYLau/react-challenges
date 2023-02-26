import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import GithubStars from "./components/GithubStars";
import TodoListStrike from "./components/TodoListStrike";

const App = () => {
  return (
    <div className="main-content">
      <h1>React Challenges</h1>
      <section className="challenges">
        <TodoList />
        <GithubStars />
        <TodoListStrike />
      </section>
    </div>
  );
};

export default App;
