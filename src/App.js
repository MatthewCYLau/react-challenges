import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import GithubStar from "./components/GithubStar";

const App = () => {
  return (
    <div className="main-content">
      <h1>React Challenges</h1>
      <section className="challenges">
        <TodoList />
        <GithubStar />
      </section>
    </div>
  );
};

export default App;
