import { DescriptionProps } from '../../components/Description/Description.interface';
import { SunriseSunsetProps } from '../../components/SunriseSunset/SunriseSunset.interface';
import { TemperaturesProps } from '../../components/Temperatures/Temperatures.interaces';
import { WindProps } from '../../components/Wind/Wind.interfaces';

export interface HomeState {
    data: DescriptionProps & SunriseSunsetProps & TemperaturesProps & WindProps;
}