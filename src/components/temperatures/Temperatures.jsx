import React from "react";
import styled from "styled-components";

const DataSpanStyling = styled.span`
  
`;

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
          <DataSpanStyling>{temp}</DataSpanStyling>
        </DataContainer>
      </div>
      <div className="maxTemp iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/Gtz5P4J/temperature-arrow-up-svgrepo-com.png"
        />
        <DataContainer>
          Max
          <DataSpanStyling>{temp_max}</DataSpanStyling>
        </DataContainer>
      </div>
      <div className="minTemp iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/wKjP867/temperature-arrow-down-svgrepo-com.png"
        />
        {/* <p>Min {temp_min}</p> */}
        <DataContainer>
          Min
          <DataSpanStyling>{temp_min}</DataSpanStyling>
        </DataContainer>
      </div>
      <div className="feelsLike iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/V3Mvqdq/temperature-feels-like-svgrepo-com-1.jpg"
        />
        {/* <p>Feels Like {feels_like}</p> */}
        <DataContainer>
          Feels Like
          <DataSpanStyling>{feels_like}</DataSpanStyling>
        </DataContainer>
      </div>
      <div className="humidity iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/ZfXWk5L/humidity-svgrepo-com.png"
        />
        {/* <p>Humidity {humidity}%</p> */}
        <DataContainer>
          Humidity
          <DataSpanStyling>{humidity}%</DataSpanStyling>
        </DataContainer>
      </div>
    </>
  );
};

export default Temperatures;
