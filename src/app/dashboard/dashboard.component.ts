import {Component} from '@angular/core';

export interface Card {
  title: string;
  visible: boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards: Array<Card> = [
    {title: 'Node 1', visible: true},
    {title: 'Node 2', visible: true},
    {title: 'Node 3', visible: false},
    {title: 'Node 4', visible: true},
  ];
}

