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

  displayedColumns: string[] = ['date', 'info', 'value', 'category', 'type'];

  constructor(public signalsService: SignalsService) {}
}
