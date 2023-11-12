export interface TemperaturesProps {
  temps: {
    temp: number;
    tempMin: number;
    tempMax: number;
    feelsLike: number;
    humidity: number;
    pressure: number;
  };
  currentUnits?: 'Celcius' | 'Fahrenheit';
}