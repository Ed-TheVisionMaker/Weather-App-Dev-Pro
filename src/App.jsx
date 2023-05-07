import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components"

import Home from "./pages/home/Home";
import City from "./pages/city/City";
import List from "./components/list/List";
import Nav from "./components/list/Nav"

const Container = styled.div ``

// const Nav = (props) => (
//   <nav>
//     <ul>
//       <li>
//         <Link to="/" >Home</Link>
//       </li>
//       {props.cities.map((city) => (
//         <li>
//           <Link to={`/city/${city}`}>{city} this is the link</Link>
//           <button onClick={() => console.log(props, "nav props")}>console.log</button>
//           <button onClick={() => props.handleRemove(city)}>Clear</button>
//         </li>
//       ))}
//     </ul>
//   </nav>
// );

class App extends React.Component {
  state = {
    cities: ["London", "Monaco"],
    currentLocation: {
      userLat: "",
      userLong: ""
    },
  };

  componentDidMount() {
    this.getUserLocation();
  }

  getUserLocation = () => {
    navigator.geolocation.watchPosition(
      function (position) {
       const lat = position.coords.latitude;
       const long = position.coords.longitude;
        // this.setState({ currentLocation.userLat: lat, currentLocation.userLong: long });
      },
      function (error) {
        // console.error("Error code = " + error.code + " - " + error.message);
      }
    );
  };

  handleSubmit = (value) => {
    const newCities = [...this.state.cities, value];
    this.setState({ cities: newCities });
  };

  handleRemove = (city) => {
    const newCities = this.state.cities.filter((element) => element !== city);
    this.setState({ cities: newCities });
  };

  render() {
    return (
      <Router>
        <Container>
          {/* <List

            handleSubmit={this.handleSubmit}
            component={List}
          /> */}
          <Nav component={Nav}/>
          {/* <Nav cities={this.state.cities} currentLocation={this.state.currentLocation} handleRemove={this.handleRemove} /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/city/:cityId" component={City}/>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
