import React from "react";
import styled from "styled-components";

const WindDirectionDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    padding-right: 10px;
  }

  .windDirectionIcon {
    width: 25px;
    height: 25px;
    background-color: var(--white);
    padding: 5px;
    border-radius: 25px;
  }
`;

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


const Wind = (props) => {
  const { speed, deg } = props.wind;
  return (
    <>
      <div className="windSpeed iconDiv">
        <img
          className="displayIcon"
          src="https://i.ibb.co/Wx4kPsc/windsock-svgrepo-com.png"
        />
        <DataContainer>
          Wind Speed
          {props.currentUnits === "metric" && <DataSpanStyling>{speed}m/s</DataSpanStyling>}
          {props.currentUnits === "imperial" && <DataSpanStyling>{speed}mph</DataSpanStyling>}
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
