import React from "react";

const Temperatures = (props) => {
  const { temp, temp_min, temp_max, feels_like, humidity } = props.temps;
  return (
    <div className="temps">
      <div className="averageTemp iconDiv">
        <img className="displayIcon" src="https://i.ibb.co/zswCgdh/temperature-half-svgrepo-com.png" />
        <p>Av. {temp}</p>
      </div>
      <div className="maxTemp iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/Gtz5P4J/temperature-arrow-up-svgrepo-com.png"
        />
        <p>Max {temp_max}</p>
      </div>
      <div className="minTemp iconDiv">
        <img className="displayIcon" src="https://i.ibb.co/wKjP867/temperature-arrow-down-svgrepo-com.png" />
        <p>Min {temp_min}</p>
      </div>
      <div className="feelsLike iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/V3Mvqdq/temperature-feels-like-svgrepo-com-1.jpg"
        />
        <p>Feels like {feels_like}</p>
      </div>
      <div className="humidity iconDiv">
        <img className="displayIcon" src="https://i.ibb.co/ZfXWk5L/humidity-svgrepo-com.png" />
        <p>Humidity {humidity}%</p>
      </div>
    </div>
  );
};

export default Temperatures;
