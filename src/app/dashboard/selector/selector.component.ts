import {Component, EventEmitter, Output} from '@angular/core';

interface ChartType {
  value: string;
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {
  chartTypes: Array<ChartType> = [
    {value: 'line'},
    {value: 'bar'}
  ];

  @Output() SelectChartType: EventEmitter<string> = new EventEmitter<string>();
  selectedChartType = 'line';

  constructor() {
  }
}
