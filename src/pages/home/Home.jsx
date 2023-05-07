import React from "react";

// const Container = styled.div ``

export default class Home extends React.Component {
  state = {
      userLat: "",
      userLong: ""
  };

  getUserLocation = () => {
    navigator.geolocation.watchPosition(
      function (position) {
       const lat = position.coords.latitude;
       const long = position.coords.longitude;
        this.setState({ userLat: lat, userLong: long });
      },
      function (error) {
        // console.error("Error code = " + error.code + " - " + error.message);
      }
    );
  };

  componentDidMount() {
    console.log("component did mount")
    this.getUserLocation();
  }


  render() {
    return (
      <div>
        <div>home this is home page</div>

      </div>
    )
  }
}
