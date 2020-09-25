import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <input
          type="text"
          name="title"
          style={{
            flex: "10",
            padding: "5px",
            textAlign: "center",
            outline: "none",
          }}
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
        ></input>
        <input
          type="submit"
          value="Submit"
          style={{ flex: "1" }}
          className="btn"
        ></input>
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addtodo: PropTypes.func.isRequired,
};

export default AddTodo;
