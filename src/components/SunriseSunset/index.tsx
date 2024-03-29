import React from "react";
import styled from "styled-components";
import { SunriseSunsetProps } from "./SunriseSunset.interface";

const DataSpanStyling = styled.span`
  // padding-left: 30px;
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const formatTime = (date: Date) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const displayTime =
    hour.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0");
  return displayTime;
};

const SunriseSunset = ({timezone, sunrise, sunset}: SunriseSunsetProps) => {

  const sunriseTimeStamp = sunrise;
  const sunsetTimeStamp = sunset;
  const toMilliseconds = 1000;
  const sunriseDate = new Date((sunriseTimeStamp + timezone) * toMilliseconds);
  const sunsetDate = new Date((sunsetTimeStamp + timezone) * toMilliseconds);
  const sunriseTime = formatTime(sunriseDate);
  const sunsetTime = formatTime(sunsetDate);

  return (
    <>
      <div className="sunrise iconDiv">
        <img className="displayIcon" src="https://i.ibb.co/9pqzZZK/sunrise-svgrepo-com.png" />
        <DataContainer>
          Sunrise
          <DataSpanStyling>{sunriseTime}</DataSpanStyling>
        </DataContainer>
      </div>
      <div className="sunset iconDiv">
        <img className="displayIcon" src="https://i.ibb.co/LhcXF9K/sunset-svgrepo-com-1.png" />
        <DataContainer>
          Sunset
          <DataSpanStyling>{sunsetTime}</DataSpanStyling>
        </DataContainer>
      </div>
    </>
  );
};

export default SunriseSunset;
