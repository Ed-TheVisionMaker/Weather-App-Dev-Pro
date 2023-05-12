import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Home from "./pages/home/Home";
import City from "./pages/city/City";
import SearchSelect from "./components/list/SearchSelect";
import DisplayData from "./components/display/DisplayData";

const GlobalStyling = createGlobalStyle`
:root {
  margin: 0;

  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  --bg-yellow: #fdf40d;
  --bg-orange: #e6830f;
  --bg-red: #e6290f;
  --text-main: #000000;
  --white: #f5f5f5;
  --black: #00000;

  color-scheme: light dark;
  color: var(--text-main);
  // background-image: linear-gradient(var(--bg-yellow));
  background-color: var(--bg-yellow);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

// @media (prefers-color-scheme: light) {
//   :root {
//     color: #213547;
//     background-color: #ffffff;
//   }
//   a:hover {
//     color: #747bff;
//   }
//   button {
//     background-color: #f9f9f9;
//   }
// }

`


const Container = styled.div `
  display: flex;
`


class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <GlobalStyling />
          {/* <NavStyle /> */}
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
