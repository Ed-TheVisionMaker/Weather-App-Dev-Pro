import React from "react";
import styled from "styled-components";

const DataSpanStyling = styled.span`
  // padding-left: 30px;
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const formatTime = (date) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const displayTime =
    hour.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0");
  return displayTime;
};

const SunriseSunset = (props) => {
  const timeZone = props.data.timezone;
  const sunriseTimeStamp = props.data.sys.sunrise;
  const sunsetTimeStamp = props.data.sys.sunset;
  const toMilliseconds = 1000;
  const sunriseDate = new Date((sunriseTimeStamp + timeZone) * toMilliseconds);
  const sunsetDate = new Date((sunsetTimeStamp + timeZone) * toMilliseconds);
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
