import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { WeatherDetails } from '../models/weather-details.model';
import { Wind, Rain } from '../models/parameters.model';
import { Weather, City, ListEntity, Main } from '../models/weather-entity.model';

@Injectable({
  providedIn: 'root'
})
export class DaysWeatherAdapter implements Adapter<Weather> {
  adapt(data: any): Weather {

    const city = new City(data.city.id, data.city.name, data.city.country, data.city.population, data.city.timezone,
       data.city.sunrise, data.city.susnset);

    const listEntity = new Array<ListEntity>();
    data.list.forEach(weatherListElement => {

      const weatherDetails = this.getWeatherDetailsForList(weatherListElement);
      listEntity.push(
        new ListEntity(
          new Main(weatherListElement.main.temp, weatherListElement.main.temp_min, weatherListElement.main.temp_max,
            weatherListElement.main.pressure, weatherListElement.main.sea_level, weatherListElement.main.grnd_level,
            weatherListElement.main.humidity),
          new Wind(weatherListElement.wind.speed, weatherListElement.wind.deg),
          weatherListElement.dt_txt,
          weatherDetails,
          weatherListElement.rain ? new Rain(weatherListElement.rain.ih) : null
        )
      );
    });
    return new Weather(
      city,
      listEntity
    );
  }

  getWeatherDetailsForList(listElement) {
    const weatherDetails = new Array<WeatherDetails>();
    listElement.weather.forEach(weather => {
      weatherDetails.push(new WeatherDetails(weather.id, weather.main, weather.description, weather.icon));
    });
    return weatherDetails;
  }
}




