import React from "react";
import styled from "styled-components";

const ErrorLocationStyling = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
`;

const ErrorLocationImage = styled.img`
  width: 200px;
  height: 200px;
`;

const ErrorLocationMessage = styled.div`
  font-size: 20px;
  color: var(--darkBlue);
`;

const ErrorLocation = () => {
  return (
    <ErrorLocationStyling>
      <ErrorLocationImage src="https://i.ibb.co/XtJ123D/map-map-marker-svgrepo-com.png" />
      <ErrorLocationMessage>
        Please enable your location service
      </ErrorLocationMessage>
    </ErrorLocationStyling>
  );
};

export default ErrorLocation;
