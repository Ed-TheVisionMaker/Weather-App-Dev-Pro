import { UnitButtonProps } from '../UnitsButton/UnitButton.interfaces';

export interface WindProps {
  wind: {
    speed: number;
    deg: number;
  };
  currentUnits: 'Celcius' | 'Fahrenheit';
}
