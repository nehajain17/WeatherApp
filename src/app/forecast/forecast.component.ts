import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  tempData = new Array<number>();
  time = new Array<string>();
  @Input() set temperatureData(value: number[]) {
    value.forEach((element: number) => {
      this.tempData.push(element);
    });

  }
  @Input() set timeData(value: string[]) {
    value.forEach((element: string) => {
      this.time.push(element);
    });
  }


  @Input() set isClose(value: boolean) {
    if (value) {
      this.tempData = [];
      this.time = [];
    }
  }

  lineChartData: ChartDataSets[] = [
    { data: this.tempData, label: 'Temperature' },
  ];

  // data at time interval on x and y axis
  lineChartLabels: Label[] = this.time;

  lineChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Temperature (deg. C)'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Time Interval'
        }
      }]
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#a3d8f5'
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType = 'line';
}
