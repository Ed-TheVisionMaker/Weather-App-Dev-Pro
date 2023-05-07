import React from "react";

// const Container = styled.div ``

export default class Home extends React.Component {
  state = {
      userLat: "",
      userLong: "",
      isLoading: false,
  };

  // getUserLocation = () => {
  //   navigator.geolocation.getCurrentPosition(
  //     function (position) {
  //      const lat = position.coords.latitude;
  //      const long =  position.coords.longitude;
  //      this.setState({ userLat: lat, userLong: long });
  //      if (this.state.userLat !== lat || this.state.userLong !== long) {
  //       console.log("if statement triggered")
  //      }
  //     },
  //     function (error) {
  //       alert("Please enable your location to be identified for the app to function")
  //     }
  //   );
  // };

  componentDidMount() {
    // this.getUserLocation();
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log(position, "position in home page")
       const lat = position.coords.latitude;
       const long = position.coords.longitude;
       this.setState({ userLat: lat, userLong: long });
       
       if (this.state.userLat !== lat || this.state.userLong !== long) {
       }
      },
      function (error) {
        alert("Please enable your location to be identified for the app to function")
      }
    );
  }

  render() {
    console.log(this.state, "state in home page")
    return (
      <div>
        <div>home this is home page</div>
        (this.state.userLat && <div>{this.state.userLat}</this.state.userLat>)
      </div>
    )
  }
}
