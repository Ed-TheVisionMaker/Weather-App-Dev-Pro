import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components"

import Home from "./pages/home/Home";
import City from "./pages/city/City";
import SearchSelect from "./components/list/SearchSelect"
import DisplayData from "./components/display/DisplayData"

const Container = styled.div ``
class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <SearchSelect component={SearchSelect}/>
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
