import React, { Component } from "react";
import PropTypes from "prop-types";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      backgroundColor: this.props.todo.completed ? "#6BCCA4" : "#f9bc60",
      transition: "all 0.3s ease-in",
      padding: "10px",
      borderBottom: "2px #ccc dotted",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            style={{ outline: 'none',}}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            <FontAwesomeIcon icon={faMinusCircle} size="lg" />
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "none",
  border: "none",
  padding: "0px 10px",
  color: "#ff0000",
  cursor: "pointer",
  float: "right",
  outline: "none",
};

export default TodoItem;
