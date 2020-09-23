import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/todos/Todos";
import AddTodo from "./components/todos/AddTodo";
import About from "./components/pages/About";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
  };

  // LifeCycle Method (Axios for Http request to the APIs like fetch in JavaScript)
  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((res) => this.setState({ todos: res.data }));
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete ToDo
  delTodo = (id) => {
    // axios
    //   .delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
    //   .then((res) =>
    //     this.setState({
    //      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    //     })
    //   );

    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add ToDo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };

    //   axios
    //     .post("http://jsonplaceholder.typicode.com/todos", {
    //       id: uuidv4(),
    //       title: title,
    //       completed: false,
    //     })
    //     .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
    // };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
