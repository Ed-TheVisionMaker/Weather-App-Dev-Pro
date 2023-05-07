import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components"

import Home from "./pages/home/Home";
import City from "./pages/city/City";
import Nav from "./components/list/Nav"

const Container = styled.div ``
class App extends React.Component {
  render() {
    console.log("app page is rendered")
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
