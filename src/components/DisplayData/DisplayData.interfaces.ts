import { DescriptionProps } from "../Description/Description.interface";
import { SunriseSunsetProps } from "../SunriseSunset/SunriseSunset.interface";
import { TemperaturesProps } from "../Temperatures/Temperatures.interaces";
import { WindProps } from "../Wind/Wind.interfaces";
import { UnitButtonProps } from "../UnitsButton/UnitButton.interfaces";

export interface DisplayDataProps {
    data: DescriptionProps & SunriseSunsetProps & TemperaturesProps & WindProps;
    currentUnits: UnitButtonProps;
    handleChangeUnits: () => void,
}