import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components"

import Home from "./pages/home/Home";
import City from "./pages/city/City";
import Nav from "./components/list/Nav"

const Container = styled.div ``
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


  render() {
    return (
      <Router>
        <Container>
          <Nav component={Nav}/>
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
