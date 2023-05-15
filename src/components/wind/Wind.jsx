import React from "react";
import styled from "styled-components";

const WindDirectionDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid pink;
`

const WindPointerRotation = styled.span`
    padding-left: 20px;

    .windDirectionIcon {
        border-radius: 30px;
    }
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
        <p>Wind Speed {speed}m/s</p>
      </div>
      <div className="windDirection iconDiv">
        <img
          className="displayIcon windPointing"
          src="https://i.ibb.co/XFCzQ5n/compass-svgrepo-com.png"
        />
        <WindDirectionDiv>
            <p>
            Wind Direction
          <WindPointerRotation>
            <img
              className="displayIcon windDirectionIcon"
              src="https://i.ibb.co/7RxN4Xd/arrow-up-circle-309-svgrepo-com.png"
              style={{ rotate: deg + "deg"}}
            />
          </WindPointerRotation>
            </p>
        </WindDirectionDiv>
      </div>
    </>
  );
};

export default Wind;
