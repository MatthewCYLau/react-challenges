import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import GithubStars from "./components/GithubStars";
import TodoListStrike from "./components/TodoListStrike";
import Pagination from "./components/Pagination";
import FizzBuzz from "./components/FizzBuzz";
import FizzBuzzAsync from "./components/FizzBuzzAsync";
import Palindrome from "./components/Palindrome";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <nav className="sidenav">
        <ul>
          <li>
            <a href="/">
              <i className="icon fa-solid fa-house"></i>Home
            </a>
          </li>
          <li>
            <a href="#todo-list">
              <i className="icon far fa-check-square"></i>To-do List
            </a>
          </li>
          <li>
            <a href="#github-stars">
              <i className="icon fa-solid fa-star"></i>Github Stars
            </a>
          </li>
          <li>
            <a href="#todo-list-strikethrough">
              <i className="icon fa-solid fa-strikethrough"></i>To-do List with
              Strikethrough
            </a>
          </li>
          <li>
            <a href="#pagination">
              <i className="icon fa-solid fa-book"></i>Pagination
            </a>
          </li>
          <li>
            <a href="#fizz-buzz">Fizz Buzz</a>
          </li>
          <li>
            <a href="#fizz-buzz-async">Fizz Buzz Async</a>
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
          <FizzBuzz />
          <FizzBuzzAsync />
          <Palindrome />
        </section>
      </div>
    </div>
  );
};

export default App;
