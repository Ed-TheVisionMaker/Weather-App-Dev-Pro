import React from "react";
import styled from "styled-components";

const ErrorDisplayStyling = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 100px;
`

const ErrorImage = styled.img`
    width: 200px;
    height: 200px;
`

const ErrorMessage = styled.div`
    font-size: 20px;
    color: var(--darkBlue);
`

const ErrorDisplay = (props) => {
    return (
        <ErrorDisplayStyling>
            <ErrorImage src="https://openweathermap.org/img/wn/11d@2x.png" />
            <ErrorMessage>The weather for {props.cityId} could not be found</ErrorMessage>
        </ErrorDisplayStyling>
    )

}

export default ErrorDisplay;
