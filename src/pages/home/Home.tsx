import React from "react";
import axios from "axios";
import styled from "styled-components";

import DisplayData from '../../components/DisplayData';
import LoadingDisplay from "../../components/LoadingDisplay";
import ErrorDisplay from "../../components/ErrorDisplay";
import ErrorLocation from "../../components/ErrorLocation";

const DisplayDataStyling = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  background-image: linear-gradient(90deg, var(--blue), var(--darkBlue));
  padding: 0 25px;
  border-radius: 20px;

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

interface WeatherData {
  temps: {
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    pressure: number;
    humidity: number;
  };
  timezone: string;
  sunrise: number;
  sunset: number;
  iconId: string;
  description: string;
  wind: {
    speed: number;
    deg: number;
  };
  location: string;
}
interface State {
  userData: WeatherData | null;
  userLat: number | null;
  userLong: number | null;
  isLoading: boolean;
  isErrorLocation: boolean;
  isErrorData: boolean;
  currentUnits: "Celcius" | "Fahrenheit";
}

export default class Home extends React.Component {
  state: State = {
    userData: null,
    userLat: null,
    userLong: null,
    isLoading: false,
    isErrorLocation: false,
    isErrorData: false,
    currentUnits: "Celcius",
  };

  getUserLocation = () => {
    console.log("Getting user location");
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

  getUserData = async (lat: number, long: number) => {
    try {
      const apiKey : string = import.meta.env.VITE_REACT_APP_API_KEY;
      const userData = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
      );
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
          feelsLike: feels_like,
          tempMin: temp_min,
          tempMax: temp_max,
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
            <h2>{`The weather forecast for ${this.state.userData?.location}`}</h2>
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
