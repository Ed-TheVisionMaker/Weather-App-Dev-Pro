import React from "react";
import styled from "styled-components";

import Description from "../description/Description";
import SunriseSunset from "../sunriseSunset/SunriseSunset";
import Temperatures from "../temperatures/Temperatures";
import Wind from "../wind/Wind";
import UnitsButton from "../unitsButton/UnitsButton";

const DataContainerStyling = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 30px 10px;
`;

export default class DisplayData extends React.Component {
  render() {
    const cityId = this.props.cityId;
    return (
      <>
        <Description weather={this.props.data.data.weather} />
        <DataContainerStyling>
          <SunriseSunset data={this.props.data.data} />
          <UnitsButton currentUnits={this.props.currentUnits} handleChangeUnits={this.props.handleChangeUnits} />
          <Temperatures temps={this.props.data.data.main} />
          <Wind wind={this.props.data.data.wind} currentUnits={this.props.currentUnits}/>
        </DataContainerStyling>
      </>
    );
  }
}
