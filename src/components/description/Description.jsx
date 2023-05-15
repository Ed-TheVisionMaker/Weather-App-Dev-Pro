import React from "react";
import styled from "styled-components";

const DescriptionStyle = styled.div`
  img {
    width: 10px;
    height: 10px;
    border: 1px solid black;
  }

  .weatherIcon {
    width: 10px;
    height: 10px;
    border: 1px solid blue;
  }
`;

const descriptionChangeCase = (descriptionWeather) => {
    descriptionWeather = descriptionWeather.toString();
    for (let i = 0; i < descriptionWeather.length; i++) {
      descriptionWeather =
        descriptionWeather.charAt(0).toUpperCase() + descriptionWeather.slice(1);
      if (descriptionWeather[i] === " ") {
        descriptionWeather =
          descriptionWeather.charAt(0).toUpperCase() +
          descriptionWeather.slice(1, i + 1) +
          descriptionWeather.charAt(i + 1).toUpperCase() +
          descriptionWeather.slice(i + 2);
      }
    }
    return descriptionWeather
}

const Description = (props) => {
//   const mainWeather = props.weather.map((element) => element.main);
  let descriptionWeather = props.weather.map((element) => element.description);
     descriptionWeather = descriptionChangeCase(descriptionWeather)

  return (
    <DescriptionStyle>
      <p>Weather icon not showing</p>
      <img src="https://openweathermap.org/img/wn/10d@2x.png" />
      <p>{descriptionWeather}</p>
    </DescriptionStyle>
  );
};

export default Description