import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {Route404Component} from './route404/route404.component';
import {NodesComponent} from './nodes/nodes.component';
import {AboutComponent} from './about/about.component';
import {CombinedChartComponent} from './dashboard/combined-chart/combined-chart.component';
import {SeparatedChartComponent} from './dashboard/separated-chart/separated-chart.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: '', redirectTo: 'combined', pathMatch: 'full'},
      {path: 'combined', component: CombinedChartComponent},
      {path: 'separated', component: SeparatedChartComponent},
    ]
  },
  {path: 'nodes', component: NodesComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: Route404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
