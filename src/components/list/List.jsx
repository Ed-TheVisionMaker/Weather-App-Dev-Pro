import React from "react";

export default class List extends React.Component {
  state = {
    inputValue: ""
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.state.inputValue;
    this.setState({ inputValue: "" });
    this.props.handleSubmit(value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
      </form>
    );
  }
}
