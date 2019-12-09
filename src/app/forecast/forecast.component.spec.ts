import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastComponent } from './forecast.component';
import { Component, ViewChild } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  template: '<app-forecast [temperatureData]="temperatureData" [timeData]="timeArray"></app-forecast>'
})
class ParentComponent {
  @ViewChild(ForecastComponent, {static: false}) forecastComponent: ForecastComponent;
  temperatureData = new Array<number>();
  timeArray = new Array<string>();

  forecast() {
    this.temperatureData = [7.09, 8.55, 8.57, 7.63, 5.99];
    this.timeArray = ["06:00", "09:00", "12:00", "15:00", "18:00"];
  }
}

describe('ForecastComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ForecastComponent,
        ParentComponent
       ],
       imports: [
         ChartsModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.forecastComponent).toBeTruthy();
  });
});
