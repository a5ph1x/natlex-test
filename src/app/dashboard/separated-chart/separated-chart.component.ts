import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ChartDataService} from '../chart-data.service';

@Component({
  selector: 'app-separated-chart',
  templateUrl: './separated-chart.component.html',
  styleUrls: ['./separated-chart.component.css']
})
export class SeparatedChartComponent {

  constructor(private chartData: ChartDataService) { }

  highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: 'All nodes data'
    },
    xAxis: {
      categories: ['Node 1', 'Node 2', 'Node 3']
    },
    series: [
      {
        type: 'column',
        name: 'Temperature',
        data: this.chartData.temperatureSensor,
      },
      {
        type: 'column',
        name: 'Humidity',
        data: this.chartData.humiditySensor
      },
      {
        type: 'column',
        name: 'Light',
        data: this.chartData.lightSensor
      }
    ]
  };

}
