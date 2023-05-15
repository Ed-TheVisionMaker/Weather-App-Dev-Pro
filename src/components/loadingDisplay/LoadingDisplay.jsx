import React from "react";
import styled from "styled-components";

const LoadingDisplayStyling = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;

  .isLoadingContainer {
    position: absolute;
    left: calc(50% - 140px);
    // left: calc(50% - 50cqw);
    top: calc(50% - 40px);

    color: var(--black);
    font-size: 40px;
  }

  .isLoading {
    margin: auto;
    border: 20px solid var(--darkBlue);
    border-radius: 50%;
    border-top: 20px solid var(--darkYellow);
    width: 200px;
    height: 200px;
    animation: spinner 4s linear infinite;
  }
  
  @keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingDisplay = (props) => {
  return (
    <LoadingDisplayStyling>
      <div className="isLoadingContainer">
        <div className="isLoading"></div>
      </div>
    </LoadingDisplayStyling>
  );
};

export default LoadingDisplay;
