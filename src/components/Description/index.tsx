import React from "react";
import styled from "styled-components";
import { DescriptionProps } from "./Description.interface";

const DescriptionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  .weatherIcon {
    width: 70px;
    height: 70px;
    padding-right: 20px;
  }
`;

const descriptionChangeCase = (descriptionWeather :string) => {
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
};

const Description = ({weather}: DescriptionProps ) => {
  const { description, icon} = weather[0]
  const descriptionCaseCorrected = descriptionChangeCase(description);
  return (
    <DescriptionStyle>
      <img className="weatherIcon" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <p>{descriptionCaseCorrected}</p>
    </DescriptionStyle>
  );
};

export default Description