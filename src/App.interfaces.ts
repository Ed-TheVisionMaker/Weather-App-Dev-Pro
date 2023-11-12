export interface DisplayDataProps {
    data: DescriptionProps & SunriseSunsetProps & TemperaturesProps & WindProps | null;
    currentUnits: 'Celcius' | 'Fahrenheit';
    handleChangeUnits?: () => void,
};

export interface DescriptionProps {
    description: string | null;
    iconId: string | null;
    }


export interface ErrorDisplayProps {
    cityId:string;
};

export interface SunriseSunsetProps {
    timezone: number,
    sunrise: number,
    sunset: number
};

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

  export interface UnitButtonProps {
    handleChangeUnits: () => void;
    currentUnits: 'Celcius' | 'Fahrenheit';
}

export interface WindProps {
    wind: {
      speed: number;
      deg: number;
    };
    currentUnits?: 'Celcius' | 'Fahrenheit';
  }
  