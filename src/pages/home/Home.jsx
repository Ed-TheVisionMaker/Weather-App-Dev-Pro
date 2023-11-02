import React from "react";
import axios from "axios";
import styled from "styled-components";

import DisplayData from "../../components/DisplayData/DisplayData";
import LoadingDisplay from "../../components/LoadingDisplay/LoadingDisplay";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import ErrorLocation from "../../components/ErrorLocation/ErrorLocation";

const DisplayDataStyling = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  background-image: linear-gradient(90deg, var(--blue), var(--darkBlue));
  padding: 0 25px;

  .iconDiv {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
  }

  .displayIcon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    background-color: var(--white);
    border-radius: 5px;
    border: 3px solid var(--white);
  }

  .windDirectionIcon {
    border-radius: 25px;
  }
`;
export default class Home extends React.Component {
  state = {
    userData: null,
    userLat: null,
    userLong: null,
    isLoading: false,
    isErrorLocation: false,
    isErrorData: false,
    currentUnits: "metric",
  };

  getUserLocation = () => {
    this.setState({ isLoading: true });
    navigator.geolocation.getCurrentPosition(
       (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        this.setState({ userLat: lat, userLong: long });
        this.getUserData(lat, long);
      },
      (error) => {
        this.setState({ isLoading: false, isErrorLocation: true })
      }
    );
  };

  getUserData = async (lat, long) => {
    try {
      const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
      const userData = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
      );
      this.setState({ userData: userData, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, isErrorData: true });
    }
  };

  handleChangeUnits = () => {
    if(this.state.currentUnits === "metric") {
      this.setState({ currentUnits: "imperial" })
    }
    else {
      this.setState({ currentUnits: "metric" })
    }
  };

  componentDidMount() {
    this.getUserLocation();
  }

  render() {
    // destructure data to necessary objects to simplify interfaces for TS
    const hasData = !this.state.isLoading && this.state.userData;
    const isLoading = this.state.isLoading;
    const isErrorData = this.state.isErrorData;
    const isErrorLocation = this.state.isErrorLocation;
    return (
      <>
        {isErrorLocation && <ErrorLocation />}
        {isErrorData && <ErrorDisplay cityId={"your current location"} />}
        {!isErrorData && !isErrorLocation && isLoading && <LoadingDisplay />}
        {hasData && (
          <DisplayDataStyling>
            <h2>The weather forecast for {this.state.userData.data.name}</h2>
            <DisplayData data={this.state.userData} handleChangeUnits={this.handleChangeUnits} currentUnits={this.state.currentUnits}/>
          </DisplayDataStyling>
        )}
      </>
    );
  }
}
