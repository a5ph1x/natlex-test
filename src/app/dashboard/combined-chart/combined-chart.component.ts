import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
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

  chartType = 'line';
  updateFlag = true;

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

  changeChartType(chartType: string): void {
    this.chartOptions.series[0].type = 'line';
  }
}
