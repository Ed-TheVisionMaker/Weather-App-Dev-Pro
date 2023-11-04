import { UnitButtonProps } from "../UnitsButton/UnitButton.interfaces";

export interface TemperaturesProps {
  temps: {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    humidity: number;
  };
  currentUnits: UnitButtonProps;
}
