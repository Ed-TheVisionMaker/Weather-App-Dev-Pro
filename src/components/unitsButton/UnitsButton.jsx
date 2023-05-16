import React from "react";
import styled from "styled-components";

const UnitsButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const UnitsButtonInstruction = styled.div`
  font-size: 14px;
  padding-right: 20px;
`;

const UnitsButtonStyling = styled.button`
  font-size: 16px;
  font-weight: bold;
  padding: 5px 10px;
  background-color: var(--blue);
  color: white;
  border: 1px solid var(--black);

  &:hover {
    background-color: var(--yellow);
    color: var(--black);
  }
`;

const UnitsButton = (props) => {
  return (
    <UnitsButtonContainer>
      <UnitsButtonInstruction>Current units:</UnitsButtonInstruction>
      <UnitsButtonStyling onClick={() => props.handleChangeUnits()}>
        {props.currentUnits === "metric"? "Celcius" : "Fahrenheit"}
      </UnitsButtonStyling>
    </UnitsButtonContainer>
  );
};

export default UnitsButton;
