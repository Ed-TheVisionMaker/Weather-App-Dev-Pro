import React from "react";
import styled from "styled-components";

const LoadingDisplayStyling = styled.div`
  // width: 100vw;
  height: 80vh;
  position: relative;

  .isLoadingContainer {
    position: absolute;
    left: 20%;
    top: 20%;
    padding-left: 100px;

    color: var(--black);
    font-size: 40px;
  }

  .isLoading {
    margin: auto;
    border: 10px solid var(--darkBlue);
    border-radius: 50%;
    border-top: 10px solid var(--darkYellow);
    width: 50px;
    height: 50px;
    animation: spinner 4s linear infinite;
  }
  
  @keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingDisplay = () => {
  return (
    <LoadingDisplayStyling>
      <div className="isLoadingContainer">
        <div className="isLoading"></div>
      </div>
    </LoadingDisplayStyling>
  );
};

export default LoadingDisplay;
