import React from "react";
import styled from "styled-components";
import { TemperaturesProps } from '../../App.interfaces';

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Temperatures = (props: TemperaturesProps) => {
  const { temp, tempMin, tempMax, feelsLike, humidity } = props.temps ?? {};
  const currentUnits = props.currentUnits
  return (
    <>
      <div className="averageTemp iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/zswCgdh/temperature-half-svgrepo-com.png"
        />
        <DataContainer>
          Av.
          <span>{currentUnits === "Celcius" ? Math.round(temp) : Math.round((temp * 1.8) + 32)}</span>
        </DataContainer>
      </div>
      <div className="maxTemp iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/Gtz5P4J/temperature-arrow-up-svgrepo-com.png"
        />
        <DataContainer>
          Max
          <span>{currentUnits === "Celcius" ? Math.round(tempMax) : Math.round((tempMax * 1.8) + 32)}</span>
        </DataContainer>
      </div>
      <div className="minTemp iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/wKjP867/temperature-arrow-down-svgrepo-com.png"
        />
        <DataContainer>
          Min
          <span>{currentUnits === "Celcius" ? Math.round(tempMin) : Math.round((tempMin * 1.8) + 32)}</span>
        </DataContainer>
      </div>
      <div className="feelsLike iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/V3Mvqdq/temperature-feels-like-svgrepo-com-1.jpg"
        />
        <DataContainer>
          Feels Like
          <span>{currentUnits === "Celcius" ? Math.round(feelsLike) : Math.round((feelsLike * 1.8) + 32)}</span>
        </DataContainer>
      </div>
      <div className="humidity iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/ZfXWk5L/humidity-svgrepo-com.png"
        />
        <DataContainer>
          Humidity
          <span>{humidity}%</span>
        </DataContainer>
      </div>
    </>
  );
};

export default Temperatures;
