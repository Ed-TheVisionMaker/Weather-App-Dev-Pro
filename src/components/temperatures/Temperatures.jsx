import React from "react";
import styled from "styled-components";


const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Temperatures = (props) => {
  const { temp, temp_min, temp_max, feels_like, humidity } = props.temps;
  return (
    <>
      <div className="averageTemp iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/zswCgdh/temperature-half-svgrepo-com.png"
        />
        <DataContainer>
          Av.
          <DataSpanStyling>{props.currentUnits === "metric" ? Math.round(temp) : Math.round((temp * 1.8) + 32)}</DataSpanStyling>
        </DataContainer>
      </div>
      <div className="maxTemp iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/Gtz5P4J/temperature-arrow-up-svgrepo-com.png"
        />
        <DataContainer>
          Max
          <span>{props.currentUnits === "metric" ? Math.round(temp_max) : Math.round((temp_max * 1.8) + 32)}</span>
        </DataContainer>
      </div>
      <div className="minTemp iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/wKjP867/temperature-arrow-down-svgrepo-com.png"
        />
        <DataContainer>
          Min
          <span>{props.currentUnits === "metric" ? Math.round(temp_min) : Math.round((temp_min * 1.8) + 32)}</span>
        </DataContainer>
      </div>
      <div className="feelsLike iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/V3Mvqdq/temperature-feels-like-svgrepo-com-1.jpg"
        />
        <DataContainer>
          Feels Like
          <span>{props.currentUnits === "metric" ? Math.round(feels_like) : Math.round((feels_like * 1.8) + 32)}</span>
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
