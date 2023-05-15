import React from "react";
import axios from "axios";
import styled from "styled-components";

import DisplayData from "../../components/displayData/DisplayData";
import LoadingDisplay from "../../components/loadingDisplay/LoadingDisplay";

const DisplayDataStyling = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: linear-gradient(90deg, var(--blue), var(--darkBlue));
  padding: 0 25px;

  .iconDiv {
    display: flex;
    align-items: center;
  }

  .displayIcon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background-color: var(--white);
    border-radius: 5px;
    border: 3px solid var(--white);
  }
`

export default class Home extends React.Component {
  state = {
    userData: null,
    userLat: null,
    userLong: null,
    isLoading: false,
    isErrorLocation: false,
    isErrorData: false,
  };

  getUserLocation = () => {
    try {
      this.setState({ isLoading: true });
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        this.setState({ userLat: lat, userLong: long });
        this.getUserData(lat, long);
      });
    } catch (error) {
      // alert("Please enable your location to be used for the Weather App to function properly")
      this.setState({ isErrorLocation: true });
    }
  };

  getUserData = async (lat, long) => {
    try {
      const apiKey = "360c24ca8f6f6c57345a7685b6ca7548";
      const userData = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
      );
      this.setState({ userData: userData, isLoading: false });
    } catch (error) {
      console.log(
        "Error retrieving weather data for current location",
        error.message
      );
      this.setState({ isErrorData: true });
    }
  };

  componentDidMount() {
    this.getUserLocation();
  }

  render() {
    const hasData = !this.state.isLoading && this.state.userData;
    const isLoading = this.state.isLoading;
    return (
      <>
      {isLoading && <LoadingDisplay />}
      {hasData && (
      <DisplayDataStyling>
        <h2>The weather forecast for {this.state.userData.data.name}</h2>
        <DisplayData data={this.state.userData} />     
      </DisplayDataStyling>)}
      </>
    );
  }
}
