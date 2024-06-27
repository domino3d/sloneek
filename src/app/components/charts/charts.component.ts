import { Component, OnInit } from '@angular/core';
// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent {
  //implements OnInit {
  // transactions: any[] = [];
  // chartData: ChartDataSets[] = [{ data: [], label: 'Expenses/Incomes' }];
  // chartLabels: Label[] = [];
  // chartOptions: ChartOptions = {
  //   responsive: true,
  // };
  // ngOnInit() {
  //   const savedTransactions = localStorage.getItem('transactions');
  //   if (savedTransactions) {
  //     this.transactions = JSON.parse(savedTransactions);
  //     this.prepareChartData();
  //   }
  // }
  // prepareChartData() {
  //   const data = {};
  //   this.transactions.forEach((transaction) => {
  //     const date = new Date(transaction.date).toLocaleDateString();
  //     if (!data[date]) {
  //       data[date] = 0;
  //     }
  //     data[date] += transaction.value;
  //   });
  //   this.chartData[0].data = Object.values(data);
  //   this.chartLabels = Object.keys(data);
  // }
}
