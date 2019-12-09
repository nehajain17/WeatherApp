# Weather Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.
The application is adhering to the best practices like the same is generated using the angular cli.

## Technical Stack

Application developed in Angular 8
Uses:
Node.js version	12.13.1
Visual Studio Code
HTML5
SCSS
Bootstrap 4
Angular core 8.2.14
ng2-charts 
chart.js

## Set up

1. install node.js 12.13.1
2. npm install @angular/cli
3. ng new WeatherApp
4. Clone/download the code from Github repository
5. Run 'npm install'
6. Run 'ng serve -o' to open the application in default browser
7. Run the test cases - run 'ng test'
8. Hit: localhost:4200, to run the applicaction

## Rest End Points

Based on the selected location the corresponding API is called for current weather and forecast.

### API to fetch current weather

http://api.openweathermap.org/data/2.5/weather?q=Amsterdam,NL&appid=<API_ID>
This API gives the current weather information for specific location
This API uses 2 query parameters - location(q) and apiKey (appid)
As of now this application supports locations - London, Amsterdam, Berlin, Paris and Rome

### API to fetch forecast

http://api.openweathermap.org/data/2.5/forecast?q=Amsterdam,NL&appid=<API_ID>
This API gives the current weather information for specific location
This API uses 2 query parameters - location(q) and apiKey (appid)
As of now this application supports locations - London, Amsterdam, Berlin, Paris and Rome

## Assumptions

Api key is generated only once and the same is used for any user. The API key generation is a one time activity.

## Implementation

Dropdown in the center of the screen enables to get current weather information for listed cities.
On selecting a city, the data is displayed. 
On click of Forecast button, a modal(popup) opens to display the line chart for the weather forecast of 15 hours.
App component includes logic for displaying current weather information for selected city.
Forecast component includes the line chart depicting forecast of 15 hours.
Created 2 adapters to convert JSON data to the corresponding created model for current weather and forecast APIs.
Used rxjs to get data from Openweather API.
The data fed to line chart is obtained using rxjs.

## Future Enhancements

1. UI Enhancements
2. Support of Fahrenheit for temperature
3. Had planned to add animation based on current weather
4. Make appropriate model properties instead of properties in received data
5. 100% code coverage, test cases not written for forecast component, adapters
6. Http interceptor to be used to add query parameters/headers to REST APIs
7. Use cache to store weather and forecast data and refresh it after 10 minutes

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
