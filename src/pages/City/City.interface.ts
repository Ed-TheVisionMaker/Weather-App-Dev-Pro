import { DescriptionProps } from '../../components/Description/Description.interface';
import { SunriseSunsetProps } from '../../components/SunriseSunset/SunriseSunset.interface';
import { TemperaturesProps } from '../../components/Temperatures/Temperatures.interaces';
import { WindProps } from '../../components/Wind/Wind.interfaces';

export interface CityState {
  data: null | DescriptionProps & SunriseSunsetProps & TemperaturesProps & WindProps;
  isLoading: boolean;
  isError: boolean;
  currentUnits: 'Celcius' | 'Fahrenheit';
}

export interface CityParams {
  cityId: string;
}

export interface CityData {
  country: string;
  lat: number;
  long: string;
  local_names: { [key: string]: string };
  lon: number;
  name: string;
  state: string;
}
