import React from "react";
import styled from "styled-components";
import { UnitButtonProps } from "./UnitButton.interfaces";

const UnitsButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const UnitsButtonInstruction = styled.div`
  font-size: 16px;
  padding-right: 20px;
`;

const UnitsButtonStyling = styled.button`
  font-size: 18px;
  letter-spacing: 1.5px;
  padding: 5px 10px;
  background-color: var(--blue);
  color: white;
  border: 1px solid var(--black);

  &:hover {
    background-color: var(--yellow);
    color: var(--black);
  }
`;

const UnitsButton = ({ currentUnits, handleChangeUnits }: UnitButtonProps) => {
  return (
    <UnitsButtonContainer>
      <UnitsButtonInstruction>Current units:</UnitsButtonInstruction>
      <UnitsButtonStyling onClick={() => handleChangeUnits()}>
        {currentUnits === "Celcius" ? "Celcius" : "Fahrenheit"}
      </UnitsButtonStyling>
    </UnitsButtonContainer>
  );
};

export default UnitsButton;
