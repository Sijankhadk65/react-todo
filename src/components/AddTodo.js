import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.title);
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Add Todo"
          name="title"
          style={{
            flex: "10",
            padding: "5px"
          }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{
            flex: 1
          }}
        />
      </form>
    );
  }
}

export default AddTodo;
