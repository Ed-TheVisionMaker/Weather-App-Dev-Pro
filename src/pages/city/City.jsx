import React from "react";
import axios from "axios";
import styled from "styled-components";

import LoadingDisplay from "../../components/loadingDisplay/LoadingDisplay";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import DisplayData from "../../components/displayData/DisplayData";
// import ForecastCharts from "../../components/forecastCharts/ForecastCharts";

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

export default class City extends React.Component {
  state = {
    data: null,
    forecastData: null,
    dailyData: null,
    isLoading: false,
    isError: false,
    currentUnits: "metric",
  };

  getCityData = async (city) => {
    try {
      this.setState({ isLoading: true, isError: false });
      const apiKey = "360c24ca8f6f6c57345a7685b6ca7548";
      const geoCodeUrl = await axios(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
      );

      let cityLat;
      let cityLong;

      geoCodeUrl.data.find((returnedCities) => {
        if (returnedCities.name === city) {
          cityLat = returnedCities.lat;
          cityLong = returnedCities.lon;
        }
        return cityLat, cityLong;
      });

      // const forecastData = await axios (
      //   `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLong}&appid=${apiKey}&units=metric`
      //   );
      //   this.setState({forecastData: forecastData})

      const cityData = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLong}&appid=${apiKey}&units=${this.state.currentUnits}`);
      console.log(cityData)
      this.setState({ data: cityData, isLoading: false });

    } catch (error) {
      console.log("error in API call, city page");
      this.setState({isError: true})
      console.error(error.message, "error message");
    }
  };

  handleChangeUnits = () => {
    if(this.state.currentUnits === "metric") {
      this.setState({currentUnits: "imperial"})
    }
    else {
      this.setState({currentUnits: "metric"})
    }
    const cityId = this.props.match.params.cityId;
    this.getCityData(cityId);
  };

  componentDidMount() {
    const cityId = this.props.match.params.cityId;
    this.getCityData(cityId);
  }

  componentDidUpdate(prevProps) {
    const cityId = this.props.match.params.cityId;
    const prevCityId = prevProps.match.params.cityId;
    if (cityId !== prevCityId) this.getCityData(cityId);
  }

  render() {
    const cityId = this.props.match.params.cityId;
    const isLoading = this.state.isLoading;
    const isError = this.state.isError;
    const hasData = !this.state.isLoading && this.state.data;
    const hasForecastData = !this.state.isLoading && this.state.forecastData;
    return (
      <>
        {isError && <ErrorDisplay cityId={cityId} />}
        {!isError && isLoading && <LoadingDisplay />}
        {hasData && (
          <DisplayDataStyling>
            <h2>The weather forecast for {cityId}</h2>
            <DisplayData data={this.state.data} cityId={cityId} handleChangeUnits={this.handleChangeUnits} currentUnits={this.state.currentUnits}/>
          </DisplayDataStyling>
        )}
        {/* {hasForecastData && <ForecastCharts data={this.state.forecastData}/>} */}
      </>
    );
  }
}
