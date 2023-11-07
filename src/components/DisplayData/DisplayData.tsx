import React from "react";
import styled from "styled-components";

import Description from "../Description";
import SunriseSunset from "../SunriseSunset";
import Temperatures from "../Temperatures";
import Wind from "../Wind";
import UnitsButton from "../UnitsButton";
import { DisplayDataProps } from "./DisplayData.interfaces";

const DataContainerStyling = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 30px 10px;
`;

export default class DisplayData extends React.Component<DisplayDataProps> {
  render() {
    const { data, handleChangeUnits, currentUnits } = this.props;
    const {
      description,
      icon,
      temps,
      timezone,
      sunrise,
      sunset,
      wind,

    } = data;

    return (
      <>
        <Description description={description} icon={icon} />
        <DataContainerStyling>
          <SunriseSunset
            timezone={timezone}
            sunrise={sunrise}
            sunset={sunset}
          />
          <UnitsButton
            currentUnits={currentUnits}
            handleChangeUnits={handleChangeUnits}
          />
          <Temperatures
            temps={temps}
            currentUnits={this.props.currentUnits}
          />
          <Wind
            wind={wind}
            currentUnits={this.props.currentUnits}
          />
        </DataContainerStyling>
      </>
    );
  }
}
