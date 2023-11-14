import React from "react";
import styled from "styled-components";
import { WindProps } from './Wind.interfaces';

const WindDirectionIcon = styled.img`
width: 25px;
height: 25px;
background-color: var(--white);
padding: 5px;
border-radius: 25px;
`

const DataSpanStyling = styled.span`
  // padding-left: 30px;
`;

const DataContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wind = ({wind: {speed, deg}, currentUnits}: WindProps) => {
  const toMph = 2.2369362920544;
  return (
    <>
      <div className="windSpeed iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/Wx4kPsc/windsock-svgrepo-com.png"
        />
        <DataContainer>
          Wind Speed
          {currentUnits === "Celcius" && <DataSpanStyling>{speed}m/s</DataSpanStyling>}
          {currentUnits === "Fahrenheit" && <DataSpanStyling>{(speed * toMph).toFixed(2)}mph</DataSpanStyling>}
        </DataContainer>
      </div>
      <div className="windDirection iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/XFCzQ5n/compass-svgrepo-com.png"
        />
        <DataContainer>
          Wind Direction
          <DataSpanStyling>
            <WindDirectionIcon
              className="windDirectionIcon displayIcon"
              src="https://i.ibb.co/7RxN4Xd/arrow-up-circle-309-svgrepo-com.png"
              style={{ rotate: deg + "deg" }}
            />
          </DataSpanStyling>
        </DataContainer>
      </div>
    </>
  );
};

export default Wind;
