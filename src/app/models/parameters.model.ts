export class WeatherParameters {

  constructor(
    private _temp: number,
    private _pressure: number,
    private _humidity: number,
    private _minimumTemperature: number,
    private _maximumTemperature: number

  ) { }
  public get temp(): number {
    return this._temp;
  }
  public set temp(value: number) {
    this._temp = value;
  }
  public get pressure(): number {
    return this._pressure;
  }
  public set pressure(value: number) {
    this._pressure = value;
  }
  public get humidity(): number {
    return this._humidity;
  }
  public set humidity(value: number) {
    this._humidity = value;
  }
  public get temp_min(): number {
    return this._minimumTemperature;
  }
  public set temp_min(value: number) {
    this._minimumTemperature = value;
  }
  public get temp_max(): number {
    return this._maximumTemperature;
  }
  public set temp_max(value: number) {
    this._maximumTemperature = value;
  }

}

export class Wind {
  constructor(
    private _speed: number,
    private _degree: number
  ) { }
  public get speed(): number {
    return this._speed;
  }
  public set speed(value: number) {
    this._speed = value;
  }
  public get deg(): number {
    return this._degree;
  }
  public set deg(value: number) {
    this._degree = value;
  }
}

export class Rain {

  constructor(
    private _ih: number
  ) { }
  public get ih(): number {
    return this._ih;
  }
  public set ih(value: number) {
    this._ih = value;
  }
}

