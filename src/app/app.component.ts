import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherEntity } from './models/weather.model';
import { Weather } from './models/weather-entity.model';
import * as constants from './constants/app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weatherData: WeatherEntity = new WeatherEntity(null, null, null, null, null, null);
  bulkWeatherData = new Weather(null, null);
  todayDate = new Date().getDate().toString();
  selectedCity: string = null;
  averageTemperature = 0;
  windStrength = 0;
  currentWeather = 'default';
  status = '';
  temperatureData = new Array<number>();
  timeArray = new Array<string>();
  cityMap = new Map<string, string>();
  isClose = false;
  weatherImg: any;
  displayDate = new Date();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }


  getData(location: string): void {
    this.weatherData = new WeatherEntity(null, null, null, null, null, null);
    // service call to get current weather data for a city
    this.weatherService.getWeatherData(location).subscribe(
      data => {
        this.weatherData = data;
        // after assigning response, set the city name for display, average temperature and wind strength
        this.selectedCity = location.split(',')[0];
        // converting temperature to celcius
        this.averageTemperature = this.kelvinToCelcius(this.weatherData.main.temp);
        this.windStrength = this.weatherData.wind.speed;
        this.currentWeather = this.weatherData.details[0].main;
        // setting weather status to get the background-image based on current weather condition
        this.status = constants.weatherStatus[this.currentWeather];
        this.weatherImg = constants.imagePaths[this.currentWeather]; // './assets/' + this.currentWeather + '.png';
      });
  }

  getFiveDaysData(location: string) {
    this.bulkWeatherData = new Weather(null, null);
    // getting five days of weather data for a city
    this.weatherService.getFiveDaysData(location).subscribe(
      data => {
        this.bulkWeatherData = data;
        const tempArr = new Array<number>();
        const timeArr = new Array<string>();
        // using next 15 hours of weather data for forecast
        if (data) {
          for (let i = 0; i < 5; i++) {
            tempArr.push(this.kelvinToCelcius(this.bulkWeatherData.list[i].main.temp));
            timeArr.push(this.bulkWeatherData.list[i].date.split(' ')[1].slice(0, -3));
          }
        }
        this.temperatureData = tempArr;
        this.timeArray = timeArr;
      });
  }

  changeCity($event: Event) {
    this.selectedCity = $event['selectedOptions'][0].innerText;
    // display name, average temperature and wind strength on changing city
    this.getData(this.getLocation());
  }

  getLocation() {
    return constants.city[this.selectedCity] + ',' + constants.Country[this.selectedCity]
  }

  forecast() {
    this.temperatureData = new Array<number>();
    this.timeArray = new Array<string>();
    this.getFiveDaysData(this.getLocation());
  }

  private kelvinToCelcius(kelvin: number): number {
    return Number((kelvin - 273.15).toFixed(2));
  }
}
