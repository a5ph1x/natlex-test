import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  constructor() {
  }

  temperatureSensor(): Array<number> {
    return Array.from({length: 10}, () => Math.trunc(Math.random() * 1e4));
  }

  humiditySensor(): Array<number> {
    return Array.from({length: 10}, () => Math.trunc(Math.random() * 1e4));
  }

  lightSensor(): Array<number> {
    return Array.from({length: 10}, () => Math.trunc(Math.random() * 1e4));
  }

}
