import React from "react";
import styled from "styled-components";

const MainIconStyle = styled.div`
  .mainIcon {
    width: 100px;
    height: 100px;
  }
`;

const MainIcon = () => {
  return (
    <>
      <MainIconStyle>
        <img className="mainIcon" src="https://i.ibb.co/DkqLTJ7/brightness-weather-svgrepo-com.png" />
      </MainIconStyle>
      </>
  );
};

export default MainIcon;
