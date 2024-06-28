import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { SignalsService } from '@services/signals.service';

@Component({
  selector: 'app-transactions-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.scss'],
})
export class TransactionsTableComponent {
  transactions = this.signalsService.transactions;

  // todo: could be moved to a separate file
  displayedColumns: string[] = ['date', 'info', 'value', 'category', 'type'];

  constructor(public signalsService: SignalsService) {}

  get totalExpenses(): number {
    return this.transactions()
      .filter((transaction) => transaction.value && transaction.value < 0)
      .reduce((acc, transaction) => acc + (transaction.value || 0), 0);
  }

  get totalIncomes(): number {
    return this.transactions()
      .filter((transaction) => transaction.value && transaction.value > 0)
      .reduce((acc, transaction) => acc + (transaction.value || 0), 0);
  }
}
