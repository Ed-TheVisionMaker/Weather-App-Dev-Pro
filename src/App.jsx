import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Home from "./pages/Home/Home";
import City from "./pages/City/City";
import SearchSelect from "./components/SearchSelect";
import MainIcon from "./components/MainIcon";

const Container = styled.div `
  display: flex;
`

const GlobalStyling = createGlobalStyle`
:root {
  margin: 0;

  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  --white: #ffffff;
  --black: #000000;
  --blue: #273B7A;
  --darkBlue: #121149;
  --yellow: #FFC61B;
  --darkYellow: #EAA22F;


  color-scheme: twilight;
  color: var(--white);
  background-color: var(--yellow);

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
  color: var(--darkYellow)
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
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
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
`

const InteractiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background-image: linear-gradient(180deg, var(--darkBlue), var(--blue));
`

function App() {
  return (
    <Router>
        <GlobalStyling />
        <Container>
        <InteractiveContainer>
        <MainIcon />
        <SearchSelect />
        </InteractiveContainer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/city/:cityId" component={City}/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
