import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Home from "./pages/home/Home";
import City from "./pages/city/City";
import SearchSelect from "./components/searchSelect/SearchSelect";
import DisplayData from "./components/displayData/DisplayData";
import MainIcon from "./components/mainIcon/MainIcon";


const Container = styled.div `
  display: flex;
`

const GlobalStyling = createGlobalStyle`
:root {
  margin: 0;

  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  --bg-yellow: #fdf40d;
  --bg-orange: #e6830f;
  --bg-red: #e6290f;
  --white: #ffffff;
  --black: #000000;
  --blue: #273B7A;
  --darkBlue: #121149;
  --yellow: #FFC61B;
  --darkYellow: #EAA22F;


  color-scheme: twilight;
  color: var(--white);
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
  color: var(--darkYellow)
}

body {
  margin: 0;
  padding: 0;
  display: flex;
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
// button:focus,
// button:focus-visible {
//   outline: 4px auto -webkit-focus-ring-color;
// }

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

const InteractiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background-image: linear-gradient(180deg, var(--darkBlue), var(--blue));
`


// const PageStyling = styled.div `
//   display: flex;
//   justify-content: flex-start;
//   align-items: flex-start;
// `


class App extends React.Component {
  render() {
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
}

export default App;
