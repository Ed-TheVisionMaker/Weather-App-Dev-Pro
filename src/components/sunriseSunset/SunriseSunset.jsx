import React from "react";

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
        <p className="sunriseTime">Sunrise {sunriseTime}</p>
      </div>
      <div className="sunset iconDiv">
        <img className="displayIcon" src="https://i.ibb.co/LhcXF9K/sunset-svgrepo-com-1.png" />
        <p className="sunsetTime">Sunset {sunsetTime}</p>
      </div>
    </>
  );
};

export default SunriseSunset;
