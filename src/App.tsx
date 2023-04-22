import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import GithubStars from "./components/GithubStars";
import TodoListStrike from "./components/TodoListStrike";
import Pagination from "./components/Pagination";
import FizzBuzz from "./components/FizzBuzz";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <nav className="sidenav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#todo-list">To-do List</a>
          </li>
          <li>
            <a href="#github-stars">Github Stars</a>
          </li>
          <li>
            <a href="#todo-list-strikethrough">To-do List with Strikethrough</a>
          </li>
          <li>
            <a href="#pagination">Pagination</a>
          </li>
          <li>
            <a href="#fizz-buzz">Fizz Buzz</a>
          </li>
        </ul>
      </nav>
      <div className="main-content">
        <h1>React Challenges</h1>
        <section className="challenges">
          <TodoList />
          <GithubStars />
          <TodoListStrike />
          <Pagination />
          <FizzBuzz/>
        </section>
      </div>
    </div>
  );
};

export default App;
