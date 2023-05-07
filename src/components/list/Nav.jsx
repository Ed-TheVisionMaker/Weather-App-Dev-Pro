import React from "react";
import List from "./List";


export default class Nav extends React.Component {
    state = {
    cities: ["London", "Monaco"],
    };

    handleSubmit = (value) => {
        const newCities = [...this.state.cities, value];
        this.setState({ cities: newCities });
      };
    
    handleRemove = (city) => {
        const newCities = this.state.cities.filter((element) => element !== city);
        this.setState({ cities: newCities });
      };

    render () {
        return(
            <>
            <List handleSubmit={this.handleSubmit} component={List} />
            <nav>
            <ul>
              <li>
                <Link to="/" >Home</Link>
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
        )
    }
}