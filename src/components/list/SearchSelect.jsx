import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 0px;
  background-image: linear-gradient(180deg, var(--bg-yellow), var(--bg-orange));

  background-color: #f5f5f5;

  input {
    margin: 20px 10px;
    background-color: var(--white);
    border-radius: 10px;
  }
`;

const ListStyle = styled.ul`
  width: inherit;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style: none;
  margin-top: 20px;
  padding: 0;

  li {
    width: 100%;
    list-style-type: none;
    box-sizing: border-box;
    // padding-left: 25px;
    border-bottom: 1px solid;
  }

  a {
    text-decoration: none;
    color: var(--main-text);
  }

  .homeLink {
    padding-bottom: 10px;
  }

  button {
    background-color: transparent;
    padding: 10px 10px;
    margin-left: 20px;
  }

  svg {
    color: black;
    width: 15x;
    height: 15px;
  }
`;

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
    const isIncluded = existingCities.includes(city);
    if (!existingCities.length) {
      this.setState({ recentCities: [city] });
    } else if (existingCities.length < 4) {
      if (!isIncluded) {
        existingCities.push(city);
        this.setState({ recentCities: existingCities });
      }
    } else if (existingCities.length === 4) {
      if (!isIncluded) {
        existingCities.shift();
        existingCities.push(city);
        this.setState({ recentCities: existingCities });
      }
    }
  };

  handleRemove = (city) => {
    const newCities = this.state.cities.filter((element) => element !== city);
    this.setState({ cities: newCities });
  };

  render() {
    const svgTrashIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    );
    return (
      <>
        <NavStyle>
          {/* <nav> */}
            <ListStyle>
              {/* <ul> */}
                <li className="homeLink">
                  <Link to="/">Home</Link>
                </li>
              {/* </ul> */}
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} />
              </form>
              {/* <ul> */}
                {this.state.cities.map((city) => (
                  <li>
                    <Link
                      onClick={() => this.handleRecentCities(city)}
                      to={{ pathname: `/city/${city}`, state: this.state }}
                    >
                      {city}
                    </Link>
                    <button onClick={() => this.handleRemove(city)}>
                      {svgTrashIcon}
                    </button>
                  </li>
                ))}
              {/* </ul> */}
            </ListStyle>
          {/* </nav> */}
        </NavStyle>
      </>
    );
  }
}
