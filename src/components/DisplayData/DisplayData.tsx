import React from "react";
import styled from "styled-components";

import Description from "../Description";
import SunriseSunset from "../SunriseSunset";
import Temperatures from "../Temperatures/Temperatures";
import Wind from "../Wind/Wind";
import UnitsButton from "../UnitsButton/UnitsButton";

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
          <Temperatures temps={this.props.data.data.main} currentUnits={this.props.currentUnits} />
          <Wind wind={this.props.data.data.wind} currentUnits={this.props.currentUnits}/>
        </DataContainerStyling>
      </>
    );
  }
}
