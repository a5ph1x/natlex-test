import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  constructor(private router: Router) {
  }

  checked = true;

  changeChartType(chartType: string): void {
    this.router.navigate(['dashboard', chartType]);
    this.checked = !this.checked;
  }

}

