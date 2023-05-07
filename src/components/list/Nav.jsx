import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import List from "./List";

export default class Nav extends React.Component {
  state = {
    inputValue: "",
    cities: ["London", "Monaco"],
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.state.inputValue;
    this.setState({ inputValue: "", cities: [...this.state.cities, value] });
    this.props.handleSubmit(value);
  };


  // handleSubmit = (value) => {
  //   const newCities = [...this.state.cities, value];
  //   this.setState({ cities: newCities });
  // };

  handleRemove = (city) => {
    const newCities = this.state.cities.filter((element) => element !== city);
    this.setState({ cities: newCities });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} />
        </form>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {this.state.cities.map((city) => (
              <li>
                <Link to={`/city/${city}`}>{city} this is the link</Link>
                <button onClick={() => this.handleRemove(city)}>Clear</button>
              </li>
            ))}
          </ul>
        </nav>
      </>
    );
  }
}
