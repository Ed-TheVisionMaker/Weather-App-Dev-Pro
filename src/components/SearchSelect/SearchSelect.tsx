import React, {ChangeEvent, FormEvent } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px 0px;
  background-color: transparent;

  input {
    margin: 20px 10px;
    background-color: var(--white);
    border-radius: 10px;
    padding: 5px 10px;
  }
`;

const ListStyleGlobal = styled.ul`
  width: inherit;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style: none;
  margin-top: 20px;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    width: 100%;
    list-style-type: none;
    box-sizing: border-box;
    border-bottom: 2px dotted var(--darkBlue);
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
    padding: 15x 10px 5px;
    margin-left: 20px;
  }

  svg {
    color: var(--white);
    width: 20x;
    height: 20px;
  }
`;

const ListStyledCities = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
`;

const ListStyledCurrentLocation = styled.li`
  display: flex;
  justify-content: center;
`;

const RemoveButtonStyled = styled.button`
background-color: transparent;
padding: 10px;
`;
export default class SearchSelect extends React.Component {
  state = {
    inputValue: "",
    cities: ["London", "Monaco"],
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const firstLetterUpperCase = e.target.value.charAt(0).toUpperCase();
    const upperCaseAdded =
      firstLetterUpperCase + e.target.value.slice(1, e.target.value.length).toLowerCase();
    this.setState({ inputValue: upperCaseAdded });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newCity = this.state.inputValue;
    const cityDuplicated = this.state.cities.find((city) => city === newCity);
    if (!cityDuplicated)
      this.setState({
        inputValue: "",
        cities: [...this.state.cities, newCity],
      });
  };

  handleRemove = (city: string) => {
    const newCities = this.state.cities.filter((element) => element !== city);
    this.setState({ cities: newCities });
  };

  render() {
    return (
      <>
        <NavStyle>
          <ListStyleGlobal>
            <ListStyledCurrentLocation className="homeLink">
              <Link to="/">Current Location</Link>
            </ListStyledCurrentLocation>
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChange}
                placeholder={"type your city"}
              />
            </form>
            {this.state.cities.map((city) => (
              <ListStyledCities>
                <Link key={city} to={{ pathname: `/city/${city}`, state: this.state }}>
                  {city}
                </Link>
                <RemoveButtonStyled onClick={() => this.handleRemove(city)}>
                <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
                </RemoveButtonStyled>
              </ListStyledCities>
            ))}
          </ListStyleGlobal>
        </NavStyle>
      </>
    );
  }
}
