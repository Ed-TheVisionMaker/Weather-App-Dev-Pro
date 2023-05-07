import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import List from "./components/list/List";




// const Container = styled.div ``

// const Nav = (props) => (
//   <nav>
//     <ul>
//       <li>
//         <Link to="/" >Home</Link>
//       </li>
//       {props.cities.map((city) => (
//         <li>
//           <Link to={`/city/${city}`}>{city} this is the link</Link>
//           {/* <button onClick={() => console.log(props, "nav props")}>console.log</button> */}
//           <button onClick={() => props.handleRemove(city)}>Clear</button>
//         </li>
//       ))}
//     </ul>
//   </nav>
// );
export default class Home extends React.Component {
  // state = {
  //   cities: ["London", "Monaco"],
  //   currentLocation: {
  //     userLat: "",
  //     userLong: ""
  //   },
  // };

  // getUserLocation = () => {
  //   navigator.geolocation.watchPosition(
  //     function (position) {
  //      const lat = position.coords.latitude;
  //      const long = position.coords.longitude;
  //       // this.setState({ currentLocation.userLat: lat, currentLocation.userLong: long });
  //     },
  //     function (error) {
  //       // console.error("Error code = " + error.code + " - " + error.message);
  //     }
  //   );
  // };

  // componentDidMount() {
  //   console.log("component did mount")
  //   this.getUserLocation();
  // }

  // handleSubmit = (value) => {
  //   const newCities = [...this.state.cities, value];
  //   this.setState({ cities: newCities });
  // };

  // handleRemove = (city) => {
  //   const newCities = this.state.cities.filter((element) => element !== city);
  //   this.setState({ cities: newCities });
  // };

  render() {
    return (
      <div>
        {/* <List handleSubmit={this.handleSubmit} component={List} /> */}
        {/* <Nav cities={this.state.cities} currentLocation={this.state.currentLocation} handleRemove={this.handleRemove} /> */}
        <div>home this is home page</div>
      </div>
    )
  }
}
