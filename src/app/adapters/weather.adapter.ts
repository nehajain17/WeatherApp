import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { WeatherEntity } from '../models/weather.model';
import { WeatherDetails } from '../models/weather-details.model';
import { WeatherParameters, Wind, Rain } from '../models/parameters.model';


@Injectable({
  providedIn: 'root'
})
export class WeatherAdapter implements Adapter<WeatherEntity> {

  adapt(item: any): WeatherEntity {

    const weatherDetails = new WeatherDetails(item.weather[0].id, item.weather[0].main,
      item.weather[0].description, item.weather[0].icon);
    const weatherDetailsArray = new Array<WeatherDetails>();
    weatherDetailsArray.push(weatherDetails);
    return new WeatherEntity(
      weatherDetailsArray,
      new WeatherParameters(item.main.temp, item.main.pressure, item.main.humidity, item.main.temp_min, item.main.temp_max),
      new Wind(item.wind.speed, item.wind.deg),
      item.dt,
      item.name,
      item.rain ? new Rain(item.rain.ih) : null
    );
  }
}
