import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SearchSelect extends React.Component {
  state = {
    inputValue: "",
    cities: ["London", "Monaco"],
    recentCities: [],
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newCity = this.state.inputValue;
    this.setState({ inputValue: "", cities: [...this.state.cities, newCity] });

  };

  handleRecentCities = (city) => {
    let existingCities = this.state.recentCities;
    const isIncluded = existingCities.includes(city)
    if (!existingCities.length) {
      this.setState({ recentCities: [city] });
    }
    else if (existingCities.length < 4) {
      if (!isIncluded) {
        existingCities.push(city);
        this.setState({ recentCities: existingCities});
      }
    }
      else if (existingCities.length === 4) {
        if (!isIncluded) {
          existingCities.shift();
          existingCities.push(city);
          this.setState({ recentCities: existingCities})
        }
      }
    }

  handleRemove = (city) => {
    const newCities = this.state.cities.filter((element) => element !== city);
    this.setState({ cities: newCities });
  };

  render() {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} />
          </form>
          <ul>
            {this.state.cities.map((city) => (
              <li>
                <Link onClick={() => this.handleRecentCities(city)} to={{pathname: `/city/${city}`, state: this.state}}>{city} this is the link</Link>
                <button onClick={() => this.handleRemove(city)}>Clear</button>
              </li>
            ))}
          </ul>
        </nav>
    );
  }
}
