import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

import { CityState, CityParams, CityData } from './City.interface';
import LoadingDisplay from '../../components/LoadingDisplay/index';
import ErrorDisplay from '../../components/ErrorDisplay/index';
import DisplayData from '../../components/DisplayData/index';

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
export default class City extends Component<
  RouteComponentProps<CityParams>,
  CityState
> {

  state: CityState = {
    data: null,
    isLoading: false,
    isError: false,
    currentUnits: 'Celcius',
  };

  getCityData = async (city: string): Promise<void> => {
    try {
      this.setState({ isLoading: true, isError: false });
      const apiKey = '360c24ca8f6f6c57345a7685b6ca7548';
      const geoCodeUrl = await axios(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
      );

      let cityLat: number | null = null;
      let cityLong: number | null = null;

      geoCodeUrl.data.find((returnedCities: CityData) => {
        if (returnedCities.name === city) {
          cityLat = returnedCities.lat;
          cityLong = returnedCities.lon;
        }
      });

      const cityData = await axios(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLong}&appid=${apiKey}&units=${
          this.state.currentUnits === 'Celcius' ? 'metric' : 'imperial'
        }`
      );

      const location = cityData.data.name;
      const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
        cityData.data.main;
      const timezone = cityData.data.timezone;
      const { sunrise, sunset } = cityData.data.sys;
      const { id, description } = cityData.data.weather[0];
      const { speed, deg } = cityData.data.wind;

      const data = {
        temps: {
          temp,
          tempMin: temp_min,
          tempMax: temp_max,
          feelsLike: feels_like,
          humidity,
          pressure,
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

      this.setState({ data, isLoading: false });
    } catch (error) {
      this.setState({ isError: true });
    }
  };

  handleChangeUnits = (): void => {
    if (this.state.currentUnits === 'Celcius') {
      this.setState({ currentUnits: 'Fahrenheit' });
    } else {
      this.setState({ currentUnits: 'Fahrenheit' });
    }
  };

  componentDidMount() {
    const cityId = this.props.match.params.cityId;
    this.getCityData(cityId);
  }

  componentDidUpdate(prevProps: RouteComponentProps<CityParams>) {
    const cityId = this.props.match.params.cityId;
    const prevCityId = prevProps.match.params.cityId;
    if (cityId !== prevCityId) this.getCityData(cityId);
  }

  render() {
    const cityId = this.props.match.params.cityId;
    const isLoading = this.state.isLoading;
    const isError = this.state.isError;
    const hasData = !this.state.isLoading && this.state.data;
    return (
      <>
        {isError && <ErrorDisplay cityId={cityId} />}
        {!isError && isLoading && <LoadingDisplay />}
        {hasData && (
          <DisplayDataStyling>
            <h2>The weather forecast for {cityId}</h2>
            <DisplayData
              data={this.state.data}
              cityId={cityId}
              handleChangeUnits={this.handleChangeUnits}
              currentUnits={this.state.currentUnits}
            />
          </DisplayDataStyling>
        )}
      </>
    );
  }
}
