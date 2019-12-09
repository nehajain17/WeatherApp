import { WeatherDetails } from './weather-details.model';
import { WeatherParameters, Wind, Rain } from './parameters.model';
export class WeatherEntity {
  constructor(
    private _details: Array<WeatherDetails>,
    private _main: WeatherParameters,
    private _wind: Wind,
    private _dt: number,
    private _name: string,
    private _rain?: Rain
  ) { }


  public get details(): Array<WeatherDetails> {
    return this._details;
  }
  public set details(value: Array<WeatherDetails>) {
    this._details = value;
  }
  public get main(): WeatherParameters {
    return this._main;
  }
  public set main(value: WeatherParameters) {
    this._main = value;
  }
  public get wind(): Wind {
    return this._wind;
  }
  public set wind(value: Wind) {
    this._wind = value;
  }
  public get dt(): number {
    return this._dt;
  }
  public set dt(value: number) {
    this._dt = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get rain(): Rain {
    return this._rain;
  }
  public set rain(value: Rain) {
    this._rain = value;
  }
}
