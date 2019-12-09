import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';
import { ChartsModule } from 'ng2-charts';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherService } from './services/weather.service';
import { WeatherEntity } from './models/weather.model';
import { WeatherDetails } from './models/weather-details.model';
import { WeatherParameters, Wind } from './models/parameters.model';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let weatherServiceSpy;
  let weatherDataMock;
  beforeEach(async(() => {
    weatherServiceSpy = jasmine.createSpyObj('WeatherService', ['getWeatherData', 'getFiveDaysData']);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ForecastComponent
      ],
      imports: [
        HttpClientTestingModule,
        ChartsModule
      ],
      providers: [
        { provide: WeatherService, useValue: weatherServiceSpy }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.debugElement.componentInstance;
    });
  }));

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should change city', () => {
    // mock JSON for weather data
    const mock = {
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n'
        }
      ],
      'main': {
        'temp': 280.65,
        'pressure': 995,
        'humidity': 87,
        'temp_min': 279.15,
        'temp_max': 282.15
      },
      'wind': {
        'speed': 6.2,
        'deg': 280
      },
      'dt': 1575871269,
      'name': 'London'
    };
    // created mock and filled with required values - created a proper instance of model
    weatherDataMock = new WeatherEntity(null, null, null, null, null, null);
    const weatherDetails = new WeatherDetails(mock.weather[0].id, mock.weather[0].main, mock.weather[0].description, mock.weather[0].icon);
    weatherDataMock.details = [weatherDetails];
    weatherDataMock.main = new WeatherParameters(mock.main.temp, mock.main.pressure, mock.main.humidity,
      mock.main.temp_min, mock.main.temp_max);
    weatherDataMock.wind = new Wind(mock.wind.speed, mock.wind.deg);

    // stubbed webapi call with mockData
    weatherServiceSpy.getWeatherData.and.returnValue(of(weatherDataMock));

    // get dropdown element and dispatch change event with city = London
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.dropbtn')).nativeElement;
    select.value = select.options[1].value;
    select.dispatchEvent(new Event('change'));

    // asserting all value that are filled after data received in getData()
    expect(component.selectedCity).toEqual(select.value);
    expect(component.windStrength).toEqual(weatherDataMock.wind.speed);
    expect(component.currentWeather).toEqual(weatherDataMock.details[0].main);
  });

});
