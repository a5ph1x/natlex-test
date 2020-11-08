import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

interface ChartType {
  value: string;
}

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {

  constructor() {
  }

  chartTypes: Array<ChartType> = [
    {value: 'line'},
    {value: 'bar'},
  ];

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  @Output() SelectChartType: EventEmitter<string> = new EventEmitter<string>();
  @Output() SelectDateRange: EventEmitter<any> = new EventEmitter<any>();

  selectedChartType = this.chartTypes[1].value;

  onClose(): void {
    if (this.range.value.end) {
      this.SelectDateRange.emit(this.range.value);
    }
  }
}
