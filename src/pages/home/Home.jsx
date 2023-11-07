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
    currentUnits: "Celcius",
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
        this.setState({ isLoading: false, isErrorLocation: true });
      }
    );
  };

  getUserData = async (lat, long) => {
    try {
      const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
      const userData = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
      );
      console.log(userData, "userData");
      const location = userData.data.name;
      const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
        userData.data.main;
      const timezone = userData.data.timezone;
      const { sunrise, sunset } = userData.data.sys;
      const { id, description } = userData.data.weather[0];
      const { speed, deg } = userData.data.wind;
      const data = {
        temps: {
          temp,
          feels_like,
          temp_min,
          temp_max,
          pressure,
          humidity,
        },
        timezone,
        sunrise,
        sunset,
        iconId: id,
        description,
        wind: {
          speed,
          deg,
        },
        location,
      };

      this.setState({ userData: data, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, isErrorData: true });
    }
  };

  handleChangeUnits = () => {
    if (this.state.currentUnits === "Celcius") {
      this.setState({ currentUnits: "Fahrenheit" });
    } else {
      this.setState({ currentUnits: "Celcius" });
    }
  };

  componentDidMount() {
    this.getUserLocation();
  }

  render() {
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
            <h2>The weather forecast for {this.state.userData.location}</h2>
            <DisplayData
              data={this.state.userData}
              handleChangeUnits={this.handleChangeUnits}
              currentUnits={this.state.currentUnits}
            />
          </DisplayDataStyling>
        )}
      </>
    );
  }
}
