/* tslint:disable:no-string-literal */
import {Component} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ChartDataService} from '../chart-data.service';

@Component({
  selector: 'app-combined-chart',
  templateUrl: './combined-chart.component.html',
  styleUrls: ['./combined-chart.component.css'],
})
export class CombinedChartComponent {

  constructor(private chartData: ChartDataService) {
  }

  chartType: string;
  updateFlag = false;

  highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    title: {
      text: 'All nodes data'
    },
    series: [
      {
        type: 'column',
        name: 'Temperature',
        data: this.chartData.temperatureSensor(),
      },
      {
        type: 'column',
        name: 'Humidity',
        data: this.chartData.humiditySensor(),
      },
      {
        type: 'column',
        name: 'Light',
        data: this.chartData.lightSensor(),
      }
    ]
  };

  changeChartType(chartType: any): void {
    this.chartOptions.series.forEach(e => e.type = chartType);
    this.updateFlag = true;
  }

  changeDateRange(): void {
    this.chartOptions.series[0]['data'] = this.chartData.temperatureSensor();
    this.chartOptions.series[1]['data'] = this.chartData.humiditySensor();
    this.chartOptions.series[2]['data'] = this.chartData.lightSensor();
    this.updateFlag = true;
  }
}
