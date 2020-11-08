import {Component} from '@angular/core';
import * as Highcharts from 'highcharts';
import {ChartDataService} from '../chart-data.service';

@Component({
  selector: 'app-separated-chart',
  templateUrl: './separated-chart.component.html',
  styleUrls: ['./separated-chart.component.css']
})
export class SeparatedChartComponent {

  constructor(private chartData: ChartDataService) {
  }

  updateFlag = false;

  highcharts: typeof Highcharts = Highcharts;

  chartOptions1: Highcharts.Options = {
    title: {
      text: 'Temperature'
    },
    series: [
      {
        type: 'column',
        name: 'Temperature',
        data: this.chartData.temperatureSensor(),
      }
    ]
  };

  chartOptions2: Highcharts.Options = {
    title: {
      text: 'Humidity'
    },
    series: [
      {
        type: 'column',
        name: 'Humidity',
        data: this.chartData.humiditySensor(),
      }
    ]
  };

  chartOptions3: Highcharts.Options = {
    title: {
      text: 'Light'
    },
    series: [
      {
        type: 'column',
        name: 'Light',
        data: this.chartData.lightSensor(),
      }
    ]
  };

  changeChartType(chartType: any): void {
    this.chartOptions1.series.forEach(e => e.type = chartType);
    this.chartOptions2.series.forEach(e => e.type = chartType);
    this.chartOptions3.series.forEach(e => e.type = chartType);
    this.updateFlag = true;
  }

  changeDateRange(dateRange: any): void {
    this.chartOptions1.series[0].data = this.chartData.temperatureSensor();
    this.chartOptions2.series[0].data = this.chartData.humiditySensor();
    this.chartOptions3.series[0].data = this.chartData.lightSensor();
    this.updateFlag = true;
  }
}
