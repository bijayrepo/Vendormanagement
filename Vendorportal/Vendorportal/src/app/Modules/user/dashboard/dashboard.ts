import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule, ApexChart, ApexXAxis, ApexAxisChartSeries } from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
};


@Component({
  selector: 'app-dashboard',
  imports: [NgApexchartsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  public analyticsChartOptions!: Partial<ChartOptions>;

   logs = [
    { time: '10:00 AM', action: 'User Login', user: 'BJ' },
    { time: '10:30 AM', action: 'Uploaded File', user: 'Alice' },
    { time: '11:00 AM', action: 'Updated Profile', user: 'BJ' },
  ];
  constructor() {
    this.analyticsChartOptions = {
      series: [
        {
          name: "Sales",
          data: [10, 41, 35, 51, 49, 62, 69, 91]
        }
      ],
      chart: {
        type: "line",
        height: 350
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
      }
    };
  }

  ngOnInit(): void {
    
  }

}
